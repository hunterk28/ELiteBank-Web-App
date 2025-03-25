import React, { useState } from 'react';
import { 
  FaSearch, 
  FaCheck, 
  FaTimes, 
  FaMoneyBillWave, 
  FaCalendarAlt, 
  FaFilter, 
  FaClock, 
  FaExclamationTriangle,
  FaPlus
} from 'react-icons/fa';
import './LoanManagement.css';

export default function LoanManagement() {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [activeTab, setActiveTab] = useState('applications');

  // Hardcoded loan data
  const loanApplications = [
    {
      id: 'LN2023001',
      customer: 'John Doe (C1001)',
      type: 'Personal Loan',
      amount: 15000,
      term: '36 months',
      interestRate: '8.5%',
      status: 'Pending',
      applicationDate: '2023-08-15',
      purpose: 'Home renovation',
      creditScore: 720
    },
    {
      id: 'LN2023002',
      customer: 'Sarah Lee (C1002)',
      type: 'Business Loan',
      amount: 50000,
      term: '60 months',
      interestRate: '6.9%',
      status: 'Pending',
      applicationDate: '2023-08-18',
      purpose: 'Business expansion',
      creditScore: 680
    }
  ];

  const activeLoans = [
    {
      id: 'LN2023003',
      customer: 'Michael Brown (C1003)',
      type: 'Auto Loan',
      amount: 25000,
      term: '48 months',
      interestRate: '5.5%',
      status: 'Active',
      disbursementDate: '2023-07-01',
      nextPaymentDate: '2023-09-01',
      paymentStatus: 'Current',
      remainingBalance: 247500
    }
  ];

  const loanPolicies = [
    {
      id: 'POL001',
      loanType: 'Personal Loan',
      minAmount: 1000,
      maxAmount: 50000,
      minTerm: '12 months',
      maxTerm: '60 months',
      baseRate: '6.5%',
      ltvRatio: 'N/A'
    }
  ];

  return (
    <div className="loan-management">
      <header className="loan-header">
        <h1>Loan Management</h1>
        <div className="controls">
          <div className="search-bar">
            <FaSearch />
            <input 
              type="text" 
              placeholder="Search loans..." 
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
                <option value="Approved">Approved</option>
                <option value="Active">Active</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="loan-tabs">
        <button 
          className={`tab-button ${activeTab === 'applications' ? 'active' : ''}`}
          onClick={() => setActiveTab('applications')}
        >
          Loan Applications
        </button>
        <button 
          className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active Loans
        </button>
        <button 
          className={`tab-button ${activeTab === 'policies' ? 'active' : ''}`}
          onClick={() => setActiveTab('policies')}
        >
          Loan Policies
        </button>
      </div>

      <div className="loan-table-container">
        {activeTab === 'applications' && (
          <table className="loan-table">
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Term</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loanApplications.map((loan) => (
                <tr 
                  key={loan.id}
                  className={selectedLoan?.id === loan.id ? 'selected' : ''}
                  onClick={() => setSelectedLoan(loan)}
                >
                  <td>{loan.id}</td>
                  <td>{loan.customer}</td>
                  <td>{loan.type}</td>
                  <td>${loan.amount.toLocaleString()}</td>
                  <td>{loan.term}</td>
                  <td>
                    <span className={`status-badge ${loan.status.toLowerCase()}`}>
                      {loan.status}
                    </span>
                  </td>
                  <td className="actions">
                    <button className="approve-btn">
                      <FaCheck /> Approve
                    </button>
                    <button className="reject-btn">
                      <FaTimes /> Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'active' && (
          <table className="loan-table">
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Balance</th>
                <th>Next Payment</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeLoans.map((loan) => (
                <tr 
                  key={loan.id}
                  className={selectedLoan?.id === loan.id ? 'selected' : ''}
                  onClick={() => setSelectedLoan(loan)}
                >
                  <td>{loan.id}</td>
                  <td>{loan.customer}</td>
                  <td>{loan.type}</td>
                  <td>${loan.remainingBalance.toLocaleString()}</td>
                  <td>{loan.nextPaymentDate}</td>
                  <td>
                    <span className={`status-badge ${loan.paymentStatus.includes('Overdue') ? 'overdue' : loan.status.toLowerCase()}`}>
                      {loan.paymentStatus}
                    </span>
                  </td>
                  <td className="actions">
                    <button className="payment-btn">
                      <FaMoneyBillWave /> Payment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'policies' && (
          <table className="loan-table">
            <thead>
              <tr>
                <th>Policy ID</th>
                <th>Loan Type</th>
                <th>Amount Range</th>
                <th>Term Range</th>
                <th>Base Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loanPolicies.map((policy) => (
                <tr 
                  key={policy.id}
                  onClick={() => setSelectedLoan(policy)}
                >
                  <td>{policy.id}</td>
                  <td>{policy.loanType}</td>
                  <td>${policy.minAmount.toLocaleString()} - ${policy.maxAmount.toLocaleString()}</td>
                  <td>{policy.minTerm} - {policy.maxTerm}</td>
                  <td>{policy.baseRate}</td>
                  <td className="actions">
                    <button className="edit-btn">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selectedLoan && (
        <div className="loan-detail-panel">
          <div className="panel-header">
            <h2>Loan Details</h2>
            <div className="loan-id">{selectedLoan.id}</div>
          </div>
          
          <div className="detail-grid">
            <div className="detail-item">
              <label>Customer</label>
              <p>{selectedLoan.customer}</p>
            </div>
            <div className="detail-item">
              <label>Type</label>
              <p>{selectedLoan.type || selectedLoan.loanType}</p>
            </div>
            <div className="detail-item">
              <label>Amount</label>
              <p>${(selectedLoan.amount || selectedLoan.minAmount)?.toLocaleString()}</p>
            </div>
            {selectedLoan.term && (
              <div className="detail-item">
                <label>Term</label>
                <p>{selectedLoan.term}</p>
              </div>
            )}
            {selectedLoan.interestRate && (
              <div className="detail-item">
                <label>Interest Rate</label>
                <p>{selectedLoan.interestRate}</p>
              </div>
            )}
            {selectedLoan.status && (
              <div className="detail-item">
                <label>Status</label>
                <p className={`status-badge ${selectedLoan.status.toLowerCase()}`}>
                  {selectedLoan.status}
                </p>
              </div>
            )}
            {selectedLoan.applicationDate && (
              <div className="detail-item">
                <label>Application Date</label>
                <p>{selectedLoan.applicationDate}</p>
              </div>
            )}
            {selectedLoan.nextPaymentDate && (
              <div className="detail-item">
                <label>Next Payment</label>
                <p>{selectedLoan.nextPaymentDate}</p>
              </div>
            )}
          </div>

          <div className="panel-actions">
            {activeTab === 'applications' ? (
              <>
                <button className="approve-btn">
                  <FaCheck /> Approve
                </button>
                <button className="reject-btn">
                  <FaTimes /> Reject
                </button>
              </>
            ) : activeTab === 'active' ? (
              <button className="payment-btn">
                <FaMoneyBillWave /> Record Payment
              </button>
            ) : (
              <button className="edit-btn">
                Edit Policy
              </button>
            )}
          </div>
        </div>
      )}

      {activeTab === 'policies' && (
        <div className="add-policy">
          <button className="add-btn">
            <FaPlus /> Add New Policy
          </button>
        </div>
      )}
    </div>
  );
}