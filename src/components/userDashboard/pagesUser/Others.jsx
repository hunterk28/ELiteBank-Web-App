import React from 'react';
import { 
  FaGift, 
  FaHandshake, 
  FaPiggyBank, 
  FaCreditCard,
  FaShieldAlt,
  FaChartPie,
  FaUserFriends
} from 'react-icons/fa';
import './Others.css';

export default function Others() {
  // Sample data (static for frontend)
  const referralProgram = {
    title: "Invite Friends, Earn Rewards",
    description: "Get $50 for every friend who joins EliteBank and opens an account with at least $500 deposit.",
    steps: [
      "Share your unique referral link",
      "Friend opens a new account",
      "You both get rewarded"
    ],
    reward: "$50 per successful referral"
  };

  const specialOffers = [
    {
      id: 1,
      title: "Premium Credit Card",
      description: "0% APR for first 12 months + 50,000 bonus points",
      icon: <FaCreditCard />,
      category: "cards"
    },
    {
      id: 2,
      title: "Wealth Management",
      description: "Free financial planning session for balances over $25k",
      icon: <FaChartPie />,
      category: "services"
    },
    {
      id: 3,
      title: "Enhanced Security",
      description: "Free identity protection for 1 year with new accounts",
      icon: <FaShieldAlt />,
      category: "security"
    }
  ];

  const additionalServices = [
    {
      id: 1,
      title: "Investment Accounts",
      description: "Start investing with as little as $100",
      icon: <FaPiggyBank />
    },
    {
      id: 2,
      title: "Insurance Products",
      description: "Life, home, and auto insurance options",
      icon: <FaShieldAlt />
    },
    {
      id: 3,
      title: "Business Banking",
      description: "Special accounts for entrepreneurs",
      icon: <FaUserFriends />
    }
  ];

  return (
    <div className="others-container">
      <div className="others-header">
        <h2>Other Services</h2>
        <p className="subtitle">Explore additional benefits from EliteBank</p>
      </div>

      {/* Referral Program */}
      <div className="section referral-section">
        <div className="section-header">
          <FaUserFriends className="section-icon" />
          <h3>Referral Program</h3>
        </div>
        <div className="referral-card">
          <div className="referral-content">
            <h4>{referralProgram.title}</h4>
            <p>{referralProgram.description}</p>
            <ul className="steps-list">
              {referralProgram.steps.map((step, index) => (
                <li key={index}>
                  <span className="step-number">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ul>
            <div className="reward-badge">
              <FaGift /> {referralProgram.reward}
            </div>
          </div>
          <div className="referral-actions">
            <button className="primary-btn">Share Referral Link</button>
            <button className="secondary-btn">View Terms</button>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="section offers-section">
        <div className="section-header">
          <FaGift className="section-icon" />
          <h3>Special Offers</h3>
        </div>
        <div className="offers-grid">
          {specialOffers.map(offer => (
            <div key={offer.id} className="offer-card">
              <div className="offer-icon" style={{ color: '#d44a4a' }}>
                {offer.icon}
              </div>
              <div className="offer-content">
                <h4>{offer.title}</h4>
                <p>{offer.description}</p>
                <button className="offer-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="section services-section">
        <div className="section-header">
          <FaHandshake className="section-icon" />
          <h3>Additional Financial Services</h3>
        </div>
        <div className="services-grid">
          {additionalServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <button className="service-btn">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}