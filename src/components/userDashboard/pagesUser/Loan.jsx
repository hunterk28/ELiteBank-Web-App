import React, { useState } from 'react';
import { 
  FaMoneyBillWave, 
  FaCalendarAlt, 
  FaChartLine,
  FaFileAlt,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaPlus
} from 'react-icons/fa';
import './Loan.css';

export default function Loan() {
  // State for tabs
  const [activeTab, setActiveTab] = useState('myLoans');
  
  // Sample data (static for frontend)
  const activeLoans = [
    {
      id: 1,
      loanNumber: 'LN-2023-0456',
      type: 'Personal Loan',
      amount: 15000,
      remaining: 12500,
      interestRate: 7.5,
      nextPayment: '2023-07-15',
      status: 'active'
    },
    {
      id: 2,
      loanNumber: 'LN-2023-0789',
      type: 'Auto Loan',
      amount: 25000,
      remaining: 8000,
      interestRate: 5.2,
      nextPayment: '2023-07-20',
      status: 'active'
    }
  ];

  const loanApplications = [
    {
      id: 1,
      loanNumber: 'APP-2023-1001',
      type: 'Home Loan',
      amount: 300000,
      appliedDate: '2023-06-01',
      status: 'pending'
    },
    {
      id: 2,
      loanNumber: 'APP-2023-0923',
      type: 'Business Loan',
      amount: 50000,
      appliedDate: '2023-05-15',
      status: 'rejected'
    }
  ];

  const loanProducts = [
    {
      id: 1,
      name: 'Personal Loan',
      rate: '7.5% - 12%',
      amount: 'Up to $50,000',
      term: '1-5 years'
    },
    {
      id: 2,
      name: 'Auto Loan',
      rate: '5.2% - 8%',
      amount: 'Up to $100,000',
      term: '1-7 years'
    },
    {
      id: 3,
      name: 'Home Loan',
      rate: '4.5% - 6.5%',
      amount: 'Up to $1,000,000',
      term: '10-30 years'
    }
  ];

  // Sample repayment schedule
  const repaymentSchedule = [
    { month: 'Jul 2023', payment: 1250.50, principal: 950.25, interest: 300.25, balance: 11549.75 },
    { month: 'Aug 2023', payment: 1250.50, principal: 960.75, interest: 289.75, balance: 10589.00 },
    { month: 'Sep 2023', payment: 1250.50, principal: 970.50, interest: 280.00, balance: 9618.50 }
  ];

  return (
    <div className="loan-container">
      <div className="loan-header">
        <h2><FaMoneyBillWave /> Loan Center</h2>
        <button className="new-loan-btn">
          <FaPlus /> Apply for New Loan
        </button>
      </div>

      <div className="loan-tabs">
        <button 
          className={`tab-btn ${activeTab === 'myLoans' ? 'active' : ''}`}
          onClick={() => setActiveTab('myLoans')}
        >
          My Loans
        </button>
        <button 
          className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
          onClick={() => setActiveTab('applications')}
        >
          Applications
        </button>
        <button 
          className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Loan Products
        </button>
      </div>

      {activeTab === 'myLoans' && (
        <div className="loan-section">
          <h3><FaChartLine /> Active Loans</h3>
          
          {activeLoans.length > 0 ? (
            <div className="loan-cards">
              {activeLoans.map(loan => (
                <div key={loan.id} className="loan-card">
                  <div className="loan-header">
                    <h4>{loan.type}</h4>
                    <span className="loan-number">{loan.loanNumber}</span>
                  </div>
                  
                  <div className="loan-details">
                    <div className="detail-row">
                      <span>Original Amount</span>
                      <span>${loan.amount.toLocaleString()}</span>
                    </div>
                    <div className="detail-row">
                      <span>Remaining Balance</span>
                      <span className="highlight">${loan.remaining.toLocaleString()}</span>
                    </div>
                    <div className="detail-row">
                      <span>Interest Rate</span>
                      <span>{loan.interestRate}%</span>
                    </div>
                    <div className="detail-row">
                      <span>Next Payment</span>
                      <span>{new Date(loan.nextPayment).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="loan-actions">
                    <button className="payment-btn">Make Payment</button>
                    <button className="schedule-btn">View Schedule</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-loans">
              <p>You don't have any active loans</p>
            </div>
          )}

          {/* Repayment Schedule (hidden by default) */}
          <div className="repayment-schedule" style={{ display: 'none' }}>
            <h4>Repayment Schedule</h4>
            <table>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Payment</th>
                  <th>Principal</th>
                  <th>Interest</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {repaymentSchedule.map((item, index) => (
                  <tr key={index}>
                    <td>{item.month}</td>
                    <td>${item.payment.toFixed(2)}</td>
                    <td>${item.principal.toFixed(2)}</td>
                    <td>${item.interest.toFixed(2)}</td>
                    <td>${item.balance.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'applications' && (
        <div className="loan-section">
          <h3><FaFileAlt /> Loan Applications</h3>
          
          {loanApplications.length > 0 ? (
            <div className="applications-table">
              <table>
                <thead>
                  <tr>
                    <th>Application #</th>
                    <th>Loan Type</th>
                    <th>Amount</th>
                    <th>Applied Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loanApplications.map(app => (
                    <tr key={app.id}>
                      <td>{app.loanNumber}</td>
                      <td>{app.type}</td>
                      <td>${app.amount.toLocaleString()}</td>
                      <td>{new Date(app.appliedDate).toLocaleDateString()}</td>
                      <td>
                        <span className={`status-badge ${app.status}`}>
                          {app.status === 'pending' ? <FaClock /> : 
                           app.status === 'approved' ? <FaCheckCircle /> : 
                           <FaTimesCircle />}
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </span>
                      </td>
                      <td>
                        <button className="view-btn">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="no-applications">
              <p>You don't have any loan applications</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'products' && (
        <div className="loan-section">
          <h3><FaMoneyBillWave /> Loan Products</h3>
          
          <div className="products-grid">
            {loanProducts.map(product => (
              <div key={product.id} className="product-card">
                <h4>{product.name}</h4>
                <div className="product-details">
                  <div className="detail-item">
                    <span>Interest Rate</span>
                    <span className="highlight">{product.rate}</span>
                  </div>
                  <div className="detail-item">
                    <span>Loan Amount</span>
                    <span>{product.amount}</span>
                  </div>
                  <div className="detail-item">
                    <span>Term</span>
                    <span>{product.term}</span>
                  </div>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}