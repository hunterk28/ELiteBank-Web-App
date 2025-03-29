import React, { useState } from 'react';
import { FaSearch, FaUserPlus, FaEdit, FaTrash, FaLock, FaUnlock, FaIdCard, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './CostumerManagement.css'
import Data from '../../data/pagesAdminData/data.json'

export default function CustomerManagement() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const customers = Data.customers.map((e)=>e);

  return (
    <div className="customer-management">
      <header className="customer-header">
        <h1>Customer Management</h1>
        <div className="customer-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search customers..." />
          </div>
          <button className="add-customer-btn">
            <FaUserPlus /> Add
          </button>
        </div>
      </header>

      <div className="customer-table-container">
        <table className="customer-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Tier</th>
              <th>Accounts</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr 
                key={customer.id}
                className={`customer-row ${selectedCustomer?.id === customer.id ? 'selected' : ''}`}
                onClick={() => setSelectedCustomer(customer)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <td>{customer.id}</td>
                <td>
                  <div className="customer-name">
                    {customer.name}
                    <div className="customer-contact">
                      <span><FaEnvelope /> {customer.email}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${customer.status.toLowerCase()}`}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <span className={`tier-badge ${customer.tier.toLowerCase()}`}>
                    {customer.tier}
                  </span>
                </td>
                <td>
                  <div className="accounts-list">
                    {customer.accounts[0]}
                  </div>
                </td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <FaEdit />
                  </button>
                  <button className="delete-btn" title="Delete">
                    <FaTrash />
                  </button>
                  {customer.status === 'Active' ? (
                    <button className="disable-btn" title="Disable">
                      <FaLock />
                    </button>
                  ) : (
                    <button className="enable-btn" title="Enable">
                      <FaUnlock />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`customer-detail-panel ${selectedCustomer ? 'visible' : ''}`}>
        {selectedCustomer && (
          <>
            <div className="panel-header">
              <h2>Customer Details</h2>
              <div className="customer-id">
                <FaIdCard /> {selectedCustomer.id}
              </div>
            </div>
            
            <div className="detail-sections">
              <section className="personal-info">
                <div className="info-grid">
                  <div className="info-item">
                    <label>Name</label>
                    <p>{selectedCustomer.name}</p>
                  </div>
                  <div className="info-item">
                    <label>Phone</label>
                    <p><FaPhone /> {selectedCustomer.phone}</p>
                  </div>
                  <div className="info-item">
                    <label>Status</label>
                    <p>
                      <span className={`status-badge ${selectedCustomer.status.toLowerCase()}`}>
                        {selectedCustomer.status}
                      </span>
                    </p>
                  </div>
                </div>
              </section>

              <section className="account-info">
                <h3>Account</h3>
                <div className="account-card">
                  <h4>Savings Account</h4>
                  <p>{selectedCustomer.accounts[0]}</p>
                  <p>Balance: $15,200.00</p>
                </div>
              </section>
            </div>

            <div className="panel-actions">
              <button className="save-btn">Save</button>
              <button className="reset-btn">Reset Password</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}