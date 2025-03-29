import React from 'react';
import { 
  FaBell, 
  FaMoneyBillWave, 
  FaShieldAlt, 
  FaInfoCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import './Notifications.css';
import Data from '../../data/pagesUserData/data.json'

export default function Notifications() {
  // Sample notification data (static for frontend)
  const notifications = Data.notifications.map(e=>e)

  const iconComponents = {
  FaBell, 
  FaMoneyBillWave, 
  FaShieldAlt, 
  FaInfoCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle
  }

  // Notification type styling
  const getNotificationStyle = (type) => {
    switch(type) {
      case 'transaction':
        return { color: '#4e73df', bg: 'rgba(78, 115, 223, 0.1)' };
      case 'loan':
        return { color: '#1cc88a', bg: 'rgba(28, 200, 138, 0.1)' };
      case 'security':
        return { color: '#e74a3b', bg: 'rgba(231, 74, 59, 0.1)' };
      case 'announcement':
        return { color: '#f6c23e', bg: 'rgba(246, 194, 62, 0.1)' };
      default:
        return { color: '#d44a4a', bg: 'rgba(94, 25, 26, 0.1)' };
    }
  };

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h2><FaBell /> Notifications</h2>
        <div className="header-actions">
          <button className="mark-all-read">Mark All as Read</button>
          <select className="filter-select">
            <option value="all">All Notifications</option>
            <option value="transaction">Transactions</option>
            <option value="loan">Loans</option>
            <option value="security">Security</option>
            <option value="announcement">Announcements</option>
          </select>
        </div>
      </div>

      <div className="notifications-list">
        {notifications.map(notification => {
          const Icon = iconComponents[notification.icon]
        return(
          <div 
            key={notification.id} 
            className={`notification-card ${notification.read ? 'read' : 'unread'}`}
            style={{ borderLeftColor: getNotificationStyle(notification.type).color }}
          >
            <div 
              className="notification-icon"
              style={{ 
                color: getNotificationStyle(notification.type).color,
                backgroundColor: getNotificationStyle(notification.type).bg
              }}
            >
              <Icon />
            </div>
            <div className="notification-content">
              <div className="notification-header">
                <h4>{notification.title}</h4>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p className="notification-message">{notification.message}</p>
            </div>
            {!notification.read && <div className="unread-badge"></div>}
          </div>
        )})}
      </div>
    </div>
  );
}