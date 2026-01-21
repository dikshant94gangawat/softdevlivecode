import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCogs, FaRocket, FaUsers, FaLightbulb, FaCode, FaDesktop,
  FaMobile, FaDatabase, FaCloud, FaShieldAlt, FaChartLine, FaHeadset,
  FaCheckCircle, FaArrowRight, FaStar, FaBuilding, FaGlobe, FaLock,
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiKubernetes
} from 'react-icons/si';
import './CustomSolutionsPage.css';

const CustomSolutionsPage = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from scratch to meet your unique business requirements and workflows.',
      color: '#00ffff',
      features: [
        'Requirements Analysis & Planning',
        'Custom Architecture Design',
        'Agile Development Process',
        'Quality Assurance & Testing',
        'Deployment & Maintenance'
      ]
    },
    {
      icon: FaDesktop,
      title: 'Enterprise Applications',
      description: 'Scalable enterprise-grade applications that streamline operations and boost productivity.',
      color: '#8a2be2',
      features: [
        'ERP System Development',
        'CRM Solutions',
        'Business Intelligence Tools',
        'Workflow Management',
        'Integration Capabilities'
      ]
    },
    {
      icon: FaMobile,
      title: 'Custom Mobile Solutions',
      description: 'Native and cross-platform mobile applications designed for your specific business needs.',
      color: '#ffd700',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'API Integration',
        'Offline Functionality',
        'Push Notifications'
      ]
    },
    {
      icon: FaDatabase,
      title: 'Database Solutions',
      description: 'Custom database design, optimization, and management solutions for efficient data handling.',
      color: '#ff6b6b',
      features: [
        'Database Design & Modeling',
        'Performance Optimization',
        'Data Migration Services',
        'Backup & Recovery',
        'Security Implementation'
      ]
    },
    {
      icon: FaCloud,
      title: 'Cloud Solutions',
      description: 'Custom cloud infrastructure and applications designed for scalability and performance.',
      color: '#4ecdc4',
      features: [
        'Cloud Architecture Design',
        'Migration Services',
        'Auto-scaling Solutions',
        'Cost Optimization',
        'Security & Compliance'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Security Solutions',
      description: 'Custom security implementations to protect your business data and applications.',
      color: '#ff9f43',
      features: [
        'Security Audits',
        'Custom Authentication',
        'Data Encryption',
        'Compliance Solutions',
        'Vulnerability Assessment'
      ]
    }
  ];

  const portfolio = [
    {
      title: 'Healthcare Management System',
      category: 'Healthcare',
      description: 'Custom EHR system for multi-location healthcare provider',
      image: '/images/custom-healthcare.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: [
        '50% reduction in patient wait times',
        '99.9% system uptime achieved',
        '40% increase in operational efficiency'
      ]
    },
    {
      title: 'Manufacturing ERP Solution',
      category: 'Manufacturing',
      description: 'End-to-end ERP system for manufacturing operations',
      image: '/images/custom-manufacturing.jpg',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      results: [
        '60% improvement in inventory accuracy',
        '35% reduction in production costs',
        'Real-time visibility across operations'
      ]
    },
    {
      title: 'Financial Trading Platform',
      category: 'Finance',
      description: 'Real-time trading platform with advanced analytics',
      image: '/images/custom-finance.jpg',
      technologies: ['Python', 'Django', 'Redis', 'Kubernetes'],
      results: [
        'Sub-millisecond trade execution',
        '10x increase in transaction volume',
        'Advanced risk management features'
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
        { name: 'PHP', icon: FaCode }
      ]
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: FaDatabase },
        { name: 'Redis', icon: FaDatabase },
        { name: 'Oracle', icon: FaDatabase }
      ]
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: FaAws },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Azure', icon: FaCloud },
        { name: 'GCP', icon: FaCloud }
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business requirements, challenges, and goals to define the perfect solution.',
      icon: FaLightbulb,
      color: '#00ffff'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a custom solution architecture tailored to your specific needs.',
      icon: FaCogs,
      color: '#8a2be2'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your custom solution using agile methodologies and best practices.',
      icon: FaCode,
      color: '#ffd700'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets all requirements and quality standards.',
      icon: FaShieldAlt,
      color: '#ff6b6b'
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'We deploy your solution with minimal downtime and ensure smooth go-live.',
      icon: FaRocket,
      color: '#4ecdc4'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure optimal performance and updates.',
      icon: FaHeadset,
      color: '#ff9f43'
    }
  ];

  const testimonials = [
    {
      name: 'David Johnson',
      company: 'CEO, TechCorp Industries',
      content: 'SoftDevSquad delivered a custom solution that transformed our entire business process. The level of customization and attention to detail was exceptional.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Mitchell',
      company: 'CTO, InnovateLabs',
      content: 'Their custom development approach saved us months of development time. The solution perfectly fits our unique requirements.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'Michael Chen',
      company: 'Founder, DataFlow Solutions',
      content: 'Outstanding custom software development. They understood our complex requirements and delivered beyond expectations.',
      rating: 5,
      avatar: '👨‍🚀'
    }
  ];

  const stats = [
    { number: '200+', label: 'Custom Solutions Delivered' },
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '50+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="custom-solutions-page">
      {/* Hero Section */}
      <div className="custom-solutions-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="custom-solutions-hero-content">
            <div className="hero-badge">
              <FaCogs className="badge-icon" />
              <span>Custom Software Solutions</span>
            </div>
            <h1 className="custom-solutions-hero-title">
              Build <span className="highlight">Custom Solutions</span> That Fit Your Business Perfectly
            </h1>
            <p className="custom-solutions-hero-subtitle">
              From concept to deployment, we create tailored software solutions that address your unique challenges and drive business growth with precision and innovation.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaRocket className="btn-icon" />
                Start Your Custom Project
              </Link>
              <Link to="/demo" className="btn btn-outline">
                View Our Portfolio
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
      <section className="custom-solutions-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Custom Development Services</h2>
            <p className="section-subtitle">
              Comprehensive custom solutions designed to meet your unique business requirements
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
      <section className="custom-solutions-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Custom Solutions Portfolio</h2>
            <p className="section-subtitle">
              Real-world custom solutions we've built for businesses across various industries
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
                    <FaCogs size={60} style={{ color: '#00ffff' }} />
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
      <section className="custom-solutions-tech-stack">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technologies We Master</h2>
            <p className="section-subtitle">
              Cutting-edge technologies for building robust custom solutions
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
      <section className="custom-solutions-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Custom Development Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful delivery of custom solutions
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
      <section className="custom-solutions-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Success Stories</h2>
            <p className="section-subtitle">
              What our clients say about our custom development services
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
      <section className="custom-solutions-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Your Custom Solution?</h2>
            <p className="cta-subtitle">
              Let's discuss your unique requirements and create a solution that drives your business forward.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <FaRocket className="btn-icon" />
                Start Your Project
              </Link>
              <Link to="/demo" className="btn btn-outline">
                <FaUsers className="btn-icon" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutionsPage;
