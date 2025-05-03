import { useNavigate } from "react-router-dom"; 
import "../pagesNavbar/Pages.css";
import { useContext,useState } from "react";
import AppContent from "../../context/AppContext";
import { toast } from 'react-toastify'
import axios from "axios";

export default function Login({ closeModal }) {

    const navigate = useNavigate();
    const { backendUrl,setIsLoggedin } = useContext(AppContent);

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            
            axios.defaults.withCredentials = true;  // cookies
            const { data } = await axios.post(backendUrl + '/api/auth/admin-login', {
                username,
                password
            });
            if (data.success) {
                setIsLoggedin(true);
                navigate('/admin-dashboard');
            } else {
                toast.error(data.message);  // Data message on failure
            }
        } catch (error) {
          const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
          toast.error(errorMessage);
        }
    }

    return (
        <div className="modal-overlay-login" onClick={closeModal}>
            <form onSubmit={handleSubmit} className="modal-content-login" onClick={(e) => e.stopPropagation()}>
                <h2>Admin Login</h2>
                <div className="input-field">
                    <label>Username</label>
                    <input 
                    onChange={e=>setUsername(e.target.value)} 
                    value={username}
                    type="text" name="admin" required/>
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input 
                    onChange={e=>setPassword(e.target.value)} 
                    value={password}
                    type="password" name="admin-password" required/>
                </div>
                <button className="login-submit">Login</button>
            </form>
        </div>
    );
}
