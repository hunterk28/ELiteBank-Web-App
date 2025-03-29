import React from 'react';
import { 
  FaFilePdf, 
  FaFileCsv, 
  FaChartLine, 
  FaMoneyBillWave, 
  FaCalendarAlt,
  FaPrint
} from 'react-icons/fa';
import './Report.css';

export default function Reports() {
  // Sample report data (static for frontend)
  const monthlySummaries = [
    { id: 1, month: 'June 2023', income: 3500, expenses: 1200, net: 2300 },
    { id: 2, month: 'May 2023', income: 3200, expenses: 1100, net: 2100 },
    { id: 3, month: 'April 2023', income: 3400, expenses: 1300, net: 2100 }
  ];

  const interestReports = [
    { id: 1, account: 'Premium Savings', type: 'Earned', amount: 42.50, period: 'Q2 2023' },
    { id: 2, account: 'Mortgage', type: 'Paid', amount: 320.75, period: 'Q2 2023' }
  ];

  const loanStatements = [
    { id: 1, loanId: 'LN-2023-0456', balance: 12500, nextPayment: '2023-07-15' },
    { id: 2, loanId: 'LN-2023-0789', balance: 8000, nextPayment: '2023-07-20' }
  ];

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h2><FaChartLine /> Reports & Statements</h2>
        <div className="time-filter">
          <select>
            <option>Last 3 Months</option>
            <option>2023</option>
            <option>Custom Range</option>
          </select>
        </div>
      </div>

      {/* Monthly Account Summaries */}
      <div className="report-section">
        <div className="section-header">
          <h3><FaCalendarAlt /> Monthly Account Summaries</h3>
          <div className="export-options">
            <button className="export-btn"><FaFilePdf /> PDF</button>
            <button className="export-btn"><FaFileCsv /> CSV</button>
            <button className="export-btn"><FaPrint /> Print</button>
          </div>
        </div>
        
        <div className="report-cards">
          {monthlySummaries.map(report => (
            <div key={report.id} className="summary-card">
              <div className="card-header">
                <h4>{report.month}</h4>
                <span className={`net-amount ${report.net >= 0 ? 'positive' : 'negative'}`}>
                  ${report.net.toFixed(2)}
                </span>
              </div>
              <div className="card-body">
                <div className="stat-item">
                  <span>Income</span>
                  <span className="positive">+${report.income.toFixed(2)}</span>
                </div>
                <div className="stat-item">
                  <span>Expenses</span>
                  <span className="negative">-${report.expenses.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interest Reports */}
      <div className="report-section">
        <div className="section-header">
          <h3><FaMoneyBillWave /> Interest Reports</h3>
          <div className="export-options">
            <button className="export-btn"><FaFilePdf /> PDF</button>
            <button className="export-btn"><FaFileCsv /> CSV</button>
          </div>
        </div>
        
        <div className="report-table">
          <table>
            <thead>
              <tr>
                <th>Account</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Period</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {interestReports.map(report => (
                <tr key={report.id}>
                  <td>{report.account}</td>
                  <td>
                    <span className={`type-badge ${report.type.toLowerCase()}`}>
                      {report.type}
                    </span>
                  </td>
                  <td className={report.type === 'Earned' ? 'positive' : 'negative'}>
                    {report.type === 'Earned' ? '+' : '-'}${report.amount.toFixed(2)}
                  </td>
                  <td>{report.period}</td>
                  <td>
                    <button className="view-btn">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Loan Statements */}
      <div className="report-section">
        <div className="section-header">
          <h3>Loan Statements</h3>
          <div className="export-options">
            <button className="export-btn"><FaFilePdf /> PDF</button>
          </div>
        </div>
        
        <div className="loan-cards">
          {loanStatements.map(loan => (
            <div key={loan.id} className="loan-card">
              <div className="loan-header">
                <h4>Loan #{loan.loanId}</h4>
                <span className="balance">${loan.balance.toFixed(2)}</span>
              </div>
              <div className="loan-details">
                <p>Next Payment: {new Date(loan.nextPayment).toLocaleDateString()}</p>
                <button className="full-statement-btn">Full Statement</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}