import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGlobe, FaRocket, FaUsers, FaLightbulb, FaCode, FaDesktop,
  FaMobile, FaDatabase, FaShieldAlt, FaChartLine, FaHeadset, FaCogs,
  FaCheckCircle, FaArrowRight, FaStar, FaBuilding, FaCloud, FaLock,
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaServer
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiKubernetes
} from 'react-icons/si';
import './DigitalPlatformsPage.css';

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
    <div className="digital-platforms-page">
      {/* Hero Section */}
      <div className="digital-platforms-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="digital-platforms-hero-content">
            <div className="hero-badge">
              <FaGlobe className="badge-icon" />
              <span>Digital Platform Specialists</span>
            </div>
            <h1 className="digital-platforms-hero-title">
              Build Powerful <span className="highlight">Digital Platforms</span> That Scale
            </h1>
            <p className="digital-platforms-hero-subtitle">
              From enterprise platforms to customer experience hubs, we create comprehensive digital ecosystems that unify your business operations and drive growth.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaRocket className="btn-icon" />
                Start Your Platform
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Explore Platforms
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="digital-platforms-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Digital Platform Development Services</h2>
            <p className="section-subtitle">
              Comprehensive platform solutions that transform how businesses operate and engage
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: service.color }}>
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-cta">
                  Get Started
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="digital-platforms-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Platform Success Stories</h2>
            <p className="section-subtitle">
              Digital platforms we've built that power businesses worldwide
            </p>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="portfolio-image-placeholder" style={{ display: 'none' }}>
                    <FaGlobe size={60} style={{ color: '#00ffff' }} />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="portfolio-category">{project.category}</div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="portfolio-results">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="result-item">
                        <FaCheckCircle className="result-icon" />
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
      <section className="digital-platforms-tech-stack">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Platform Technology Stack</h2>
            <p className="section-subtitle">
              Enterprise-grade technologies for building robust digital platforms
            </p>
          </div>
          <div className="tech-categories">
            {techStack.map((category, index) => (
              <div key={index} className="tech-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="tech-items">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-item">
                      <tech.icon className="tech-icon" />
                      <span className="tech-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="digital-platforms-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Platform Development Process</h2>
            <p className="section-subtitle">
              Systematic approach to building successful digital platforms
            </p>
          </div>
          <div className="process-steps">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number" style={{ backgroundColor: step.color }}>
                  {step.step}
                </div>
                <div className="step-icon" style={{ color: step.color }}>
                  <step.icon />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="digital-platforms-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Platform Success</h2>
            <p className="section-subtitle">
              What our clients say about their digital platform transformations
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
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
      <section className="digital-platforms-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Your Digital Platform?</h2>
            <p className="cta-subtitle">
              Transform your business with a powerful digital platform that scales with your growth.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <FaRocket className="btn-icon" />
                Start Platform Development
              </Link>
              <Link to="/demo" className="btn btn-outline">
                <FaUsers className="btn-icon" />
                Schedule Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalPlatformsPage;
