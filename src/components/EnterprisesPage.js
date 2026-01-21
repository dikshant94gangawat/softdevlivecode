import React from 'react';
import { Link } from 'react-router-dom';
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
import './EnterprisesPage.css';

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
    <div className="enterprises-page">
      {/* Hero Section */}
      <div className="enterprises-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="enterprises-hero-content">
            <div className="hero-badge">
              <FaBuilding className="badge-icon" />
              <span>Leading Enterprise Technology Partner</span>
            </div>
            <h1 className="enterprises-hero-title">
              Scale Your <span className="highlight">Enterprise Success</span> with Advanced Technology
            </h1>
            <p className="enterprises-hero-subtitle">
              Transform your large-scale operations with enterprise-grade solutions that deliver performance, security, and scalability for global organizations.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Start Enterprise Consultation
              </Link>
              <Link to="/demo" className="btn btn-outline">
                View Enterprise Portfolio
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

      {/* Enterprise Solutions Section */}
      <section className="enterprise-solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Global Enterprises Choose Us</h2>
            <p className="section-subtitle">
              Proven expertise in delivering mission-critical solutions for large-scale organizations
            </p>
          </div>
          <div className="services-grid">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: solution.color || '#00ffff' }}>
                  <solution.icon />
                </div>
                <div className="solution-category">{solution.category}</div>
                <h3 className="service-title">{solution.title}</h3>
                <p className="service-description">{solution.description}</p>

                <ul className="service-features">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="service-feature">
                      <FaCheckCircle className="feature-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-cta">
                  Learn More
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="enterprises-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise Development Services</h2>
            <p className="section-subtitle">
              Comprehensive technology solutions for large-scale enterprise operations
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
      <section className="enterprises-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise Success Stories</h2>
            <p className="section-subtitle">
              Large-scale transformations that delivered measurable business impact
            </p>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-industry">{project.industry}</div>
                    <div className="portfolio-metrics">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="metric-item">
                          <span className="metric-value">{value}</span>
                          <span className="metric-label">{key.replace('_', ' ')}</span>
                        </div>
                      ))}
                    </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise Technology Stack</h2>
            <p className="section-subtitle">
              Industry-leading technologies for mission-critical enterprise solutions
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

      {/* Testimonials Section */}
      <section className="enterprises-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Enterprise Leaders Say</h2>
            <p className="section-subtitle">
              Success stories from executives who transformed their organizations
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="enterprises-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Enterprise?</h2>
            <p className="cta-description">
              Let's build enterprise-grade solutions that scale with your organization and drive measurable business outcomes.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Start Enterprise Project
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Schedule Executive Briefing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterprisesPage;
