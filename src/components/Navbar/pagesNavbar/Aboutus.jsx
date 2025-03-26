import './Pages.css';
import Card from '../../common/Card'

import aboutus from '../../data/pagesNavbarData/data.json'

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
                    { aboutus.about.map((about) =>
                        <div key={about.id} className="about-card">
                            <Card
                                title={about.title}
                                description={about.description}
                            />
                        </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}
