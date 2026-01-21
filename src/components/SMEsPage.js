import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBuilding, FaChartLine, FaUsers, FaCogs, FaMobile, FaCloud,
  FaShieldAlt, FaDatabase, FaStar, FaCheckCircle, FaArrowRight, FaHeadset,
  FaLaptop, FaGlobe, FaDollarSign, FaRocket, FaLock, FaCode,
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaDocker,
  FaAws, FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiDotnet, SiMongodb, SiPostgresql, 
  SiRedis, SiKubernetes
} from 'react-icons/si';
import './SMEsPage.css';

const SMEsPage = () => {
  const services = [
    {
      icon: FaBuilding,
      title: 'Business Process Automation',
      description: 'Streamline your operations with custom automation solutions that reduce manual work and increase efficiency.',
      features: ['Workflow Automation', 'Document Management', 'Task Scheduling', 'Process Optimization'],
      color: '#3498db'
    },
    {
      icon: FaChartLine,
      title: 'Business Intelligence & Analytics',
      description: 'Make data-driven decisions with comprehensive analytics dashboards and reporting systems.',
      features: ['Custom Dashboards', 'Real-time Analytics', 'Performance Metrics', 'Predictive Insights'],
      color: '#e74c3c'
    },
    {
      icon: FaUsers,
      title: 'Customer Relationship Management',
      description: 'Manage customer relationships effectively with tailored CRM solutions that grow with your business.',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Support', 'Marketing Automation'],
      color: '#f39c12'
    },
    {
      icon: FaCogs,
      title: 'Enterprise Resource Planning',
      description: 'Integrate all business processes with comprehensive ERP solutions designed for SMEs.',
      features: ['Financial Management', 'Inventory Control', 'HR Management', 'Supply Chain'],
      color: '#9b59b6'
    },
    {
      icon: FaMobile,
      title: 'Digital Transformation',
      description: 'Transform your business with modern web and mobile applications that enhance customer experience.',
      features: ['Web Applications', 'Mobile Apps', 'Cloud Migration', 'API Integration'],
      color: '#1abc9c'
    },
    {
      icon: FaShieldAlt,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive security measures and compliance frameworks.',
      features: ['Security Audits', 'Data Protection', 'Compliance Management', 'Risk Assessment'],
      color: '#e67e22'
    }
  ];

  const portfolio = [
    {
      title: 'Manufacturing ERP System',
      description: 'Complete ERP solution for mid-size manufacturing company with inventory, production, and financial management.',
      image: '/images/sme-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      metrics: { employees: '200+', efficiency: '+40%', cost_savings: '$500K' },
      industry: 'Manufacturing'
    },
    {
      title: 'Retail Chain Management',
      description: 'Multi-location retail management system with POS integration, inventory tracking, and sales analytics.',
      image: '/images/sme-portfolio-2.jpg',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'Stripe'],
      metrics: { locations: '25+', sales: '+60%', customers: '10K+' },
      industry: 'Retail'
    },
    {
      title: 'Professional Services CRM',
      description: 'Custom CRM for consulting firm with project management, client portal, and billing automation.',
      image: '/images/sme-portfolio-3.jpg',
      technologies: ['Angular', 'Django', 'MongoDB', 'Celery', 'Nginx'],
      metrics: { clients: '500+', projects: '1K+', automation: '80%' },
      industry: 'Consulting'
    }
  ];

  const techStack = [
    {
      category: 'Frontend Development',
      technologies: [
        { name: 'React.js', icon: FaReact },
        { name: 'Vue.js', icon: FaVuejs },
        { name: 'Angular', icon: FaAngular },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Next.js', icon: SiNextdotjs }
      ]
    },
    {
      category: 'Backend Development',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Python', icon: FaPython },
        { name: 'PHP', icon: FaCode },
        { name: 'Java', icon: FaJava },
        { name: '.NET', icon: SiDotnet }
      ]
    },
    {
      category: 'Database Solutions',
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: FaDatabase },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Redis', icon: SiRedis },
        { name: 'Oracle', icon: FaDatabase }
      ]
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: FaMicrosoft },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'CI/CD', icon: FaCogs }
      ]
    },
    {
      category: 'Business Tools',
      technologies: [
        { name: 'CRM Systems', icon: FaUsers },
        { name: 'ERP Solutions', icon: FaBuilding },
        { name: 'BI Analytics', icon: FaChartLine },
        { name: 'Automation', icon: FaCogs },
        { name: 'Security', icon: FaLock }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'CEO, TechManufacturing Inc.',
      text: 'SoftDevSquad transformed our manufacturing operations with a comprehensive ERP system. Our efficiency increased by 40% and we saved $500K in the first year.',
      rating: 5,
      image: '/images/testimonial-sme-1.jpg'
    },
    {
      name: 'Lisa Martinez',
      company: 'Owner, RetailChain Solutions',
      text: 'The multi-location retail system they built helped us scale from 5 to 25 locations seamlessly. Sales increased 60% with better inventory management.',
      rating: 5,
      image: '/images/testimonial-sme-2.jpg'
    },
    {
      name: 'James Wilson',
      company: 'Partner, ConsultPro Services',
      text: 'Their custom CRM solution automated 80% of our processes and improved client satisfaction significantly. Excellent technical expertise and support.',
      rating: 5,
      image: '/images/testimonial-sme-3.jpg'
    }
  ];

  const stats = [
    { number: '200+', label: 'SME Projects' },
    { number: '95%', label: 'Client Retention' },
    { number: '50%', label: 'Avg. Efficiency Gain' },
    { number: '24/7', label: 'Support Available' }
  ];

  const businessSolutions = [
    {
      category: 'Operations',
      title: 'Streamline Operations',
      description: 'Automate workflows and optimize business processes',
      icon: FaCogs,
      benefits: ['40% Time Savings', 'Reduced Errors', 'Better Compliance', 'Cost Efficiency']
    },
    {
      category: 'Growth',
      title: 'Scale Your Business',
      description: 'Technology solutions that grow with your company',
      icon: FaRocket,
      benefits: ['Scalable Architecture', 'Performance Optimization', 'Multi-location Support', 'Integration Ready']
    },
    {
      category: 'Insights',
      title: 'Data-Driven Decisions',
      description: 'Business intelligence and analytics for better decisions',
      icon: FaChartLine,
      benefits: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'KPI Tracking']
    },
    {
      category: 'Security',
      title: 'Protect Your Assets',
      description: 'Comprehensive security and compliance solutions',
      icon: FaShieldAlt,
      benefits: ['Data Protection', 'Compliance Management', 'Risk Mitigation', 'Secure Infrastructure']
    }
  ];

  return (
    <div className="smes-page">
      {/* Hero Section */}
      <div className="smes-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="smes-hero-content">
            <div className="hero-badge">
              <FaBuilding className="badge-icon" />
              <span>Leading SME Technology Partner</span>
            </div>
            <h1 className="smes-hero-title">
              Empower Your <span className="highlight">SME Growth</span> with Smart Technology
            </h1>
            <p className="smes-hero-subtitle">
              Transform your small to medium enterprise with tailored technology solutions that streamline operations, boost productivity, and drive sustainable growth.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Start Your Transformation
              </Link>
              <Link to="/demo" className="btn btn-outline">
                View Case Studies
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

      {/* Business Solutions Section */}
      <section className="business-solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why SMEs Choose Our Solutions</h2>
            <p className="section-subtitle">
              Proven strategies that help small and medium enterprises thrive in competitive markets
            </p>
          </div>
          <div className="services-grid">
            {businessSolutions.map((solution, index) => (
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
                  Get Started
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="smes-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">SME-Focused Development Services</h2>
            <p className="section-subtitle">
              Comprehensive technology solutions designed for small and medium enterprises
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
      <section className="smes-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">SME Success Stories</h2>
            <p className="section-subtitle">
              Real businesses we've helped transform and grow with technology
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
            <h2 className="section-title">Enterprise-Grade Technology Stack</h2>
            <p className="section-subtitle">
              Robust, scalable technologies that power successful SME solutions
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
      <section className="smes-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What SME Leaders Say</h2>
            <p className="section-subtitle">
              Success stories from business owners who transformed their operations
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
      <section className="smes-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your SME?</h2>
            <p className="cta-description">
              Let's build technology solutions that streamline your operations, reduce costs, and accelerate your business growth.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Start Your Project
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMEsPage;
