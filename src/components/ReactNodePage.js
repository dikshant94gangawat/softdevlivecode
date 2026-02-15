import React from 'react';
import styles from './ReactNodePage.module.css';
import Link from 'next/link';
import {
  FaReact, FaNodeJs, FaCode, FaServer, FaDatabase, FaCloud,
  FaCheckCircle, FaArrowRight, FaHeadset, FaStar, FaUsers,
  FaMobile, FaGlobe, FaShieldAlt, FaRocket
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';

const ReactNodePage = () => {
  const services = [
    {
      icon: FaReact,
      title: 'React Development',
      description: 'Build modern, interactive user interfaces with React. We create scalable single-page applications with component-based architecture.',
      features: ['Component Architecture', 'State Management', 'Performance Optimization', 'React Hooks'],
      color: '#61dafb'
    },
    {
      icon: FaNodeJs,
      title: 'Node.js Backend',
      description: 'Robust server-side applications using Node.js. We develop RESTful APIs, microservices, and real-time applications.',
      features: ['RESTful APIs', 'Microservices', 'Real-time Apps', 'Express.js'],
      color: '#339933'
    },
    {
      icon: SiNextdotjs,
      title: 'Next.js Full Stack',
      description: 'Server-side rendered and static site generation with Next.js for optimal performance and SEO.',
      features: ['SSR/SSG', 'API Routes', 'Image Optimization', 'SEO Friendly'],
      color: '#000000'
    },
    {
      icon: SiTypescript,
      title: 'TypeScript Development',
      description: 'Type-safe development with TypeScript for better code quality, maintainability, and developer experience.',
      features: ['Type Safety', 'Better IDE Support', 'Refactoring', 'Documentation'],
      color: '#3178c6'
    },
    {
      icon: FaDatabase,
      title: 'Database Integration',
      description: 'Seamless integration with MongoDB, PostgreSQL, and other databases for efficient data management.',
      features: ['MongoDB', 'PostgreSQL', 'Data Modeling', 'Query Optimization'],
      color: '#47a248'
    },
    {
      icon: FaCloud,
      title: 'Cloud Deployment',
      description: 'Deploy your React and Node.js applications to AWS, Vercel, Heroku, and other cloud platforms.',
      features: ['AWS Deployment', 'CI/CD Pipelines', 'Auto Scaling', 'Monitoring'],
      color: '#ff9900'
    }
  ];

  const technologies = [
    { name: 'React.js', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'GraphQL', icon: FaCode }
  ];

  const stats = [
    { number: '500+', label: 'React Projects' },
    { number: '300+', label: 'Node.js Applications' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className={styles['react-node-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaReact className={styles['badge-icon']} />
                <span>Expert React & Node.js Development</span>
              </div>
              <h1 className={styles['hero-title']}>
                Powerful <span className={styles.highlight}>React & Node.js</span> Solutions
              </h1>
              <p className={styles['hero-subtitle']}>
                Build modern, scalable web applications with React and Node.js. From frontend interfaces to backend APIs, we deliver full-stack solutions that drive business growth.
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
            <h2 className={styles['section-title']}>Our React & Node.js Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive development services for building modern web applications
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

      <div className={styles['technologies-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Technologies We Use</h2>
            <p className={styles['section-subtitle']}>
              Modern tools and frameworks for building exceptional applications
            </p>
          </div>
          <div className={styles['technologies-grid']}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles['tech-card']}>
                <tech.icon className={styles['tech-icon']} />
                <span className={styles['tech-name']}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Build with React & Node.js?</h3>
            <p className={styles['cta-subtitle']}>
              Let's create powerful, scalable web applications that drive your business forward.
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

export default ReactNodePage;

