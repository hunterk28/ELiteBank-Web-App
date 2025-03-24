import "./Pages.css";

export default function Security() {
    return (
        <div className="security-page">
            {/* Hero Section */}
            <div className="security-hero">
                <h1 className="security-title">Your Security is Our Priority</h1>
                <p className="security-subtitle">
                    We implement cutting-edge technologies to ensure your banking experience is secure and reliable.
                </p>
            </div>

            {/* Security Features Section */}
            <div className="security-features">
                <div className="security-feature">
                    <h3>End-to-End Encryption</h3>
                    <p>All transactions are encrypted to ensure your sensitive data is always protected.</p>
                </div>
                <div className="security-feature">
                    <h3>Multi-Factor Authentication</h3>
                    <p>Additional security layers to prevent unauthorized access to your account.</p>
                </div>
                <div className="security-feature">
                    <h3>Fraud Detection System</h3>
                    <p>Our AI-powered fraud detection monitors unusual activity to safeguard your funds.</p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="security-faq">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h4>How does EliteBank protect my data?</h4>
                    <p>We use advanced encryption and secure authentication protocols to protect all user data.</p>
                </div>
                <div className="faq-item">
                    <h4>What should I do if I suspect fraud?</h4>
                    <p>Immediately contact our support team and change your credentials to secure your account.</p>
                </div>
                <div className="faq-item">
                    <h4>Can I enable additional security settings?</h4>
                    <p>Yes, you can enable multi-factor authentication and set up alerts for suspicious activity.</p>
                </div>
            </div>
        </div>
    );
}
