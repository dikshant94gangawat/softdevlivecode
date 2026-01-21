import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTools, FaCheckCircle, FaArrowRight, FaHeadset, FaWrench,
  FaServer, FaShieldAlt, FaSync, FaChartLine, FaClock
} from 'react-icons/fa';
import './MaintenanceSupportPage.css';

const MaintenanceSupportPage = () => {
  const services = [
    {
      icon: FaWrench,
      title: 'Ongoing Maintenance',
      description: 'Regular maintenance and updates to keep your systems running optimally.',
      features: ['System Updates', 'Performance Monitoring', 'Preventive Maintenance', 'Health Checks'],
      color: '#3b82f6'
    },
    {
      icon: FaServer,
      title: 'Infrastructure Support',
      description: 'Comprehensive support for your IT infrastructure and servers.',
      features: ['Server Management', 'Network Support', 'Infrastructure Monitoring', 'Capacity Planning'],
      color: '#10b981'
    },
    {
      icon: FaSync,
      title: 'Application Support',
      description: 'Ongoing support and maintenance for your applications and software.',
      features: ['Bug Fixes', 'Feature Updates', 'Performance Optimization', 'Version Control'],
      color: '#f59e0b'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Maintenance',
      description: 'Continuous security updates and patch management to protect your systems.',
      features: ['Security Patches', 'Vulnerability Management', 'Compliance', 'Security Audits'],
      color: '#ef4444'
    },
    {
      icon: FaClock,
      title: 'Proactive Monitoring',
      description: '24/7 monitoring and alerting to prevent issues before they occur.',
      features: ['Real-time Monitoring', 'Alert Systems', 'Performance Tracking', 'Incident Prevention'],
      color: '#8b5cf6'
    }
  ];

  const stats = [
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '1000+', label: 'Systems Maintained' },
    { number: '95%', label: 'Issue Prevention' }
  ];

  return (
    <div className="maintenance-support-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaTools className="badge-icon" />
                <span>Comprehensive Maintenance & Support</span>
              </div>
              <h1 className="hero-title">
                Reliable <span className="highlight">Maintenance & Support</span> Services
              </h1>
              <p className="hero-subtitle">
                Keep your systems running smoothly with our comprehensive maintenance and support services. Proactive monitoring, regular updates, and expert support ensure optimal performance.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  <FaHeadset className="btn-icon" />
                  Get Support
                </Link>
                <Link to="/demo" className="btn btn-outline">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats-section">
        <div className="container">
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Maintenance & Support Services</h2>
            <p className="section-subtitle">
              Comprehensive maintenance solutions to keep your systems running optimally
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: service.color }}>
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="service-cta">
                  Get Started
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Need Reliable Maintenance & Support?</h3>
            <p className="cta-subtitle">
              Let's ensure your systems are always running smoothly with our expert maintenance services.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Get Started Today
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSupportPage;
