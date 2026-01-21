import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaEye,
  FaDatabase,
  FaCookie,
  FaCheckCircle,
  FaInfoCircle
} from 'react-icons/fa';
import './PrivacyPage.css';

const PrivacyPage = () => {
  const privacyFeatures = [
    {
      icon: FaShieldAlt,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.'
    },
    {
      icon: FaLock,
      title: 'Secure Storage',
      description: 'Your data is stored securely using encryption and access controls to ensure confidentiality and integrity.'
    },
    {
      icon: FaUserShield,
      title: 'User Rights',
      description: 'You have the right to access, update, or delete your personal information at any time through your account settings.'
    },
    {
      icon: FaEye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and share your information, providing clear privacy notices.'
    }
  ];

  const dataTypes = [
    {
      icon: FaDatabase,
      title: 'Personal Information',
      items: [
        'Name and contact information',
        'Email address and phone number',
        'Company name and job title',
        'Billing and payment information'
      ]
    },
    {
      icon: FaCookie,
      title: 'Usage Data',
      items: [
        'Website usage and navigation patterns',
        'Device and browser information',
        'IP address and location data',
        'Cookies and tracking technologies'
      ]
    },
    {
      icon: FaInfoCircle,
      title: 'Communication Data',
      items: [
        'Messages and inquiries sent to us',
        'Support tickets and feedback',
        'Survey responses and preferences',
        'Marketing communication preferences'
      ]
    }
  ];

  const userRights = [
    {
      icon: FaCheckCircle,
      title: 'Access',
      description: 'Request access to your personal data we hold'
    },
    {
      icon: FaCheckCircle,
      title: 'Correction',
      description: 'Request correction of inaccurate or incomplete data'
    },
    {
      icon: FaCheckCircle,
      title: 'Deletion',
      description: 'Request deletion of your personal data under certain circumstances'
    },
    {
      icon: FaCheckCircle,
      title: 'Portability',
      description: 'Request transfer of your data to another service provider'
    },
    {
      icon: FaCheckCircle,
      title: 'Objection',
      description: 'Object to processing of your personal data for specific purposes'
    },
    {
      icon: FaCheckCircle,
      title: 'Restriction',
      description: 'Request restriction of processing in certain situations'
    }
  ];

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <div className="privacy-hero">
        <div className="privacy-hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="container">
          <div className="privacy-hero-content">
            <div className="hero-badge">
              <FaShieldAlt className="badge-icon" />
              <span>Privacy Policy</span>
            </div>
            <h1 className="privacy-hero-title">
              Your <span className="highlight">Privacy</span> Matters
            </h1>
            <p className="privacy-hero-subtitle">
              At SoftDevSquad, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="privacy-update-date">
              <FaInfoCircle className="update-icon" />
              <span>Last Updated: {currentDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="privacy-overview-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Privacy Overview</h2>
            <p className="section-subtitle">
              Understanding how we handle your personal information
            </p>
          </div>
          <div className="privacy-features-grid">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="privacy-feature-card">
                <div className="privacy-feature-icon">
                  <feature.icon />
                </div>
                <h3 className="privacy-feature-title">{feature.title}</h3>
                <p className="privacy-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information We Collect Section */}
      <div className="privacy-info-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Information We Collect</h2>
            <p className="section-subtitle">
              We collect information that you provide directly to us and information that is automatically 
              collected when you use our services.
            </p>
          </div>
          <div className="data-types-grid">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="data-type-card">
                <div className="data-type-header">
                  <div className="data-type-icon">
                    <dataType.icon />
                  </div>
                  <h3 className="data-type-title">{dataType.title}</h3>
                </div>
                <ul className="data-type-list">
                  {dataType.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="data-type-item">
                      <FaCheckCircle className="list-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Use Information Section */}
      <div className="privacy-usage-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How We Use Your Information</h2>
            <p className="section-subtitle">
              We use the information we collect to provide, maintain, and improve our services
            </p>
          </div>
          <div className="usage-content">
            <div className="usage-card">
              <h3 className="usage-card-title">Service Delivery</h3>
              <p className="usage-card-text">
                To provide, maintain, and improve our services, process transactions, and respond to your 
                inquiries and requests.
              </p>
            </div>
            <div className="usage-card">
              <h3 className="usage-card-title">Communication</h3>
              <p className="usage-card-text">
                To send you updates, newsletters, marketing communications, and other information that may 
                be of interest to you (with your consent).
              </p>
            </div>
            <div className="usage-card">
              <h3 className="usage-card-title">Analytics & Improvement</h3>
              <p className="usage-card-text">
                To analyze usage patterns, monitor performance, and improve our website functionality and 
                user experience.
              </p>
            </div>
            <div className="usage-card">
              <h3 className="usage-card-title">Legal Compliance</h3>
              <p className="usage-card-text">
                To comply with legal obligations, enforce our terms of service, and protect our rights and 
                the rights of our users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Your Rights Section */}
      <div className="privacy-rights-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your Privacy Rights</h2>
            <p className="section-subtitle">
              You have certain rights regarding your personal information under applicable privacy laws
            </p>
          </div>
          <div className="rights-grid">
            {userRights.map((right, index) => (
              <div key={index} className="right-card">
                <div className="right-icon">
                  <right.icon />
                </div>
                <h3 className="right-title">{right.title}</h3>
                <p className="right-description">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Security Section */}
      <div className="privacy-security-section">
        <div className="container">
          <div className="security-content">
            <div className="security-text">
              <h2 className="security-title">Data Security</h2>
              <p className="security-description">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include encryption, secure servers, access controls, and regular security audits.
              </p>
              <p className="security-description">
                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, we cannot 
                guarantee absolute security.
              </p>
            </div>
            <div className="security-features">
              <div className="security-feature">
                <FaShieldAlt className="security-feature-icon" />
                <span>Encryption</span>
              </div>
              <div className="security-feature">
                <FaLock className="security-feature-icon" />
                <span>Secure Servers</span>
              </div>
              <div className="security-feature">
                <FaUserShield className="security-feature-icon" />
                <span>Access Controls</span>
              </div>
              <div className="security-feature">
                <FaCheckCircle className="security-feature-icon" />
                <span>Regular Audits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="privacy-contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="contact-title">Questions About Privacy?</h2>
            <p className="contact-description">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
              practices, please contact us. We are committed to addressing your privacy concerns promptly.
            </p>
            <div className="contact-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaInfoCircle className="btn-icon" />
                Contact Us
              </Link>
              <Link to="/" className="btn btn-outline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

