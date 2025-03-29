import "../pagesNavbar/Pages.css";
import { useNavigate } from "react-router-dom"; 

export default function Login({ closeModal, openSignUp }) {

    const navigate = useNavigate();

    function handleSubmit (FormData) {
        closeModal();
        navigate("/user-dashboard");
    }

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <form action={handleSubmit} className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Login</h2>
                <div className="input-field">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button className="login-submit">Login</button>
                <p className="signup-text">
                    Don't have an account? <span className="signup-link" onClick={openSignUp}>Sign Up</span>
                </p>
            </form>
        </div>
    );
}
