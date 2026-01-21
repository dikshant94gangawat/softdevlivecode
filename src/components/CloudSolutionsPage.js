import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCloud, FaCheckCircle, FaArrowRight, FaHeadset, FaAws,
  FaServer, FaShieldAlt, FaDatabase, FaChartLine
} from 'react-icons/fa';
import { SiMicrosoftazure, SiGooglecloud, SiDocker, SiKubernetes } from 'react-icons/si';
import './CloudSolutionsPage.css';

const CloudSolutionsPage = () => {
  const services = [
    {
      icon: FaAws,
      title: 'AWS Cloud Services',
      description: 'Comprehensive AWS solutions including EC2, S3, Lambda, and more for scalable cloud infrastructure.',
      features: ['EC2 & S3', 'Lambda Functions', 'RDS Databases', 'CloudFront CDN'],
      color: '#FF9900'
    },
    {
      icon: SiMicrosoftazure,
      title: 'Azure Cloud Services',
      description: 'Microsoft Azure cloud solutions for enterprise applications and infrastructure.',
      features: ['Azure VMs', 'Azure Functions', 'Azure SQL', 'Azure DevOps'],
      color: '#0078D4'
    },
    {
      icon: SiGooglecloud,
      title: 'Google Cloud Platform',
      description: 'GCP solutions for scalable applications, data analytics, and machine learning.',
      features: ['Compute Engine', 'Cloud Functions', 'BigQuery', 'Cloud Storage'],
      color: '#4285F4'
    },
    {
      icon: SiDocker,
      title: 'Containerization',
      description: 'Docker and Kubernetes solutions for containerized application deployment.',
      features: ['Docker', 'Kubernetes', 'Container Orchestration', 'Microservices'],
      color: '#2496ED'
    },
    {
      icon: FaShieldAlt,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud infrastructure and applications.',
      features: ['Security Audits', 'IAM Management', 'Encryption', 'Compliance'],
      color: '#FF6B6B'
    }
  ];

  const stats = [
    { number: '200+', label: 'Cloud Projects' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '50%', label: 'Cost Savings' },
    { number: '24/7', label: 'Monitoring' }
  ];

  return (
    <div className="cloud-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaCloud className="badge-icon" />
                <span>Expert Cloud Solutions</span>
              </div>
              <h1 className="hero-title">
                Scalable <span className="highlight">Cloud Solutions</span> for Your Business
              </h1>
              <p className="hero-subtitle">
                Migrate to the cloud, optimize infrastructure, and scale your applications with AWS, Azure, and GCP solutions.
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
            <h2 className="section-title">Our Cloud Solutions</h2>
            <p className="section-subtitle">
              Comprehensive cloud services across major platforms
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
            <h3 className="cta-title">Ready to Move to the Cloud?</h3>
            <p className="cta-subtitle">
              Let's migrate your infrastructure and scale your applications in the cloud.
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

export default CloudSolutionsPage;
