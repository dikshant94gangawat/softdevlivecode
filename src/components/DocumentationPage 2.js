import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBook, FaCode, FaServer, FaMobile, FaCloud, FaArrowRight, FaHeadset
} from 'react-icons/fa';
import './DocumentationPage.css';

const DocumentationPage = () => {
  const docSections = [
    {
      title: 'Getting Started',
      icon: FaCode,
      description: 'Quick start guides and setup instructions',
      articles: [
        'Installation Guide',
        'Configuration',
        'First Project Setup',
        'Development Environment'
      ]
    },
    {
      title: 'API Documentation',
      icon: FaServer,
      description: 'Complete API reference and integration guides',
      articles: [
        'Authentication',
        'Endpoints Reference',
        'Request/Response Formats',
        'Error Handling'
      ]
    },
    {
      title: 'Mobile Development',
      icon: FaMobile,
      description: 'Mobile app development guides and best practices',
      articles: [
        'React Native Setup',
        'iOS Development',
        'Android Development',
        'App Deployment'
      ]
    },
    {
      title: 'Cloud Services',
      icon: FaCloud,
      description: 'Cloud deployment and infrastructure guides',
      articles: [
        'AWS Setup',
        'Azure Configuration',
        'Docker Deployment',
        'CI/CD Pipelines'
      ]
    },
    {
      title: 'Best Practices',
      icon: FaBook,
      description: 'Coding standards and development best practices',
      articles: [
        'Code Style Guide',
        'Security Practices',
        'Performance Optimization',
        'Testing Guidelines'
      ]
    },
    {
      title: 'Troubleshooting',
      icon: FaCode,
      description: 'Common issues and solutions',
      articles: [
        'Common Errors',
        'Debugging Guide',
        'Performance Issues',
        'Migration Help'
      ]
    }
  ];

  return (
    <div className="documentation-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaBook className="badge-icon" />
                <span>Technical Documentation</span>
              </div>
              <h1 className="hero-title">
                Documentation <span className="highlight">Center</span>
              </h1>
              <p className="hero-subtitle">
                Comprehensive technical documentation, guides, and resources to help you build and deploy applications successfully.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="documentation-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Documentation Sections</h2>
            <p className="section-subtitle">
              Browse documentation by category
            </p>
          </div>
          <div className="docs-grid">
            {docSections.map((section, index) => (
              <div key={index} className="doc-card">
                <div className="doc-icon">
                  <section.icon />
                </div>
                <h3 className="doc-title">{section.title}</h3>
                <p className="doc-description">{section.description}</p>
                <ul className="doc-articles">
                  {section.articles.map((article, idx) => (
                    <li key={idx} className="doc-article-item">
                      <Link to="#" className="doc-article-link">
                        {article}
                        <FaArrowRight className="article-arrow" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Need More Help?</h3>
            <p className="cta-subtitle">
              Can't find what you're looking for? Contact our technical support team.
            </p>
            <div className="cta-actions">
              <Link to="/contact-support" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Contact Support
              </Link>
              <Link to="/api-reference" className="btn btn-outline">
                View API Reference
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
