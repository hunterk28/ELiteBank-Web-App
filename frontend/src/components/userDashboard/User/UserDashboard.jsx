import React from "react";
import { FaTachometerAlt, FaExchangeAlt,  FaLock, FaSignOutAlt, FaChartBar, FaMoneyCheckAlt, FaQuestionCircle, FaCog, FaEllipsisH} from "react-icons/fa";

import Account from "../pagesUser/Account";
import Transaction from "../pagesUser/Transaction"
import Report from "../pagesUser/Report";
import Notifications from "../pagesUser/Notifications";
import Loan from "../pagesUser/Loan";
import Other from "../pagesUser/Others";
import Settings from "../pagesUser/Settings"
import HelpSupport from "../pagesUser/HelpSupport";
import SideBar from "../../SideBar/SideBar";
import Data from "../../data/modalsData/data.json";


const iconArray = { FaTachometerAlt, FaExchangeAlt, FaChartBar, FaLock, FaMoneyCheckAlt, FaEllipsisH, FaCog, FaQuestionCircle };

export default function UserDashboard() {

    const [activeTab, setActiveTab] = React.useState("Account");

    const navItems = Data.user.map(item => item)

    return (

    <div className="user-dashboard">
        <SideBar 
            navItems={navItems}
            iconArray={iconArray}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
        />

            <main className="dashboard-content">
                {activeTab === "Account" && <Account />} 
                {activeTab === "Transactions" && <Transaction />}
                {activeTab === "Reports & Statements" && <Report />}
                {activeTab === "Notifications" && <Notifications />}
                {activeTab === "Loan" && <Loan />}
                {activeTab === "Others" && <Other />}
                {activeTab === "Settings" && <Settings />}
                {activeTab === "Help" && <HelpSupport />}
            </main> 
    </div>          
    );
}
