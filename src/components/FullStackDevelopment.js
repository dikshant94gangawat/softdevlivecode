import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaDesktop,
  FaCogs,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaPalette,
  FaShieldAlt,
  FaChartLine,
  FaGlobe,
  FaCog,
  FaHeadset,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaVuejs,
  FaAngular,
  FaPhp,
  FaLaravel,
  FaMicrosoft,
  FaGithub,
  FaSearch,
  FaShoppingCart
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiNuxtdotjs, 
  SiTailwindcss, 
  SiMui, 
  SiExpress, 
  SiDjango, 
  SiFlask, 
  SiRubyonrails, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql, 
  SiRedis, 
  SiGraphql, 
  SiKubernetes, 
  SiJenkins,
  SiFirebase,
  SiOracle,
} from 'react-icons/si';
import './FullStackDevelopment.css';

const FullStackDevelopment = () => {
  // Function to render tech stack visualization
  const renderTechStack = (stack) => {
    const { category, items, color } = stack;
    
    return (
      <div className="tech-stack-card">
        <div className="tech-stack-header">
          <div className="tech-stack-icon" style={{ color: color }}>
            {stack.icon}
          </div>
          <h3 className="tech-stack-title">{category}</h3>
        </div>
        <div className="tech-stack-items">
          {items.map((item, index) => (
            <div key={index} className="tech-stack-item">
              <div className="tech-item-icon" style={{ color: color }}>
                <item.icon />
              </div>
              <span className="tech-item-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const techStacks = [
    {
      icon: <FaReact />,
      category: 'Frontend Technologies',
      color: '#61DAFB',
      items: [
        { name: 'React.js', icon: FaReact },
        { name: 'Vue.js', icon: FaVuejs },
        { name: 'Angular', icon: FaAngular },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Nuxt.js', icon: SiNuxtdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Material-UI', icon: SiMui }
      ]
    },
    {
      icon: <FaNodeJs />,
      category: 'Backend Technologies',
      color: '#68A063',
      items: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Python', icon: FaPython },
        { name: 'Django', icon: SiDjango },
        { name: 'Flask', icon: SiFlask },
        { name: 'Java', icon: FaJava },
        { name: 'PHP', icon: FaPhp },
        { name: 'Ruby on Rails', icon: SiRubyonrails }
      ]
    },
    {
      icon: <FaDatabase />,
      category: 'Database & Storage',
      color: '#336791',
      items: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Redis', icon: SiRedis },
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'AWS RDS', icon: FaAws },
        { name: 'Oracle', icon: SiOracle }
      ]
    },
    {
      icon: <FaCloud />,
      category: 'Cloud & DevOps',
      color: '#FF9900',
      items: [
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: FaMicrosoft },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Jenkins', icon: SiJenkins },
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'CI/CD', icon: FaCogs }
      ]
    }
  ];

  const services = [
    {
      icon: FaCode,
      title: 'API Development',
      description: 'We excel in creating robust APIs that facilitate seamless communication between different software systems. Our API development ensures efficiency, scalability, and secure data transfer, enabling smooth integration with third-party services.',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Third-party Integration'],
      color: '#007BFF'
    },
    {
      icon: FaGlobe,
      title: 'Full Stack eCommerce Development',
      description: 'We specialize in end-to-end eCommerce solutions encompassing front-end development, robust backend systems, secure payment gateways, and seamless third-party integrations. Our approach includes Headless e-commerce solutions, analytical dashboards, and supply chain management.',
      features: ['Headless eCommerce', 'Payment Gateways', 'Analytical Dashboards', 'Supply Chain Management'],
      color: '#28A745'
    },
    {
      icon: FaCloud,
      title: 'Full Stack Web Hosting',
      description: 'We offer comprehensive full-stack web hosting services tailored to your project\'s needs, whether on the cloud or on-premises. Our full-stack solutions guarantee optimal performance, robust security measures, and scalability.',
      features: ['Cloud Hosting', 'On-premises Solutions', 'Performance Optimization', 'Security Measures'],
      color: '#FFC107'
    },
    {
      icon: FaCogs,
      title: 'Full Stack CMS Development',
      description: 'Our Full-Stack CMS development team delivers dynamic, scalable solutions from front-end interfaces to back-end content management systems. We specialize in Headless CMS solutions, providing user-friendly interfaces and efficient content management capabilities.',
      features: ['Headless CMS', 'Content Management', 'User-friendly Interfaces', 'Dynamic Solutions'],
      color: '#17A2B8'
    },
    {
      icon: FaShieldAlt,
      title: 'Full Stack Integration',
      description: 'We specialize in integrating diverse technologies, systems, and applications into a cohesive and seamless solution. Our Full-stack integration services ensure that different components of your software ecosystem work together seamlessly.',
      features: ['System Integration', 'Technology Integration', 'Seamless Connectivity', 'Ecosystem Management'],
      color: '#DC3545'
    },
    {
      icon: FaRocket,
      title: 'Full Stack Migration and Porting',
      description: 'We facilitate smooth application migration and porting, ensuring minimal disruption and optimal performance. Whether moving to a new technology stack or upgrading versions, our Full-Stack migration services ensure a hassle-free transition.',
      features: ['Application Migration', 'Technology Stack Upgrade', 'Minimal Disruption', 'Performance Optimization'],
      color: '#6F42C1'
    },
    {
      icon: FaChartLine,
      title: 'Data Visualization Dashboard',
      description: 'We create insightful Data Visualization Dashboards that transform complex data into actionable insights. Our solutions help businesses make informed decisions by presenting data visually, enhancing understanding, and driving strategic initiatives.',
      features: ['Interactive Dashboards', 'Data Analytics', 'Visual Insights', 'Strategic Decision Making'],
      color: '#20C997'
    },
    {
      icon: FaMobile,
      title: 'Progressive Web App (PWA) Development',
      description: 'We specialize in Progressive Web App (PWA) development, delivering fast, engaging, and reliable web applications that work seamlessly across devices. We enhance user experiences with offline capabilities, push notifications, and rapid loading times.',
      features: ['Offline Capabilities', 'Push Notifications', 'Cross-device Compatibility', 'Rapid Loading'],
      color: '#FD7E14'
    },
    {
      icon: FaUsers,
      title: 'Enterprise Development',
      description: 'Our Enterprise Development services include robust ERP and CRM solutions tailored to streamline operations and enhance customer relationships. We integrate scalable, customizable systems that optimize business processes.',
      features: ['ERP Solutions', 'CRM Development', 'Business Process Optimization', 'Scalable Systems'],
      color: '#6F42C1'
    },
    {
      icon: FaCog,
      title: 'Real-time Application Development',
      description: 'We excel in Real-time Application Development, leveraging cutting-edge technologies to build responsive, data-driven applications. Our solutions enable instant data updates, collaborative features, and seamless user interactions.',
      features: ['Real-time Updates', 'Collaborative Features', 'Instant Data Sync', 'Responsive Applications'],
      color: '#E83E8C'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your business requirements, technical specifications, and defining the project architecture.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes, UI/UX designs, and interactive prototypes for both frontend and backend systems.'
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Building the application with modern frameworks, integrating APIs, and implementing security measures.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing, performance optimization, and seamless deployment to production environments.'
    }
  ];

  const technologies = [
    { 
      category: 'Languages', 
      items: [
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: FaCode },
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'PHP', icon: FaPhp },
        { name: 'C#', icon: FaCode }
      ] 
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'NestJS', icon: FaNodeJs },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Medusa', icon: FaCode },
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'Apollo GraphQL', icon: SiGraphql }
      ] 
    },
    { 
      category: 'Frontend', 
      items: [
        { name: 'React.js', icon: FaReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'React Native', icon: FaReact },
        { name: 'Angular', icon: FaCode },
        { name: 'Ionic', icon: FaMobile },
        { name: 'Electron', icon: FaDesktop }
      ] 
    },
    { 
      category: 'Data Management', 
      items: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: SiMysql },
        { name: 'CouchDB', icon: FaDatabase },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'DynamoDB', icon: FaDatabase }
      ] 
    },
    { 
      category: 'Caching', 
      items: [
        { name: 'Redis Cache', icon: SiRedis },
        { name: 'Memcached', icon: FaDatabase },
        { name: 'CDN', icon: FaCloud },
        { name: 'Browser Caching', icon: FaDesktop }
      ] 
    },
    { 
      category: 'Search', 
      items: [
        { name: 'Elasticsearch', icon: FaSearch },
        { name: 'Algolia', icon: FaSearch },
        { name: 'Apache Solr', icon: FaSearch },
        { name: 'Amazon CloudSearch', icon: FaAws }
      ] 
    },
    { 
      category: 'Queue', 
      items: [
        { name: 'Kafka', icon: FaCogs },
        { name: 'RabbitMQ', icon: FaCogs },
        { name: 'AWS SQS', icon: FaAws },
        { name: 'Redis Queue', icon: SiRedis }
      ] 
    },
    { 
      category: 'CRM/ERP Integrations', 
      items: [
        { name: 'QuickBooks', icon: FaCode },
        { name: 'Salesforce', icon: FaGlobe },
        { name: 'Odoo', icon: FaCogs },
        { name: 'Zoho', icon: FaGlobe },
        { name: 'Magento', icon: FaShoppingCart },
        { name: 'Shopify', icon: FaShoppingCart }
      ] 
    },
    { 
      category: 'Analytics', 
      items: [
        { name: 'Google Analytics', icon: FaChartLine },
        { name: 'Matomo', icon: FaChartLine },
        { name: 'Cloudflare', icon: FaCloud },
        { name: 'MixPanel', icon: FaChartLine },
        { name: 'Hotjar', icon: FaChartLine }
      ] 
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      company: 'CTO, TechStart Inc.',
      text: 'SoftDevSquad delivered an exceptional full-stack solution that exceeded our expectations. Their expertise in modern technologies and comprehensive approach from frontend to backend integration is outstanding.',
      rating: 5
    },
    {
      name: 'Michael R.',
      company: 'Founder, DataFlow',
      text: 'The team built a complex eCommerce platform with seamless API integration and real-time features. Their full-stack development capabilities are truly impressive.',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      company: 'Product Manager, CloudTech',
      text: 'Their full-stack development approach with cloud hosting and performance optimization saved us time and money. The application performs flawlessly in production.',
      rating: 5
    },
    {
      name: 'David K.',
      company: 'CEO, InnovateLab',
      text: 'From database design to cloud deployment, SoftDevSquad handled every aspect of our enterprise application perfectly. Their migration and integration services are top-notch.',
      rating: 5
    }
  ];

  return (
    <div className="fullstack-development-page">
      {/* Hero Section */}
      <div className="fullstack-hero">
        <div className="fullstack-hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="container">
          <div className="fullstack-hero-container">
            <div className="fullstack-hero-content">
              <div className="hero-badge">
                <FaRocket className="badge-icon" />
                <span>Complete Full Stack Solutions</span>
              </div>
              <h1 className="fullstack-hero-title">
                Top-Grade <span className="highlight">Full Stack Development</span> Company
              </h1>
              <p className="fullstack-hero-subtitle">
                Hire Full-stack developers from SoftDevSquad to set a faster pace of growth. With an extensive understanding and experience, we serve custom Full Stack development services and solutions with the latest technologies.
              </p>
            </div>
            <div className="fullstack-hero-image">
              <div className="hero-development-visual">
                <div className="development-layers">
                  <div className="layer frontend-layer">
                    <div className="layer-header">
                      <FaReact className="layer-icon" />
                      <span className="layer-title">Frontend</span>
                    </div>
                    <div className="layer-content">
                      <div className="code-block">
                        <div className="code-line">
                          <span className="code-keyword">const</span>
                          <span className="code-variable">App</span>
                          <span className="code-operator">=</span>
                          <span className="code-function">() =&gt;</span>
                        </div>
                        <div className="code-line">
                          <span className="code-return">return</span>
                          <span className="code-jsx">&lt;Component /&gt;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="layer backend-layer">
                    <div className="layer-header">
                      <FaServer className="layer-icon" />
                      <span className="layer-title">Backend</span>
                    </div>
                    <div className="layer-content">
                      <div className="api-endpoints">
                        <div className="endpoint">
                          <span className="http-method">GET</span>
                          <span className="endpoint-path">/api/users</span>
                        </div>
                        <div className="endpoint">
                          <span className="http-method">POST</span>
                          <span className="endpoint-path">/api/auth</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="layer database-layer">
                    <div className="layer-header">
                      <FaDatabase className="layer-icon" />
                      <span className="layer-title">Database</span>
                    </div>
                    <div className="layer-content">
                      <div className="database-tables">
                        <div className="table">
                          <div className="table-name">Users</div>
                          <div className="table-fields">
                            <div className="field">id</div>
                            <div className="field">name</div>
                            <div className="field">email</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connection-lines">
                  <div className="connection-line line-1"></div>
                  <div className="connection-line line-2"></div>
                </div>
              </div>
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="hero-stats-section">
        <div className="container">
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Apps Developed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">800+</span>
              <span className="stat-label">Resources</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Actions Section */}
      <div className="hero-actions-section">
        <div className="container">
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              <FaRocket className="btn-icon" />
              Start Your Project
            </Link>
            <Link to="/demo" className="btn btn-outline">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Expertise as a Full Stack Web Development Company</h2>
            <p className="section-subtitle">
              Take advantage of our proven expertise across the gamut of Full Stack Development.
            </p>
          </div>

          <div className="tech-stacks-grid">
            {techStacks.map((stack, index) => (
              <div key={index} className="tech-stack-wrapper">
                {renderTechStack(stack)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive Full Stack Development Services</h2>
            <p className="section-subtitle">
              Empowering innovation from concept to deployment with <strong>Custom Full Stack Development</strong>.
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
      </div>

      {/* Process Section */}
      <div className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Full Stack Development Process</h2>
            <p className="section-subtitle">
              A systematic approach that ensures successful delivery of complex full stack applications from start to finish.
            </p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="technologies-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Full Stack Development Technologies We Serve</h2>
            <p className="section-subtitle">
              Get a competitive edge with the latest Full Stack IT Services technology and features.
            </p>
          </div>

          <div className="technologies-grid">
            {technologies.map((techCategory, index) => (
              <div key={index} className="tech-category-card">
                <h3 className="tech-category-title">{techCategory.category}</h3>
                <ul className="tech-list">
                  {techCategory.items.map((item, idx) => (
                    <li key={idx} className="tech-item">
                      <item.icon className="tech-icon" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What our Clients Say</h2>
            <p className="section-subtitle">
              Explore first hand accounts of client experiences, echoing our transformative Digital Solutions.
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
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="fullstack-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Hire Full Stack Developers from SoftDevSquad Today!</h3>
            <p className="cta-subtitle">
              Ready to Build a Scalable Full Stack Solution? Let's discuss your project requirements and create a comprehensive full stack solution that drives your business success.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Get in Touch
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStackDevelopment;
