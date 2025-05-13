import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState,useContext } from "react";
import AppContent from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function SideBar({
    navItems,
    iconArray,
    activeTab,
    setActiveTab,
}) {
    const navigate = useNavigate();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const { userData, backendUrl, setIsLoggedin, setUserData } =
        useContext(AppContent);

    const handleLogout = async () => {
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.post(backendUrl + "/api/auth/logout");

            if (data.success) {
                setIsLoggedin(false);
                setUserData(false);
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <button
                className="menu-toggle"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                {isMobileOpen ? <FaTimes /> : <FaBars />}
            </button>
            <aside className={`sidebar ${isMobileOpen ? "open" : ""}`}>
                <div className="logo">
                    <img src="/bankLogo.png" alt="Elite Bank" />
                    <h2>
                        <span className="elite">ELITE</span> BANK
                    </h2>
                </div>
                <nav className="Nav">
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
