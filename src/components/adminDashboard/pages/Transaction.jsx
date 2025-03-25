import React, { useState } from 'react';
import { FaSearch, FaFilter, FaFileExport, FaCheckCircle, FaTimesCircle, FaReceipt, FaMoneyBillWave, FaExchangeAlt, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import './Transaction.css';

export default function TransactionManagement() {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  
  const transactions = [
    {
      id: 'TX1001',
      account: '1001 (John Doe)',
      type: 'Wire Transfer',
      amount: 1250.00,
      date: '08/22/2023 14:30',
      status: 'Pending',
      riskLevel: 'High',
      fromAccount: 'Savings (****3456)',
      toAccount: 'External Account (****7890)',
      reference: 'INV-2023-001',
      location: 'Online',
      initiatedBy: 'Customer'
    },
    {
      id: 'TX1002',
      account: '1002 (Sarah Lee)',
      type: 'ATM Withdrawal',
      amount: 500.00,
      date: '08/22/2023 10:15',
      status: 'Completed',
      riskLevel: 'Medium',
      fromAccount: 'Checking (****2345)',
      toAccount: 'Cash',
      reference: 'ATM-456789',
      location: 'ATM #1234, Main St',
      initiatedBy: 'Customer'
    }
  ];

  return (
    <div className="transaction-management">
      <header className="transaction-header">
        <h1>Transactions</h1>
        <div className="controls">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="filter-controls">
            <div className="filter-dropdown">
              <FaFilter />
              <select>
                <option>All</option>
                <option>Pending</option>
              </select>
            </div>
            <button className="export-btn">
              <FaFileExport />Export
            </button>
          </div>
        </div>
      </header>

      <div className="transaction-table-container">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Account</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Risk</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr 
                key={tx.id}
                className={selectedTransaction?.id === tx.id ? 'selected' : ''}
                onClick={() => setSelectedTransaction(tx)}
              >
                <td>{tx.id}</td>
                <td>{tx.account}</td>
                <td>{tx.type}</td>
                <td className={tx.type === 'Deposit' ? 'positive' : 'negative'}>
                  {tx.type === 'Deposit' ? '+' : '-'}${tx.amount.toFixed(2)}
                </td>
                <td>{tx.date}</td>
                <td><span className={`status ${tx.status.toLowerCase()}`}>{tx.status}</span></td>
                <td><span className={`risk ${tx.riskLevel.toLowerCase()}`}>{tx.riskLevel}</span></td>
                <td className="actions">
                  {tx.status === 'Pending' && (
                    <>
                      <button className="approve"><FaCheckCircle /></button>
                      <button className="reject"><FaTimesCircle /></button>
                    </>
                  )}
                  <button className="receipt"><FaReceipt /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`transaction-detail-panel ${selectedTransaction ? 'visible' : ''}`}>
        {selectedTransaction && (
          <>
            <div className="panel-header">
              <h2>Transaction Details</h2>
              <div className="transaction-id">
                <FaInfoCircle /> {selectedTransaction.id}
              </div>
            </div>
            
            <div className="detail-sections">
              <section className="transaction-info">
                <div className="info-grid">
                  <div className="info-item">
                    <label>Type</label>
                    <p><FaExchangeAlt /> {selectedTransaction.type}</p>
                  </div>
                  <div className="info-item">
                    <label>Amount</label>
                    <p className={selectedTransaction.type === 'Deposit' ? 'positive' : 'negative'}>
                      <FaMoneyBillWave /> {selectedTransaction.type === 'Deposit' ? '+' : '-'}${selectedTransaction.amount.toFixed(2)}
                    </p>
                  </div>
                  <div className="info-item">
                    <label>Date</label>
                    <p><FaCalendarAlt /> {selectedTransaction.date}</p>
                  </div>
                  <div className="info-item">
                    <label>Status</label>
                    <p>
                      <span className={`status ${selectedTransaction.status.toLowerCase()}`}>
                        {selectedTransaction.status}
                      </span>
                    </p>
                  </div>
                  <div className="info-item">
                    <label>Risk Level</label>
                    <p>
                      <span className={`risk ${selectedTransaction.riskLevel.toLowerCase()}`}>
                        {selectedTransaction.riskLevel}
                      </span>
                    </p>
                  </div>
                  <div className="info-item">
                    <label>From Account</label>
                    <p>{selectedTransaction.fromAccount}</p>
                  </div>
                  <div className="info-item">
                    <label>To Account</label>
                    <p>{selectedTransaction.toAccount}</p>
                  </div>
                  <div className="info-item">
                    <label>Reference</label>
                    <p>{selectedTransaction.reference}</p>
                  </div>
                  <div className="info-item">
                    <label>Location</label>
                    <p>{selectedTransaction.location}</p>
                  </div>
                  <div className="info-item">
                    <label>Initiated By</label>
                    <p>{selectedTransaction.initiatedBy}</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="panel-actions">
              {selectedTransaction.status === 'Pending' && (
                <>
                  <button className="approve-btn">
                    <FaCheckCircle /> Approve
                  </button>
                  <button className="reject-btn">
                    <FaTimesCircle /> Reject
                  </button>
                </>
              )}
              <button className="receipt-btn">
                <FaReceipt /> Generate Receipt
              </button>
            </div>
          </>
        )}
      </div>

      <div className="metrics">
        <div className="metric">
          <h3>Pending</h3>
          <p>{transactions.filter(tx => tx.status === 'Pending').length}</p>
        </div>
        <div className="metric">
          <h3>High Risk</h3>
          <p>{transactions.filter(tx => tx.riskLevel === 'High').length}</p>
        </div>
        <div className="metric">
          <h3>Critical</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}