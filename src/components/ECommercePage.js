import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaShoppingCart, FaMobile, FaLaptop, FaCreditCard, FaShieldAlt, FaRocket,
  FaUsers, FaStar, FaCheckCircle, FaArrowRight, FaHeadset, FaChartBar,
  FaSearch, FaBoxOpen, FaTruck, FaGlobe, FaLock, FaCloud, FaDatabase,
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaMicrosoft,
  FaDocker, FaAws, FaCode, FaPaypal
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiDjango, SiLaravel, SiMongodb, SiPostgresql,
  SiRedis, SiElasticsearch, SiKubernetes, SiStripe
} from 'react-icons/si';
import './ECommercePage.css';

const ECommercePage = () => {
  const services = [
    {
      icon: FaShoppingCart,
      title: 'Custom E-commerce Development',
      description: 'Tailored e-commerce platforms built from scratch with unique features, scalable architecture, and seamless user experience.',
      features: ['Custom Design', 'Scalable Architecture', 'API Integration', 'Performance Optimization'],
      color: '#e74c3c'
    },
    {
      icon: FaMobile,
      title: 'Mobile Commerce Apps',
      description: 'Native and cross-platform mobile apps for iOS and Android with intuitive shopping experiences and secure payments.',
      features: ['Native Development', 'Cross-platform Solutions', 'Push Notifications', 'Offline Capabilities'],
      color: '#3498db'
    },
    {
      icon: FaLaptop,
      title: 'Multi-vendor Marketplace',
      description: 'Comprehensive marketplace solutions enabling multiple vendors to sell products with advanced vendor management systems.',
      features: ['Vendor Dashboard', 'Commission Management', 'Multi-store Support', 'Advanced Analytics'],
      color: '#9b59b6'
    },
    {
      icon: FaCreditCard,
      title: 'Payment Gateway Integration',
      description: 'Secure payment processing with multiple gateway support, fraud protection, and seamless checkout experiences.',
      features: ['Multiple Gateways', 'Fraud Protection', 'PCI Compliance', 'Recurring Payments'],
      color: '#f39c12'
    },
    {
      icon: FaBoxOpen,
      title: 'Inventory Management',
      description: 'Advanced inventory tracking systems with real-time updates, automated reordering, and warehouse management.',
      features: ['Real-time Tracking', 'Automated Alerts', 'Warehouse Integration', 'Stock Forecasting'],
      color: '#1abc9c'
    },
    {
      icon: FaChartBar,
      title: 'E-commerce Analytics',
      description: 'Comprehensive analytics and reporting tools for sales tracking, customer insights, and business intelligence.',
      features: ['Sales Analytics', 'Customer Insights', 'Performance Metrics', 'Custom Reports'],
      color: '#e67e22'
    }
  ];

  const portfolio = [
    {
      title: 'Fashion E-commerce Platform',
      description: 'Complete fashion retail solution with AR try-on, size recommendations, and social shopping features.',
      image: '/images/ecommerce-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AR.js'],
      features: ['AR Try-on', 'Size Guide', 'Wishlist', 'Social Sharing'],
      stats: { products: '50K+', users: '100K+', sales: '$2M+' }
    },
    {
      title: 'Electronics Marketplace',
      description: 'Multi-vendor electronics marketplace with advanced search, comparison tools, and warranty management.',
      image: '/images/ecommerce-portfolio-2.jpg',
      technologies: ['Vue.js', 'Laravel', 'PostgreSQL', 'PayPal', 'Elasticsearch'],
      features: ['Product Comparison', 'Warranty Tracking', 'Reviews System', 'Live Chat'],
      stats: { vendors: '500+', products: '100K+', orders: '50K+' }
    },
    {
      title: 'Grocery Delivery App',
      description: 'On-demand grocery delivery platform with real-time tracking, scheduled delivery, and inventory sync.',
      image: '/images/ecommerce-portfolio-3.jpg',
      technologies: ['React Native', 'Express.js', 'Redis', 'Razorpay', 'Google Maps'],
      features: ['Real-time Tracking', 'Scheduled Delivery', 'Inventory Sync', 'Push Notifications'],
      stats: { deliveries: '25K+', stores: '200+', cities: '15+' }
    }
  ];

  const techStack = [
    {
      category: 'Frontend Technologies',
      technologies: [
        { name: 'React.js', icon: FaReact },
        { name: 'Vue.js', icon: FaVuejs },
        { name: 'Angular', icon: FaAngular },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript }
      ]
    },
    {
      category: 'Backend Technologies',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Python', icon: FaPython },
        { name: 'PHP', icon: FaCode },
        { name: 'Java', icon: FaJava },
        { name: 'C#', icon: FaMicrosoft }
      ]
    },
    {
      category: 'E-commerce Platforms',
      technologies: [
        { name: 'Shopify', icon: FaShoppingCart },
        { name: 'WooCommerce', icon: FaShoppingCart },
        { name: 'Magento', icon: FaShoppingCart },
        { name: 'BigCommerce', icon: FaShoppingCart },
        { name: 'Custom Solutions', icon: FaCode }
      ]
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: FaDatabase },
        { name: 'Redis', icon: SiRedis },
        { name: 'Elasticsearch', icon: SiElasticsearch }
      ]
    },
    {
      category: 'Payment & Security',
      technologies: [
        { name: 'Stripe', icon: SiStripe },
        { name: 'PayPal', icon: FaPaypal },
        { name: 'Razorpay', icon: FaCreditCard },
        { name: 'SSL/TLS', icon: FaLock },
        { name: 'OAuth 2.0', icon: FaShieldAlt }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, Fashion Forward',
      company: 'Fashion Retail',
      content: 'SoftDevSquad transformed our fashion retail business with an incredible e-commerce platform. The AR try-on feature increased our conversion rate by 40%.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, TechMart',
      company: 'Electronics Marketplace',
      content: 'The multi-vendor marketplace they built handles our complex requirements perfectly. Excellent performance with thousands of products and vendors.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Davis',
      position: 'Operations Manager, FreshGrocery',
      company: 'Grocery Delivery',
      content: 'Our grocery delivery app has been a huge success. The real-time tracking and inventory management features are exactly what we needed.',
      rating: 5,
      avatar: '👩‍🍳'
    }
  ];

  const stats = [
    { number: '200+', label: 'E-commerce Projects' },
    { number: '50+', label: 'Happy Clients' },
    { number: '$10M+', label: 'Revenue Generated' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="ecommerce-page">
      {/* Hero Section */}
      <div className="ecommerce-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="ecommerce-hero-container">
            <div className="ecommerce-hero-content">
              <div className="hero-badge">
                <FaShoppingCart className="badge-icon" />
                <span>Leading E-commerce Development Company</span>
              </div>
              <h1 className="ecommerce-hero-title">
                Revolutionary <span className="highlight">E-commerce Solutions</span> for Digital Commerce
              </h1>
              <p className="ecommerce-hero-subtitle">
                Transform your business with cutting-edge e-commerce technology. We build secure, scalable, and innovative online solutions that drive sales growth and enhance customer experience.
              </p>
            </div>
            <div className="ecommerce-hero-image">
              <div className="ecommerce-mockup-container">
                <div className="ecommerce-device ecommerce-laptop">
                  <div className="laptop-screen">
                    <div className="ecommerce-interface">
                      <div className="ecommerce-header">
                        <div className="nav-bar">
                          <div className="logo">ShopZone</div>
                          <div className="nav-items">
                            <div className="nav-item">Categories</div>
                            <div className="nav-item">Deals</div>
                            <div className="nav-item">Cart (3)</div>
                          </div>
                        </div>
                        <div className="search-section">
                          <div className="search-bar">
                            <FaSearch className="search-icon" />
                            <div className="search-text">Search products...</div>
                          </div>
                        </div>
                      </div>
                      <div className="ecommerce-content">
                        <div className="hero-banner">
                          <div className="banner-text">
                            <div className="banner-title">Summer Sale</div>
                            <div className="banner-subtitle">Up to 70% Off</div>
                          </div>
                        </div>
                        <div className="product-section">
                          <div className="section-title">Featured Products</div>
                          <div className="products-grid">
                            {[1, 2, 3, 4].map(i => (
                              <div key={i} className="product-card">
                                <div className="product-image"></div>
                                <div className="product-info">
                                  <div className="product-name"></div>
                                  <div className="product-price">$99</div>
                                  <div className="add-to-cart">Add to Cart</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ecommerce-device ecommerce-mobile">
                  <div className="mobile-screen">
                    <div className="mobile-ecommerce-interface">
                      <div className="mobile-header">
                        <div className="mobile-nav">
                          <div className="menu-icon">☰</div>
                          <div className="mobile-logo">Shop</div>
                          <div className="cart-icon">
                            <FaShoppingCart />
                            <div className="cart-badge">2</div>
                          </div>
                        </div>
                      </div>
                      <div className="mobile-content">
                        <div className="mobile-search">
                          <FaSearch className="mobile-search-icon" />
                          <div className="mobile-search-text">Search...</div>
                        </div>
                        <div className="mobile-categories">
                          {['Electronics', 'Fashion', 'Home'].map(cat => (
                            <div key={cat} className="category-chip">{cat}</div>
                          ))}
                        </div>
                        <div className="mobile-products">
                          {[1, 2].map(i => (
                            <div key={i} className="mobile-product">
                              <div className="mobile-product-image"></div>
                              <div className="mobile-product-info">
                                <div className="mobile-product-name"></div>
                                <div className="mobile-product-price">$49</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ecommerce-image-glow"></div>
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
              Start Your E-commerce Project
            </Link>
            <Link to="/demo" className="btn btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="ecommerce-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our E-commerce Development Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions for every aspect of your online business
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
      <section className="ecommerce-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our E-commerce Portfolio</h2>
            <p className="section-subtitle">
              Successful projects that showcase our expertise in e-commerce development
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
                          <span className="stat-key">{key}</span>
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
            <h2 className="section-title">Our E-commerce Technology Stack</h2>
            <p className="section-subtitle">
              Cutting-edge technologies for robust and scalable e-commerce solutions
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
      <section className="ecommerce-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our E-commerce Development Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="process-steps">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'Understanding your business requirements, target audience, and market analysis.',
                icon: FaSearch,
                color: '#00ffff'
              },
              {
                step: '02',
                title: 'Design & Prototyping',
                description: 'Creating user-centric designs and interactive prototypes for validation.',
                icon: FaLaptop,
                color: '#8a2be2'
              },
              {
                step: '03',
                title: 'Development & Integration',
                description: 'Building robust e-commerce solutions with third-party integrations.',
                icon: FaRocket,
                color: '#ffd700'
              },
              {
                step: '04',
                title: 'Testing & Launch',
                description: 'Comprehensive testing followed by successful deployment and launch.',
                icon: FaCheckCircle,
                color: '#ff6b6b'
              },
              {
                step: '05',
                title: 'Support & Maintenance',
                description: 'Ongoing support, updates, and performance optimization services.',
                icon: FaHeadset,
                color: '#4ecdc4'
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
      <section className="ecommerce-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our E-commerce Clients Say</h2>
            <p className="section-subtitle">
              Success stories from businesses we've helped grow
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
      <section className="ecommerce-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Launch Your E-commerce Success?</h2>
            <p className="cta-description">
              Let's build an e-commerce solution that drives sales, delights customers, and grows your business.
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

export default ECommercePage;
