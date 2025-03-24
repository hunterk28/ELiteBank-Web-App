import './Pages.css';

export default function AboutUs() {
    return (
        <section className="about-us">
            <div className="about-container">
                <h2 className="about-title">About EliteBank</h2>
                <p className="about-description">
                    EliteBank is a modern banking solution designed to automate financial operations 
                    while ensuring security and efficiency. Our mission is to provide seamless banking 
                    experiences with advanced technology.
                </p>

                <div className="about-features">
                    <div className="about-card">
                        <h3>Our Mission</h3>
                        <p>To revolutionize banking with digital solutions that are secure, user-friendly, and efficient.</p>
                    </div>
                    <div className="about-card">
                        <h3>Our Vision</h3>
                        <p>To become the most trusted banking platform by integrating cutting-edge technology with financial services.</p>
                    </div>
                    <div className="about-card">
                        <h3>Why Choose Us?</h3>
                        <p>We offer secure transactions, fraud detection, automated loan processing, and real-time account management.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
