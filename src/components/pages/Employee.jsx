import { useNavigate } from "react-router-dom"; 
import "./Pages.css";

export default function Login({ closeModal }) {

    const navigate = useNavigate();

    function handleSubmit () {
        closeModal();
        navigate("/employee-dashboard");
    }


    return (
        <div className="modal-overlay" onClick={closeModal}>
            <form action={handleSubmit} className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Employee Login</h2>
                <div className="input-field">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button className="login-submit">Login</button>
            </form>
        </div>
    );
}
