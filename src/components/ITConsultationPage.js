import React from 'react';
import styles from './ITConsultationPage.module.css';
import Link from 'next/link';

import {
  FaLightbulb, FaCheckCircle, FaArrowRight, FaHeadset, FaChartLine,
  FaCogs, FaShieldAlt, FaCloud, FaRocket, FaCode
} from 'react-icons/fa';

const ITConsultationPage = () => {
  const services = [
    {
      icon: FaChartLine,
      title: 'Technology Strategy',
      description: 'Strategic planning and roadmap development for your technology initiatives.',
      features: ['Tech Stack Selection', 'Architecture Planning', 'Digital Roadmap', 'ROI Analysis'],
      color: '#8b5cf6'
    },
    {
      icon: FaCogs,
      title: 'Architecture Review',
      description: 'Comprehensive review and optimization of your existing IT architecture.',
      features: ['System Analysis', 'Performance Audit', 'Scalability Review', 'Best Practices'],
      color: '#3b82f6'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Assessment',
      description: 'Security audits and compliance consulting to protect your digital assets.',
      features: ['Security Audits', 'Compliance Review', 'Risk Assessment', 'Security Strategy'],
      color: '#ef4444'
    },
    {
      icon: FaCloud,
      title: 'Cloud Migration',
      description: 'Expert guidance on migrating to cloud infrastructure and optimizing costs.',
      features: ['Migration Planning', 'Cost Optimization', 'Cloud Strategy', 'Multi-cloud'],
      color: '#10b981'
    },
    {
      icon: FaRocket,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting to modernize your business.',
      features: ['Transformation Roadmap', 'Process Optimization', 'Technology Adoption', 'Change Management'],
      color: '#f59e0b'
    }
  ];

  const stats = [
    { number: '300+', label: 'Consultations' },
    { number: '50+', label: 'Companies Helped' },
    { number: '40%', label: 'Avg Cost Savings' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className={styles['it-consultation-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaLightbulb className={styles['badge-icon']} />
                <span>Expert IT Consultation Services</span>
              </div>
              <h1 className={styles['hero-title']}>
                Strategic <span className={styles.highlight}>IT Consultation</span> for Your Business
              </h1>
              <p className={styles['hero-subtitle']}>
                Get expert technology guidance to make informed decisions, optimize your IT infrastructure, and accelerate your digital transformation journey.
              </p>
              <div className={styles['hero-actions']}>
                <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                  <FaHeadset className={styles['btn-icon']} />
                  Get Consultation
                </a></Link>
                <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
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
            <h2 className={styles['section-title']}>Our IT Consultation Services</h2>
            <p className={styles['section-subtitle']}>
              Strategic technology consulting to drive your business forward
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
            <h3 className={styles['cta-title']}>Ready for Expert IT Consultation?</h3>
            <p className={styles['cta-subtitle']}>
              Let's discuss how we can help optimize your technology strategy and infrastructure.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaHeadset className={styles['btn-icon']} />
                Get Started Today
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                Schedule Consultation
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITConsultationPage;
