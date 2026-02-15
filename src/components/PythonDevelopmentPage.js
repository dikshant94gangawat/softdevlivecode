import React from 'react';
import Link from 'next/link';
import {
  FaPython, FaCode, FaCheckCircle, FaArrowRight, FaHeadset,
  FaServer, FaDatabase, FaRobot, FaChartLine, FaCloud
} from 'react-icons/fa';
import { SiDjango, SiFlask, SiFastapi, SiTensorflow, SiPytorch } from 'react-icons/si';

const PythonDevelopmentPage = () => {
  const services = [
    {
      icon: FaPython,
      title: 'Python Web Development',
      description: 'Build scalable web applications with Django, Flask, and FastAPI frameworks.',
      features: ['Django/Flask', 'REST APIs', 'Microservices', 'FastAPI'],
      color: '#3776AB'
    },
    {
      icon: FaRobot,
      title: 'AI & Machine Learning',
      description: 'Develop AI/ML solutions with TensorFlow, PyTorch, and scikit-learn.',
      features: ['TensorFlow', 'PyTorch', 'ML Models', 'Data Science'],
      color: '#FF6F00'
    },
    {
      icon: FaDatabase,
      title: 'Data Analytics',
      description: 'Data processing, analysis, and visualization with Python libraries.',
      features: ['Pandas', 'NumPy', 'Data Visualization', 'ETL Pipelines'],
      color: '#4ECDC4'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Robust backend systems with Python for APIs and server-side logic.',
      features: ['API Development', 'Database Integration', 'Authentication', 'Caching'],
      color: '#95A5A6'
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      description: 'Deploy Python applications to AWS, Azure, and GCP with CI/CD pipelines.',
      features: ['Cloud Deployment', 'Docker', 'CI/CD', 'Monitoring'],
      color: '#FF9900'
    }
  ];

  const stats = [
    { number: '300+', label: 'Python Projects' },
    { number: '50+', label: 'AI/ML Solutions' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="python-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaPython className="badge-icon" />
                <span>Expert Python Development</span>
              </div>
              <h1 className="hero-title">
                Powerful <span className="highlight">Python Development</span> Solutions
              </h1>
              <p className="hero-subtitle">
                Build scalable applications, AI/ML solutions, and data analytics platforms with Python. From web development to machine learning, we deliver comprehensive Python solutions.
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
            <h2 className="section-title">Our Python Development Services</h2>
            <p className="section-subtitle">
              Comprehensive Python solutions for web, AI, and data analytics
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
            <h3 className="cta-title">Ready to Build with Python?</h3>
            <p className="cta-subtitle">
              Let's create powerful Python applications that drive your business forward.
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

export default PythonDevelopmentPage;

