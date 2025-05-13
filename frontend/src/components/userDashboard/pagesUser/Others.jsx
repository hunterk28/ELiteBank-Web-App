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
import Data from '../../data/pagesUserData/data.json'

export default function Others() {
  // Sample data (static for frontend)

  const iconComponents = {
  FaGift, 
  FaHandshake, 
  FaPiggyBank, 
  FaCreditCard,
  FaShieldAlt,
  FaChartPie,
  FaUserFriends
  }

  const referralProgram = Data.referralProgram;

  const specialOffers = Data.specialOffers.map(e=>e);

  const additionalServices = Data.additionalServices.map(e=>e);

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
          {specialOffers.map(offer => {
            const Icon = iconComponents[offer.icon]
          return(
            <div key={offer.id} className="offer-card">
              <div className="offer-icon" style={{ color: '#d44a4a' }}>
                <Icon />
              </div>
              <div className="offer-content">
                <h4>{offer.title}</h4>
                <p>{offer.description}</p>
                <button className="offer-btn">Learn More</button>
              </div>
            </div>
          )})}
        </div>
      </div>

      {/* Additional Services */}
      <div className="section services-section">
        <div className="section-header">
          <FaHandshake className="section-icon" />
          <h3>Additional Financial Services</h3>
        </div>
        <div className="services-grid">
          {additionalServices.map(service => {
            const Icon = iconComponents[service.icon]
          return(
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <Icon />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <button className="service-btn">Explore</button>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
}