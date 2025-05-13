import Transaction from '../models/transactionModel.js';
import User from '../models/userModel.js';
import mongoose from 'mongoose';

// Generate unique transaction reference
const generateReference = () => {
  return 'TXN-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
};

export const transferMoney = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { recipientEmail, amount, description } = req.body;
    const senderId = req.user._id; // From auth middleware

    // Validate inputs
    if (!recipientEmail || !amount) {
      throw new Error('Recipient email and amount are required');
    }

    const amountNum = parseFloat(amount);
    if (isNaN(amountNum)) throw new Error('Invalid amount');
    if (amountNum <= 0) throw new Error('Amount must be positive');
    if (amountNum > 100000) throw new Error('Maximum transfer amount is 100,000'); // Safety limit

    // Get sender
    const sender = await User.findById(senderId).session(session);
    if (!sender) throw new Error('Sender not found');
    if (!sender.isAccountVerified) throw new Error('Your account is not verified');

    if (sender.balance < amountNum) {
      throw new Error(`Insufficient balance. Available: ${sender.balance}`);
    }

    // Get recipient
    const recipient = await User.findOne({ email: recipientEmail }).session(session);
    if (!recipient) throw new Error('Recipient not found');
    if (recipient._id.equals(sender._id)) throw new Error('Cannot send money to yourself');
    if (!recipient.isAccountVerified) throw new Error('Recipient account is not verified');

    // Create transaction
    const transaction = new Transaction({
      sender: senderId,
      recipientEmail,
      amount: amountNum,
      description: description || 'Funds transfer',
      status: 'pending',
      reference: generateReference()
    });

    // Update balances
    sender.balance -= amountNum;
    recipient.balance += amountNum;

    // Push transaction to users' histories
    sender.transactions.push(transaction._id);
    recipient.transactions.push(transaction._id);

    // Mark as completed
    transaction.status = 'completed';

    // Save all
    await Promise.all([
      sender.save({ session }),
      recipient.save({ session }),
      transaction.save({ session })
    ]);

    await session.commitTransaction();

    res.status(200).json({
      success: true,
      message: 'Transfer successful',
      newBalance: sender.balance,
      transaction: {
        reference: transaction.reference,
        amount: transaction.amount,
        recipientEmail: transaction.recipientEmail,
        timestamp: transaction.createdAt
      }
    });

  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({
      success: false,
      message: error.message,
      errorType: error.name
    });
  } finally {
    session.endSession();
  }
};

// Add this new controller function to transactionController.js
export const getTransactions = async (req, res) => {
    try {
      const userId = req.user._id; // From auth middleware
      
      const transactions = await Transaction.find({
        $or: [
          { sender: userId },
          { recipientEmail: req.user.email }
        ]
      })
      .sort({ createdAt: -1 })
      .populate('sender', 'name email');
      
      res.status(200).json({
        success: true,
        transactions
      });
      
    } catch (error) {
      console.error("Error fetching transactions:", error);
      res.status(500).json({
        success: false,
        message: error.message,
        errorType: error.name
      });
    }
};