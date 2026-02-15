import React from 'react';
import styles from './DigitalTransformationPage.module.css';
import Link from 'next/link';

import {
  FaRocket, FaCheckCircle, FaArrowRight, FaHeadset, FaChartLine,
  FaCloud, FaMobile, FaCogs, FaUsers, FaLightbulb
} from 'react-icons/fa';

const DigitalTransformationPage = () => {
  const services = [
    {
      icon: FaChartLine,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategy and roadmap development.',
      features: ['Strategy Planning', 'Digital Roadmap', 'Change Management', 'ROI Analysis'],
      color: '#3b82f6'
    },
    {
      icon: FaCloud,
      title: 'Cloud Transformation',
      description: 'Migrate to cloud infrastructure and modernize your IT environment.',
      features: ['Cloud Migration', 'Infrastructure Modernization', 'Cost Optimization', 'Scalability'],
      color: '#10b981'
    },
    {
      icon: FaMobile,
      title: 'Digital Platforms',
      description: 'Build modern digital platforms and customer-facing applications.',
      features: ['Platform Development', 'API Integration', 'Mobile Solutions', 'User Experience'],
      color: '#f59e0b'
    },
    {
      icon: FaCogs,
      title: 'Process Automation',
      description: 'Automate business processes to improve efficiency and reduce costs.',
      features: ['Workflow Automation', 'RPA Solutions', 'Integration', 'Efficiency Gains'],
      color: '#8b5cf6'
    },
    {
      icon: FaUsers,
      title: 'Change Management',
      description: 'Support your team through digital transformation with expert change management.',
      features: ['Training Programs', 'Adoption Support', 'Communication', 'Cultural Change'],
      color: '#ef4444'
    }
  ];

  const stats = [
    { number: '100+', label: 'Transformations' },
    { number: '50%', label: 'Avg Efficiency Gain' },
    { number: '30%', label: 'Cost Reduction' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className={styles['digital-transformation-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaRocket className={styles['badge-icon']} />
                <span>Expert Digital Transformation Services</span>
              </div>
              <h1 className={styles['hero-title']}>
                Transform Your Business with <span className={styles.highlight}>Digital Solutions</span>
              </h1>
              <p className={styles['hero-subtitle']}>
                Accelerate your digital transformation journey with comprehensive solutions that modernize your operations, improve efficiency, and drive business growth.
              </p>
              <div className={styles['hero-actions']}>
                <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                  <FaHeadset className={styles['btn-icon']} />
                  Start Transformation
                </a></Link>
                <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
                  View Services
                </a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['hero-stats-section']}>
        <div className={styles.container}>
          <div className={styles['hero-stats']}>
            {stats.map((stat, index) => (
              <div key={index} className={styles['stat-item']}>
                <span className={styles['stat-number']}>{stat.number}</span>
                <span className={styles['stat-label']}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['services-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Digital Transformation Services</h2>
            <p className={styles['section-subtitle']}>
              End-to-end solutions to modernize and transform your business
            </p>
          </div>
          <div className={styles['services-grid']}>
            {services.map((service, index) => (
              <div key={index} className={styles['service-card']}>
                <div className={styles['service-icon']} style={{ color: service.color }}>
                  <service.icon />
                </div>
                <h3 className={styles['service-title']}>{service.title}</h3>
                <p className={styles['service-description']}>{service.description}</p>
                <ul className={styles['service-features']}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles['service-feature']}>
                      <FaCheckCircle className={styles['feature-icon']} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" legacyBehavior><a className={styles['service-cta']}>
                  Get Started
                  <FaArrowRight className={styles['cta-icon']} />
                </a></Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Transform Your Business?</h3>
            <p className={styles['cta-subtitle']}>
              Let's discuss how digital transformation can drive your business forward.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                <FaHeadset className={styles['btn-icon']} />
                Get Started Today
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
                Schedule Consultation
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;
