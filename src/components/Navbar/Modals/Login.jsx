import "../pagesNavbar/Pages.css";

export default function Login({ closeModal, openSignUp }) {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <form className="modal-content" onClick={(e) => e.stopPropagation()}>
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
