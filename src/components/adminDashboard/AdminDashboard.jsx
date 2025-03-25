import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { FaTachometerAlt, FaExchangeAlt, FaCogs, FaUsers, FaFileAlt, FaLock, FaSignOutAlt, FaChartBar, FaMoneyCheckAlt, FaCalculator } from "react-icons/fa";
import "./AdminDash.css";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        navigate("/"); // Redirect to the home page
    };

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <img src="/bankLogo.png" alt="Elite Bank" />
                    <h2><span className="elite">ELITE</span> BANK</h2>
                </div>
                <nav>
                    <ul>
                        <li className={activeTab === "Dashboard" ? "active" : ""} onClick={() => setActiveTab("Dashboard")}>
                            <FaTachometerAlt /> Dashboard
                        </li>
                        <li className={activeTab === "Transactions" ? "active" : ""} onClick={() => setActiveTab("Transactions")}>
                            <FaExchangeAlt /> Transactions
                        </li>
                        <li className={activeTab === "System Settings" ? "active" : ""} onClick={() => setActiveTab("System Settings")}>
                            <FaCogs /> System Settings
                        </li>
                        <li className={activeTab === "User Management" ? "active" : ""} onClick={() => setActiveTab("User Management")}>
                            <FaUsers /> User Management
                        </li>
                        <li className={activeTab === "Audit Logs" ? "active" : ""} onClick={() => setActiveTab("Audit Logs")}>
                            <FaFileAlt /> Audit Logs
                        </li>
                        <li className={activeTab === "Account Controls" ? "active" : ""} onClick={() => setActiveTab("Account Controls")}>
                            <FaLock /> Account Controls
                        </li>
                        <li className={activeTab === "Loans" ? "active" : ""} onClick={() => setActiveTab("Loans")}>
                            <FaMoneyCheckAlt /> Loan Management
                        </li>
                        <li className={activeTab === "Interest & Fees" ? "active" : ""} onClick={() => setActiveTab("Interest & Fees")}>
                            <FaCalculator /> Interest & Fees
                        </li>
                        <li className={activeTab === "Reports & Statements" ? "active" : ""} onClick={() => setActiveTab("Reports & Statements")}>
                            <FaChartBar /> Reports & Statements
                        </li>
                    </ul>
                </nav>
                <div className="logout" onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-content">
                <h1>Welcome Admin</h1>
                <p>Currently Viewing: <strong>{activeTab}</strong></p>
                <div className="content-box">
                    {activeTab === "Dashboard" && <p>Overview of bank activities and statistics.</p>}
                    {activeTab === "Transactions" && <p>Process deposits, withdrawals, and fund transfers.</p>}
                    {activeTab === "System Settings" && <p>Modify bank settings and security configurations.</p>}
                    {activeTab === "User Management" && <p>Manage customer accounts and staff roles.</p>}
                    {activeTab === "Audit Logs" && <p>View logs of all actions performed in the system.</p>}
                    {activeTab === "Account Controls" && <p>Approve or suspend accounts based on rules.</p>}
                    {activeTab === "Loans" && <p>Manage loan applications and repayment tracking.</p>}
                    {activeTab === "Interest & Fees" && <p>Calculate interest on loans and deposits.</p>}
                    {activeTab === "Reports & Statements" && <p>Generate financial statements and reports.</p>}
                </div>
            </main>
        </div>
    );
}
