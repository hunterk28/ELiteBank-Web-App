import React from "react";
import { FaDollarSign, FaChartLine, FaUsers, FaExchangeAlt, FaCreditCard, FaFileInvoiceDollar, FaShieldAlt } from "react-icons/fa";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './DashBoard.css';
import Data from '../../data/pagesAdminData/data.json'
import StatCard from "../../common/StatCard";
import QuickStatCard from "../../common/QuickStatCard";
import Table from '../../common/Table';
import TableCostumerAccounts from '../../common/TableCostumerAccounts'

const iconComponents = { FaDollarSign, FaChartLine, FaUsers, FaExchangeAlt, FaCreditCard, FaFileInvoiceDollar, FaShieldAlt };

const balanceData = Data.balanceData.map((e)=>e);

const transactionData = Data.transactionData.map((e)=>e);

export default function DashboardOverview () {
  return (
    <div className="bank-admin-dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <h1>Bank Administrator Dashboard</h1>
        <div className="header-stats">
          {  Data.summaryStats.map((stat) => {
              const Icon = iconComponents[stat.icon];
              return (
                <div key={stat.id} className="stat-item">
                <StatCard 
                  icon={Icon}
                  title={stat.title}
                  info={stat.info}
                />
                </div>
              )
            })
          }
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
            {Data.quickStats?.map((stat)=>{
              const icon = iconComponents[stat.icon]
              return(
                <QuickStatCard 
                  key={stat.id}
                  icon={icon}
                  title={stat.title}
                  trend={stat.trend}
                  value={stat.value}
                  description={stat.description}
                />
              )
            })}

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
                {
                  Data.recentTransactions?.map((e) => 
                    <Table 
                      key={e.id}
                      time={e.time}
                      account={e.account}
                      type={e.type}
                      amount={e.amount}
                      amountType={e.amountType}
                      status={e.status}
                    />
                  )
                }
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
              {
                  Data.customerAccounts?.data?.map((e) => 
                    <TableCostumerAccounts 
                      key={e.id}
                      accountNumber={e.accountNumber}
                      holderName={e.holderName}
                      type={e.type}
                      openDate={e.openDate}
                      status={e.status}
                      balance={e.balance}
                    />
                  )
                }
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <span>{`Showing ${Data.customerAccounts.perPage} of ${Data.customerAccounts.total} accounts`}</span>
            <div className="pagination">
              <button disabled>Previous</button>
              <button className="active">{Data.customerAccounts.currentPage}</button>
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