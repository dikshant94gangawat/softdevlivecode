import React from 'react';
import styles from './MaintenanceSupportPage.module.css';
import Link from 'next/link';

import {
  FaTools, FaCheckCircle, FaArrowRight, FaHeadset, FaWrench,
  FaServer, FaShieldAlt, FaSync, FaChartLine, FaClock
} from 'react-icons/fa';

const MaintenanceSupportPage = () => {
  const services = [
    {
      icon: FaWrench,
      title: 'Ongoing Maintenance',
      description: 'Regular maintenance and updates to keep your systems running optimally.',
      features: ['System Updates', 'Performance Monitoring', 'Preventive Maintenance', 'Health Checks'],
      color: '#3b82f6'
    },
    {
      icon: FaServer,
      title: 'Infrastructure Support',
      description: 'Comprehensive support for your IT infrastructure and servers.',
      features: ['Server Management', 'Network Support', 'Infrastructure Monitoring', 'Capacity Planning'],
      color: '#10b981'
    },
    {
      icon: FaSync,
      title: 'Application Support',
      description: 'Ongoing support and maintenance for your applications and software.',
      features: ['Bug Fixes', 'Feature Updates', 'Performance Optimization', 'Version Control'],
      color: '#f59e0b'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Maintenance',
      description: 'Continuous security updates and patch management to protect your systems.',
      features: ['Security Patches', 'Vulnerability Management', 'Compliance', 'Security Audits'],
      color: '#ef4444'
    },
    {
      icon: FaClock,
      title: 'Proactive Monitoring',
      description: '24/7 monitoring and alerting to prevent issues before they occur.',
      features: ['Real-time Monitoring', 'Alert Systems', 'Performance Tracking', 'Incident Prevention'],
      color: '#8b5cf6'
    }
  ];

  const stats = [
    { number: '24/7', label: 'Support Available' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '1000+', label: 'Systems Maintained' },
    { number: '95%', label: 'Issue Prevention' }
  ];

  return (
    <div className={styles['maintenance-support-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaTools className={styles['badge-icon']} />
                <span>Comprehensive Maintenance & Support</span>
              </div>
              <h1 className={styles['hero-title']}>
                Reliable <span className={styles.highlight}>Maintenance & Support</span> Services
              </h1>
              <p className={styles['hero-subtitle']}>
                Keep your systems running smoothly with our comprehensive maintenance and support services. Proactive monitoring, regular updates, and expert support ensure optimal performance.
              </p>
              <div className={styles['hero-actions']}>
                <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                  <FaHeadset className={styles['btn-icon']} />
                  Get Support
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
            <h2 className={styles['section-title']}>Our Maintenance & Support Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive maintenance solutions to keep your systems running optimally
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
            <h3 className={styles['cta-title']}>Need Reliable Maintenance & Support?</h3>
            <p className={styles['cta-subtitle']}>
              Let's ensure your systems are always running smoothly with our expert maintenance services.
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

export default MaintenanceSupportPage;
