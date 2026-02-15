import React, { useState } from 'react';
import styles from './ContactSupportPage.module.css';
import Link from 'next/link';

import {
  FaHeadset, FaEnvelope, FaPhone, FaClock, FaCheckCircle, FaArrowRight,
  FaTicketAlt, FaQuestionCircle, FaBug, FaCog
} from 'react-icons/fa';

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
      // contact: 'support@softdevsquad.com',
      contact: 'softdevsquad@gmail.com',
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
    <div className={styles['contact-support-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaHeadset className={styles['badge-icon']} />
                <span>Get Support</span>
              </div>
              <h1 className={styles['hero-title']}>
                Contact <span className={styles.highlight}>Support</span>
              </h1>
              <p className={styles['hero-subtitle']}>
                We're here to help! Reach out to our support team through any of the channels below or submit a support request.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['support-channels-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Support Channels</h2>
            <p className={styles['section-subtitle']}>
              Choose the best way to reach us
            </p>
          </div>
          <div className={styles['channels-grid']}>
            {supportChannels.map((channel, index) => (
              <div key={index} className={styles['channel-card']}>
                <div className={styles['channel-icon']}>
                  <channel.icon />
                </div>
                <h3 className={styles['channel-title']}>{channel.title}</h3>
                <p className={styles['channel-contact']}>{channel.contact}</p>
                <div className={styles['channel-info']}>
                  <div className={styles['info-item']}>
                    <FaClock /> {channel.hours}
                  </div>
                  <div className={styles['info-item']}>
                    Response: {channel.response}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['support-form-section']}>
        <div className={styles.container}>
          <div className={styles['form-container']}>
            <div className={styles['form-header']}>
              <h2 className={styles['section-title']}>Submit Support Request</h2>
              <p className={styles['section-subtitle']}>
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
            <form onSubmit={handleSubmit} className={styles['support-form']}>
              <div className={styles['form-row']}>
                <div className={styles['form-group']}>
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
                <div className={styles['form-group']}>
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

              <div className={styles['form-row']}>
                <div className={styles['form-group']}>
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
                <div className={styles['form-group']}>
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

              <div className={styles['form-group']}>
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

              <div className={styles['form-group']}>
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

              <button type="submit" className={styles['submit-button']}>
                <FaTicketAlt className={styles['button-icon']} />
                Submit Support Request
                <FaArrowRight className={styles['button-arrow']} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles['help-links-section']}>
        <div className={styles.container}>
          <div className={styles['help-links']}>
            <Link href="/help-center" legacyBehavior><a className={styles['help-link']}>
              <FaQuestionCircle />
              <span>Help Center</span>
            </a></Link>
            <Link href="/documentation" legacyBehavior><a className={styles['help-link']}>
              <FaCheckCircle />
              <span>Documentation</span>
            </a></Link>
            <Link href="/api-reference" legacyBehavior><a className={styles['help-link']}>
              <FaCog />
              <span>API Reference</span>
            </a></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportPage;
