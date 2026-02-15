import React, { useState } from 'react';
import Link from 'next/link';

import {
  FaRocket, FaCheckCircle, FaArrowRight, FaHeadset, FaFilter,
  FaCode, FaMobile, FaCloud, FaCreditCard, FaHeartbeat, FaGraduationCap
} from 'react-icons/fa';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'FinTech', 'HealthTech', 'EdTech', 'E-commerce', 'SaaS', 'Startups', 'Enterprise'];

  const portfolio = [
    {
      title: 'Digital Banking Platform',
      category: 'FinTech',
      description: 'Comprehensive digital banking solution serving 500K+ users with advanced security features and real-time transaction processing.',
      image: '/images/fintech-portfolio-1.jpg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      results: ['500K+ Active Users', '99.9% Uptime', '40% Faster Transactions'],
      icon: FaCreditCard
    },
    {
      title: 'AI-Powered Trading Bot',
      category: 'FinTech',
      description: 'Intelligent trading system with machine learning algorithms achieving 85% success rate in automated trades.',
      image: '/images/fintech-portfolio-2.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      results: ['85% Success Rate', '$50M+ Trades Executed', '24/7 Operations'],
      icon: FaCode
    },
    {
      title: 'Telemedicine Platform',
      category: 'HealthTech',
      description: 'Comprehensive telemedicine solution serving 100K+ patients with video consultations and remote monitoring.',
      image: '/images/healthtech-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
      results: ['100K+ Patients', '99.5% Uptime', '40% Cost Reduction'],
      icon: FaHeartbeat
    },
    {
      title: 'AI Diagnostic System',
      category: 'HealthTech',
      description: 'Machine learning-powered diagnostic tool for radiology with 95% accuracy in detecting abnormalities.',
      image: '/images/healthtech-portfolio-2.jpg',
      technologies: ['Python', 'TensorFlow', 'DICOM', 'Flask'],
      results: ['95% Accuracy', '50% Faster Diagnosis', '500+ Hospitals'],
      icon: FaHeartbeat
    },
    {
      title: 'EdTech Learning Platform',
      category: 'EdTech',
      description: 'AI-powered personalized learning platform with adaptive content delivery for students.',
      image: '/images/edtech-portfolio-1.jpg',
      technologies: ['Vue.js', 'Django', 'TensorFlow', 'Redis'],
      results: ['20K+ Students', '100+ Courses', '85% Completion Rate'],
      icon: FaGraduationCap
    },
    {
      title: 'E-commerce Marketplace',
      category: 'E-commerce',
      description: 'Multi-vendor e-commerce platform with advanced search, payment integration, and inventory management.',
      image: '/images/ecommerce-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      results: ['10K+ Products', '50K+ Users', '$2M+ Revenue'],
      icon: FaMobile
    },
    {
      title: 'SaaS CRM Platform',
      category: 'SaaS',
      description: 'Cloud-based CRM solution with sales automation, analytics, and customer management features.',
      image: '/images/saas-crm.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: ['500+ Companies', '99.9% Uptime', '30% Sales Increase'],
      icon: FaCloud
    },
    {
      title: 'FinTech Startup Platform',
      category: 'Startups',
      description: 'Revolutionary peer-to-peer lending platform with AI-powered risk assessment.',
      image: '/images/startup-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'Python', 'AWS'],
      results: ['10K+ Users', '$2M Funding', '300% Growth'],
      icon: FaRocket
    },
    {
      title: 'Enterprise ERP System',
      category: 'Enterprise',
      description: 'Comprehensive ERP solution for large enterprises with modules for finance, HR, and operations.',
      image: '/images/enterprise-portfolio-1.jpg',
      technologies: ['React', 'Java', 'PostgreSQL', 'Azure'],
      results: ['50+ Enterprises', '40% Efficiency Gain', '24/7 Support'],
      icon: FaCloud
    }
  ];

  const filteredPortfolio = selectedCategory === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15+', label: 'Industries Served' },
    { number: '99.9%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="portfolio-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaRocket className="badge-icon" />
                <span>Our Work</span>
              </div>
              <h1 className="hero-title">
                Our <span className="highlight">Portfolio</span>
              </h1>
              <p className="hero-subtitle">
                Explore our successful projects across various industries. From startups to enterprises, we've delivered innovative solutions that drive business growth.
              </p>
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

      <div className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing our best work across different industries and technologies
            </p>
          </div>
          
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`${filter-tab} ${${selectedCategory} ${===} ${category} ${?} ${'active'} ${:} ${''}}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredPortfolio.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="portfolio-image-placeholder" style={{ display: 'none' }}>
                    <project.icon size={60} />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="portfolio-category">{project.category}</div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="portfolio-results">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="result-item">
                        <FaCheckCircle className="result-icon" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-subtitle">
              Let's discuss how we can help bring your vision to life.
            </p>
            <div className="cta-actions">
              <Link href="/contact" legacyBehavior><a className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Get Started
              </a></Link>
              <Link href="/case-studies" legacyBehavior><a className="btn btn-outline">
                View Case Studies
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
