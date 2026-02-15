import React from 'react';
import styles from './PythonDevelopmentPage.module.css';
import Link from 'next/link';
import {
  FaPython, FaCode, FaCheckCircle, FaArrowRight, FaHeadset,
  FaServer, FaDatabase, FaRobot, FaChartLine, FaCloud
} from 'react-icons/fa';
import { SiDjango, SiFlask, SiFastapi, SiTensorflow, SiPytorch } from 'react-icons/si';

const PythonDevelopmentPage = () => {
  const services = [
    {
      icon: FaPython,
      title: 'Python Web Development',
      description: 'Build scalable web applications with Django, Flask, and FastAPI frameworks.',
      features: ['Django/Flask', 'REST APIs', 'Microservices', 'FastAPI'],
      color: '#3776AB'
    },
    {
      icon: FaRobot,
      title: 'AI & Machine Learning',
      description: 'Develop AI/ML solutions with TensorFlow, PyTorch, and scikit-learn.',
      features: ['TensorFlow', 'PyTorch', 'ML Models', 'Data Science'],
      color: '#FF6F00'
    },
    {
      icon: FaDatabase,
      title: 'Data Analytics',
      description: 'Data processing, analysis, and visualization with Python libraries.',
      features: ['Pandas', 'NumPy', 'Data Visualization', 'ETL Pipelines'],
      color: '#4ECDC4'
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Robust backend systems with Python for APIs and server-side logic.',
      features: ['API Development', 'Database Integration', 'Authentication', 'Caching'],
      color: '#95A5A6'
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      description: 'Deploy Python applications to AWS, Azure, and GCP with CI/CD pipelines.',
      features: ['Cloud Deployment', 'Docker', 'CI/CD', 'Monitoring'],
      color: '#FF9900'
    }
  ];

  const stats = [
    { number: '300+', label: 'Python Projects' },
    { number: '50+', label: 'AI/ML Solutions' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className={styles['python-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaPython className={styles['badge-icon']} />
                <span>Expert Python Development</span>
              </div>
              <h1 className={styles['hero-title']}>
                Powerful <span className={styles.highlight}>Python Development</span> Solutions
              </h1>
              <p className={styles['hero-subtitle']}>
                Build scalable applications, AI/ML solutions, and data analytics platforms with Python. From web development to machine learning, we deliver comprehensive Python solutions.
              </p>
              <div className={styles['hero-actions']}>
                <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}><FaHeadset className={styles['btn-icon']} />Start Your Project</a></Link>
                <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>View Portfolio</a></Link>
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
            <h2 className={styles['section-title']}>Our Python Development Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive Python solutions for web, AI, and data analytics
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
            <h3 className={styles['cta-title']}>Ready to Build with Python?</h3>
            <p className={styles['cta-subtitle']}>
              Let's create powerful Python applications that drive your business forward.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}><FaHeadset className={styles['btn-icon']} />Get Started Today</a></Link>
              <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>Schedule Consultation</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonDevelopmentPage;

