import React from 'react';
import styles from './TechSupportPage.module.css';
import Link from 'next/link';
import {
  FaHeadset, FaCheckCircle, FaArrowRight, FaHeadset as FaSupport, FaClock,
  FaShieldAlt, FaTools, FaServer, FaChartLine, FaBug
} from 'react-icons/fa';

const TechSupportPage = () => {
  const services = [
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your systems running smoothly.',
      features: ['24/7 Monitoring', 'Quick Response', 'Priority Support', 'Dedicated Team'],
      color: '#ef4444'
    },
    {
      icon: FaTools,
      title: 'System Maintenance',
      description: 'Regular maintenance and updates to ensure optimal system performance.',
      features: ['System Updates', 'Performance Tuning', 'Preventive Maintenance', 'Health Checks'],
      color: '#3b82f6'
    },
    {
      icon: FaBug,
      title: 'Bug Fixes & Troubleshooting',
      description: 'Rapid resolution of technical issues and bug fixes to minimize downtime.',
      features: ['Issue Resolution', 'Bug Fixes', 'Root Cause Analysis', 'Prevention'],
      color: '#f59e0b'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Management',
      description: 'Comprehensive security patch management and threat monitoring.',
      features: ['Security Patches', 'Threat Monitoring', 'Vulnerability Management', 'Compliance'],
      color: '#10b981'
    },
    {
      icon: FaServer,
      title: 'Backup & Recovery',
      description: 'Reliable backup solutions and disaster recovery planning.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Protection', 'Business Continuity'],
      color: '#8b5cf6'
    }
  ];

  const stats = [
    { number: '24/7', label: 'Support Available' },
    { number: '<1hr', label: 'Response Time' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '1000+', label: 'Issues Resolved' }
  ];

  return (
    <div className={styles['tech-support-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaHeadset className={styles['badge-icon']} />
                <span>24/7 Technical Support Services</span>
              </div>
              <h1 className={styles['hero-title']}>
                Reliable <span className={styles.highlight}>Tech Support</span> When You Need It
              </h1>
              <p className={styles['hero-subtitle']}>
                Comprehensive technical support and maintenance services to keep your systems running at peak performance. Available 24/7 to resolve issues quickly and efficiently.
              </p>
              <div className={styles['hero-actions']}>
                <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}><FaSupport className={styles['btn-icon']} />Get Support</a></Link>
                <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>View Services</a></Link>
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
            <h2 className={styles['section-title']}>Our Tech Support Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive support solutions to keep your systems running smoothly
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
                <Link href="/contact" legacyBehavior><a className={styles['service-cta']}>Get Started<FaArrowRight className={styles['cta-icon']} /></a></Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Need Reliable Tech Support?</h3>
            <p className={styles['cta-subtitle']}>
              Let's ensure your systems are always running smoothly with our expert support services.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}><FaSupport className={styles['btn-icon']} />Get Started Today</a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>Schedule Consultation</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSupportPage;
