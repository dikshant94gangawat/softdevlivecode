import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUsers, FaCheckCircle, FaArrowRight, FaHeadset, FaSearch,
  FaUserTie, FaBriefcase, FaHandshake, FaChartLine, FaGlobe
} from 'react-icons/fa';
import './ITRecruitmentPage.css';

const ITRecruitmentPage = () => {
  const services = [
    {
      icon: FaSearch,
      title: 'Technical Talent Acquisition',
      description: 'Find and recruit top-tier IT professionals across all technology stacks and domains.',
      features: ['Developer Sourcing', 'Technical Screening', 'Skill Assessment', 'Background Checks'],
      color: '#f59e0b'
    },
    {
      icon: FaUserTie,
      title: 'Permanent Placement',
      description: 'Full-time IT staffing solutions for long-term team building and organizational growth.',
      features: ['Full-time Hiring', 'Onboarding Support', 'Retention Strategies', 'Career Development'],
      color: '#3b82f6'
    },
    {
      icon: FaBriefcase,
      title: 'Contract Staffing',
      description: 'Flexible contract and temporary IT staffing for project-based needs.',
      features: ['Contract Hiring', 'Project-based Staffing', 'Remote Teams', 'Quick Deployment'],
      color: '#10b981'
    },
    {
      icon: FaChartLine,
      title: 'Salary Benchmarking',
      description: 'Market analysis and compensation consulting to attract and retain top talent.',
      features: ['Market Research', 'Salary Analysis', 'Benefits Planning', 'Competitive Packages'],
      color: '#8b5cf6'
    },
    {
      icon: FaGlobe,
      title: 'Remote Team Building',
      description: 'Build distributed teams with global talent access and remote collaboration expertise.',
      features: ['Global Talent Pool', 'Remote Onboarding', 'Team Integration', 'Cultural Fit'],
      color: '#ef4444'
    }
  ];

  const stats = [
    { number: '500+', label: 'Placements' },
    { number: '200+', label: 'Companies Served' },
    { number: '95%', label: 'Success Rate' },
    { number: '2-4 weeks', label: 'Avg Time to Hire' }
  ];

  return (
    <div className="it-recruitment-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaUsers className="badge-icon" />
                <span>Expert IT Recruitment Services</span>
              </div>
              <h1 className="hero-title">
                Find Top <span className="highlight">IT Talent</span> for Your Team
              </h1>
              <p className="hero-subtitle">
                Connect with exceptional tech professionals or find your dream job. We specialize in IT recruitment, helping companies build high-performing teams and professionals advance their careers.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  <FaHeadset className="btn-icon" />
                  Start Hiring
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
            <h2 className="section-title">Our IT Recruitment Services</h2>
            <p className="section-subtitle">
              Comprehensive talent acquisition solutions for your IT needs
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
            <h3 className="cta-title">Ready to Build Your IT Team?</h3>
            <p className="cta-subtitle">
              Let's find the perfect tech talent to drive your business forward.
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

export default ITRecruitmentPage;

