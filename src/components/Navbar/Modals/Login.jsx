import "../pagesNavbar/Pages.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AppContent from "../../context/AppContext";
import { toast } from 'react-toastify'
import axios from "axios";

export default function Login({ closeModal, openSignUp }) {
  const navigate = useNavigate();

  const { backendUrl,setIsLoggedin,getUserData } = useContext(AppContent);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        
        axios.defaults.withCredentials = true;  // cookies
        const { data } = await axios.post(backendUrl + '/api/auth/login', {
            email,
            password
        });
        if (data.success) {
            setIsLoggedin(true);
            getUserData();
            navigate('/user-dashboard');
        } else {
            toast.error(data.message);  // Data message on failure
        }
    } catch (error) {
      toast.error(error.message);
  }
}

  const handleForgotPassword = () => {
    closeModal();
    navigate("/reset-password");
  };

  return (
    <div className="modal-overlay-login" onClick={closeModal}>
      <form
        onSubmit={handleSubmit}
        className="modal-content-login"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Login</h2>
        <div className="input-field">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            required
          />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </p>
        </div>
        <button className="login-submit">Login</button>
        <p className="signup-text">
          Don't have an account?{" "}
          <span className="signup-link" onClick={openSignUp}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
}
