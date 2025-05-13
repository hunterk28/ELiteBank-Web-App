import React, { useState } from 'react';
import { 
  FaQuestionCircle,
  FaHeadset,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import './HelpSupport.css';
import Data from '../../data/pagesUserData/data.json'

export default function HelpSupport() {
  const [activeTab, setActiveTab] = useState('faqs');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const iconComponents = {
  FaQuestionCircle,
  FaHeadset,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaChevronDown,
  FaChevronUp
  }

  // Sample FAQ data
  const faqs = Data.faqs.map(e=>e);

  // Sample contact options
  const contactOptions = Data.contactOptions.map(e=>e);

  // Sample documents
  const documents = Data.documents.map(e=>e);

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="help-container">
      <div className="help-header">
        <h2><FaQuestionCircle /> Help & Support</h2>
        <p className="subtitle">Find answers or get in touch with our team</p>
      </div>

      <div className="help-tabs">
        <button 
          className={`tab-btn ${activeTab === 'faqs' ? 'active' : ''}`}
          onClick={() => setActiveTab('faqs')}
        >
          FAQs
        </button>
        <button 
          className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact Support
        </button>
        <button 
          className={`tab-btn ${activeTab === 'policies' ? 'active' : ''}`}
          onClick={() => setActiveTab('policies')}
        >
          Policies & Terms
        </button>
      </div>

      {activeTab === 'faqs' && (
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map(faq => (
              <div 
                key={faq.id} 
                className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h4>{faq.question}</h4>
                  {expandedFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {expandedFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="contact-section">
          <h3>Contact Options</h3>
          <div className="contact-options">
            {contactOptions.map(option => {
              const Icon = iconComponents[option.icon]
            return(
              <div key={option.id} className="contact-card">
                <div className="contact-icon" style={{ color: '#d44a4a' }}>
                  <Icon />
                </div>
                <div className="contact-info">
                  <h4>{option.title}</h4>
                  <p>{option.description}</p>
                  <span className="availability">Available: {option.availability}</span>
                </div>
                <button className="contact-btn">
                  {option.type === 'liveChat' ? 'Start Chat' : 
                   option.type === 'email' ? 'Send Email' : 'Call Now'}
                </button>
              </div>
            )})}
          </div>
        </div>
      )}

      {activeTab === 'policies' && (
        <div className="policies-section">
          <h3>Bank Policies & Terms</h3>
          <div className="documents-grid">
            {documents.map(doc => {
              const Icon = iconComponents[doc.icon] 
            return(
              <div key={doc.id} className="document-card">
                <div className="doc-icon">
                  <Icon />
                </div>
                <div className="doc-info">
                  <h4>{doc.title}</h4>
                  <p>{doc.description}</p>
                </div>
                <button className="view-btn">View Document</button>
              </div>
            )})}
          </div>
        </div>
      )}
    </div>
  );
}