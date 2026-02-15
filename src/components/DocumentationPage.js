import React from 'react';
import styles from './DocumentationPage.module.css';
import Link from 'next/link';

import {
  FaBook, FaCode, FaServer, FaMobile, FaCloud, FaArrowRight, FaHeadset
} from 'react-icons/fa';

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
    <div className={styles['documentation-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaBook className={styles['badge-icon']} />
                <span>Technical Documentation</span>
              </div>
              <h1 className={styles['hero-title']}>
                Documentation <span className={styles.highlight}>Center</span>
              </h1>
              <p className={styles['hero-subtitle']}>
                Comprehensive technical documentation, guides, and resources to help you build and deploy applications successfully.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['documentation-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Documentation Sections</h2>
            <p className={styles['section-subtitle']}>
              Browse documentation by category
            </p>
          </div>
          <div className={styles['docs-grid']}>
            {docSections.map((section, index) => (
              <div key={index} className={styles['doc-card']}>
                <div className={styles['doc-icon']}>
                  <section.icon />
                </div>
                <h3 className={styles['doc-title']}>{section.title}</h3>
                <p className={styles['doc-description']}>{section.description}</p>
                <ul className={styles['doc-articles']}>
                  {section.articles.map((article, idx) => (
                    <li key={idx} className={styles['doc-article-item']}>
                      <Link href="#" legacyBehavior><a className={styles['doc-article-link']}>
                        {article}
                        <FaArrowRight className={styles['article-arrow']} />
                      </a></Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Need More Help?</h3>
            <p className={styles['cta-subtitle']}>
              Can't find what you're looking for? Contact our technical support team.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact-support" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                <FaHeadset className={styles['btn-icon']} />
                Contact Support
              </a></Link>
              <Link href="/api-reference" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
                View API Reference
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
