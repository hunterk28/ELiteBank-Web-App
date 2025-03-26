import "./Pages.css";
import Card from '../../common/Card'

import {
    FaUser, // Customer
    FaPiggyBank, // Account
    FaExchangeAlt, // Transaction
    FaHandHoldingUsd, // Loan
    FaPercentage, // Interest
    FaFileAlt, // Reports
    FaShieldAlt, // Security
  } from "react-icons/fa";

  const iconComponents = {
    FaUser,
    FaPiggyBank,
    FaExchangeAlt,
    FaHandHoldingUsd,
    FaPercentage,
    FaFileAlt,
    FaShieldAlt
  };

import features from '../../data/pagesNavbarData/data.json'

export default function Features() {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-grid">
        {features.featuresNavbar.map((feature) => {
            const Icon = iconComponents[feature.icon]
            return(
            <div key={feature.id} className="feature-card">
                <Card 
                    title ={feature.title}
                    icon={Icon}
                    description={feature.description}
                />
            </div>
            );
        })}
      </div>
    </section>
  );
}
