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
import Data from '../../data/pagesUserData/data.json'

export default function Loan() {
  // State for tabs
  const [activeTab, setActiveTab] = useState('myLoans');
  
  // Sample data (static for frontend)
  const activeLoans = Data.activeLoans.map(e=>e);

  const loanApplications = Data.loanApplications.map(e=>e);

  const loanProducts = Data.loanProducts.map(e=>e);

  // Sample repayment schedule
  const repaymentSchedule = Data.repaymentSchedule.map(e=>e);

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