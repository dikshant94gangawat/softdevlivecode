import React from 'react';
import Link from 'next/link';

import {
  FaHeadset, FaCheckCircle, FaArrowRight, FaHeadset as FaSupport, FaClock,
  FaShieldAlt, FaTools, FaServer, FaChartLine, FaBug
} from 'react-icons/fa';

const TechSupportPage = () => {
  const services = [
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your systems running smoothly.',
      features: ['24/7 Monitoring', 'Quick Response', 'Priority Support', 'Dedicated Team'],
      color: '#ef4444'
    },
    {
      icon: FaTools,
      title: 'System Maintenance',
      description: 'Regular maintenance and updates to ensure optimal system performance.',
      features: ['System Updates', 'Performance Tuning', 'Preventive Maintenance', 'Health Checks'],
      color: '#3b82f6'
    },
    {
      icon: FaBug,
      title: 'Bug Fixes & Troubleshooting',
      description: 'Rapid resolution of technical issues and bug fixes to minimize downtime.',
      features: ['Issue Resolution', 'Bug Fixes', 'Root Cause Analysis', 'Prevention'],
      color: '#f59e0b'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Management',
      description: 'Comprehensive security patch management and threat monitoring.',
      features: ['Security Patches', 'Threat Monitoring', 'Vulnerability Management', 'Compliance'],
      color: '#10b981'
    },
    {
      icon: FaServer,
      title: 'Backup & Recovery',
      description: 'Reliable backup solutions and disaster recovery planning.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Protection', 'Business Continuity'],
      color: '#8b5cf6'
    }
  ];

  const stats = [
    { number: '24/7', label: 'Support Available' },
    { number: '<1hr', label: 'Response Time' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '1000+', label: 'Issues Resolved' }
  ];

  return (
    <div className="tech-support-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaHeadset className="badge-icon" />
                <span>24/7 Technical Support Services</span>
              </div>
              <h1 className="hero-title">
                Reliable <span className="highlight">Tech Support</span> When You Need It
              </h1>
              <p className="hero-subtitle">
                Comprehensive technical support and maintenance services to keep your systems running at peak performance. Available 24/7 to resolve issues quickly and efficiently.
              </p>
              <div className="hero-actions">
                <Link href="/contact" legacyBehavior><a className="btn btn-primary">
                  <FaSupport className="btn-icon" />
                  Get Support
                </a></Link>
                <Link href="/demo" legacyBehavior><a className="btn btn-outline">
                  View Services
                </a></Link>
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
            <h2 className="section-title">Our Tech Support Services</h2>
            <p className="section-subtitle">
              Comprehensive support solutions to keep your systems running smoothly
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
                <Link href="/contact" legacyBehavior><a className="service-cta">
                  Get Started
                  <FaArrowRight className="cta-icon" />
                </a></Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Need Reliable Tech Support?</h3>
            <p className="cta-subtitle">
              Let's ensure your systems are always running smoothly with our expert support services.
            </p>
            <div className="cta-actions">
              <Link href="/contact" legacyBehavior><a className="btn btn-primary">
                <FaSupport className="btn-icon" />
                Get Started Today
              </a></Link>
              <Link href="/demo" legacyBehavior><a className="btn btn-outline">
                Schedule Consultation
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSupportPage;
