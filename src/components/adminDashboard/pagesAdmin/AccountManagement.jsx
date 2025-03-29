import React, { useState } from 'react';
import { FaSearch, FaCheck, FaTimes, FaExchangeAlt, FaLock, FaFilter } from 'react-icons/fa';
import './AccountManagement.css';
import Data from '../../data/pagesAdminData/data.json'

export default function AccountManagement() {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Hardcoded account data
  const accounts = Data.accounts.map((e)=>e);

  return (
    <div className="account-management">
      <header className="account-header">
        <h1>Account Management</h1>
        <div className="controls">
          <div className="search-bar">
            <FaSearch />
            <input 
              type="text" 
              placeholder="Search accounts..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-controls">
            <div className="filter-dropdown">
              <FaFilter />
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Active">Active</option>
                <option value="Suspended">Suspended</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="account-table-container">
        <table className="account-table">
          <thead>
            <tr>
              <th>Account ID</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Balance</th>
              <th>Status</th>
              <th>Request</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr 
                key={account.id}
                className={`account-row ${selectedAccount?.id === account.id ? 'selected' : ''}`}
                onClick={() => setSelectedAccount(account)}
              >
                <td>{account.id}</td>
                <td>{account.customer}</td>
                <td>{account.type}</td>
                <td>${account.balance.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${account.status.toLowerCase()}`}>
                    {account.status}
                  </span>
                </td>
                <td>
                  {account.requestType || '-'}
                </td>
                <td className="actions">
                  {account.status === 'Pending' && (
                    <>
                      <button className="approve-btn">
                        <FaCheck /> Approve
                      </button>
                      <button className="reject-btn">
                        <FaTimes /> Reject
                      </button>
                    </>
                  )}
                  {account.status === 'Active' && (
                    <>
                      <button className="modify-btn">
                        <FaExchangeAlt /> Modify
                      </button>
                      <button className="close-btn">
                        <FaLock /> Close
                      </button>
                    </>
                  )}
                  {account.status === 'Suspended' && (
                    <button className="reactivate-btn">
                      <FaLock /> Reactivate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`account-detail-panel ${selectedAccount ? 'visible' : ''}`}>
        {selectedAccount && (
          <>
            <div className="panel-header">
              <h2>Account Details</h2>
              <div className="account-id">
                {selectedAccount.id}
              </div>
            </div>
            
            <div className="detail-sections">
              <section className="account-info">
                <div className="info-grid">
                  <div className="info-item">
                    <label>Customer</label>
                    <p>{selectedAccount.customer}</p>
                  </div>
                  <div className="info-item">
                    <label>Account Type</label>
                    <p>{selectedAccount.type}</p>
                  </div>
                  <div className="info-item">
                    <label>Balance</label>
                    <p>${selectedAccount.balance.toFixed(2)}</p>
                  </div>
                  <div className="info-item">
                    <label>Status</label>
                    <p>
                      <span className={`status-badge ${selectedAccount.status.toLowerCase()}`}>
                        {selectedAccount.status}
                      </span>
                    </p>
                  </div>
                  <div className="info-item">
                    <label>Opened Date</label>
                    <p>{selectedAccount.openedDate}</p>
                  </div>
                  <div className="info-item">
                    <label>Last Activity</label>
                    <p>{selectedAccount.lastActivity || 'No activity'}</p>
                  </div>
                  <div className="info-item">
                    <label>Pending Request</label>
                    <p>{selectedAccount.requestType || 'None'}</p>
                  </div>
                </div>
              </section>

              <section className="notes-section">
                <h3>Notes</h3>
                <div className="notes-content">
                  {selectedAccount.notes}
                </div>
              </section>
            </div>

            <div className="panel-actions">
              {selectedAccount.status === 'Pending' && (
                <>
                  <button className="approve-btn">
                    <FaCheck /> Approve Account
                  </button>
                  <button className="reject-btn">
                    <FaTimes /> Reject Request
                  </button>
                </>
              )}
              {selectedAccount.status === 'Active' && (
                <>
                  <button className="modify-btn">
                    <FaExchangeAlt /> Modify Account Type
                  </button>
                  <button className="close-btn">
                    <FaLock /> Close Account
                  </button>
                </>
              )}
              {selectedAccount.status === 'Suspended' && (
                <button className="reactivate-btn">
                  <FaLock /> Reactivate Account
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}