import React, { useState } from 'react';
import { FaSearch, FaEdit, FaSave, FaPercentage, FaMoneyBillWave, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';
import './InterestManagement.css';

export default function InterestManagement() {
  const [activeTab, setActiveTab] = useState('savings');
  const [editing, setEditing] = useState(null);
  const [tempValues, setTempValues] = useState({});
  
  // Hardcoded interest and fee data
  const savingsRates = [
    {
      id: 'SAV001',
      accountType: 'Basic Savings',
      baseRate: 1.5,
      bonusRate: 0.5,
      bonusCondition: 'Balance > $10,000',
      minBalance: 100,
      calculationMethod: 'Daily compounding'
    },
    {
      id: 'SAV002',
      accountType: 'Premium Savings',
      baseRate: 2.25,
      bonusRate: 1.0,
      bonusCondition: 'Balance > $25,000',
      minBalance: 1000,
      calculationMethod: 'Monthly compounding'
    }
  ];

  const loanRates = [
    {
      id: 'LOAN001',
      loanType: 'Personal Loan',
      baseRate: 8.5,
      riskAdjustment: '+2% for credit score < 650',
      maxRate: 15.0,
      minTerm: '12 months',
      calculationMethod: 'Simple interest'
    },
    {
      id: 'LOAN002',
      loanType: 'Mortgage',
      baseRate: 4.25,
      riskAdjustment: '+0.5% per 50 points below 700',
      maxRate: 7.5,
      minTerm: '60 months',
      calculationMethod: 'Amortized'
    }
  ];

  const feeStructures = [
    {
      id: 'FEE001',
      feeType: 'Late Payment',
      feeName: 'Loan Late Fee',
      amount: '5% of payment or $25 (whichever is greater)',
      gracePeriod: '15 days',
      appliesTo: 'All loan products'
    },
    {
      id: 'FEE002',
      feeType: 'Account Maintenance',
      feeName: 'Monthly Service Fee',
      amount: '$10',
      gracePeriod: 'N/A',
      appliesTo: 'Basic Checking accounts'
    }
  ];

  const handleEdit = (id, field, value) => {
    setEditing(id);
    setTempValues({...tempValues, [field]: value});
  };

  const handleSave = () => {
    setEditing(null);
    // In a real implementation, this would update the state or make an API call
  };

  return (
    <div className="interest-management">
      <header className="interest-header">
        <h1>Interest & Fee Management</h1>
        <div className="controls">
          <div className="search-bar">
            <FaSearch />
            <input 
              type="text" 
              placeholder="Search rates or fees..." 
            />
          </div>
        </div>
      </header>

      <div className="interest-tabs">
        <button 
          className={`tab-button ${activeTab === 'savings' ? 'active' : ''}`}
          onClick={() => setActiveTab('savings')}
        >
          Savings Rates
        </button>
        <button 
          className={`tab-button ${activeTab === 'loans' ? 'active' : ''}`}
          onClick={() => setActiveTab('loans')}
        >
          Loan Rates
        </button>
        <button 
          className={`tab-button ${activeTab === 'fees' ? 'active' : ''}`}
          onClick={() => setActiveTab('fees')}
        >
          Fee Structures
        </button>
      </div>

      <div className="rates-table-container">
        {activeTab === 'savings' && (
          <table className="rates-table">
            <thead>
              <tr>
                <th>Account Type</th>
                <th>Base Rate</th>
                <th>Bonus Rate</th>
                <th>Min Balance</th>
                <th>Calculation Method</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {savingsRates.map((rate) => (
                <tr key={rate.id}>
                  <td>{rate.accountType}</td>
                  <td>
                    {editing === rate.id ? (
                      <input 
                        type="number" 
                        value={tempValues.baseRate || rate.baseRate}
                        onChange={(e) => handleEdit(rate.id, 'baseRate', e.target.value)}
                      />
                    ) : (
                      <span className="rate-value">
                        <FaPercentage /> {rate.baseRate}%
                      </span>
                    )}
                  </td>
                  <td>
                    {rate.bonusRate}% <span className="condition">({rate.bonusCondition})</span>
                  </td>
                  <td>${rate.minBalance}</td>
                  <td>{rate.calculationMethod}</td>
                  <td className="actions">
                    {editing === rate.id ? (
                      <button className="save-btn" onClick={handleSave}>
                        <FaSave /> Save
                      </button>
                    ) : (
                      <button className="edit-btn" onClick={() => setEditing(rate.id)}>
                        <FaEdit /> Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'loans' && (
          <table className="rates-table">
            <thead>
              <tr>
                <th>Loan Type</th>
                <th>Base Rate</th>
                <th>Risk Adjustment</th>
                <th>Max Rate</th>
                <th>Calculation Method</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loanRates.map((rate) => (
                <tr key={rate.id}>
                  <td>{rate.loanType}</td>
                  <td>
                    {editing === rate.id ? (
                      <input 
                        type="number" 
                        value={tempValues.baseRate || rate.baseRate}
                        onChange={(e) => handleEdit(rate.id, 'baseRate', e.target.value)}
                      />
                    ) : (
                      <span className="rate-value">
                        <FaPercentage /> {rate.baseRate}%
                      </span>
                    )}
                  </td>
                  <td>{rate.riskAdjustment}</td>
                  <td>{rate.maxRate}%</td>
                  <td>{rate.calculationMethod}</td>
                  <td className="actions">
                    {editing === rate.id ? (
                      <button className="save-btn" onClick={handleSave}>
                        <FaSave /> Save
                      </button>
                    ) : (
                      <button className="edit-btn" onClick={() => setEditing(rate.id)}>
                        <FaEdit /> Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 'fees' && (
          <table className="rates-table">
            <thead>
              <tr>
                <th>Fee Type</th>
                <th>Fee Name</th>
                <th>Amount</th>
                <th>Grace Period</th>
                <th>Applies To</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feeStructures.map((fee) => (
                <tr key={fee.id}>
                  <td>{fee.feeType}</td>
                  <td>{fee.feeName}</td>
                  <td>
                    {editing === fee.id ? (
                      <input 
                        type="text" 
                        value={tempValues.amount || fee.amount}
                        onChange={(e) => handleEdit(fee.id, 'amount', e.target.value)}
                      />
                    ) : (
                      <span className="fee-amount">
                        <FaMoneyBillWave /> {fee.amount}
                      </span>
                    )}
                  </td>
                  <td>{fee.gracePeriod}</td>
                  <td>{fee.appliesTo}</td>
                  <td className="actions">
                    {editing === fee.id ? (
                      <button className="save-btn" onClick={handleSave}>
                        <FaSave /> Save
                      </button>
                    ) : (
                      <button className="edit-btn" onClick={() => setEditing(fee.id)}>
                        <FaEdit /> Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="add-new-section">
        <button className="add-btn">
          + Add New {activeTab === 'savings' ? 'Savings Rate' : activeTab === 'loans' ? 'Loan Rate' : 'Fee Structure'}
        </button>
      </div>
    </div>
  );
}