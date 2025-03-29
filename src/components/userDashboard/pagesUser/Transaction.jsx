import React from 'react';
import { 
  FaFilter, 
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

export default function Transactions() {
  // Static data for display only
  const allTransactions = [
    { id: 1, date: '2023-06-15', description: 'Grocery Store', type: 'debit', amount: 85.20, status: 'completed' },
    { id: 2, date: '2023-06-14', description: 'Salary Deposit', type: 'credit', amount: 3500.00, status: 'completed' },
    { id: 3, date: '2023-06-10', description: 'Electric Bill', type: 'debit', amount: 120.75, status: 'completed' },
    { id: 4, date: '2023-06-05', description: 'Restaurant', type: 'debit', amount: 45.60, status: 'pending' }
  ];

  const userAccounts = [
    { id: 1, number: 'ELITE-7890-4567-1234', balance: 15200.50, type: 'Premium Savings' }
  ];

  return (
    <div className="transactions-container">
      {/* Header with Transfer Button */}
      <div className="transactions-header">
        <h2><FaExchangeAlt /> Transaction History</h2>
        <div className="header-actions">
          <button className="transfer-btn">
            <FaPaperPlane /> New Transfer
          </button>
          <button className="export-btn">
            <FaDownload /> Export CSV
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="search-bar">
          <FaSearch />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            readOnly
          />
        </div>

        <div className="filter-group">
          <div className="filter-item">
            <label><FaExchangeAlt /> Type</label>
            <select disabled>
              <option>All Types</option>
              <option>Deposits</option>
              <option>Withdrawals</option>
            </select>
          </div>

          <div className="filter-item">
            <label><FaCalendarAlt /> Date Range</label>
            <div className="date-range">
              <input type="date" readOnly />
              <span>to</span>
              <input type="date" readOnly />
            </div>
          </div>

          <div className="filter-item">
            <label><FaMoneyBillWave /> Amount Range</label>
            <div className="amount-range">
              <input type="number" placeholder="Min" readOnly />
              <span>to</span>
              <input type="number" placeholder="Max" readOnly />
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
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
            {allTransactions.map((txn) => (
              <tr key={txn.id} className="transaction-row">
                <td>{new Date(txn.date).toLocaleDateString()}</td>
                <td>{txn.description}</td>
                <td>
                  <span className={`txn-type ${txn.type}`}>
                    {txn.type === 'credit' ? 'Deposit' : 'Withdrawal'}
                  </span>
                </td>
                <td className={`amount ${txn.type}`}>
                  {txn.type === 'credit' ? '+' : '-'}${txn.amount.toFixed(2)}
                </td>
                <td>
                  <span className={`status-badge ${txn.status}`}>
                    {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transfer Modal (hidden by default) */}
      <div className="transfer-modal" style={{ display: 'none' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h3><FaPaperPlane /> Make a Transfer</h3>
            <button className="close-btn">
              <FaTimes />
            </button>
          </div>
          
          <form>
            <div className="form-group">
              <label><FaUser /> Recipient Account Number</label>
              <input
                type="text"
                placeholder="Enter account number"
                readOnly
              />
            </div>
            
            <div className="form-group">
              <label><FaMoneyBillWave /> Amount</label>
              <input
                type="number"
                placeholder="0.00"
                readOnly
              />
            </div>
            
            <div className="form-group">
              <label>Description (Optional)</label>
              <input
                type="text"
                placeholder="e.g., Rent payment"
                readOnly
              />
            </div>
            
            <div className="form-group">
              <label>From Account</label>
              <select disabled>
                {userAccounts.map(account => (
                  <option key={account.id}>
                    {account.type} - {account.number} (${account.balance.toFixed(2)})
                  </option>
                ))}
              </select>
            </div>
            
            <button type="button" className="submit-transfer-btn">
              <FaPaperPlane /> Confirm Transfer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}