import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLightbulb, FaCheckCircle, FaArrowRight, FaHeadset, FaChartLine,
  FaCogs, FaShieldAlt, FaCloud, FaRocket, FaCode
} from 'react-icons/fa';
import './ITConsultationPage.css';

const ITConsultationPage = () => {
  const services = [
    {
      icon: FaChartLine,
      title: 'Technology Strategy',
      description: 'Strategic planning and roadmap development for your technology initiatives.',
      features: ['Tech Stack Selection', 'Architecture Planning', 'Digital Roadmap', 'ROI Analysis'],
      color: '#8b5cf6'
    },
    {
      icon: FaCogs,
      title: 'Architecture Review',
      description: 'Comprehensive review and optimization of your existing IT architecture.',
      features: ['System Analysis', 'Performance Audit', 'Scalability Review', 'Best Practices'],
      color: '#3b82f6'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Assessment',
      description: 'Security audits and compliance consulting to protect your digital assets.',
      features: ['Security Audits', 'Compliance Review', 'Risk Assessment', 'Security Strategy'],
      color: '#ef4444'
    },
    {
      icon: FaCloud,
      title: 'Cloud Migration',
      description: 'Expert guidance on migrating to cloud infrastructure and optimizing costs.',
      features: ['Migration Planning', 'Cost Optimization', 'Cloud Strategy', 'Multi-cloud'],
      color: '#10b981'
    },
    {
      icon: FaRocket,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting to modernize your business.',
      features: ['Transformation Roadmap', 'Process Optimization', 'Technology Adoption', 'Change Management'],
      color: '#f59e0b'
    }
  ];

  const stats = [
    { number: '300+', label: 'Consultations' },
    { number: '50+', label: 'Companies Helped' },
    { number: '40%', label: 'Avg Cost Savings' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="it-consultation-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaLightbulb className="badge-icon" />
                <span>Expert IT Consultation Services</span>
              </div>
              <h1 className="hero-title">
                Strategic <span className="highlight">IT Consultation</span> for Your Business
              </h1>
              <p className="hero-subtitle">
                Get expert technology guidance to make informed decisions, optimize your IT infrastructure, and accelerate your digital transformation journey.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  <FaHeadset className="btn-icon" />
                  Get Consultation
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
            <h2 className="section-title">Our IT Consultation Services</h2>
            <p className="section-subtitle">
              Strategic technology consulting to drive your business forward
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
            <h3 className="cta-title">Ready for Expert IT Consultation?</h3>
            <p className="cta-subtitle">
              Let's discuss how we can help optimize your technology strategy and infrastructure.
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

export default ITConsultationPage;
