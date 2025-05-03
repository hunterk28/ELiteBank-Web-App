import "../pagesNavbar/Pages.css";
import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContent from "../../context/AppContext";
import axios from 'axios'
import { toast } from 'react-toastify'

export default function SignUp({ closeModal, openLogin }) {

    const navigate = useNavigate();

    const [firstname, setfirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [phoneno, setPhoneNo] = useState("");
    const [birth, setBirth] = useState("");
    const [cnic, setCnic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            
            axios.defaults.withCredentials = true;  // cookies
            const { data } = await axios.post(backendUrl + '/api/auth/register', {
                firstname,
                lastname,
                phoneno,
                email,
                password,
                province,
                address,
                birth,
                cnic
            });
            if (data.success) {
                setIsLoggedin(true);
                getUserData()
                closeModal();
                navigate('/');
            } else {
                toast.error(data.message);  // Data message on failure
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An unexpected error occurred';
            toast.error(errorMessage);
          }
    }

    return (
        <div className="signup-modal-overlay" onClick={closeModal}>
            <form onSubmit={handleSubmit} className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="signup-close-btn" onClick={closeModal}>&times;</button>
                <h2 className="signup-heading">Sign Up</h2>
                <p className="page-subtitle">Please enter your details</p>
                <div className="signup-form grid-layout">
                    {/* Form fields */}
                    <div className="signup-input-field">
                        <label>First Name</label>
                        <input onChange={e => setfirstName(e.target.value)} value={firstname} type="text" placeholder="John" required />
                    </div>
                    <div className="signup-input-field">
                        <label>Last Name</label>
                        <input onChange={e => setlastName(e.target.value)} value={lastname} type="text" placeholder="Doe" required />
                    </div>
                    <div className="signup-input-field full-width">
                        <label>Address</label>
                        <input onChange={e => setAddress(e.target.value)} value={address} type="text" placeholder="123 Main St, City, Country" />
                    </div>
                    <div className="signup-input-field">
                        <label>Province</label>
                        <input onChange={e => setProvince(e.target.value)} value={province} type="text" placeholder="Punjab" />
                    </div>
                    <div className="signup-input-field">
                        <label>Phone No</label>
                        <input onChange={e => setPhoneNo(e.target.value)} value={phoneno} type="text" placeholder="+1 (555) 123-4567" required />
                    </div>
                    <div className="signup-input-field">
                        <label>Date of birth</label>
                        <input onChange={e => setBirth(e.target.value)} value={birth} type="date" />
                    </div>
                    <div className="signup-input-field">
                        <label>CNIC</label>
                        <input onChange={e => setCnic(e.target.value)} value={cnic} type="text" placeholder="42101-1234567-8" />
                    </div>
                    <div className="signup-input-field full-width">
                        <label>Email</label>
                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="example@email.com" required />
                    </div>
                    <div className="signup-input-field full-width">
                        <label>Password</label>
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="********" required />
                    </div>
                    <button className="signup-submit">Sign up</button>
                    <p className="signup-text">
                        Already have an account? <span className="signup-link" onClick={openLogin}>Log in</span>
                    </p>
                </div>
            </form>
        </div>
    );
}

