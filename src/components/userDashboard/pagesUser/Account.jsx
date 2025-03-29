import React, { useState } from 'react';
import { 
  FaWallet, 
  FaHistory, 
  FaExchangeAlt, 
  FaUser, 
  FaEdit, 
  FaSave, 
  FaEnvelope, 
  FaPhone 
} from 'react-icons/fa';
import './Account.css';
import Data from '../../data/pagesUserData/data.json'


export default function Account () {
  const [isEditing, setIsEditing] = useState(false);
  
  // Sample data (replace with API calls)
  const account = Data.account

  const recentTransactions = Data.recentTransactions.map(e=>e);

  const [user, setUser] = useState({
    name: 'Alexandra Smith',
    email: 'alex.smith@example.com',
    phone: '+1 (555) 123-4567'
  });

  const handleSave = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setIsEditing(false);
  };

  return (
    <div className="accounts-container">
      {/* Account Overview */}
      <div className="account-card">
        <div className="account-header">
          <h3><FaWallet /> Account Summary</h3>
          <span className={`account-type-badge ${account.type.toLowerCase().includes('premium') ? 'premium' : ''}`}>
            {account.type}
          </span>
        </div>
        <div className="account-details">
          <p><strong>Account Number:</strong> {account.number}</p>
          <p><strong>Balance:</strong> ${account.balance.toFixed(2)}</p>
          <p><strong>Status:</strong> <span className={`status-badge ${account.status.toLowerCase()}`}>
            {account.status}
          </span></p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity-section">
        <div className="section-header">
          <h3><FaHistory /> Recent Transactions</h3>
          <button className="view-all-btn">View All</button>
        </div>
        <ul className="transaction-list">
          {recentTransactions.map((txn) => (
            <li key={txn.id} className="transaction-item" style={{ animationDelay: `${txn.id * 0.1}s` }}>
              <div className="txn-icon"><FaExchangeAlt /></div>
              <div className="txn-details">
                <p>{txn.description}</p>
                <small>{txn.date}</small>
              </div>
              <div className={`txn-amount ${txn.type}`}>
                {txn.type === 'debit' ? '-' : '+'}${txn.amount.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="section-header">
          <h3><FaUser /> Profile Details</h3>
          <button 
            className={`action-btn ${isEditing ? 'save' : 'edit'}`}
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
          >
            {isEditing ? <FaSave /> : <FaEdit />}
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
        
        {isEditing ? (
          <form className="profile-form" onSubmit={handleSave}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                value={user.name}
                onChange={(e) => setUser({...user, name: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
              />
            </div>
            
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel" 
                value={user.phone}
                onChange={(e) => setUser({...user, phone: e.target.value})}
              />
            </div>
          </form>
        ) : (
          <div className="profile-details">
            <p><FaUser /> <strong>Name:</strong> {user.name}</p>
            <p><FaEnvelope /> <strong>Email:</strong> {user.email}</p>
            <p><FaPhone /> <strong>Phone:</strong> {user.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};