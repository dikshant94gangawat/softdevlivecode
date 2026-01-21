import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMobile, 
  FaApple, 
  FaAndroid, 
  FaReact, 
  FaCode, 
  FaCloud, 
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
  FaJs,
  FaNodeJs,
  FaAws,
  FaMicrosoft,
  FaDatabase,
  FaLeaf
} from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiTypescript, SiFirebase, SiMongodb, SiPostgresql } from 'react-icons/si';
import './MobileAppDevelopment.css';

const MobileAppDevelopment = () => {
  // Function to render app screen content
  const renderAppScreen = (appScreen) => {
    const { type, title, subtitle, elements } = appScreen;
    
    return (
      <div className="app-screen-content">
        <div className="app-header">
          <div className="app-status-bar">
            <div className="status-time">9:41</div>
            <div className="status-icons">
              <div className="signal-bars"></div>
              <div className="wifi-icon"></div>
              <div className="battery-icon"></div>
            </div>
          </div>
          <div className="app-title-bar">
            <h3 className="app-title">{title}</h3>
            <p className="app-subtitle">{subtitle}</p>
          </div>
        </div>
        
        <div className="app-body">
          {type === 'ecommerce' && (
            <div className="ecommerce-screen">
              <div className="search-section">
                <div className="search-bar">
                  <div className="search-icon"></div>
                  <div className="search-text">Search products...</div>
                </div>
                <div className="cart-icon">
                  <div className="cart-badge">3</div>
                </div>
              </div>
              <div className="product-grid">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="product-card">
                    <div className="product-image"></div>
                    <div className="product-info">
                      <div className="product-name"></div>
                      <div className="product-price"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {type === 'fitness' && (
            <div className="fitness-screen">
              <div className="stats-section">
                <div className="main-stat">
                  <div className="stat-number">8,247</div>
                  <div className="stat-label">Steps Today</div>
                </div>
                <div className="progress-ring"></div>
              </div>
              <div className="workout-cards">
                {['Cardio', 'Strength', 'Yoga'].map(workout => (
                  <div key={workout} className="workout-card">
                    <div className="workout-icon"></div>
                    <div className="workout-name">{workout}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {type === 'social' && (
            <div className="social-screen">
              <div className="stories-section">
                <div className="story-item active">
                  <div className="story-avatar"></div>
                  <div className="story-name">Your Story</div>
                </div>
                {[1, 2, 3].map(i => (
                  <div key={i} className="story-item">
                    <div className="story-avatar"></div>
                    <div className="story-name">User {i}</div>
                  </div>
                ))}
              </div>
              <div className="posts-section">
                <div className="post">
                  <div className="post-header">
                    <div className="post-avatar"></div>
                    <div className="post-info">
                      <div className="post-name"></div>
                      <div className="post-time"></div>
                    </div>
                  </div>
                  <div className="post-content"></div>
                  <div className="post-actions">
                    <div className="action-btn"></div>
                    <div className="action-btn"></div>
                    <div className="action-btn"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {type === 'finance' && (
            <div className="finance-screen">
              <div className="balance-section">
                <div className="balance-label">Total Balance</div>
                <div className="balance-amount">$12,456.78</div>
                <div className="balance-change">+2.4% this month</div>
              </div>
              <div className="quick-actions">
                {['Send', 'Receive', 'Pay', 'Invest'].map(action => (
                  <div key={action} className="action-item">
                    <div className="action-icon"></div>
                    <div className="action-name">{action}</div>
                  </div>
                ))}
              </div>
              <div className="transactions">
                <div className="transaction-item">
                  <div className="transaction-icon"></div>
                  <div className="transaction-details">
                    <div className="transaction-name"></div>
                    <div className="transaction-date"></div>
                  </div>
                  <div className="transaction-amount"></div>
                </div>
                <div className="transaction-item">
                  <div className="transaction-icon"></div>
                  <div className="transaction-details">
                    <div className="transaction-name"></div>
                    <div className="transaction-date"></div>
                  </div>
                  <div className="transaction-amount"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const platforms = [
    {
      icon: FaApple,
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and Objective-C for optimal performance and seamless user experience on iPhones and iPads.',
      features: ['Swift/Objective-C', 'iOS SDK', 'App Store Optimization', 'Core Data Integration'],
      color: '#007AFF',
      image: '/images/ios-development.jpg',
      alt: 'iOS App Development',
      appScreen: {
        type: 'ecommerce',
        title: 'ShopEasy',
        subtitle: 'Premium Shopping Experience',
        elements: ['Product Grid', 'Search Bar', 'Cart Icon', 'User Profile']
      }
    },
    {
      icon: FaAndroid,
      title: 'Android App Development',
      description: 'High-performance Android applications using Kotlin and Java, ensuring compatibility across all Android devices.',
      features: ['Kotlin/Java', 'Android SDK', 'Material Design', 'Google Play Optimization'],
      color: '#3DDC84',
      image: '/images/android-development.jpg',
      alt: 'Android App Development',
      appScreen: {
        type: 'fitness',
        title: 'FitTracker',
        subtitle: 'Your Health Companion',
        elements: ['Step Counter', 'Workout Plans', 'Progress Chart', 'Achievements']
      }
    },
    {
      icon: FaReact,
      title: 'React Native Development',
      description: 'Cross-platform mobile apps with React Native, delivering native performance with shared codebase.',
      features: ['Cross-Platform', 'Hot Reload', 'Native Modules', 'Third-party Integration'],
      color: '#61DAFB',
      image: '/images/react-native-development.jpg',
      alt: 'React Native Development',
      appScreen: {
        type: 'social',
        title: 'ConnectHub',
        subtitle: 'Social Network',
        elements: ['Feed Posts', 'Chat Messages', 'Notifications', 'User Stories']
      }
    },
    {
      icon: FaCode,
      title: 'Flutter App Development',
      description: 'Beautiful, fast mobile applications using Google\'s Flutter framework for consistent UI across platforms.',
      features: ['Dart Language', 'Widget-based UI', 'Hot Reload', 'Material Design'],
      color: '#02569B',
      image: '/images/flutter-development.jpg',
      alt: 'Flutter App Development',
      appScreen: {
        type: 'finance',
        title: 'PayFlow',
        subtitle: 'Digital Banking',
        elements: ['Balance Display', 'Transaction List', 'Quick Actions', 'Analytics']
      }
    }
  ];

  const services = [
    {
      icon: FaCode,
      title: 'Native App Development',
      description: 'Platform-specific applications built with native technologies for optimal performance and user experience.',
      features: ['iOS (Swift/Objective-C)', 'Android (Kotlin/Java)', 'Platform-specific UI/UX', 'Maximum Performance']
    },
    {
      icon: FaGlobe,
      title: 'Cross-Platform Development',
      description: 'Single codebase applications that work seamlessly across multiple platforms, reducing development time and cost.',
      features: ['React Native', 'Flutter', 'Xamarin', 'Ionic']
    },
    {
      icon: FaCloud,
      title: 'Cloud Integration',
      description: 'Seamless cloud integration for data synchronization, real-time updates, and scalable backend services.',
      features: ['AWS/Azure/GCP', 'Real-time Sync', 'Push Notifications', 'API Integration']
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging mobile experiences that drive user engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance with industry standards to protect user data.',
      features: ['Data Encryption', 'Secure Authentication', 'GDPR Compliance', 'Security Audits']
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Optimization',
      description: 'Advanced analytics and performance optimization to ensure your app delivers the best user experience.',
      features: ['User Analytics', 'Performance Monitoring', 'A/B Testing', 'App Store Optimization']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business requirements, target audience, and market opportunities to create a comprehensive mobile strategy.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates intuitive user interfaces and interactive prototypes to visualize your app concept.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development process with continuous testing, quality assurance, and regular client feedback sessions.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'App store deployment, launch support, and ongoing maintenance to ensure optimal performance and user satisfaction.'
    }
  ];

  const technologies = [
    { name: 'React Native', category: 'Cross-Platform', icon: FaReact },
    { name: 'Flutter', category: 'Cross-Platform', icon: SiFlutter },
    { name: 'Swift', category: 'iOS', icon: FaApple },
    { name: 'Kotlin', category: 'Android', icon: SiKotlin },
    { name: 'JavaScript', category: 'Web', icon: FaJs },
    { name: 'TypeScript', category: 'Web', icon: SiTypescript },
    { name: 'Node.js', category: 'Backend', icon: FaNodeJs },
    { name: 'Firebase', category: 'Backend', icon: SiFirebase },
    { name: 'AWS', category: 'Cloud', icon: FaAws },
    { name: 'Azure', category: 'Cloud', icon: FaMicrosoft },
    { name: 'MongoDB', category: 'Database', icon: SiMongodb },
    { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'SoftDevSquad delivered our mobile app ahead of schedule with exceptional quality. The user experience exceeded our expectations.',
      rating: 5,
      project: 'E-commerce Mobile App'
    },
    {
      name: 'Michael Chen',
      company: 'Innovation Labs',
      text: 'Their React Native expertise helped us launch on both iOS and Android simultaneously, saving us months of development time.',
      rating: 5,
      project: 'Cross-Platform App'
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthCorp',
      text: 'Outstanding mobile app development with great attention to user experience and performance optimization.',
      rating: 5,
      project: 'FinTech Mobile App'
    }
  ];

  const stats = [
    { number: '50+', label: 'Mobile Apps Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="mobile-app-page">
      {/* Hero Section */}
      <div className="mobile-hero">
        <div className="mobile-hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="container">
          <div className="mobile-hero-container">
            <div className="mobile-hero-content">
              <div className="hero-badge">
                <FaMobile className="badge-icon" />
                <span>Professional Mobile Development</span>
              </div>
              <h1 className="mobile-hero-title">
                Top-Rated <span className="highlight">Mobile App Development</span> Company
              </h1>
              <p className="mobile-hero-subtitle">
                Renowned for our mobile app development services, SoftDevSquad delivers top-quality mobile applications 
                for multiple platforms. With our proven process and 50+ successful apps, we ensure tailored solutions for your business needs.
              </p>
            </div>
            <div className="mobile-hero-image">
              <div className="hero-phones-container">
                <div className="hero-phone hero-phone-1">
                  <div className="phone-screen">
                    <div className="app-screen-content">
                      <div className="app-header">
                        <div className="app-status-bar">
                          <div className="status-time">9:41</div>
                          <div className="status-icons">
                            <div className="signal-bars"></div>
                            <div className="wifi-icon"></div>
                            <div className="battery-icon"></div>
                          </div>
                        </div>
                        <div className="app-nav-bar">
                          <div className="nav-title">Shopping</div>
                          <div className="nav-cart">
                            <div className="cart-badge">3</div>
                          </div>
                        </div>
                      </div>
                      <div className="app-body">
                        <div className="search-section">
                          <div className="search-bar">
                            <div className="search-icon"></div>
                            <div className="search-placeholder">Search products...</div>
                          </div>
                        </div>
                        <div className="hero-product-grid">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="hero-product-card">
                              <div className="hero-product-image"></div>
                              <div className="hero-product-info">
                                <div className="hero-product-name"></div>
                                <div className="hero-product-price"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-phone hero-phone-2">
                  <div className="phone-screen">
                    <div className="app-screen-content">
                      <div className="app-header">
                        <div className="app-status-bar">
                          <div className="status-time">9:41</div>
                          <div className="status-icons">
                            <div className="signal-bars"></div>
                            <div className="wifi-icon"></div>
                            <div className="battery-icon"></div>
                          </div>
                        </div>
                        <div className="app-nav-bar">
                          <div className="nav-title">Fitness</div>
                        </div>
                      </div>
                      <div className="app-body">
                        <div className="fitness-stats">
                          <div className="main-stat">
                            <div className="stat-number">8,247</div>
                            <div className="stat-label">Steps Today</div>
                          </div>
                          <div className="progress-circle">
                            <div className="progress-ring"></div>
                          </div>
                        </div>
                        <div className="workout-section">
                          {['Cardio', 'Strength', 'Yoga'].map(workout => (
                            <div key={workout} className="hero-workout-card">
                              <div className="hero-workout-icon"></div>
                              <div className="hero-workout-name">{workout}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
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
              <FaRocket className="btn-icon" />
              Get Started
            </Link>
            <Link to="/demo" className="btn btn-outline">
              Book a Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="platforms-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mobile App Development on Multiple Platforms</h2>
            <p className="section-subtitle">
              Leverage our expertise in mobile app development - from iOS and Android, to everything in between and beyond.
            </p>
          </div>

          <div className="platforms-alternating">
            {platforms.map((platform, index) => (
              <div key={index} className={`platform-row ${index % 2 === 0 ? 'platform-row-even' : 'platform-row-odd'}`}>
                <div className="platform-content">
                  <div className="platform-details">
                    <div className="platform-icon-large" style={{ color: platform.color }}>
                      <platform.icon />
                    </div>
                    <h3 className="platform-title">{platform.title}</h3>
                    <p className="platform-description">{platform.description}</p>
                    <ul className="platform-features">
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className="platform-feature">
                          <FaCheckCircle className="feature-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="platform-cta">
                      Learn More
                      <FaArrowRight className="cta-icon" />
                    </Link>
                  </div>
                </div>
                <div className="platform-visual">
                  <div className="platform-image-container">
                    <img 
                      src={platform.image} 
                      alt={platform.alt}
                      className="platform-development-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="image-fallback" style={{display: 'none'}}>
                      <div className="fallback-icon" style={{ color: platform.color }}>
                        <platform.icon />
                      </div>
                      <p>Image not available</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Expert Mobile App Development Solutions</h2>
            <p className="section-subtitle">
              Explore a wide array of expert Mobile Application Development Solutions tailored to meet diverse business needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Mobile App Development Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful mobile app delivery from concept to launch.
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
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-subtitle">
              Build high-performing and scalable mobile apps with the best and latest tools and technologies.
            </p>
          </div>

          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon">
                  <tech.icon />
                </div>
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real feedback from satisfied customers who trusted us with their mobile app development.
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
                  <div className="author-project">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mobile-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Bring Your App Ideas to Life?</h3>
            <p className="cta-subtitle">
              Connect with our mobile app development experts and transform your vision into a successful mobile application.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaRocket className="btn-icon" />
                Start Your Project
              </Link>
              <Link to="/demo" className="btn btn-outline">
                <FaUsers className="btn-icon" />
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
