import React from 'react';
import styles from './DigitalPlatformsPage.module.css';
import Link from 'next/link';

import {
  FaGlobe, FaRocket, FaUsers, FaLightbulb, FaCode, FaDesktop,
  FaMobile, FaDatabase, FaShieldAlt, FaChartLine, FaHeadset, FaCogs,
  FaCheckCircle, FaArrowRight, FaStar, FaBuilding, FaCloud, FaLock,
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaServer
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiKubernetes
} from 'react-icons/si';

const DigitalPlatformsPage = () => {
  const services = [
    {
      icon: FaGlobe,
      title: 'Enterprise Digital Platforms',
      description: 'Comprehensive digital platforms that unify business operations, customer experiences, and data management.',
      color: '#00ffff',
      features: [
        'Multi-Channel Integration',
        'Real-time Data Processing',
        'Scalable Architecture',
        'Advanced Analytics',
        'API-First Design'
      ]
    },
    {
      icon: FaUsers,
      title: 'Customer Experience Platforms',
      description: 'Unified platforms that deliver personalized customer experiences across all touchpoints.',
      color: '#8a2be2',
      features: [
        'Customer Journey Mapping',
        'Personalization Engine',
        'Omnichannel Support',
        'Behavioral Analytics',
        'Marketing Automation'
      ]
    },
    {
      icon: FaChartLine,
      title: 'Data & Analytics Platforms',
      description: 'Powerful platforms for data collection, processing, and visualization to drive business insights.',
      color: '#ffd700',
      features: [
        'Real-time Data Streaming',
        'Advanced Visualization',
        'Machine Learning Integration',
        'Predictive Analytics',
        'Custom Reporting'
      ]
    },
    {
      icon: FaCloud,
      title: 'Cloud-Native Platforms',
      description: 'Modern cloud-native platforms built for scalability, reliability, and global distribution.',
      color: '#ff6b6b',
      features: [
        'Microservices Architecture',
        'Auto-scaling Infrastructure',
        'Multi-cloud Deployment',
        'Container Orchestration',
        'DevOps Integration'
      ]
    },
    {
      icon: FaServer,
      title: 'IoT & Connected Platforms',
      description: 'Platforms that connect and manage IoT devices with real-time monitoring and control.',
      color: '#4ecdc4',
      features: [
        'Device Management',
        'Real-time Monitoring',
        'Edge Computing',
        'Data Collection & Analysis',
        'Remote Control Systems'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Secure Digital Platforms',
      description: 'Enterprise-grade security integrated into every layer of your digital platform.',
      color: '#ff9f43',
      features: [
        'Zero Trust Architecture',
        'Identity Management',
        'Data Encryption',
        'Compliance Frameworks',
        'Security Monitoring'
      ]
    }
  ];

  const portfolio = [
    {
      title: 'E-commerce Marketplace Platform',
      category: 'Retail',
      description: 'Multi-vendor marketplace with advanced analytics',
      image: '/images/platform-ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: [
        '500+ vendors onboarded',
        '$10M+ in transactions',
        '99.9% platform uptime'
      ]
    },
    {
      title: 'Healthcare Management Platform',
      category: 'Healthcare',
      description: 'Integrated platform for patient care and operations',
      image: '/images/platform-healthcare.jpg',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
      results: [
        '100+ healthcare facilities',
        '1M+ patient records managed',
        'HIPAA compliant platform'
      ]
    },
    {
      title: 'Financial Trading Platform',
      category: 'Finance',
      description: 'Real-time trading platform with risk management',
      image: '/images/platform-finance.jpg',
      technologies: ['Vue.js', 'Java', 'Redis', 'Kubernetes'],
      results: [
        '50,000+ active traders',
        'Sub-millisecond latency',
        '$1B+ daily trading volume'
      ]
    }
  ];

  const techStack = [
    {
      category: 'Frontend Technologies',
      technologies: [
        { name: 'React.js', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Vue.js', icon: FaCode },
        { name: 'Angular', icon: FaCode }
      ]
    },
    {
      category: 'Backend Technologies',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'C#', icon: FaCode },
        { name: 'Go', icon: FaCode }
      ]
    },
    {
      category: 'Databases & Storage',
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Redis', icon: FaDatabase },
        { name: 'Elasticsearch', icon: FaDatabase },
        { name: 'Cassandra', icon: FaDatabase }
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
      title: 'Platform Strategy & Planning',
      description: 'We analyze your business needs and design a comprehensive platform strategy.',
      icon: FaLightbulb,
      color: '#00ffff'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design scalable, secure, and flexible platform architecture.',
      icon: FaCogs,
      color: '#8a2be2'
    },
    {
      step: '03',
      title: 'Core Platform Development',
      description: 'Build the foundational platform with essential features and integrations.',
      icon: FaCode,
      color: '#ffd700'
    },
    {
      step: '04',
      title: 'Integration & Testing',
      description: 'Integrate with existing systems and conduct comprehensive testing.',
      icon: FaServer,
      color: '#ff6b6b'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Deploy the platform with monitoring, analytics, and user training.',
      icon: FaRocket,
      color: '#4ecdc4'
    },
    {
      step: '06',
      title: 'Optimization & Growth',
      description: 'Continuous optimization, feature enhancement, and platform scaling.',
      icon: FaChartLine,
      color: '#ff9f43'
    }
  ];

  const testimonials = [
    {
      name: 'Amanda Foster',
      company: 'CEO, TechVision Corp',
      content: 'SoftDevSquad built a digital platform that transformed our entire business model. The scalability and performance have exceeded all expectations.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'James Wilson',
      company: 'CTO, DataFlow Systems',
      content: 'Their expertise in building complex digital platforms is unmatched. The platform handles our massive data processing needs flawlessly.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Maria Rodriguez',
      company: 'Founder, ConnectHub',
      content: 'The digital platform they created became the foundation of our success. It seamlessly integrates all our business operations.',
      rating: 5,
      avatar: '👩‍🚀'
    }
  ];

  const stats = [
    { number: '150+', label: 'Platforms Delivered' },
    { number: '10M+', label: 'Users Supported' },
    { number: '99.9%', label: 'Platform Reliability' },
    { number: '24/7', label: 'Platform Monitoring' }
  ];

  return (
    <div className={styles['digital-platforms-page']}>
      {/* Hero Section */}
      <div className={styles['digital-platforms-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['digital-platforms-hero-content']}>
            <div className={styles['hero-badge']}>
              <FaGlobe className={styles['badge-icon']} />
              <span>Digital Platform Specialists</span>
            </div>
            <h1 className={styles['digital-platforms-hero-title']}>
              Build Powerful <span className={styles.highlight}>Digital Platforms</span> That Scale
            </h1>
            <p className={styles['digital-platforms-hero-subtitle']}>
              From enterprise platforms to customer experience hubs, we create comprehensive digital ecosystems that unify your business operations and drive growth.
            </p>
            <div className={styles['hero-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaRocket className={styles['btn-icon']} />
                Start Your Platform
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                Explore Platforms
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
      <section className={styles['digital-platforms-services']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Digital Platform Development Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive platform solutions that transform how businesses operate and engage
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
      <section className={styles['digital-platforms-portfolio']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Platform Success Stories</h2>
            <p className={styles['section-subtitle']}>
              Digital platforms we've built that power businesses worldwide
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
                    <FaGlobe size={60} style={{ color: '#00ffff' }} />
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
      <section className={styles['digital-platforms-tech-stack']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Platform Technology Stack</h2>
            <p className={styles['section-subtitle']}>
              Enterprise-grade technologies for building robust digital platforms
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
      <section className={styles['digital-platforms-process']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Platform Development Process</h2>
            <p className={styles['section-subtitle']}>
              Systematic approach to building successful digital platforms
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
      <section className={styles['digital-platforms-testimonials']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Client Platform Success</h2>
            <p className={styles['section-subtitle']}>
              What our clients say about their digital platform transformations
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
      <section className={styles['digital-platforms-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h2 className={styles['cta-title']}>Ready to Build Your Digital Platform?</h2>
            <p className={styles['cta-subtitle']}>
              Transform your business with a powerful digital platform that scales with your growth.
            </p>
            <div className={styles['cta-buttons']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaRocket className={styles['btn-icon']} />
                Start Platform Development
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                <FaUsers className={styles['btn-icon']} />
                Schedule Strategy Call
              </a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalPlatformsPage;
