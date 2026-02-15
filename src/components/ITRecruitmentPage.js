import React from 'react';
import styles from './ITRecruitmentPage.module.css';
import Link from 'next/link';

import {
  FaUsers, FaCheckCircle, FaArrowRight, FaHeadset, FaSearch,
  FaUserTie, FaBriefcase, FaHandshake, FaChartLine, FaGlobe
} from 'react-icons/fa';

const ITRecruitmentPage = () => {
  const services = [
    {
      icon: FaSearch,
      title: 'Technical Talent Acquisition',
      description: 'Find and recruit top-tier IT professionals across all technology stacks and domains.',
      features: ['Developer Sourcing', 'Technical Screening', 'Skill Assessment', 'Background Checks'],
      color: '#f59e0b'
    },
    {
      icon: FaUserTie,
      title: 'Permanent Placement',
      description: 'Full-time IT staffing solutions for long-term team building and organizational growth.',
      features: ['Full-time Hiring', 'Onboarding Support', 'Retention Strategies', 'Career Development'],
      color: '#3b82f6'
    },
    {
      icon: FaBriefcase,
      title: 'Contract Staffing',
      description: 'Flexible contract and temporary IT staffing for project-based needs.',
      features: ['Contract Hiring', 'Project-based Staffing', 'Remote Teams', 'Quick Deployment'],
      color: '#10b981'
    },
    {
      icon: FaChartLine,
      title: 'Salary Benchmarking',
      description: 'Market analysis and compensation consulting to attract and retain top talent.',
      features: ['Market Research', 'Salary Analysis', 'Benefits Planning', 'Competitive Packages'],
      color: '#8b5cf6'
    },
    {
      icon: FaGlobe,
      title: 'Remote Team Building',
      description: 'Build distributed teams with global talent access and remote collaboration expertise.',
      features: ['Global Talent Pool', 'Remote Onboarding', 'Team Integration', 'Cultural Fit'],
      color: '#ef4444'
    }
  ];

  const stats = [
    { number: '500+', label: 'Placements' },
    { number: '200+', label: 'Companies Served' },
    { number: '95%', label: 'Success Rate' },
    { number: '2-4 weeks', label: 'Avg Time to Hire' }
  ];

  return (
    <div className={styles['it-recruitment-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaUsers className={styles['badge-icon']} />
                <span>Expert IT Recruitment Services</span>
              </div>
              <h1 className={styles['hero-title']}>
                Find Top <span className={styles.highlight}>IT Talent</span> for Your Team
              </h1>
              <p className={styles['hero-subtitle']}>
                Connect with exceptional tech professionals or find your dream job. We specialize in IT recruitment, helping companies build high-performing teams and professionals advance their careers.
              </p>
              <div className={styles['hero-actions']}>
                <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                  <FaHeadset className={styles['btn-icon']} />
                  Start Hiring
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
            <h2 className={styles['section-title']}>Our IT Recruitment Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive talent acquisition solutions for your IT needs
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
            <h3 className={styles['cta-title']}>Ready to Build Your IT Team?</h3>
            <p className={styles['cta-subtitle']}>
              Let's find the perfect tech talent to drive your business forward.
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

export default ITRecruitmentPage;

