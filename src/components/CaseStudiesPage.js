import React from 'react';
import styles from './CaseStudiesPage.module.css';
import Link from 'next/link';

import {
  FaFileAlt, FaCheckCircle, FaArrowRight, FaHeadset, FaChartLine,
  FaUsers, FaDollarSign, FaClock, FaRocket
} from 'react-icons/fa';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'Digital Banking Transformation',
      client: 'Leading Financial Institution',
      industry: 'FinTech',
      challenge: 'Legacy banking system with poor user experience and high maintenance costs.',
      solution: 'Developed modern digital banking platform with React Native mobile app and Node.js backend.',
      results: [
        { metric: '500K+', label: 'Active Users' },
        { metric: '40%', label: 'Faster Transactions' },
        { metric: '99.9%', label: 'Uptime' },
        { metric: '60%', label: 'Cost Reduction' }
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      duration: '6 months'
    },
    {
      title: 'Telemedicine Platform Launch',
      client: 'Healthcare Network',
      industry: 'HealthTech',
      challenge: 'Need for remote patient consultations and health monitoring during pandemic.',
      solution: 'Built comprehensive telemedicine platform with video consultations and IoT integration.',
      results: [
        { metric: '100K+', label: 'Patients Served' },
        { metric: '50%', label: 'Cost Reduction' },
        { metric: '95%', label: 'Patient Satisfaction' },
        { metric: '30%', label: 'Readmission Reduction' }
      ],
      technologies: ['React', 'Node.js', 'WebRTC', 'IoT'],
      duration: '4 months'
    },
    {
      title: 'E-commerce Marketplace Development',
      client: 'Retail Startup',
      industry: 'E-commerce',
      challenge: 'Building scalable multi-vendor marketplace from scratch.',
      solution: 'Created full-stack e-commerce platform with advanced search, payment integration, and inventory management.',
      results: [
        { metric: '10K+', label: 'Products Listed' },
        { metric: '50K+', label: 'Active Users' },
        { metric: '$2M+', label: 'Revenue Generated' },
        { metric: '4.8', label: 'App Rating' }
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      duration: '5 months'
    },
    {
      title: 'AI-Powered Trading System',
      client: 'Investment Firm',
      industry: 'FinTech',
      challenge: 'Manual trading processes limiting scalability and profitability.',
      solution: 'Developed AI-powered algorithmic trading system with machine learning models.',
      results: [
        { metric: '85%', label: 'Success Rate' },
        { metric: '$50M+', label: 'Trades Executed' },
        { metric: '24/7', label: 'Operations' },
        { metric: '95%', label: 'Risk Reduction' }
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      duration: '8 months'
    },
    {
      title: 'EdTech Learning Platform',
      client: 'Education Company',
      industry: 'EdTech',
      challenge: 'Need for personalized learning experience for students.',
      solution: 'Built AI-powered adaptive learning platform with content personalization.',
      results: [
        { metric: '20K+', label: 'Students' },
        { metric: '100+', label: 'Courses' },
        { metric: '85%', label: 'Completion Rate' },
        { metric: '40%', label: 'Performance Improvement' }
      ],
      technologies: ['Vue.js', 'Django', 'TensorFlow', 'Redis'],
      duration: '7 months'
    },
    {
      title: 'Enterprise ERP Implementation',
      client: 'Manufacturing Company',
      industry: 'Enterprise',
      challenge: 'Fragmented systems causing inefficiencies and data silos.',
      solution: 'Implemented comprehensive ERP system integrating finance, HR, and operations.',
      results: [
        { metric: '40%', label: 'Efficiency Gain' },
        { metric: '50%', label: 'Cost Reduction' },
        { metric: '99.9%', label: 'Uptime' },
        { metric: '24/7', label: 'Support' }
      ],
      technologies: ['React', 'Java', 'PostgreSQL', 'Azure'],
      duration: '10 months'
    }
  ];

  return (
    <div className={styles['case-studies-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaFileAlt className={styles['badge-icon']} />
                <span>Success Stories</span>
              </div>
              <h1 className={styles['hero-title']}>
                Case <span className={styles.highlight}>Studies</span>
              </h1>
              <p className={styles['hero-subtitle']}>
                Detailed insights into how we've helped businesses transform and achieve remarkable results through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['case-studies-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Featured Case Studies</h2>
            <p className={styles['section-subtitle']}>
              Real projects, real results, real impact
            </p>
          </div>
          <div className={styles['case-studies-grid']}>
            {caseStudies.map((study, index) => (
              <div key={index} className={styles['case-study-card']}>
                <div className={styles['case-study-header']}>
                  <div className={styles['case-study-industry']}>{study.industry}</div>
                  <div className={styles['case-study-duration']}>
                    <FaClock /> {study.duration}
                  </div>
                </div>
                <h3 className={styles['case-study-title']}>{study.title}</h3>
                <p className={styles['case-study-client']}><strong>Client:</strong> {study.client}</p>
                
                <div className={styles['case-study-section']}>
                  <h4 className={styles['section-label']}>Challenge</h4>
                  <p className={styles['case-study-text']}>{study.challenge}</p>
                </div>

                <div className={styles['case-study-section']}>
                  <h4 className={styles['section-label']}>Solution</h4>
                  <p className={styles['case-study-text']}>{study.solution}</p>
                </div>

                <div className={styles['case-study-results']}>
                  <h4 className={styles['section-label']}>Results</h4>
                  <div className={styles['results-grid']}>
                    {study.results.map((result, idx) => (
                      <div key={idx} className={styles['result-card']}>
                        <div className={styles['result-metric']}>{result.metric}</div>
                        <div className={styles['result-label']}>{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles['case-study-technologies']}>
                  <h4 className={styles['section-label']}>Technologies Used</h4>
                  <div className={styles['tech-tags']}>
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className={styles['tech-tag']}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Create Your Success Story?</h3>
            <p className={styles['cta-subtitle']}>
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaHeadset className={styles['btn-icon']} />
                Get Started
              </a></Link>
              <Link href="/portfolio" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                View Portfolio
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
