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
import Data from '../../data/pagesUserData/data.json';
import { jsPDF } from 'jspdf';

export default function Reports() {
  const monthlySummaries = Data.monthlySummaries.map(e => e);
  const interestReports = Data.interestReports.map(e => e);
  const loanStatements = Data.loanStatements.map(e => e);

  // CSV Export function
  const exportToCSV = (data, headers, filename) => {
    const csvRows = [];
    // Add headers
    csvRows.push(headers.join(','));

    // Add data rows
    data.forEach(row => {
      const rowValues = headers.map(header => {
        if (row[header] !== undefined) return row[header];
        return '';
      });
      csvRows.push(rowValues.join(','));
    });

    // Create CSV file and trigger download
    const csvData = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = csvUrl;
    link.download = filename;
    link.click();
  };

  // PDF Export function
  const exportToPDF = (title, content) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(title, 20, 20);
    doc.setFontSize(12);
    doc.text(content, 20, 40);
    doc.save(`${title}.pdf`);
  };

  // Export Monthly Account Summaries to CSV
  const handleMonthlySummaryCSV = () => {
    const headers = ['Month', 'Income', 'Expenses', 'Net Amount'];
    const data = monthlySummaries.map(report => ({
      Month: report.month,
      Income: `$${report.income.toFixed(2)}`,
      Expenses: `$${report.expenses.toFixed(2)}`,
      'Net Amount': `$${report.net.toFixed(2)}`
    }));
    exportToCSV(data, headers, 'Monthly_Summary.csv');
  };

  // Export Interest Reports to CSV
  const handleInterestReportsCSV = () => {
    const headers = ['Account', 'Type', 'Amount', 'Period'];
    const data = interestReports.map(report => ({
      Account: report.account,
      Type: report.type,
      Amount: `$${report.amount.toFixed(2)}`,
      Period: report.period
    }));
    exportToCSV(data, headers, 'Interest_Reports.csv');
  };

  // Export Monthly Account Summaries to PDF
  const handleMonthlySummaryPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Monthly Account Summaries', 20, 20);

    // Loop through monthly summaries and add them to the PDF
    monthlySummaries.forEach((summary, index) => {
      const yPosition = 30 + (index * 20);
      doc.setFontSize(12);
      doc.text(`Month: ${summary.month}`, 20, yPosition);
      doc.text(`Income: $${summary.income.toFixed(2)}`, 20, yPosition + 10);
      doc.text(`Expenses: $${summary.expenses.toFixed(2)}`, 20, yPosition + 20);
      doc.text(`Net: $${summary.net.toFixed(2)}`, 20, yPosition + 30);
    });

    doc.save('Monthly_Summaries.pdf');
  };

  // Export Interest Reports to PDF
  const handleInterestReportsPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Interest Reports', 20, 20);

    // Add table headers
    doc.setFontSize(12);
    doc.text('Account', 20, 30);
    doc.text('Type', 60, 30);
    doc.text('Amount', 100, 30);
    doc.text('Period', 140, 30);

    // Loop through interest reports and add them to the PDF
    interestReports.forEach((report, index) => {
      const yPosition = 40 + (index * 10);
      doc.text(report.account, 20, yPosition);
      doc.text(report.type, 60, yPosition);
      doc.text(`$${report.amount.toFixed(2)}`, 100, yPosition);
      doc.text(report.period, 140, yPosition);
    });

    doc.save('Interest_Reports.pdf');
  };

  // Export Loan Statements to PDF
  const handleLoanStatementsPDF = () => {
    let content = loanStatements.map(loan => `
      Loan ID: ${loan.loanId}
      Balance: $${loan.balance.toFixed(2)}
      Next Payment: ${new Date(loan.nextPayment).toLocaleDateString()}
    `).join('\n\n');
    
    exportToPDF('Loan Statements', content);
  };

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
            <button className="export-btn" onClick={handleMonthlySummaryCSV}><FaFileCsv /> CSV</button>
            <button className="export-btn" onClick={handleMonthlySummaryPDF}><FaFilePdf /> PDF</button>
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
            <button className="export-btn" onClick={handleInterestReportsCSV}><FaFileCsv /> CSV</button>
            <button className="export-btn" onClick={handleInterestReportsPDF}><FaFilePdf /> PDF</button>
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
            <button className="export-btn" onClick={handleLoanStatementsPDF}><FaFilePdf /> PDF</button>
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
