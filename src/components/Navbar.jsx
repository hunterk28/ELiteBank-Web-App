import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
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
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>

      <div className="auth-container">
        <ul className="second-list">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    </header>
  );
}
