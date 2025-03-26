import { useNavigate } from "react-router-dom"; 
import "../pagesNavbar/Pages.css";

export default function Login({ closeModal }) {

    const navigate = useNavigate();

    function handleSubmit (FormData) {
        closeModal();
        const admin = FormData.get("admin");
        const password = FormData.get("admin-password");
        navigate("/admin-dashboard");
    }


    return (
        <div className="modal-overlay" onClick={closeModal}>
            <form action={handleSubmit} className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Admin Login</h2>
                <div className="input-field">
                    <label>Username</label>
                    <input type="text" name="admin"/>
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" name="admin-password"/>
                </div>
                <button className="login-submit">Login</button>
            </form>
        </div>
    );
}
