import React from "react";
import { FaDollarSign, FaChartLine, FaUsers, FaExchangeAlt, FaCreditCard, FaFileInvoiceDollar, FaShieldAlt } from "react-icons/fa";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './DashBoard.css';

const balanceData = [
  { date: "16/08", balance: 15000 },
  { date: "17/08", balance: 15200 },
  { date: "18/08", balance: 15450 },
  { date: "19/08", balance: 15100 },
  { date: "20/08", balance: 15500 },
  { date: "21/08", balance: 15700 },
  { date: "22/08", balance: 16000 },
];

const transactionData = [
  { name: 'Jan', deposits: 4000, withdrawals: 2400 },
  { name: 'Feb', deposits: 3000, withdrawals: 1398 },
  { name: 'Mar', deposits: 2000, withdrawals: 9800 },
  { name: 'Apr', deposits: 2780, withdrawals: 3908 },
  { name: 'May', deposits: 1890, withdrawals: 4800 },
  { name: 'Jun', deposits: 2390, withdrawals: 3800 },
  { name: 'Jul', deposits: 3490, withdrawals: 4300 },
];

export default function DashboardOverview () {
  return (
    <div className="bank-admin-dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <h1>Bank Administrator Dashboard</h1>
        <div className="header-stats">
          <div className="stat-item">
            <FaDollarSign className="stat-icon" />
            <div>
              <span>Total Assets</span>
              <h3>$12,850,000</h3>
            </div>
          </div>
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <div>
              <span>Active Customers</span>
              <h3>8,742</h3>
            </div>
          </div>
          <div className="stat-item">
            <FaExchangeAlt className="stat-icon" />
            <div>
              <span>Today's Transactions</span>
              <h3>1,284</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Balance Trends */}
        <div className="dashboard-card large">
          <div className="card-header">
            <h3><FaChartLine /> Balance Trends</h3>
            <select className="time-selector">
              <option>7 Days</option>
              <option>30 Days</option>
              <option>90 Days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={balanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#2a3f5f',
                  border: 'none',
                  borderRadius: '5px',
                  color: '#fff'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="balance" 
                stroke="#4e73df" 
                strokeWidth={3} 
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Transaction Overview */}
        <div className="dashboard-card medium">
          <div className="card-header">
            <h3><FaExchangeAlt /> Transaction Overview</h3>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={transactionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#2a3f5f',
                  border: 'none',
                  borderRadius: '5px',
                  color: '#fff'
                }}
              />
              <Legend />
              <Bar dataKey="deposits" fill="#1cc88a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="withdrawals" fill="#e74a3b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Stats */}
            <div className="dashboard-card small">
            <div className="card-header">
                <h3><FaDollarSign /> Total Deposits</h3>
            </div>
            <div className="card-content">
                <h2>$2,450,000</h2>
                <span className="stat-up">+12.5% from last month</span>
            </div>
            </div>

            <div className="dashboard-card small">
            <div className="card-header">
                <h3><FaCreditCard /> Active Loans</h3>
            </div>
            <div className="card-content">
                <h2>1,284</h2>
                <span className="stat-neutral">$48,750,000 total</span>
            </div>
            </div>

            <div className="dashboard-card small">
            <div className="card-header">
                <h3><FaFileInvoiceDollar /> Pending Approvals</h3>
            </div>
            <div className="card-content">
                <h2>47</h2>
                <span className="stat-down">+8 since yesterday</span>
            </div>
            </div>

            <div className="dashboard-card small">
            <div className="card-header">
                <h3><FaShieldAlt /> Fraud Alerts</h3>
            </div>
            <div className="card-content">
                <h2>12</h2>
                <span className="stat-critical">Require immediate attention</span>
            </div>
            </div>

        {/* Recent Transactions */}
        <div className="dashboard-card medium1">
          <div className="card-header">
            <h3>Recent Transactions</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="transactions-table">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Account</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09:30 AM</td>
                  <td>1001 (John Doe)</td>
                  <td>Deposit</td>
                  <td className="amount-positive">+$1,500.00</td>
                  <td className="status-completed">Completed</td>
                </tr>
                <tr>
                  <td>10:00 AM</td>
                  <td>1002 (Sarah Lee)</td>
                  <td>Loan Payment</td>
                  <td className="amount-positive">+$800.00</td>
                  <td className="status-completed">Completed</td>
                </tr>
                <tr>
                  <td>12:00 PM</td>
                  <td>1003 (Mike Brown)</td>
                  <td>Bill Payment</td>
                  <td className="amount-negative">-$120.00</td>
                  <td className="status-pending">Pending</td>
                </tr>
                <tr>
                  <td>02:30 PM</td>
                  <td>1004 (Emily Davis)</td>
                  <td>ATM Withdrawal</td>
                  <td className="amount-negative">-$300.00</td>
                  <td className="status-completed">Completed</td>
                </tr>
                <tr>
                  <td>04:15 PM</td>
                  <td>1005 (Robert Wilson)</td>
                  <td>Wire Transfer</td>
                  <td className="amount-negative">-$1,250.00</td>
                  <td className="status-failed">Failed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Accounts */}
        <div className="dashboard-card large">
          <div className="card-header">
            <h3>Customer Accounts</h3>
            <div className="header-actions">
              <input type="text" placeholder="Search accounts..." className="search-input" />
              <button className="add-account-btn">+ New Account</button>
            </div>
          </div>
          <div className="accounts-table">
            <table>
              <thead>
                <tr>
                  <th>Account No.</th>
                  <th>Holder Name</th>
                  <th>Type</th>
                  <th>Open Date</th>
                  <th>Status</th>
                  <th>Balance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1001</td>
                  <td>John Doe</td>
                  <td>Premium Savings</td>
                  <td>12/05/2018</td>
                  <td className="status-active">Active</td>
                  <td>$15,200.00</td>
                  <td>
                    <button className="action-btn view">View</button>
                    <button className="action-btn edit">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>1002</td>
                  <td>Sarah Lee</td>
                  <td>Business Checking</td>
                  <td>03/11/2020</td>
                  <td className="status-inactive">Inactive</td>
                  <td>$2,300.00</td>
                  <td>
                    <button className="action-btn view">View</button>
                    <button className="action-btn edit">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>1003</td>
                  <td>Michael Brown</td>
                  <td>Student Account</td>
                  <td>08/22/2021</td>
                  <td className="status-active">Active</td>
                  <td>$850.50</td>
                  <td>
                    <button className="action-btn view">View</button>
                    <button className="action-btn edit">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>1004</td>
                  <td>Emily Davis</td>
                  <td>Gold Checking</td>
                  <td>05/15/2019</td>
                  <td className="status-active">Active</td>
                  <td>$24,750.00</td>
                  <td>
                    <button className="action-btn view">View</button>
                    <button className="action-btn edit">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <span>Showing 4 of 8,742 accounts</span>
            <div className="pagination">
              <button disabled>Previous</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};