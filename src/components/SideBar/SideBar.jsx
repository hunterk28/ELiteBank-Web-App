import './SideBar.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from "react-icons/fa";


export default function SideBar ({navItems,iconArray,activeTab,setActiveTab}) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
  };
    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <img src="/bankLogo.png" alt="Elite Bank" />
                    <h2><span className="elite">ELITE</span> BANK</h2>
                </div>
                <nav className="adminNav">
                    <ul>
                    {navItems.map((item) => {
                        const IconComponent = iconArray[item.icon];
                        return (
                        <li
                            key={item.id}
                            className={activeTab === item.page ? "active" : ""}
                            onClick={() => {
                            setActiveTab(item.page);
                            }}
                        >
                            <IconComponent /> {item.page}
                        </li>
                        );
                    })}
                    </ul>
                </nav>
                <div className="logout" onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                </div>
            </aside>
        </>
    )
}