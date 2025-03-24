import "./Pages.css";

export default function Login({ closeModal }) {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Admin Login</h2>
                <div className="input-field">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button className="login-submit">Login</button>
            </div>
        </div>
    );
}
