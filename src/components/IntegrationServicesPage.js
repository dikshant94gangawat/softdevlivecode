import React from 'react';
import styles from './IntegrationServicesPage.module.css';
import Link from 'next/link';

import {
  FaCogs, FaRocket, FaUsers, FaLightbulb, FaCode, FaDesktop,
  FaMobile, FaDatabase, FaShieldAlt, FaChartLine, FaHeadset, FaServer,FaCloud,
  FaCheckCircle, FaArrowRight, FaStar, FaBuilding, FaGlobe, FaLock,
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaExchangeAlt
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiKubernetes
} from 'react-icons/si';

const IntegrationServicesPage = () => {
  const services = [
    {
      icon: FaExchangeAlt,
      title: 'API Integration & Development',
      description: 'Seamless API integrations that connect your systems and enable data flow across platforms.',
      color: '#00ffff',
      features: [
        'RESTful API Development',
        'GraphQL Implementation',
        'API Gateway Management',
        'Rate Limiting & Security',
        'API Documentation'
      ]
    },
    {
      icon: FaServer,
      title: 'Enterprise System Integration',
      description: 'Connect legacy systems with modern applications for unified business operations.',
      color: '#8a2be2',
      features: [
        'ERP Integration',
        'CRM System Connectivity',
        'Legacy System Modernization',
        'Database Synchronization',
        'Real-time Data Exchange'
      ]
    },
    {
      icon: FaCloud,
      title: 'Cloud Integration Services',
      description: 'Integrate cloud services and migrate systems to cloud platforms with zero downtime.',
      color: '#ffd700',
      features: [
        'Multi-cloud Integration',
        'Hybrid Cloud Setup',
        'Cloud Migration Services',
        'Serverless Integration',
        'Container Orchestration'
      ]
    },
    {
      icon: FaDatabase,
      title: 'Data Integration & ETL',
      description: 'Extract, transform, and load data across multiple systems for unified analytics.',
      color: '#ff6b6b',
      features: [
        'Data Pipeline Development',
        'Real-time Data Streaming',
        'Data Warehouse Integration',
        'ETL Process Automation',
        'Data Quality Management'
      ]
    },
    {
      icon: FaCogs,
      title: 'Workflow Automation',
      description: 'Automate business processes and workflows across integrated systems.',
      color: '#4ecdc4',
      features: [
        'Business Process Automation',
        'Workflow Design & Implementation',
        'Event-driven Architecture',
        'Notification Systems',
        'Process Monitoring'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Integration Solutions',
      description: 'Enterprise-grade security for all integrations and data exchanges.',
      color: '#ff9f43',
      features: [
        'OAuth 2.0 Implementation',
        'API Security Standards',
        'Data Encryption',
        'Access Control Management',
        'Compliance Frameworks'
      ]
    }
  ];

  const portfolio = [
    {
      title: 'Banking System Integration',
      category: 'Financial Services',
      description: 'Integrated core banking system with digital channels',
      image: '/images/integration-banking.jpg',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'Apache Kafka'],
      results: [
        'Connected 15+ legacy systems',
        '99.99% transaction reliability',
        '50% reduction in processing time'
      ]
    },
    {
      title: 'Healthcare Data Integration',
      category: 'Healthcare',
      description: 'Unified patient data across multiple hospital systems',
      image: '/images/integration-healthcare.jpg',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      results: [
        'Integrated 10+ hospital systems',
        'HIPAA compliant data flow',
        '40% improvement in care coordination'
      ]
    },
    {
      title: 'Retail Omnichannel Integration',
      category: 'Retail',
      description: 'Connected online and offline retail operations',
      image: '/images/integration-retail.jpg',
      technologies: ['Node.js', 'MongoDB', 'AWS', 'Kubernetes'],
      results: [
        'Unified inventory management',
        'Real-time order synchronization',
        '60% increase in operational efficiency'
      ]
    }
  ];

  const techStack = [
    {
      category: 'Integration Platforms',
      technologies: [
        { name: 'Apache Kafka', icon: FaServer },
        { name: 'RabbitMQ', icon: FaServer },
        { name: 'Apache Camel', icon: FaExchangeAlt },
        { name: 'MuleSoft', icon: FaCogs },
        { name: 'Zapier', icon: FaCogs }
      ]
    },
    {
      category: 'API Technologies',
      technologies: [
        { name: 'REST APIs', icon: FaCode },
        { name: 'GraphQL', icon: FaCode },
        { name: 'gRPC', icon: FaServer },
        { name: 'WebSockets', icon: FaExchangeAlt },
        { name: 'Webhooks', icon: FaCogs }
      ]
    },
    {
      category: 'Data Processing',
      technologies: [
        { name: 'Apache Spark', icon: FaDatabase },
        { name: 'Elasticsearch', icon: FaDatabase },
        { name: 'Redis', icon: FaDatabase },
        { name: 'Apache Airflow', icon: FaCogs },
        { name: 'Talend', icon: FaExchangeAlt }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      technologies: [
        { name: 'AWS', icon: FaAws },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Azure', icon: FaCloud },
        { name: 'Google Cloud', icon: FaCloud }
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Integration Assessment',
      description: 'Analyze existing systems and identify integration requirements and challenges.',
      icon: FaLightbulb,
      color: '#00ffff'
    },
    {
      step: '02',
      title: 'Integration Architecture',
      description: 'Design comprehensive integration architecture and data flow patterns.',
      icon: FaCogs,
      color: '#8a2be2'
    },
    {
      step: '03',
      title: 'API Development',
      description: 'Develop and implement APIs, middleware, and integration connectors.',
      icon: FaCode,
      color: '#ffd700'
    },
    {
      step: '04',
      title: 'Security Implementation',
      description: 'Implement security measures, authentication, and data protection.',
      icon: FaShieldAlt,
      color: '#ff6b6b'
    },
    {
      step: '05',
      title: 'Testing & Validation',
      description: 'Comprehensive testing of integration points and data integrity.',
      icon: FaServer,
      color: '#4ecdc4'
    },
    {
      step: '06',
      title: 'Deployment & Monitoring',
      description: 'Deploy integrations with monitoring, alerting, and maintenance.',
      icon: FaChartLine,
      color: '#ff9f43'
    }
  ];

  const testimonials = [
    {
      name: 'Thomas Anderson',
      company: 'CTO, GlobalTech Solutions',
      content: 'SoftDevSquad integrated our complex legacy systems seamlessly. The integration platform they built handles millions of transactions daily without issues.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Rachel Green',
      company: 'IT Director, MedConnect',
      content: 'Their integration expertise transformed our healthcare data management. Patient information now flows seamlessly across all our systems.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'David Park',
      company: 'Founder, RetailHub',
      content: 'The omnichannel integration they delivered unified our entire retail operation. Inventory, orders, and customer data are now perfectly synchronized.',
      rating: 5,
      avatar: '👨‍🚀'
    }
  ];

  const stats = [
    { number: '300+', label: 'Systems Integrated' },
    { number: '50+', label: 'Integration Projects' },
    { number: '99.9%', label: 'Data Accuracy' },
    { number: '24/7', label: 'Integration Monitoring' }
  ];

  return (
    <div className={styles['integration-services-page']}>
      {/* Hero Section */}
      <div className={styles['integration-services-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['integration-services-hero-content']}>
            <div className={styles['hero-badge']}>
              <FaExchangeAlt className={styles['badge-icon']} />
              <span>Integration Specialists</span>
            </div>
            <h1 className={styles['integration-services-hero-title']}>
              Connect Your <span className={styles.highlight}>Systems Seamlessly</span> With Expert Integration
            </h1>
            <p className={styles['integration-services-hero-subtitle']}>
              From API development to enterprise system integration, we connect your technology ecosystem for seamless data flow and unified operations.
            </p>
            <div className={styles['hero-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaRocket className={styles['btn-icon']} />
                Start Integration Project
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                View Integration Cases
              </a></Link>
            </div>
            <div className={styles['hero-stats']}>
              {stats.map((stat, index) => (
                <div key={index} className={styles['stat-item']}>
                  <div className={styles['stat-number']}>{stat.number}</div>
                  <div className={styles['stat-label']}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className={styles['integration-services-services']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Comprehensive Integration Services</h2>
            <p className={styles['section-subtitle']}>
              End-to-end integration solutions that connect your business systems
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
      </section>

      {/* Portfolio Section */}
      <section className={styles['integration-services-portfolio']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Integration Success Stories</h2>
            <p className={styles['section-subtitle']}>
              Complex integration projects we've delivered across industries
            </p>
          </div>
          <div className={styles['portfolio-grid']}>
            {portfolio.map((project, index) => (
              <div key={index} className={styles['portfolio-card']}>
                <div className={styles['portfolio-image']}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={styles['portfolio-image-placeholder']} style={{ display: 'none' }}>
                    <FaExchangeAlt size={60} style={{ color: '#00ffff' }} />
                  </div>
                  <div className={styles['portfolio-overlay']}>
                    <div className={styles['portfolio-category']}>{project.category}</div>
                  </div>
                </div>
                <div className={styles['portfolio-content']}>
                  <h3 className={styles['portfolio-title']}>{project.title}</h3>
                  <p className={styles['portfolio-description']}>{project.description}</p>
                  <div className={styles['portfolio-technologies']}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={styles['tech-tag']}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles['portfolio-results']}>
                    {project.results.map((result, idx) => (
                      <div key={idx} className={styles['result-item']}>
                        <FaCheckCircle className={styles['result-icon']} />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className={styles['integration-services-tech-stack']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Integration Technology Stack</h2>
            <p className={styles['section-subtitle']}>
              Proven technologies for reliable and scalable system integrations
            </p>
          </div>
          <div className={styles['tech-categories']}>
            {techStack.map((category, index) => (
              <div key={index} className={styles['tech-category']}>
                <h3 className={styles['category-title']}>{category.category}</h3>
                <div className={styles['tech-items']}>
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className={styles['tech-item']}>
                      <tech.icon className={styles['tech-icon']} />
                      <span className={styles['tech-name']}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles['integration-services-process']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Integration Process</h2>
            <p className={styles['section-subtitle']}>
              Proven methodology for successful system integrations
            </p>
          </div>
          <div className={styles['process-steps']}>
            {process.map((step, index) => (
              <div key={index} className={styles['process-step']}>
                <div className={styles['step-number']} style={{ backgroundColor: step.color }}>
                  {step.step}
                </div>
                <div className={styles['step-icon']} style={{ color: step.color }}>
                  <step.icon />
                </div>
                <h3 className={styles['step-title']}>{step.title}</h3>
                <p className={styles['step-description']}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles['integration-services-testimonials']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Integration Success Stories</h2>
            <p className={styles['section-subtitle']}>
              What our clients say about their system integration projects
            </p>
          </div>
          <div className={styles['testimonials-grid']}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles['testimonial-card']}>
                <div className={styles['testimonial-rating']}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={styles['star-icon']} />
                  ))}
                </div>
                <p className={styles['testimonial-content']}>"{testimonial.content}"</p>
                <div className={styles['testimonial-author']}>
                  <div className={styles['author-avatar']}>{testimonial.avatar}</div>
                  <div className={styles['author-info']}>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles['integration-services-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h2 className={styles['cta-title']}>Ready to Integrate Your Systems?</h2>
            <p className={styles['cta-subtitle']}>
              Let's connect your technology ecosystem for seamless operations and improved efficiency.
            </p>
            <div className={styles['cta-buttons']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaRocket className={styles['btn-icon']} />
                Start Integration
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                <FaUsers className={styles['btn-icon']} />
                Schedule Consultation
              </a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationServicesPage;
