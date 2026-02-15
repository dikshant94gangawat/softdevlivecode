import React from 'react';
import styles from './ReactNativePage.module.css';
import Link from 'next/link';
import {
  FaMobile, FaCode, FaCheckCircle, FaArrowRight, FaHeadset,
  FaReact, FaApple, FaAndroid, FaCloud, FaShieldAlt
} from 'react-icons/fa';
import { SiReact, SiFlutter } from 'react-icons/si';

const ReactNativePage = () => {
  const services = [
    {
      icon: FaMobile,
      title: 'Cross-Platform Development',
      description: 'Build native mobile apps for iOS and Android with a single codebase using React Native.',
      features: ['iOS & Android', 'Single Codebase', 'Native Performance', 'Code Reusability'],
      color: '#61dafb'
    },
    {
      icon: FaApple,
      title: 'iOS Development',
      description: 'Native iOS applications with React Native, ensuring smooth performance and native look and feel.',
      features: ['Swift Integration', 'App Store Ready', 'iOS Design Guidelines', 'Performance Optimized'],
      color: '#007AFF'
    },
    {
      icon: FaAndroid,
      title: 'Android Development',
      description: 'High-performance Android apps built with React Native, following Material Design principles.',
      features: ['Material Design', 'Play Store Ready', 'Kotlin Integration', 'Optimized Performance'],
      color: '#3DDC84'
    },
    {
      icon: FaCloud,
      title: 'Backend Integration',
      description: 'Seamless integration with REST APIs, GraphQL, and real-time services for your mobile apps.',
      features: ['REST APIs', 'GraphQL', 'Real-time Sync', 'Push Notifications'],
      color: '#FF6B6B'
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Testing',
      description: 'Comprehensive security measures and automated testing to ensure app reliability and user data protection.',
      features: ['Security Audits', 'Automated Testing', 'Performance Testing', 'Bug Fixes'],
      color: '#4ECDC4'
    }
  ];

  const stats = [
    { number: '200+', label: 'Mobile Apps' },
    { number: '50M+', label: 'Downloads' },
    { number: '4.8', label: 'Avg Rating' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className={styles['react-native-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaMobile className={styles['badge-icon']} />
                <span>Expert React Native Development</span>
              </div>
              <h1 className={styles['hero-title']}>
                Build <span className={styles.highlight}>React Native</span> Mobile Apps
              </h1>
              <p className={styles['hero-subtitle']}>
                Create powerful, cross-platform mobile applications with React Native. One codebase for iOS and Android, delivering native performance and user experience.
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
            <h2 className={styles['section-title']}>Our React Native Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive mobile app development services
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
            <h3 className={styles['cta-title']}>Ready to Build Your Mobile App?</h3>
            <p className={styles['cta-subtitle']}>
              Let's create a powerful React Native application that works seamlessly on iOS and Android.
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

export default ReactNativePage;

