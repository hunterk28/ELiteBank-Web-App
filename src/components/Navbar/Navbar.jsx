import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Modals/Login";
import SignUp from "./Modals/Signup";
import Admin from "./Modals/Admin";
import "./Navbar.css";

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  const openLoginModal = (event) => {
    event.preventDefault();
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
    setIsAdminOpen(false);
  };

  const openSignUpModal = (event) => {
    event.preventDefault();
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
    setIsAdminOpen(false);
  };

  const openAdminModal = (event) => {
    event.preventDefault();
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsAdminOpen(true);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsAdminOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="../../../src/assets/images/logotriotech.png" alt="logoTrioTech" className="logo" />
        <div className="text">
          <h1 className="top">Elite</h1>
          <h1 className="bottom">Bank</h1>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar - Toggle Class Based on isMenuOpen */}
      <nav className={`nav-container ${isMenuOpen ? "active" : ""}`}>
        <ul className="first-list">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/security" onClick={() => setIsMenuOpen(false)}>Security</Link></li>
          <li><a href="#" onClick={(e) => { openAdminModal(e); setIsMenuOpen(false); }}>Admin</a></li>
        </ul>
      </nav>

      <div className="auth-container">
        <ul className="second-list">
          <li><a href="#" onClick={(e) => { openLoginModal(e); setIsMenuOpen(false); }}>Login</a></li>
          <li><a href="#" onClick={(e) => { openSignUpModal(e); setIsMenuOpen(false); }}>Sign Up</a></li>
        </ul>
      </div>

      {/* Render Modals */}
      {isLoginOpen && <Login closeModal={closeModals} openSignUp={openSignUpModal} />}
      {isSignUpOpen && <SignUp closeModal={closeModals} openLogin={openLoginModal} />}
      {isAdminOpen && <Admin closeModal={closeModals} />}
    </header>
  );
}
