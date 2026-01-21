import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket, FaCode, FaCogs, FaUsers, FaStar, FaCheckCircle, 
  FaArrowRight, FaHeadset, FaChartBar, FaLightbulb, FaShieldAlt,
  FaDatabase, FaCloud, FaMobile, FaDesktop, FaLayerGroup, FaBug,
  FaUserCheck, FaChartLine, FaServer, FaSearch, FaWrench, FaGlobe
} from 'react-icons/fa';
import { 
  SiReact, SiNodedotjs, SiPython, SiJavascript, SiTypescript, SiDocker,
  SiKubernetes, SiAmazonaws, SiMongodb, SiPostgresql, SiRedis, SiGit
} from 'react-icons/si';
import './SoftwareProductDevelopment.css';

const SoftwareProductDevelopment = () => {
  const services = [
    {
      icon: FaLightbulb,
      title: 'Product Strategy & Planning',
      description: 'Comprehensive product strategy development, market analysis, and roadmap planning to ensure your product meets market demands.',
      features: ['Market Research', 'Product Roadmap', 'MVP Definition', 'Go-to-Market Strategy'],
      color: '#f39c12'
    },
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'End-to-end software development using modern technologies and best practices for scalable, maintainable applications.',
      features: ['Frontend Development', 'Backend Architecture', 'API Development', 'Database Design'],
      color: '#3498db'
    },
    {
      icon: FaMobile,
      title: 'Cross-Platform Solutions',
      description: 'Develop applications that work seamlessly across web, mobile, and desktop platforms with consistent user experience.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'Progressive Web Apps'],
      color: '#9b59b6'
    },
    {
      icon: FaCloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud-native solutions with microservices architecture, containerization, and automated deployment pipelines.',
      features: ['Microservices', 'Container Orchestration', 'CI/CD Pipelines', 'Auto-scaling'],
      color: '#1abc9c'
    },
    {
      icon: FaShieldAlt,
      title: 'Quality Assurance',
      description: 'Comprehensive testing strategies including automated testing, performance testing, and security audits.',
      features: ['Automated Testing', 'Performance Testing', 'Security Audits', 'Code Reviews'],
      color: '#e74c3c'
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Monitoring',
      description: 'Implementation of analytics, monitoring, and performance tracking systems to optimize product performance.',
      features: ['Performance Monitoring', 'User Analytics', 'Error Tracking', 'Business Intelligence'],
      color: '#e67e22'
    }
  ];

  const portfolio = [
    {
      title: 'Enterprise SaaS Platform',
      description: 'Complete SaaS platform for enterprise resource planning with multi-tenancy, advanced analytics, and integration capabilities.',
      image: '/images/software-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      features: ['Multi-tenancy', 'Real-time Analytics', 'API Integrations', 'Role-based Access'],
      stats: { users: '50K+', uptime: '99.9%', features: '200+' }
    },
    {
      title: 'IoT Management System',
      description: 'Comprehensive IoT device management platform with real-time monitoring, data analytics, and automated controls.',
      image: '/images/software-portfolio-2.jpg',
      technologies: ['Python', 'React', 'MongoDB', 'MQTT', 'InfluxDB', 'Grafana'],
      features: ['Device Management', 'Real-time Monitoring', 'Data Visualization', 'Automated Alerts'],
      stats: { devices: '100K+', data_points: '1B+', clients: '500+' }
    },
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Machine learning platform for business intelligence with predictive analytics and automated insights generation.',
      image: '/images/software-portfolio-3.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'Kubernetes', 'GCP'],
      features: ['Predictive Analytics', 'ML Models', 'Data Pipeline', 'Custom Dashboards'],
      stats: { models: '50+', accuracy: '95%', predictions: '10M+' }
    }
  ];

  const techStack = [
    {
      category: 'Frontend Technologies',
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Vue.js', icon: FaCode },
        { name: 'Angular', icon: FaCode }
      ]
    },
    {
      category: 'Backend Technologies',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Python', icon: SiPython },
        { name: 'Java', icon: FaCode },
        { name: 'C#', icon: FaCode },
        { name: 'Go', icon: FaCode }
      ]
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Redis', icon: SiRedis },
        { name: 'MySQL', icon: FaDatabase },
        { name: 'Elasticsearch', icon: FaSearch }
      ]
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: SiAmazonaws },
        { name: 'Docker', icon: SiDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Git', icon: SiGit },
        { name: 'CI/CD', icon: FaCogs }
      ]
    },
    {
      category: 'Tools & Platforms',
      technologies: [
        { name: 'Microservices', icon: FaLayerGroup },
        { name: 'GraphQL', icon: FaCode },
        { name: 'REST APIs', icon: FaServer },
        { name: 'WebSockets', icon: FaGlobe },
        { name: 'Testing Tools', icon: FaBug }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      position: 'CTO, TechCorp Solutions',
      company: 'Enterprise Software',
      content: 'SoftDevSquad delivered an exceptional enterprise platform that exceeded our expectations. Their technical expertise and project management are outstanding.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Maria Garcia',
      position: 'Product Manager, InnovateAI',
      company: 'AI Technology',
      content: 'The AI analytics platform they built revolutionized our data processing capabilities. The team understood our complex requirements perfectly.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'James Wilson',
      position: 'CEO, IoT Solutions Inc',
      company: 'IoT Platform',
      content: 'Our IoT management system handles millions of devices seamlessly. The scalability and reliability they built into the platform is remarkable.',
      rating: 5,
      avatar: '👨‍🔬'
    }
  ];

  const stats = [
    { number: '500+', label: 'Products Delivered' },
    { number: '99.9%', label: 'Uptime Achievement' },
    { number: '10M+', label: 'Users Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  const productSolutions = [
    {
      category: 'Scalability',
      title: 'Built to Scale',
      description: 'Products designed to handle growth from startup to enterprise',
      icon: FaRocket,
      benefits: ['Auto-scaling Architecture', 'Load Balancing', 'Database Optimization', 'CDN Integration']
    },
    {
      category: 'Security',
      title: 'Enterprise Security',
      description: 'Multi-layered security with industry-standard compliance',
      icon: FaShieldAlt,
      benefits: ['Data Encryption', 'OAuth 2.0', 'GDPR Compliance', 'Security Audits']
    },
    {
      category: 'Performance',
      title: 'High Performance',
      description: 'Optimized for speed and efficiency across all platforms',
      icon: FaChartLine,
      benefits: ['Fast Loading', 'Optimized Queries', 'Caching Strategies', 'Performance Monitoring']
    },
    {
      category: 'Reliability',
      title: 'Always Available',
      description: 'Robust architecture with 99.9% uptime guarantee',
      icon: FaUserCheck,
      benefits: ['Fault Tolerance', 'Backup Systems', 'Health Monitoring', 'Disaster Recovery']
    }
  ];

  return (
    <div className="software-product-page">
      {/* Hero Section */}
      <div className="software-product-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="software-product-hero-container">
            <div className="software-product-hero-content">
              <div className="hero-badge">
                <FaRocket className="badge-icon" />
                <span>Leading Software Product Development Company</span>
              </div>
              <h1 className="software-product-hero-title">
                Innovative <span className="highlight">Software Products</span> That Transform Business
              </h1>
              <p className="software-product-hero-subtitle">
                Build scalable, secure, and high-performance software products that drive business growth. From concept to deployment, we deliver end-to-end solutions using cutting-edge technologies.
              </p>
            </div>
            <div className="software-product-hero-image">
              <div className="software-product-mockup-container">
                <div className="software-product-device main-dashboard">
                  <div className="dashboard-screen">
                    <div className="software-product-interface">
                      <div className="software-product-header">
                        <div className="nav-bar">
                          <div className="logo">ProductSuite</div>
                          <div className="nav-items">
                            <div className="nav-item">Dashboard</div>
                            <div className="nav-item">Analytics</div>
                            <div className="nav-item">Settings</div>
                          </div>
                          <div className="user-menu">
                            <div className="user-avatar"></div>
                          </div>
                        </div>
                      </div>
                      <div className="software-product-content">
                        <div className="dashboard-sidebar">
                          <div className="sidebar-menu">
                            <div className="menu-item active">📊 Overview</div>
                            <div className="menu-item">📈 Analytics</div>
                            <div className="menu-item">👥 Users</div>
                            <div className="menu-item">⚙️ Settings</div>
                          </div>
                        </div>
                        <div className="dashboard-main">
                          <div className="dashboard-stats">
                            <div className="stat-card">
                              <div className="stat-title">Total Users</div>
                              <div className="stat-value">125,430</div>
                              <div className="stat-trend">↗ +12.5%</div>
                            </div>
                            <div className="stat-card">
                              <div className="stat-title">Revenue</div>
                              <div className="stat-value">$89,240</div>
                              <div className="stat-trend">↗ +8.2%</div>
                            </div>
                            <div className="stat-card">
                              <div className="stat-title">Performance</div>
                              <div className="stat-value">99.9%</div>
                              <div className="stat-trend">→ Stable</div>
                            </div>
                          </div>
                          <div className="dashboard-chart">
                            <div className="chart-header">
                              <div className="chart-title">Performance Metrics</div>
                              <div className="chart-period">Last 30 days</div>
                            </div>
                            <div className="chart-area">
                              <div className="chart-bars">
                                {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90].map((height, i) => (
                                  <div key={i} className="chart-bar" style={{ height: `${height}%` }}></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="software-product-device mobile-app">
                  <div className="mobile-screen">
                    <div className="mobile-software-product-interface">
                      <div className="mobile-header">
                        <div className="mobile-nav">
                          <div className="menu-icon">☰</div>
                          <div className="mobile-logo">App</div>
                          <div className="notification-icon">
                            <div className="notification-badge">3</div>
                            🔔
                          </div>
                        </div>
                      </div>
                      <div className="mobile-content">
                        <div className="mobile-welcome">
                          <div className="welcome-text">Welcome back!</div>
                          <div className="welcome-subtitle">Here's your overview</div>
                        </div>
                        <div className="mobile-metrics">
                          <div className="mobile-metric">
                            <div className="metric-icon">📊</div>
                            <div className="metric-info">
                              <div className="metric-value">1.2K</div>
                              <div className="metric-label">Active</div>
                            </div>
                          </div>
                          <div className="mobile-metric">
                            <div className="metric-icon">💰</div>
                            <div className="metric-info">
                              <div className="metric-value">$45K</div>
                              <div className="metric-label">Revenue</div>
                            </div>
                          </div>
                        </div>
                        <div className="mobile-actions">
                          <div className="action-card">
                            <div className="action-icon">📈</div>
                            <div className="action-title">View Reports</div>
                          </div>
                          <div className="action-card">
                            <div className="action-icon">⚙️</div>
                            <div className="action-title">Manage Settings</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="software-product-device api-terminal">
                  <div className="terminal-screen">
                    <div className="terminal-interface">
                      <div className="terminal-header">
                        <div className="terminal-title">API Terminal</div>
                        <div className="terminal-controls">
                          <div className="control-btn minimize"></div>
                          <div className="control-btn maximize"></div>
                          <div className="control-btn close"></div>
                        </div>
                      </div>
                      <div className="terminal-content">
                        <div className="terminal-line">
                          <span className="terminal-prompt">$</span>
                          <span className="terminal-command">curl -X GET /api/v1/users</span>
                        </div>
                        <div className="terminal-response">
                          <div className="json-response">
                            <span className="json-key">"status"</span>: <span className="json-value">"success"</span>,<br/>
                            <span className="json-key">"data"</span>: [<br/>
                            &nbsp;&nbsp;{`{ "id": 1, "name": "John" }`}<br/>
                            ]
                          </div>
                        </div>
                        <div className="terminal-line">
                          <span className="terminal-prompt">$</span>
                          <span className="terminal-cursor">_</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="software-product-image-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="hero-stats-section">
        <div className="container">
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

      {/* Hero Actions Section */}
      <div className="hero-actions-section">
        <div className="container">
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              <FaHeadset className="btn-icon" />
              Start Your Product Development
            </Link>
            <Link to="/demo" className="btn btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Product Solutions Section */}
      <section className="product-solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Product Development</h2>
            <p className="section-subtitle">
              Enterprise-grade solutions built with modern architecture and best practices
            </p>
          </div>
          <div className="services-grid">
            {productSolutions.map((solution, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: '#3498db' }}>
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
      <section className="software-product-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Software Product Development Services</h2>
            <p className="section-subtitle">
              End-to-end product development from ideation to deployment and maintenance
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
      <section className="software-product-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Product Development Portfolio</h2>
            <p className="section-subtitle">
              Successful software products that showcase our expertise and innovation
            </p>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-stats">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="portfolio-stat">
                          <span className="stat-value">{value}</span>
                          <span className="stat-key">{key.replace('_', ' ')}</span>
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
                  <div className="portfolio-features">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="portfolio-feature">
                        <FaCheckCircle className="feature-check" />
                        {feature}
                      </span>
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
            <h2 className="section-title">Our Technology Stack</h2>
            <p className="section-subtitle">
              Modern technologies and frameworks for building robust software products
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
      <section className="software-product-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Product Development Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful product delivery
            </p>
          </div>
          <div className="process-steps">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                description: 'Understanding requirements, market analysis, and defining product strategy.',
                icon: FaSearch,
                color: '#f39c12'
              },
              {
                step: '02',
                title: 'Design & Architecture',
                description: 'Creating system architecture, UI/UX design, and technical specifications.',
                icon: FaWrench,
                color: '#3498db'
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Agile development with continuous testing and quality assurance.',
                icon: FaCode,
                color: '#9b59b6'
              },
              {
                step: '04',
                title: 'Deployment & Launch',
                description: 'Production deployment with monitoring and performance optimization.',
                icon: FaRocket,
                color: '#1abc9c'
              },
              {
                step: '05',
                title: 'Maintenance & Support',
                description: 'Ongoing support, updates, and feature enhancements.',
                icon: FaHeadset,
                color: '#e74c3c'
              }
            ].map((process, index) => (
              <div key={index} className="process-step">
                <div className="step-number" style={{ backgroundColor: process.color }}>
                  {process.step}
                </div>
                <div className="step-icon" style={{ color: process.color }}>
                  <process.icon />
                </div>
                <h3 className="step-title">{process.title}</h3>
                <p className="step-description">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="software-product-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Product Clients Say</h2>
            <p className="section-subtitle">
              Success stories from businesses we've helped build exceptional products
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
                  <p className="testimonial-text">"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="software-product-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Your Next Software Product?</h2>
            <p className="cta-description">
              Let's create innovative software products that drive business growth and deliver exceptional user experiences.
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

export default SoftwareProductDevelopment;
