import React from 'react';
import styles from './CloudSolutionsPage.module.css';
import Link from 'next/link';

import {
  FaCloud, FaCheckCircle, FaArrowRight, FaHeadset, FaAws,
  FaServer, FaShieldAlt, FaDatabase, FaChartLine
} from 'react-icons/fa';
import { SiMicrosoftazure, SiGooglecloud, SiDocker, SiKubernetes } from 'react-icons/si';

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
    <div className={styles['cloud-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaCloud className={styles['badge-icon']} />
                <span>Expert Cloud Solutions</span>
              </div>
              <h1 className={styles['hero-title']}>
                Scalable <span className={styles.highlight}>Cloud Solutions</span> for Your Business
              </h1>
              <p className={styles['hero-subtitle']}>
                Migrate to the cloud, optimize infrastructure, and scale your applications with AWS, Azure, and GCP solutions.
              </p>
              <div className={styles['hero-actions']}>
                <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                  <FaHeadset className={styles['btn-icon']} />
                  Start Your Project
                </a></Link>
                <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                  View Portfolio
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
            <h2 className={styles['section-title']}>Our Cloud Solutions</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive cloud services across major platforms
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
            <h3 className={styles['cta-title']}>Ready to Move to the Cloud?</h3>
            <p className={styles['cta-subtitle']}>
              Let's migrate your infrastructure and scale your applications in the cloud.
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

export default CloudSolutionsPage;
