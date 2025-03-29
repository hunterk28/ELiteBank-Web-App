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

export default function HelpSupport() {
  const [activeTab, setActiveTab] = useState('faqs');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "You can reset your password by going to Settings > Password & Security. Click on 'Forgot Password' and follow the instructions sent to your registered email."
    },
    {
      id: 2,
      question: "What are your business hours?",
      answer: "Our customer support is available 24/7. Branch services are available Monday to Friday from 9:00 AM to 5:00 PM."
    },
    {
      id: 3,
      question: "How do I link an external bank account?",
      answer: "Navigate to Settings > Linked Accounts and click 'Add New Account'. You'll need to provide the account details and verify the account through micro-deposits."
    },
    {
      id: 4,
      question: "What should I do if I suspect fraudulent activity?",
      answer: "Immediately contact our 24/7 fraud hotline at 1-800-FRAUD-ALERT and freeze your account through the app under Security Settings."
    }
  ];

  // Sample contact options
  const contactOptions = [
    {
      id: 1,
      type: 'liveChat',
      title: 'Live Chat',
      description: 'Instant messaging with a support representative',
      icon: <FaHeadset />,
      availability: '24/7'
    },
    {
      id: 2,
      type: 'email',
      title: 'Email Support',
      description: 'Get a response within 24 hours',
      icon: <FaEnvelope />,
      availability: '24/7'
    },
    {
      id: 3,
      type: 'phone',
      title: 'Phone Support',
      description: 'Speak directly with a customer service agent',
      icon: <FaPhone />,
      availability: 'Mon-Fri, 8AM-8PM EST'
    }
  ];

  // Sample documents
  const documents = [
    {
      id: 1,
      title: 'Privacy Policy',
      description: 'How we collect and use your information',
      icon: <FaFileAlt />
    },
    {
      id: 2,
      title: 'Terms of Service',
      description: 'Agreement between you and EliteBank',
      icon: <FaFileAlt />
    },
    {
      id: 3,
      title: 'Fee Schedule',
      description: 'Detailed breakdown of all account fees',
      icon: <FaFileAlt />
    }
  ];

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
            {contactOptions.map(option => (
              <div key={option.id} className="contact-card">
                <div className="contact-icon" style={{ color: '#d44a4a' }}>
                  {option.icon}
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
            ))}
          </div>
        </div>
      )}

      {activeTab === 'policies' && (
        <div className="policies-section">
          <h3>Bank Policies & Terms</h3>
          <div className="documents-grid">
            {documents.map(doc => (
              <div key={doc.id} className="document-card">
                <div className="doc-icon">
                  {doc.icon}
                </div>
                <div className="doc-info">
                  <h4>{doc.title}</h4>
                  <p>{doc.description}</p>
                </div>
                <button className="view-btn">View Document</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}