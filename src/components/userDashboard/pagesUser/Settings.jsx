import React, { useState } from 'react';
import { 
  FaLock,
  FaShieldAlt,
  FaBell,
  FaLink,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import './Settings.css';
import Data from '../../data/pagesUserData/data.json'

export default function Settings() {
  // State for expanded sections
  const [expandedSections, setExpandedSections] = useState({
    password: true,
    accounts: false,
    twoFactor: false,
    notifications: false
  });

  // Sample data for linked accounts
  const linkedAccounts = Data.linkedAccounts.map(e=>e);

  // Sample notification preferences
  const notificationPrefs = Data.notificationPrefs.map(e=>e);

  // Toggle section expansion
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Settings</h2>
        <p className="subtitle">Manage your account preferences and security</p>
      </div>

      {/* Password & Security Section */}
      <div className="settings-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('password')}
        >
          <div className="header-title">
            <FaLock className="section-icon" />
            <h3>Password & Security</h3>
          </div>
          {expandedSections.password ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {expandedSections.password && (
          <div className="section-content">
            <div className="setting-item">
              <label>Current Password</label>
              <input type="password" placeholder="Enter current password" />
            </div>
            <div className="setting-item">
              <label>New Password</label>
              <input type="password" placeholder="Enter new password" />
            </div>
            <div className="setting-item">
              <label>Confirm New Password</label>
              <input type="password" placeholder="Confirm new password" />
            </div>
            <button className="save-btn">Update Password</button>
          </div>
        )}
      </div>

      {/* Linked Accounts Section */}
      <div className="settings-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('accounts')}
        >
          <div className="header-title">
            <FaLink className="section-icon" />
            <h3>Linked Accounts</h3>
          </div>
          {expandedSections.accounts ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {expandedSections.accounts && (
          <div className="section-content">
            <p className="section-description">Manage external accounts for transfers</p>
            
            <div className="linked-accounts-list">
              {linkedAccounts.map(account => (
                <div key={account.id} className="account-item">
                  <div className="account-info">
                    <span className="bank-name">{account.bank}</span>
                    <span className="account-number">{account.accountNumber}</span>
                  </div>
                  <div className="account-status">
                    {account.status === 'verified' ? (
                      <span className="verified"><FaCheckCircle /> Verified</span>
                    ) : (
                      <span className="pending"><FaTimesCircle /> Pending</span>
                    )}
                    <button className="unlink-btn">Unlink</button>
                  </div>
                </div>
              ))}
            </div>

            <button className="add-account-btn">
              + Link New Account
            </button>
          </div>
        )}
      </div>

      {/* Two-Factor Authentication Section */}
      <div className="settings-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('twoFactor')}
        >
          <div className="header-title">
            <FaShieldAlt className="section-icon" />
            <h3>Two-Factor Authentication</h3>
          </div>
          {expandedSections.twoFactor ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {expandedSections.twoFactor && (
          <div className="section-content">
            <div className="two-factor-status">
              <div className="status-info">
                <h4>Current Status: <span className="inactive">Inactive</span></h4>
                <p>Add an extra layer of security to your account</p>
              </div>
              <button className="enable-btn">Enable 2FA</button>
            </div>

            <div className="two-factor-methods">
              <div className="method-option">
                <input type="radio" id="sms" name="2fa-method" />
                <label htmlFor="sms">
                  <h4>SMS Text Message</h4>
                  <p>Receive codes via text message</p>
                </label>
              </div>
              <div className="method-option">
                <input type="radio" id="authenticator" name="2fa-method" />
                <label htmlFor="authenticator">
                  <h4>Authenticator App</h4>
                  <p>Use apps like Google Authenticator</p>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Notification Preferences Section */}
      <div className="settings-section">
        <div 
          className="section-header" 
          onClick={() => toggleSection('notifications')}
        >
          <div className="header-title">
            <FaBell className="section-icon" />
            <h3>Notification Preferences</h3>
          </div>
          {expandedSections.notifications ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {expandedSections.notifications && (
          <div className="section-content">
            <p className="section-description">Choose how we contact you</p>
            
            <div className="notification-prefs">
              {notificationPrefs.map(pref => (
                <div key={pref.id} className="pref-item">
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={pref.enabled}
                      onChange={() => {}}
                    />
                    <span className="slider"></span>
                  </label>
                  <div className="pref-info">
                    <h4>{pref.label}</h4>
                    <p>Receive {pref.type} notifications</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="notification-channels">
              <h4>Delivery Methods</h4>
              <div className="channel-options">
                <label>
                  <input type="checkbox" checked={true} onChange={() => {}} />
                  Email
                </label>
                <label>
                  <input type="checkbox" checked={true} onChange={() => {}} />
                  SMS
                </label>
                <label>
                  <input type="checkbox" checked={false} onChange={() => {}} />
                  Push Notifications
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}