import "./Pages.css";
import data from '../../data/pagesNavbarData/data.json'
import Card from '../../common/Card'

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
                {
                    data.security.map((secure) =>
                        <div key={secure.id} className="security-feature">
                            <Card 
                                title={secure.title}
                                description={secure.description}
                            />
                        </div>
                    )
                }
            </div>

            {/* FAQ Section */}
            <div className="security-faq">
                <h2>Frequently Asked Questions</h2>
                {
                    data.faq.map((faq) =>
                        <div key={faq.id} className="faq-item">
                            <Card
                                title={faq.title}
                                description={faq.description}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
}
