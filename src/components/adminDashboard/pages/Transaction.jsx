import React from 'react';
import { FaSearch, FaFilter, FaFileExport, FaCheckCircle, FaTimesCircle, FaReceipt } from 'react-icons/fa';
import './Transaction.css';

export default function TransactionManagement() {
  const transactions = [
    {
      id: 'TX1001',
      account: '1001 (John Doe)',
      type: 'Wire Transfer',
      amount: 1250.00,
      date: '08/22 14:30',
      status: 'Pending',
      riskLevel: 'High'
    },
    {
      id: 'TX1002',
      account: '1002 (Sarah Lee)',
      type: 'ATM Withdrawal',
      amount: 500.00,
      date: '08/22 10:15',
      status: 'Completed',
      riskLevel: 'Medium'
    }
  ];

  return (
    <div className="transaction-management">
      <header className="transaction-header">
        <h1>Transactions</h1>
        <div className="controls">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search..." readOnly />
          </div>
          <div className="filter-controls">
            <div className="filter-dropdown">
              <FaFilter />
              <select>
                <option>All</option>
                <option>Pending</option>
              </select>
            </div>
            <button className="export-btn" disabled>
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
              <tr key={tx.id}>
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

      <div className="metrics">
        <div className="metric">
          <h3>Pending</h3>
          <p>1</p>
        </div>
        <div className="metric">
          <h3>High Risk</h3>
          <p>1</p>
        </div>
        <div className="metric">
          <h3>Critical</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}