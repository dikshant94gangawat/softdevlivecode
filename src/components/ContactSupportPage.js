import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaHeadset, FaEnvelope, FaPhone, FaClock, FaCheckCircle, FaArrowRight,
  FaTicketAlt, FaQuestionCircle, FaBug, FaCog
} from 'react-icons/fa';
import './ContactSupportPage.css';

const ContactSupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    priority: 'medium',
    message: ''
  });

  const supportCategories = [
    { value: 'general', label: 'General Inquiry', icon: FaQuestionCircle },
    { value: 'technical', label: 'Technical Support', icon: FaCog },
    { value: 'bug', label: 'Bug Report', icon: FaBug },
    { value: 'billing', label: 'Billing Question', icon: FaTicketAlt }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Support request submitted! We will get back to you soon.');
  };

  const supportChannels = [
    {
      icon: FaEnvelope,
      title: 'Email Support',
      contact: 'support@softdevsquad.com',
      hours: '24/7',
      response: 'Within 4 hours'
    },
    {
      icon: FaPhone,
      title: 'Phone Support',
      contact: '+917760554526',
      hours: 'Mon-Fri, 9AM-6PM IST',
      response: 'Immediate'
    },
    {
      icon: FaTicketAlt,
      title: 'Support Ticket',
      contact: 'Create a ticket',
      hours: '24/7',
      response: 'Within 24 hours'
    }
  ];

  return (
    <div className="contact-support-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaHeadset className="badge-icon" />
                <span>Get Support</span>
              </div>
              <h1 className="hero-title">
                Contact <span className="highlight">Support</span>
              </h1>
              <p className="hero-subtitle">
                We're here to help! Reach out to our support team through any of the channels below or submit a support request.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="support-channels-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Support Channels</h2>
            <p className="section-subtitle">
              Choose the best way to reach us
            </p>
          </div>
          <div className="channels-grid">
            {supportChannels.map((channel, index) => (
              <div key={index} className="channel-card">
                <div className="channel-icon">
                  <channel.icon />
                </div>
                <h3 className="channel-title">{channel.title}</h3>
                <p className="channel-contact">{channel.contact}</p>
                <div className="channel-info">
                  <div className="info-item">
                    <FaClock /> {channel.hours}
                  </div>
                  <div className="info-item">
                    Response: {channel.response}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="support-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2 className="section-title">Submit Support Request</h2>
              <p className="section-subtitle">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
            <form onSubmit={handleSubmit} className="support-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    {supportCategories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Priority *</label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    required
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <FaTicketAlt className="button-icon" />
                Submit Support Request
                <FaArrowRight className="button-arrow" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="help-links-section">
        <div className="container">
          <div className="help-links">
            <Link to="/help-center" className="help-link">
              <FaQuestionCircle />
              <span>Help Center</span>
            </Link>
            <Link to="/documentation" className="help-link">
              <FaCheckCircle />
              <span>Documentation</span>
            </Link>
            <Link to="/api-reference" className="help-link">
              <FaCog />
              <span>API Reference</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportPage;
