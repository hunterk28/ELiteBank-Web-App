import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaExchangeAlt, FaCogs, FaUsers, FaLock, FaSignOutAlt, FaChartBar, FaMoneyCheckAlt, FaCalculator } from "react-icons/fa";
import "./AdminDash.css";
import DashboardContent from './pages/DashBoard';
import Transaction from './pages/Transaction';
import CostumerManagement from './pages/CostumerManagement';
import AccountManagement from './pages/AccountManagement';
import LoanManagement from './pages/LoanManagement';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="admin-dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <img src="/bankLogo.png" alt="Elite Bank" />
                    <h2><span className="elite">ELITE</span> BANK</h2>
                </div>
                <nav className="adminNav">
                    <ul>
                        <li className={activeTab === "Dashboard" ? "active" : ""} onClick={() => setActiveTab("Dashboard")}>
                            <FaTachometerAlt /> Dashboard
                        </li>
                        <li className={activeTab === "Transactions" ? "active" : ""} onClick={() => setActiveTab("Transactions")}>
                            <FaExchangeAlt /> Transactions
                        </li>
                        <li className={activeTab === "User Management" ? "active" : ""} onClick={() => setActiveTab("User Management")}>
                            <FaUsers /> Costumer Management
                        </li>
                        <li className={activeTab === "Account Controls" ? "active" : ""} onClick={() => setActiveTab("Account Controls")}>
                            <FaLock /> Account Management
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
                {activeTab === "Dashboard" && <DashboardContent />} 
                {activeTab === "Transactions" && <Transaction />}
                {activeTab === "User Management" && <CostumerManagement />}
                {activeTab === "Account Controls" && <AccountManagement />}
                {activeTab === "Loans" && <LoanManagement />}
                {activeTab === "Interest & Fees" && <p>Calculate interest on loans and deposits.</p>}
                {activeTab === "Reports & Statements" && <p>Generate financial statements and reports.</p>}
            </main>
        </div>
    );
}
