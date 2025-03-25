import React, { useState } from 'react';
import { FaSearch, FaFilePdf, FaFileCsv, FaFileAlt, FaCalendarAlt, FaUser, FaFilter, FaDownload } from 'react-icons/fa';
import './ReportManagement.css';

export default function ReportManagement() {
  const [activeTab, setActiveTab] = useState('statements');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });

  // Hardcoded data for demonstration
  const customers = [
    { id: 'C1001', name: 'John Doe', account: '1001 (Savings)' },
    { id: 'C1002', name: 'Sarah Lee', account: '1002 (Checking)' },
    { id: 'C1003', name: 'Michael Brown', account: '1003 (Business)' }
  ];

  const reportTypes = [
    { id: 'R001', name: 'Transaction History', description: 'Detailed transaction records' },
    { id: 'R002', name: 'Account Summary', description: 'Monthly account summary' },
    { id: 'R003', name: 'Interest Calculation', description: 'Interest earned/paid report' }
  ];

  const handleGenerateReport = (type) => {
    // In a real implementation, this would trigger report generation
    alert(`Generating ${type} report for ${selectedCustomer || 'all customers'} from ${dateRange.start || 'beginning'} to ${dateRange.end || 'now'}`);
  };

  return (
    <div className="report-management">
      <header className="report-header">
        <h1>Report Management</h1>
        <div className="controls">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search reports..." />
          </div>
        </div>
      </header>

      <div className="report-tabs">
        <button 
          className={`report-tab ${activeTab === 'statements' ? 'active' : ''}`}
          onClick={() => setActiveTab('statements')}
        >
          <FaFileAlt /> Customer Statements
        </button>
        <button 
          className={`report-tab ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveTab('reports')}
        >
          <FaFilter /> Transaction Reports
        </button>
        <button 
          className={`report-tab ${activeTab === 'exports' ? 'active' : ''}`}
          onClick={() => setActiveTab('exports')}
        >
          <FaDownload /> Data Exports
        </button>
      </div>

      <div className="report-content">
        {activeTab === 'statements' && (
          <div className="statement-section">
            <div className="report-filters">
              <div className="filter-group">
                <label><FaUser /> Customer</label>
                <select 
                  value={selectedCustomer} 
                  onChange={(e) => setSelectedCustomer(e.target.value)}
                >
                  <option value="">All Customers</option>
                  {customers.map(customer => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name} - {customer.account}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label><FaCalendarAlt /> Date Range</label>
                <div className="date-range">
                  <input 
                    type="date" 
                    value={dateRange.start}
                    onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                  />
                  <span>to</span>
                  <input 
                    type="date" 
                    value={dateRange.end}
                    onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="report-actions">
              <button className="generate-btn pdf-btn" onClick={() => handleGenerateReport('PDF Statement')}>
                <FaFilePdf /> Generate PDF Statement
              </button>
              <button className="generate-btn csv-btn" onClick={() => handleGenerateReport('CSV Statement')}>
                <FaFileCsv /> Generate CSV Statement
              </button>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="reports-section">
            <div className="report-cards">
              {reportTypes.map(report => (
                <div key={report.id} className="report-card">
                  <h3>{report.name}</h3>
                  <p>{report.description}</p>
                  <div className="report-params">
                    <div className="param-group">
                      <label>Date Range</label>
                      <div className="date-range">
                        <input 
                          type="date" 
                          value={dateRange.start}
                          onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                        />
                        <span>to</span>
                        <input 
                          type="date" 
                          value={dateRange.end}
                          onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="report-card-actions">
                    <button className="generate-btn" onClick={() => handleGenerateReport(report.name)}>
                      Generate Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'exports' && (
          <div className="exports-section">
            <div className="export-options">
              <div className="export-option">
                <div className="export-icon">
                  <FaFilePdf />
                </div>
                <h3>PDF Export</h3>
                <p>Export transaction data in PDF format</p>
                <button className="export-btn" onClick={() => handleGenerateReport('PDF Export')}>
                  Export PDF
                </button>
              </div>
              <div className="export-option">
                <div className="export-icon">
                  <FaFileCsv />
                </div>
                <h3>CSV Export</h3>
                <p>Export transaction data in CSV format</p>
                <button className="export-btn" onClick={() => handleGenerateReport('CSV Export')}>
                  Export CSV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}