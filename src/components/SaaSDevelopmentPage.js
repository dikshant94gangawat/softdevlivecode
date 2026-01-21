import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCloud, FaRocket, FaUsers, FaLightbulb, FaCode, FaDesktop,
  FaMobile, FaDatabase, FaShieldAlt, FaChartLine, FaHeadset, FaCogs,
  FaCheckCircle, FaArrowRight, FaStar, FaBuilding, FaGlobe, FaLock,
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaServer
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiKubernetes, SiStripe
} from 'react-icons/si';
import './SaaSDevelopmentPage.css';

const SaaSDevelopmentPage = () => {
  const services = [
    {
      icon: FaCloud,
      title: 'Multi-Tenant SaaS Architecture',
      description: 'Scalable multi-tenant architecture that efficiently serves multiple customers while maintaining data isolation.',
      color: '#00ffff',
      features: [
        'Tenant Isolation & Security',
        'Scalable Database Design',
        'Resource Optimization',
        'Custom Tenant Features',
        'Performance Monitoring'
      ]
    },
    {
      icon: FaUsers,
      title: 'User Management & Authentication',
      description: 'Comprehensive user management system with role-based access control and SSO integration.',
      color: '#8a2be2',
      features: [
        'Role-Based Access Control',
        'Single Sign-On (SSO)',
        'Multi-Factor Authentication',
        'User Onboarding Flow',
        'Account Management'
      ]
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Reporting',
      description: 'Built-in analytics dashboard with real-time reporting and business intelligence features.',
      color: '#ffd700',
      features: [
        'Real-time Analytics',
        'Custom Dashboards',
        'Data Visualization',
        'Automated Reports',
        'Business Intelligence'
      ]
    },
    {
      icon: FaServer,
      title: 'API Development & Integration',
      description: 'RESTful APIs and third-party integrations to extend your SaaS platform functionality.',
      color: '#ff6b6b',
      features: [
        'RESTful API Design',
        'GraphQL Implementation',
        'Third-party Integrations',
        'Webhook Management',
        'API Documentation'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance standards for data protection.',
      color: '#4ecdc4',
      features: [
        'Data Encryption',
        'GDPR Compliance',
        'SOC 2 Standards',
        'Security Audits',
        'Backup & Recovery'
      ]
    },
    {
      icon: FaCogs,
      title: 'DevOps & Deployment',
      description: 'Automated deployment pipelines and infrastructure management for reliable SaaS operations.',
      color: '#ff9f43',
      features: [
        'CI/CD Pipelines',
        'Auto-scaling Infrastructure',
        'Monitoring & Alerting',
        'Load Balancing',
        'Disaster Recovery'
      ]
    }
  ];

  const portfolio = [
    {
      title: 'Project Management SaaS',
      category: 'Productivity',
      description: 'Comprehensive project management platform for teams',
      image: '/images/saas-project-management.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: [
        '10,000+ active users',
        '99.9% uptime achieved',
        '50% increase in team productivity'
      ]
    },
    {
      title: 'CRM SaaS Platform',
      category: 'Sales',
      description: 'Customer relationship management with automation',
      image: '/images/saas-crm.jpg',
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
      results: [
        '500+ businesses using platform',
        '30% increase in sales conversion',
        'Automated 80% of manual tasks'
      ]
    },
    {
      title: 'E-learning SaaS',
      category: 'Education',
      description: 'Online learning management system with video streaming',
      image: '/images/saas-elearning.jpg',
      technologies: ['Angular', 'Java', 'MySQL', 'Kubernetes'],
      results: [
        '50,000+ students enrolled',
        '95% course completion rate',
        'Multi-language support'
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
      category: 'Databases',
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: FaDatabase },
        { name: 'Redis', icon: FaDatabase },
        { name: 'Elasticsearch', icon: FaDatabase }
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
      title: 'Market Research & Planning',
      description: 'We analyze your target market, competitors, and define the SaaS product roadmap.',
      icon: FaLightbulb,
      color: '#00ffff'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design scalable multi-tenant architecture and technology stack selection.',
      icon: FaCogs,
      color: '#8a2be2'
    },
    {
      step: '03',
      title: 'MVP Development',
      description: 'Build a minimum viable product with core features to validate the concept.',
      icon: FaCode,
      color: '#ffd700'
    },
    {
      step: '04',
      title: 'Testing & Security',
      description: 'Comprehensive testing including security, performance, and user acceptance.',
      icon: FaShieldAlt,
      color: '#ff6b6b'
    },
    {
      step: '05',
      title: 'Launch & Deployment',
      description: 'Deploy to production with monitoring, analytics, and user onboarding.',
      icon: FaRocket,
      color: '#4ecdc4'
    },
    {
      step: '06',
      title: 'Scale & Optimize',
      description: 'Continuous optimization, feature additions, and scaling based on usage.',
      icon: FaChartLine,
      color: '#ff9f43'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'CEO, CloudFlow Solutions',
      content: 'SoftDevSquad built our SaaS platform from the ground up. Their expertise in multi-tenant architecture and scalability was exactly what we needed.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Robert Kim',
      company: 'CTO, DataSync Pro',
      content: 'The SaaS platform they developed handles our 50,000+ users seamlessly. The architecture is robust and the performance is outstanding.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Lisa Thompson',
      company: 'Founder, EduTech Solutions',
      content: 'From MVP to full-scale SaaS product, they guided us through every step. The result exceeded our expectations in every way.',
      rating: 5,
      avatar: '👩‍🚀'
    }
  ];

  const stats = [
    { number: '100+', label: 'SaaS Products Built' },
    { number: '1M+', label: 'Users Served' },
    { number: '99.9%', label: 'Average Uptime' },
    { number: '24/7', label: 'Support & Monitoring' }
  ];

  return (
    <div className="saas-development-page">
      {/* Hero Section */}
      <div className="saas-development-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="saas-development-hero-content">
            <div className="hero-badge">
              <FaCloud className="badge-icon" />
              <span>SaaS Development Experts</span>
            </div>
            <h1 className="saas-development-hero-title">
              Build Scalable <span className="highlight">SaaS Products</span> That Users Love
            </h1>
            <p className="saas-development-hero-subtitle">
              From MVP to enterprise-scale SaaS platforms, we deliver cloud-native solutions with multi-tenant architecture, robust security, and seamless user experiences.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaRocket className="btn-icon" />
                Start Your SaaS Journey
              </Link>
              <Link to="/demo" className="btn btn-outline">
                View SaaS Portfolio
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
      <section className="saas-development-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive SaaS Development Services</h2>
            <p className="section-subtitle">
              End-to-end SaaS development services from concept to scale
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
      <section className="saas-development-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">SaaS Success Stories</h2>
            <p className="section-subtitle">
              Successful SaaS platforms we've built for businesses worldwide
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
                    <FaCloud size={60} style={{ color: '#00ffff' }} />
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
      <section className="saas-development-tech-stack">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">SaaS Technology Stack</h2>
            <p className="section-subtitle">
              Modern technologies for building scalable and secure SaaS platforms
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
      <section className="saas-development-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our SaaS Development Process</h2>
            <p className="section-subtitle">
              Proven methodology for building successful SaaS products
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
      <section className="saas-development-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our SaaS Clients Say</h2>
            <p className="section-subtitle">
              Success stories from SaaS entrepreneurs and businesses
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
      <section className="saas-development-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Launch Your SaaS Product?</h2>
            <p className="cta-subtitle">
              Let's build a scalable SaaS platform that grows with your business and delights your users.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <FaRocket className="btn-icon" />
                Start Building Now
              </Link>
              <Link to="/demo" className="btn btn-outline">
                <FaUsers className="btn-icon" />
                Schedule Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSDevelopmentPage;
