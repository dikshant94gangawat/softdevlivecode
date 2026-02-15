import React from 'react';
import Link from 'next/link';

import {
  FaCode, FaCheckCircle, FaArrowRight, FaHeadset, FaJs, FaServer,
  FaMobile, FaGlobe, FaDatabase, FaShieldAlt
} from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiNodedotjs, SiReact } from 'react-icons/si';

const JavaScriptTypeScriptPage = () => {
  const services = [
    {
      icon: FaJs,
      title: 'JavaScript Development',
      description: 'Modern JavaScript development using ES6+, async/await, and modern frameworks for scalable applications.',
      features: ['ES6+ Features', 'Async Programming', 'Modern Frameworks', 'Performance Optimization'],
      color: '#F7DF1E'
    },
    {
      icon: SiTypescript,
      title: 'TypeScript Development',
      description: 'Type-safe JavaScript development with TypeScript for better code quality and maintainability.',
      features: ['Type Safety', 'Better IDE Support', 'Refactoring', 'Documentation'],
      color: '#3178C6'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Server-side JavaScript and TypeScript development with Node.js, Express, and modern frameworks.',
      features: ['Node.js', 'Express.js', 'REST APIs', 'Microservices'],
      color: '#339933'
    },
    {
      icon: FaMobile,
      title: 'Frontend Development',
      description: 'Build interactive user interfaces with React, Vue, Angular, and other modern JavaScript frameworks.',
      features: ['React/Vue/Angular', 'State Management', 'Component Libraries', 'Responsive Design'],
      color: '#61DAFB'
    },
    {
      icon: FaDatabase,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development with JavaScript/TypeScript across frontend, backend, and database layers.',
      features: ['Full-Stack Architecture', 'API Development', 'Database Integration', 'Deployment'],
      color: '#FF6B6B'
    }
  ];

  const stats = [
    { number: '1000+', label: 'JS/TS Projects' },
    { number: '50+', label: 'Technologies' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="js-ts-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaCode className="badge-icon" />
                <span>Expert JavaScript & TypeScript Development</span>
              </div>
              <h1 className="hero-title">
                Modern <span className="highlight">JavaScript & TypeScript</span> Solutions
              </h1>
              <p className="hero-subtitle">
                Build scalable, type-safe applications with JavaScript and TypeScript. From frontend to backend, we deliver modern solutions that drive business growth.
              </p>
              <div className="hero-actions">
                <Link href="/contact" legacyBehavior><a className="btn btn-primary">
                  <FaHeadset className="btn-icon" />
                  Start Your Project
                </a></Link>
                <Link href="/demo" legacyBehavior><a className="btn btn-outline">
                  View Portfolio
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
            <h2 className="section-title">Our JavaScript & TypeScript Services</h2>
            <p className="section-subtitle">
              Comprehensive development services for modern web applications
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
            <h3 className="cta-title">Ready to Build with JavaScript & TypeScript?</h3>
            <p className="cta-subtitle">
              Let's create powerful, scalable applications that drive your business forward.
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

export default JavaScriptTypeScriptPage;

