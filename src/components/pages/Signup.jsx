import "./Pages.css";

export default function SignUp({ closeModal, openLogin }) {
    return (
        <div className="signup-modal-overlay" onClick={closeModal}>
            <form className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="signup-close-btn" onClick={closeModal}>&times;</button>
                <h2 className="signup-heading">Sign Up</h2>
                <p className="page-subtitle">Please enter your details</p>
                <div className="signup-form grid-layout">
                    <div className="signup-input-field">
                        <label>First Name</label>
                        <input type="text" placeholder="John" />
                    </div>
                    <div className="signup-input-field">
                        <label>Last Name</label>
                        <input type="text" placeholder="Doe" />
                    </div>
                    <div className="signup-input-field full-width">
                        <label>Address</label>
                        <input type="text" placeholder="123 Main St, City, Country" />
                    </div>
                    <div className="signup-input-field">
                        <label>Province</label>
                        <input type="text" placeholder="Punjab" />
                    </div>
                    <div className="signup-input-field">
                        <label>Postal Code</label>
                        <input type="text" placeholder="54000" />
                    </div>
                    <div className="signup-input-field">
                        <label>Date of birth</label>
                        <input type="date" />
                    </div>
                    <div className="signup-input-field">
                        <label>CNIC</label>
                        <input type="text" placeholder="42101-1234567-8" />
                    </div>
                    <div className="signup-input-field full-width">
                        <label>Email</label>
                        <input type="email" placeholder="example@email.com" />
                    </div>
                    <div className="signup-input-field full-width">
                        <label>Password</label>
                        <input type="password" placeholder="********" />
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
