import React from 'react';
import Link from 'next/link';

import {
  FaRocket, FaCheckCircle, FaArrowRight, FaHeadset, FaChartLine,
  FaCloud, FaMobile, FaCogs, FaUsers, FaLightbulb
} from 'react-icons/fa';

const DigitalTransformationPage = () => {
  const services = [
    {
      icon: FaChartLine,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategy and roadmap development.',
      features: ['Strategy Planning', 'Digital Roadmap', 'Change Management', 'ROI Analysis'],
      color: '#3b82f6'
    },
    {
      icon: FaCloud,
      title: 'Cloud Transformation',
      description: 'Migrate to cloud infrastructure and modernize your IT environment.',
      features: ['Cloud Migration', 'Infrastructure Modernization', 'Cost Optimization', 'Scalability'],
      color: '#10b981'
    },
    {
      icon: FaMobile,
      title: 'Digital Platforms',
      description: 'Build modern digital platforms and customer-facing applications.',
      features: ['Platform Development', 'API Integration', 'Mobile Solutions', 'User Experience'],
      color: '#f59e0b'
    },
    {
      icon: FaCogs,
      title: 'Process Automation',
      description: 'Automate business processes to improve efficiency and reduce costs.',
      features: ['Workflow Automation', 'RPA Solutions', 'Integration', 'Efficiency Gains'],
      color: '#8b5cf6'
    },
    {
      icon: FaUsers,
      title: 'Change Management',
      description: 'Support your team through digital transformation with expert change management.',
      features: ['Training Programs', 'Adoption Support', 'Communication', 'Cultural Change'],
      color: '#ef4444'
    }
  ];

  const stats = [
    { number: '100+', label: 'Transformations' },
    { number: '50%', label: 'Avg Efficiency Gain' },
    { number: '30%', label: 'Cost Reduction' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="digital-transformation-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaRocket className="badge-icon" />
                <span>Expert Digital Transformation Services</span>
              </div>
              <h1 className="hero-title">
                Transform Your Business with <span className="highlight">Digital Solutions</span>
              </h1>
              <p className="hero-subtitle">
                Accelerate your digital transformation journey with comprehensive solutions that modernize your operations, improve efficiency, and drive business growth.
              </p>
              <div className="hero-actions">
                <Link href="/contact" legacyBehavior><a className="btn btn-primary">
                  <FaHeadset className="btn-icon" />
                  Start Transformation
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
            <h2 className="section-title">Our Digital Transformation Services</h2>
            <p className="section-subtitle">
              End-to-end solutions to modernize and transform your business
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
            <h3 className="cta-title">Ready to Transform Your Business?</h3>
            <p className="cta-subtitle">
              Let's discuss how digital transformation can drive your business forward.
            </p>
            <div className="cta-actions">
              <Link href="/contact" legacyBehavior><a className="btn btn-primary">
                <FaHeadset className="btn-icon" />
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

export default DigitalTransformationPage;
