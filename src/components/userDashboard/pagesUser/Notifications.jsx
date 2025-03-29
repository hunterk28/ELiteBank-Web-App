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

export default function Notifications() {
  // Sample notification data (static for frontend)
  const notifications = [
    {
      id: 1,
      type: 'transaction',
      title: 'Deposit Received',
      message: 'Salary deposit of $3,500.00 has been credited to your account',
      time: '10 minutes ago',
      read: false,
      icon: <FaMoneyBillWave />
    },
    {
      id: 2,
      type: 'loan',
      title: 'Loan Approved',
      message: 'Your personal loan application (#LN-2023-0456) has been approved',
      time: '2 hours ago',
      read: false,
      icon: <FaCheckCircle />
    },
    {
      id: 3,
      type: 'security',
      title: 'Suspicious Login Attempt',
      message: 'Failed login attempt from new device (Chrome, Windows)',
      time: 'Yesterday',
      read: true,
      icon: <FaShieldAlt />
    },
    {
      id: 4,
      type: 'announcement',
      title: 'System Maintenance',
      message: 'Mobile banking will be unavailable Sunday 2AM-4AM for maintenance',
      time: 'Jun 15',
      read: true,
      icon: <FaInfoCircle />
    },
    {
      id: 5,
      type: 'transaction',
      title: 'Withdrawal Alert',
      message: '$200.00 withdrawn from ATM at 125 Main St',
      time: 'Jun 14',
      read: true,
      icon: <FaMoneyBillWave />
    }
  ];

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
        {notifications.map(notification => (
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
              {notification.icon}
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
        ))}
      </div>
    </div>
  );
}