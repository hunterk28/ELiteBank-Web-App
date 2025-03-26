import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Admin from './pages/Admin'
import Employee from './pages/Employee'
import "./Navbar.css";

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);

  const openLoginModal = (event) => {
    event.preventDefault();
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
    setIsAdminOpen(false);
    setIsEmployeeOpen(false);
  };

  const openSignUpModal = (event) => {
    event.preventDefault();
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
    setIsAdminOpen(false);
    setIsEmployeeOpen(false);
  };

  const openAdminModal = (event) => {
    event.preventDefault();
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsAdminOpen(true);
  };

  const openEmployeeModal = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsAdminOpen(false);
    setIsEmployeeOpen(true);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsAdminOpen(false);
    setIsEmployeeOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="../src/images/logotriotech.png" alt="logoTrioTech" className="logo" />
        <div className="text">
          <h1 className="top">Elite</h1>
          <h1 className="bottom">Bank</h1>
        </div>
      </div>

      <nav className="nav-container">
        <ul className="first-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/security">Security</Link></li>
          <li><a href="#" onClick={openAdminModal}>Admin</a></li>
          <li><a href="#" onClick={openEmployeeModal}>Employee</a></li>
        </ul>
      </nav>

      <div className="auth-container">
        <ul className="second-list">
          <li><a href="#" onClick={openLoginModal}>Login</a></li>
          <li><a href="#" onClick={openSignUpModal}>Sign Up</a></li>
        </ul>
      </div>

      {/* Render Modals */}
      {isLoginOpen && <Login closeModal={closeModals} openSignUp={openSignUpModal} />}
      {isSignUpOpen && <SignUp closeModal={closeModals} openLogin={openLoginModal} />}
      {isAdminOpen && <Admin closeModal={closeModals} />}
      {isEmployeeOpen && <Employee closeModal={closeModals} />}
    </header>
  );
}
