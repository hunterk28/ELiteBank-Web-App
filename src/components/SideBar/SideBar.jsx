import './SideBar.css';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

export default function SideBar ({navItems, iconArray, activeTab, setActiveTab}) {
    const navigate = useNavigate();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const handleLogout = () => {
        navigate("/");
    };

    return (
        <>
            <button className="menu-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                {isMobileOpen ? <FaTimes /> : <FaBars />}
            </button>
            <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
                <div className="logo">
                    <img src="/bankLogo.png" alt="Elite Bank" />
                    <h2><span className="elite">ELITE</span> BANK</h2>
                </div>
                <nav className="adminNav">
                    <ul>
                        {navItems?.map((item) => {
                            const IconComponent = iconArray[item.icon];
                            return (
                                <li
                                    key={item.id}
                                    className={activeTab === item.page ? "active" : ""}
                                    onClick={() => {
                                        setActiveTab(item.page);
                                        setIsMobileOpen(false); // Close sidebar on selection
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
    );
}
