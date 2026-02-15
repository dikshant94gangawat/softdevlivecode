import React from 'react';
import styles from './EnterprisesPage.module.css';
import Link from 'next/link';

import {
  FaBuilding, FaIndustry, FaNetworkWired, FaShieldAlt, FaCloud, FaDatabase,
  FaCogs, FaChartLine, FaUsers, FaStar, FaCheckCircle, FaArrowRight, FaHeadset,
  FaLaptop, FaGlobe, FaLock, FaRocket, FaCode, FaServer, FaMicrochip, FaLayerGroup,
  FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaMicrosoft
} from 'react-icons/fa';
import { 
  SiSpringboot, SiDotnet, SiKubernetes, SiElasticsearch, SiMongodb, 
  SiPostgresql, SiRedis, SiOracle, SiJenkins
} from 'react-icons/si';

const EnterprisesPage = () => {
  const services = [
    {
      icon: FaIndustry,
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies that modernize legacy systems, optimize workflows, and drive innovation across your enterprise.',
      features: ['Legacy Modernization', 'Process Automation', 'Digital Strategy', 'Change Management'],
      color: '#2c3e50'
    },
    {
      icon: FaNetworkWired,
      title: 'Enterprise Architecture',
      description: 'Scalable, secure, and robust enterprise architecture solutions designed to handle complex business requirements and high-volume operations.',
      features: ['System Integration', 'Microservices Architecture', 'API Management', 'Scalability Planning'],
      color: '#e74c3c'
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security solutions with comprehensive compliance frameworks to protect your critical business assets and data.',
      features: ['Security Audits', 'Compliance Management', 'Risk Assessment', 'Incident Response'],
      color: '#f39c12'
    },
    {
      icon: FaCloud,
      title: 'Cloud Infrastructure',
      description: 'Enterprise cloud solutions with multi-cloud strategies, hybrid deployments, and advanced DevOps practices for optimal performance.',
      features: ['Multi-Cloud Strategy', 'Hybrid Solutions', 'DevOps Integration', 'Cost Optimization'],
      color: '#3498db'
    },
    {
      icon: FaDatabase,
      title: 'Big Data & Analytics',
      description: 'Advanced data analytics platforms, business intelligence solutions, and AI-powered insights for data-driven decision making.',
      features: ['Data Warehousing', 'Real-time Analytics', 'Machine Learning', 'Business Intelligence'],
      color: '#9b59b6'
    },
    {
      icon: FaCogs,
      title: 'Enterprise Applications',
      description: 'Custom enterprise applications including ERP, CRM, HRM, and specialized business solutions tailored to your industry needs.',
      features: ['ERP Systems', 'CRM Solutions', 'Custom Applications', 'Third-party Integrations'],
      color: '#1abc9c'
    }
  ];

  const portfolio = [
    {
      title: 'Global Manufacturing ERP',
      description: 'Complete ERP transformation for multinational manufacturing corporation with 50+ locations worldwide.',
      image: '/images/enterprise-portfolio-1.jpg',
      technologies: ['SAP', 'Oracle', 'Java', 'AWS', 'Kubernetes'],
      metrics: { locations: '50+', users: '10K+', efficiency: '+65%', savings: '$5M+' },
      industry: 'Manufacturing'
    },
    {
      title: 'Financial Services Platform',
      description: 'Core banking system modernization with real-time processing, regulatory compliance, and advanced security.',
      image: '/images/enterprise-portfolio-2.jpg',
      technologies: ['Spring Boot', 'Microservices', 'PostgreSQL', 'Redis', 'Docker'],
      metrics: { transactions: '1M+/day', uptime: '99.99%', compliance: '100%', users: '500K+' },
      industry: 'Financial Services'
    },
    {
      title: 'Healthcare Data Platform',
      description: 'Enterprise healthcare data platform with AI-powered analytics, HIPAA compliance, and interoperability.',
      image: '/images/enterprise-portfolio-3.jpg',
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'MongoDB', 'Azure'],
      metrics: { patients: '1M+', hospitals: '100+', data_points: '1B+', accuracy: '99.5%' },
      industry: 'Healthcare'
    }
  ];

  const techStack = [
    {
      category: 'Enterprise Frameworks',
      technologies: [
        { name: 'Spring Boot', icon: SiSpringboot },
        { name: '.NET Core', icon: SiDotnet },
        { name: 'Java EE', icon: FaJava },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Python', icon: FaPython }
      ]
    },
    {
      category: 'Database Systems',
      technologies: [
        { name: 'Oracle', icon: SiOracle },
        { name: 'SQL Server', icon: FaMicrosoft },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Cassandra', icon: FaDatabase }
      ]
    },
    {
      category: 'Cloud Platforms',
      technologies: [
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: FaMicrosoft },
        { name: 'Google Cloud', icon: FaCloud },
        { name: 'IBM Cloud', icon: FaCloud },
        { name: 'Private Cloud', icon: FaBuilding }
      ]
    },
    {
      category: 'Enterprise Tools',
      technologies: [
        { name: 'SAP', icon: FaChartLine },
        { name: 'Salesforce', icon: FaCloud },
        { name: 'ServiceNow', icon: FaCogs },
        { name: 'Tableau', icon: FaChartLine },
        { name: 'Power BI', icon: FaChartLine }
      ]
    },
    {
      category: 'DevOps & Security',
      technologies: [
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Docker', icon: FaDocker },
        { name: 'Jenkins', icon: SiJenkins },
        { name: 'Terraform', icon: FaCode },
        { name: 'Security Tools', icon: FaLock }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      company: 'CTO, Global Manufacturing Corp',
      text: 'SoftDevSquad delivered a world-class ERP transformation that increased our operational efficiency by 65% across 50+ locations. Their enterprise expertise is unmatched.',
      rating: 5,
      image: '/images/testimonial-enterprise-1.jpg'
    },
    {
      name: 'Sarah Williams',
      company: 'Chief Technology Officer, MegaBank',
      text: 'The core banking modernization project was executed flawlessly. 99.99% uptime with 1M+ daily transactions and full regulatory compliance achieved.',
      rating: 5,
      image: '/images/testimonial-enterprise-2.jpg'
    },
    {
      name: 'Dr. James Rodriguez',
      company: 'VP Technology, HealthSystem Alliance',
      text: 'Their healthcare data platform revolutionized our operations. Processing 1B+ data points with 99.5% accuracy while maintaining HIPAA compliance.',
      rating: 5,
      image: '/images/testimonial-enterprise-3.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Projects' },
    { number: '99.99%', label: 'System Uptime' },
    { number: '$100M+', label: 'Cost Savings Generated' },
    { number: '24/7', label: 'Enterprise Support' }
  ];

  const enterpriseSolutions = [
    {
      category: 'Scalability',
      title: 'Handle Enterprise Scale',
      description: 'Solutions designed for millions of users and transactions',
      icon: FaRocket,
      benefits: ['High Performance', 'Auto-scaling', 'Load Balancing', 'Global Distribution']
    },
    {
      category: 'Security',
      title: 'Enterprise-Grade Security',
      description: 'Multi-layered security with compliance and governance',
      icon: FaShieldAlt,
      benefits: ['Zero Trust Architecture', 'Data Encryption', 'Audit Trails', 'Compliance Ready']
    },
    {
      category: 'Integration',
      title: 'Seamless Integration',
      description: 'Connect with existing enterprise systems and workflows',
      icon: FaLayerGroup,
      benefits: ['API-First Design', 'Legacy Integration', 'Real-time Sync', 'Data Migration']
    },
    {
      category: 'Support',
      title: '24/7 Enterprise Support',
      description: 'Dedicated support teams for mission-critical systems',
      icon: FaHeadset,
      benefits: ['Dedicated Teams', 'SLA Guarantee', 'Proactive Monitoring', 'Incident Response']
    }
  ];

  return (
    <div className={styles['enterprises-page']}>
      {/* Hero Section */}
      <div className={styles['enterprises-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['enterprises-hero-content']}>
            <div className={styles['hero-badge']}>
              <FaBuilding className={styles['badge-icon']} />
              <span>Leading Enterprise Technology Partner</span>
            </div>
            <h1 className={styles['enterprises-hero-title']}>
              Scale Your <span className={styles.highlight}>Enterprise Success</span> with Advanced Technology
            </h1>
            <p className={styles['enterprises-hero-subtitle']}>
              Transform your large-scale operations with enterprise-grade solutions that deliver performance, security, and scalability for global organizations.
            </p>
            <div className={styles['hero-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaHeadset className={styles['btn-icon']} />
                Start Enterprise Consultation
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                View Enterprise Portfolio
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

      {/* Enterprise Solutions Section */}
      <section className={styles['enterprise-solutions']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Why Global Enterprises Choose Us</h2>
            <p className={styles['section-subtitle']}>
              Proven expertise in delivering mission-critical solutions for large-scale organizations
            </p>
          </div>
          <div className={styles['services-grid']}>
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className={styles['service-card']}>
                <div className={styles['service-icon']} style={{ color: solution.color || '#00ffff' }}>
                  <solution.icon />
                </div>
                <div className={styles['solution-category']}>{solution.category}</div>
                <h3 className={styles['service-title']}>{solution.title}</h3>
                <p className={styles['service-description']}>{solution.description}</p>

                <ul className={styles['service-features']}>
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className={styles['service-feature']}>
                      <FaCheckCircle className={styles['feature-icon']} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" legacyBehavior><a className={styles['service-cta']}>
                  Learn More
                  <FaArrowRight className={styles['cta-icon']} />
                </a></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles['enterprises-services']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Enterprise Development Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive technology solutions for large-scale enterprise operations
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
      <section className={styles['enterprises-portfolio']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Enterprise Success Stories</h2>
            <p className={styles['section-subtitle']}>
              Large-scale transformations that delivered measurable business impact
            </p>
          </div>
          <div className={styles['portfolio-grid']}>
            {portfolio.map((project, index) => (
              <div key={index} className={styles['portfolio-card']}>
                <div className={styles['portfolio-image']}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles['portfolio-overlay']}>
                    <div className={styles['portfolio-industry']}>{project.industry}</div>
                    <div className={styles['portfolio-metrics']}>
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className={styles['metric-item']}>
                          <span className={styles['metric-value']}>{value}</span>
                          <span className={styles['metric-label']}>{key.replace('_', ' ')}</span>
                        </div>
                      ))}
                    </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className={styles['tech-stack']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Enterprise Technology Stack</h2>
            <p className={styles['section-subtitle']}>
              Industry-leading technologies for mission-critical enterprise solutions
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

      {/* Testimonials Section */}
      <section className={styles['enterprises-testimonials']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>What Enterprise Leaders Say</h2>
            <p className={styles['section-subtitle']}>
              Success stories from executives who transformed their organizations
            </p>
          </div>
          <div className={styles['testimonials-grid']}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles['testimonial-card']}>
                <div className={styles['testimonial-content']}>
                  <div className={styles['testimonial-stars']}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className={styles.star} />
                    ))}
                  </div>
                  <p className={styles['testimonial-text']}>"{testimonial.text}"</p>
                </div>
                <div className={styles['testimonial-author']}>
                  <div className={styles['author-avatar']}>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className={styles['author-info']}>
                    <h4 className={styles['author-name']}>{testimonial.name}</h4>
                    <p className={styles['author-company']}>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles['enterprises-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h2 className={styles['cta-title']}>Ready to Transform Your Enterprise?</h2>
            <p className={styles['cta-description']}>
              Let's build enterprise-grade solutions that scale with your organization and drive measurable business outcomes.
            </p>
            <div className={styles['cta-buttons']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaHeadset className={styles['btn-icon']} />
                Start Enterprise Project
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                Schedule Executive Briefing
              </a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterprisesPage;
