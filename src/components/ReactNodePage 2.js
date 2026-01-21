import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaReact, FaNodeJs, FaCode, FaServer, FaDatabase, FaCloud,
  FaCheckCircle, FaArrowRight, FaHeadset, FaStar, FaUsers,
  FaMobile, FaGlobe, FaShieldAlt, FaRocket
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';
import './ReactNodePage.css';

const ReactNodePage = () => {
  const services = [
    {
      icon: FaReact,
      title: 'React Development',
      description: 'Build modern, interactive user interfaces with React. We create scalable single-page applications with component-based architecture.',
      features: ['Component Architecture', 'State Management', 'Performance Optimization', 'React Hooks'],
      color: '#61dafb'
    },
    {
      icon: FaNodeJs,
      title: 'Node.js Backend',
      description: 'Robust server-side applications using Node.js. We develop RESTful APIs, microservices, and real-time applications.',
      features: ['RESTful APIs', 'Microservices', 'Real-time Apps', 'Express.js'],
      color: '#339933'
    },
    {
      icon: SiNextdotjs,
      title: 'Next.js Full Stack',
      description: 'Server-side rendered and static site generation with Next.js for optimal performance and SEO.',
      features: ['SSR/SSG', 'API Routes', 'Image Optimization', 'SEO Friendly'],
      color: '#000000'
    },
    {
      icon: SiTypescript,
      title: 'TypeScript Development',
      description: 'Type-safe development with TypeScript for better code quality, maintainability, and developer experience.',
      features: ['Type Safety', 'Better IDE Support', 'Refactoring', 'Documentation'],
      color: '#3178c6'
    },
    {
      icon: FaDatabase,
      title: 'Database Integration',
      description: 'Seamless integration with MongoDB, PostgreSQL, and other databases for efficient data management.',
      features: ['MongoDB', 'PostgreSQL', 'Data Modeling', 'Query Optimization'],
      color: '#47a248'
    },
    {
      icon: FaCloud,
      title: 'Cloud Deployment',
      description: 'Deploy your React and Node.js applications to AWS, Vercel, Heroku, and other cloud platforms.',
      features: ['AWS Deployment', 'CI/CD Pipelines', 'Auto Scaling', 'Monitoring'],
      color: '#ff9900'
    }
  ];

  const technologies = [
    { name: 'React.js', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'GraphQL', icon: FaCode }
  ];

  const stats = [
    { number: '500+', label: 'React Projects' },
    { number: '300+', label: 'Node.js Applications' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="react-node-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaReact className="badge-icon" />
                <span>Expert React & Node.js Development</span>
              </div>
              <h1 className="hero-title">
                Powerful <span className="highlight">React & Node.js</span> Solutions
              </h1>
              <p className="hero-subtitle">
                Build modern, scalable web applications with React and Node.js. From frontend interfaces to backend APIs, we deliver full-stack solutions that drive business growth.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  <FaHeadset className="btn-icon" />
                  Start Your Project
                </Link>
                <Link to="/demo" className="btn btn-outline">
                  View Portfolio
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
            <h2 className="section-title">Our React & Node.js Services</h2>
            <p className="section-subtitle">
              Comprehensive development services for building modern web applications
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

      <div className="technologies-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-subtitle">
              Modern tools and frameworks for building exceptional applications
            </p>
          </div>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <tech.icon className="tech-icon" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Build with React & Node.js?</h3>
            <p className="cta-subtitle">
              Let's create powerful, scalable web applications that drive your business forward.
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

export default ReactNodePage;

