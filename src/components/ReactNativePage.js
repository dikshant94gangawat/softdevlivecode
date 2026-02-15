import React from 'react';
import Link from 'next/link';
import {
  FaMobile, FaCode, FaCheckCircle, FaArrowRight, FaHeadset,
  FaReact, FaApple, FaAndroid, FaCloud, FaShieldAlt
} from 'react-icons/fa';
import { SiReact, SiFlutter } from 'react-icons/si';

const ReactNativePage = () => {
  const services = [
    {
      icon: FaMobile,
      title: 'Cross-Platform Development',
      description: 'Build native mobile apps for iOS and Android with a single codebase using React Native.',
      features: ['iOS & Android', 'Single Codebase', 'Native Performance', 'Code Reusability'],
      color: '#61dafb'
    },
    {
      icon: FaApple,
      title: 'iOS Development',
      description: 'Native iOS applications with React Native, ensuring smooth performance and native look and feel.',
      features: ['Swift Integration', 'App Store Ready', 'iOS Design Guidelines', 'Performance Optimized'],
      color: '#007AFF'
    },
    {
      icon: FaAndroid,
      title: 'Android Development',
      description: 'High-performance Android apps built with React Native, following Material Design principles.',
      features: ['Material Design', 'Play Store Ready', 'Kotlin Integration', 'Optimized Performance'],
      color: '#3DDC84'
    },
    {
      icon: FaCloud,
      title: 'Backend Integration',
      description: 'Seamless integration with REST APIs, GraphQL, and real-time services for your mobile apps.',
      features: ['REST APIs', 'GraphQL', 'Real-time Sync', 'Push Notifications'],
      color: '#FF6B6B'
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Testing',
      description: 'Comprehensive security measures and automated testing to ensure app reliability and user data protection.',
      features: ['Security Audits', 'Automated Testing', 'Performance Testing', 'Bug Fixes'],
      color: '#4ECDC4'
    }
  ];

  const stats = [
    { number: '200+', label: 'Mobile Apps' },
    { number: '50M+', label: 'Downloads' },
    { number: '4.8', label: 'Avg Rating' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="react-native-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaMobile className="badge-icon" />
                <span>Expert React Native Development</span>
              </div>
              <h1 className="hero-title">
                Build <span className="highlight">React Native</span> Mobile Apps
              </h1>
              <p className="hero-subtitle">
                Create powerful, cross-platform mobile applications with React Native. One codebase for iOS and Android, delivering native performance and user experience.
              </p>
              <div className="hero-actions">
                <Link href="/contact" legacyBehavior><a className="btn btn-primary"><FaHeadset className="btn-icon" />Start Your Project</a></Link>
                <Link href="/demo" legacyBehavior><a className="btn btn-outline">View Portfolio</a></Link>
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
            <h2 className="section-title">Our React Native Services</h2>
            <p className="section-subtitle">
              Comprehensive mobile app development services
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
                <Link href="/contact" legacyBehavior><a className="service-cta">Get Started<FaArrowRight className="cta-icon" /></a></Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Build Your Mobile App?</h3>
            <p className="cta-subtitle">
              Let's create a powerful React Native application that works seamlessly on iOS and Android.
            </p>
            <div className="cta-actions">
              <Link href="/contact" legacyBehavior><a className="btn btn-primary"><FaHeadset className="btn-icon" />Get Started Today</a></Link>
              <Link href="/demo" legacyBehavior><a className="btn btn-outline">Schedule Consultation</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactNativePage;

