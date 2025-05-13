import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {
  FaSearch,
  FaDownload,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaUser,
  FaPaperPlane,
  FaTimes
} from 'react-icons/fa';
import './Transaction.css';
import AppContent from '../../context/AppContext';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [fromAccount, setFromAccount] = useState('');
  const [userAccounts, setUserAccounts] = useState([
    { id: 1, type: 'Checking', number: '1234567890', balance: 1000 },
    { id: 2, type: 'Savings', number: '9876543210', balance: 2500 }
  ]);

  const { backendUrl } = useContext(AppContent);

  useEffect(() => {
    axios.get(`${backendUrl}/api/transactions/`)
      .then(res => {
        console.log(res.data);  // Log the response to check its structure

        // Access transactions array inside the response object
        const transactionsArray = res.data.transactions || []; // Get transactions array

        // Add dummy createdAt and updatedAt if they don't exist
        const transactionsWithTimestamps = transactionsArray.map(txn => ({
          ...txn,
          createdAt: txn.createdAt || '2025-05-01T10:00:00Z', // Dummy createdAt date
          updatedAt: txn.updatedAt || '2025-05-02T12:00:00Z'  // Dummy updatedAt date
        }));

        // Sort by createdAt
        const sorted = transactionsWithTimestamps.sort((a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Set state
        setTransactions(sorted);
        setFilteredTransactions(sorted);
      })
      .catch(err => {
        console.error('Error fetching transactions:', err);
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = transactions.filter(txn =>
      txn.description?.toLowerCase().includes(query) ||
      txn.status?.toLowerCase().includes(query) ||
      txn.type?.toLowerCase().includes(query)
    );

    setFilteredTransactions(filtered);
  };

  const handleExport = () => {
    const csvContent = [
      ['Date', 'Description', 'Type', 'Amount', 'Status'],
      ...filteredTransactions.map(txn => [
        new Date(txn.createdAt).toLocaleDateString(),
        txn.description,
        txn.type === 'deposit' ? 'Deposit' : 'Withdrawal',  // Correct type mapping
        `${txn.type === 'deposit' ? '+' : '-'}${Number(txn.amount).toFixed(2)}`,
        txn.status?.charAt(0).toUpperCase() + txn.status?.slice(1)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'transactions.csv';
    link.click();
  };

  const handleTransfer = () => {
    console.log({
      recipient,
      amount,
      description,
      fromAccount
    });
    // TODO: Implement backend POST request to create transfer
    setShowModal(false);
  };

  return (
    <div className="transactions-container">
      <div className="transactions-header">
        <h2><FaExchangeAlt /> Transaction History</h2>
        <div className="header-actions">
          <button className="transfer-btn" onClick={() => setShowModal(true)}>
            <FaPaperPlane /> New Transfer
          </button>
          <button className="export-btn" onClick={handleExport}>
            <FaDownload /> Export CSV
          </button>
        </div>
      </div>

      <div className="filters-section">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="filter-group">
          <div className="filter-item">
            <label><FaExchangeAlt /> Type</label>
            <select>
              <option>All Types</option>
              <option>Deposits</option>
              <option>Withdrawals</option>
            </select>
          </div>

          <div className="filter-item">
            <label><FaCalendarAlt /> Date Range</label>
            <div className="date-range">
              <input type="date" />
              <span>to</span>
              <input type="date" />
            </div>
          </div>

          <div className="filter-item">
            <label><FaMoneyBillWave /> Amount Range</label>
            <div className="amount-range">
              <input type="number" placeholder="Min" />
              <span>to</span>
              <input type="number" placeholder="Max" />
            </div>
          </div>
        </div>
      </div>

      <div className="transactions-table-container">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((txn, idx) => (
              <tr key={txn._id || idx} className="transaction-row">
                <td>{txn.createdAt ? new Date(txn.createdAt).toLocaleDateString() : 'N/A'}</td>
                <td>{txn.description}</td>
                <td>
                  <span className={`txn-type ${txn.type}`}>
                    {txn.type === 'deposit' ? 'Deposit' : 'Withdrawal'} {/* Correct transaction type */}
                  </span>
                </td>
                <td className={`amount ${txn.type}`}>
                  {txn.type === 'deposit' ? '+' : '-'}${Number(txn.amount).toFixed(2)}
                </td>
                <td>
                  <span className={`status-badge ${txn.status}`}>
                    {txn.status?.charAt(0).toUpperCase() + txn.status?.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="transfer-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3><FaPaperPlane /> Make a Transfer</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                <FaTimes />
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleTransfer(); }}>
              <div className="form-group">
                <label><FaUser /> Recipient Account Number</label>
                <input
                  type="text"
                  placeholder="Enter account number"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label><FaMoneyBillWave /> Amount</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Description (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g., Rent payment"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>From Account</label>
                <select value={fromAccount} onChange={(e) => setFromAccount(e.target.value)} required>
                  <option value="">Select Account</option>
                  {userAccounts.map(account => (
                    <option key={account.id} value={account.number}>
                      {account.type} - {account.number} (${account.balance.toFixed(2)})
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="submit-transfer-btn">
                <FaPaperPlane /> Confirm Transfer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
