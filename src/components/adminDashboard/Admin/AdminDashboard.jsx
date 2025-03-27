import React, { useState } from "react";
import { FaTachometerAlt, FaExchangeAlt, FaUsers, FaLock, FaSignOutAlt, FaChartBar, FaMoneyCheckAlt, FaCalculator } from "react-icons/fa";
import './AdminDash.css';
import SideBar from "../../SideBar/SideBar";
import Data from "../../data/modalsData/data.json";
import DashboardContent from '../pagesAdmin/DashBoard';
import Transaction from '../pagesAdmin/Transaction';
import CostumerManagement from '../pagesAdmin/CostumerManagement';
import AccountManagement from '../pagesAdmin/AccountManagement';
import LoanManagement from '../pagesAdmin/LoanManagement';
import InterestManagement from "../pagesAdmin/InterestManagement";
import ReportManagement from "../pagesAdmin/ReportManagement";

const iconArray = { FaTachometerAlt, FaExchangeAlt, FaUsers, FaLock, FaSignOutAlt, FaChartBar, FaMoneyCheckAlt, FaCalculator };

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Enhance nav items with click handlers
  const navItems = Data.admin.map(item => item)

  return (
    <div className="admin-dashboard">
      <SideBar 
        navItems={navItems}
        iconArray={iconArray}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />

      <main className="dashboard-content">
        {activeTab === "Dashboard" && <DashboardContent />} 
        {activeTab === "Transactions" && <Transaction />}
        {activeTab === "Customer Management" && <CostumerManagement />}
        {activeTab === "Employee Management" && <EmployeeManagement />}
        {activeTab === "Account Management" && <AccountManagement />}
        {activeTab === "Loan Management" && <LoanManagement />}
        {activeTab === "Interest & Fees" && <InterestManagement />}
        {activeTab === "Reports & Statements" && <ReportManagement />}
      </main>
    </div>
  );
}