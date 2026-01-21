import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCreditCard, FaShieldAlt, FaChartLine, FaMobile, FaRobot, FaDatabase,
  FaLock, FaGlobe, FaUsers, FaStar, FaCheckCircle, FaArrowRight, FaHeadset,
  FaBitcoin, FaExchangeAlt, FaWallet, FaMoneyBillWave, FaChartBar, FaCloud,
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaMicrosoft,
  FaDocker, FaAws, FaKey, FaCode, FaServer
} from 'react-icons/fa';
import { 
  SiTypescript, SiFlutter, SiDotnet, SiEthereum, SiTensorflow, SiPytorch,
  SiScikitlearn, SiPostgresql, SiMongodb, SiRedis, SiElasticsearch,
  SiKubernetes, SiJenkins, SiGraphql
} from 'react-icons/si';
import './FinTechPage.css';

const FinTechPage = () => {
  const services = [
    {
      icon: FaCreditCard,
      title: 'Digital Payment Solutions',
      description: 'Secure, fast, and user-friendly payment processing systems with multi-gateway integration, fraud detection, and real-time transaction monitoring.',
      features: ['Multi-Gateway Integration', 'Fraud Detection', 'Real-time Processing', 'PCI Compliance'],
      color: '#00ffff'
    },
    {
      icon: FaShieldAlt,
      title: 'Fraud Detection & Security',
      description: 'AI-powered fraud detection systems with machine learning algorithms to identify suspicious activities and prevent financial crimes.',
      features: ['AI-Powered Detection', 'Risk Assessment', 'Real-time Monitoring', 'Compliance Management'],
      color: '#8a2be2'
    },
    {
      icon: FaChartLine,
      title: 'Algorithmic Trading Platforms',
      description: 'Advanced trading systems with automated strategies, real-time market data analysis, and portfolio management tools.',
      features: ['Automated Trading', 'Market Analysis', 'Portfolio Management', 'Risk Management'],
      color: '#ffd700'
    },
    {
      icon: FaMobile,
      title: 'Mobile Banking Apps',
      description: 'Comprehensive mobile banking solutions with biometric security, instant transfers, and personalized financial insights.',
      features: ['Biometric Security', 'Instant Transfers', 'Account Management', 'Financial Insights'],
      color: '#ff6b6b'
    },
    {
      icon: FaRobot,
      title: 'Robo-Advisory Services',
      description: 'AI-driven investment advisory platforms that provide automated portfolio management and personalized investment recommendations.',
      features: ['Automated Portfolios', 'Risk Profiling', 'Investment Recommendations', 'Performance Tracking'],
      color: '#00ff00'
    },
    {
      icon: FaBitcoin,
      title: 'Cryptocurrency Solutions',
      description: 'Blockchain-based cryptocurrency trading platforms, digital wallets, and DeFi applications with advanced security measures.',
      features: ['Crypto Trading', 'Digital Wallets', 'DeFi Integration', 'Blockchain Security'],
      color: '#ff00ff'
    },
    {
      icon: FaDatabase,
      title: 'RegTech Solutions',
      description: 'Regulatory technology solutions for compliance management, automated reporting, and risk assessment in financial services.',
      features: ['Compliance Automation', 'Regulatory Reporting', 'Risk Assessment', 'Audit Management'],
      color: '#ffa500'
    },
    {
      icon: FaChartBar,
      title: 'Financial Analytics',
      description: 'Advanced analytics platforms for credit scoring, market research, customer behavior analysis, and predictive modeling.',
      features: ['Credit Scoring', 'Predictive Analytics', 'Customer Insights', 'Market Research'],
      color: '#20b2aa'
    }
  ];

  const portfolio = [
    {
      title: 'Digital Banking Platform',
      category: 'Mobile Banking',
      description: 'Comprehensive digital banking solution serving 500K+ users with advanced security features and real-time transaction processing.',
      image: '/images/fintech-portfolio-1.jpg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      results: ['500K+ Active Users', '99.9% Uptime', '40% Faster Transactions', 'PCI DSS Compliant'],
      color: '#00ffff'
    },
    {
      title: 'AI-Powered Trading Bot',
      category: 'Algorithmic Trading',
      description: 'Intelligent trading system with machine learning algorithms achieving 85% success rate in automated trades.',
      image: '/images/fintech-portfolio-2.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      results: ['85% Success Rate', '$50M+ Trades Executed', '24/7 Operations', 'Risk-Optimized'],
      color: '#8a2be2'
    },
    {
      title: 'Fraud Detection System',
      category: 'Security',
      description: 'Real-time fraud detection platform reducing fraudulent transactions by 95% using advanced ML algorithms.',
      image: '/images/fintech-portfolio-3.jpg',
      technologies: ['Machine Learning', 'Apache Kafka', 'Elasticsearch', 'Docker'],
      results: ['95% Fraud Reduction', 'Real-time Detection', '1M+ Transactions/Day', 'Zero False Positives'],
      color: '#ffd700'
    },
    {
      title: 'Cryptocurrency Exchange',
      category: 'Blockchain',
      description: 'Secure crypto trading platform with multi-currency support, advanced charting, and institutional-grade security.',
      image: '/images/fintech-portfolio-4.jpg',
      technologies: ['Blockchain', 'React', 'Node.js', 'Redis'],
      results: ['100+ Cryptocurrencies', '50K+ Daily Trades', 'Bank-level Security', 'Multi-language Support'],
      color: '#ff6b6b'
    },
    {
      title: 'Personal Finance Manager',
      category: 'Wealth Management',
      description: 'AI-driven personal finance app helping users save 30% more with smart budgeting and investment recommendations.',
      image: '/images/fintech-portfolio-5.jpg',
      technologies: ['Flutter', 'Firebase', 'Machine Learning', 'Plaid API'],
      results: ['30% More Savings', '1M+ Downloads', '4.8 App Rating', 'Smart Budgeting'],
      color: '#00ff00'
    },
    {
      title: 'InsurTech Platform',
      category: 'Insurance',
      description: 'Digital insurance platform with AI-powered risk assessment, instant policy generation, and claims processing.',
      image: '/images/fintech-portfolio-6.jpg',
      technologies: ['Vue.js', 'Python', 'AI/ML', 'Cloud Infrastructure'],
      results: ['60% Faster Claims', 'AI Risk Assessment', '200K+ Policies', 'Digital-First Approach'],
      color: '#ff00ff'
    }
  ];

  const technologies = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'React.js', icon: FaReact },
        { name: 'Vue.js', icon: FaVuejs },
        { name: 'Angular', icon: FaAngular },
        { name: 'React Native', icon: FaReact },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'TypeScript', icon: SiTypescript }
      ] 
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'C#', icon: FaMicrosoft },
        { name: '.NET', icon: SiDotnet },
        { name: 'Microservices', icon: FaServer }
      ] 
    },
    { 
      category: 'Blockchain', 
      items: [
        { name: 'Ethereum', icon: SiEthereum },
        { name: 'Bitcoin', icon: FaBitcoin },
        { name: 'Hyperledger', icon: FaCode },
        { name: 'Smart Contracts', icon: FaCode },
        { name: 'DeFi', icon: FaExchangeAlt },
        { name: 'Web3', icon: FaGlobe }
      ] 
    },
    { 
      category: 'AI/ML', 
      items: [
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'Scikit-learn', icon: SiScikitlearn },
        { name: 'NLP', icon: FaRobot },
        { name: 'Computer Vision', icon: FaRobot },
        { name: 'Machine Learning', icon: FaChartLine }
      ] 
    },
    { 
      category: 'Databases', 
      items: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Redis', icon: SiRedis },
        { name: 'Elasticsearch', icon: SiElasticsearch },
        { name: 'InfluxDB', icon: FaDatabase },
        { name: 'Apache Cassandra', icon: FaDatabase }
      ] 
    },
    { 
      category: 'Cloud & DevOps', 
      items: [
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: FaMicrosoft },
        { name: 'Google Cloud', icon: FaCloud },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Jenkins', icon: SiJenkins }
      ] 
    },
    { 
      category: 'Security', 
      items: [
        { name: 'OAuth 2.0', icon: FaKey },
        { name: 'JWT', icon: FaKey },
        { name: 'Encryption', icon: FaLock },
        { name: 'Biometric Auth', icon: FaShieldAlt },
        { name: 'PCI DSS', icon: FaShieldAlt },
        { name: 'GDPR Compliance', icon: FaShieldAlt }
      ] 
    },
    { 
      category: 'Integration', 
      items: [
        { name: 'REST APIs', icon: FaCode },
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'Payment Gateways', icon: FaCreditCard },
        { name: 'Banking APIs', icon: FaWallet },
        { name: 'Third-party Services', icon: FaGlobe },
        { name: 'Webhooks', icon: FaCode }
      ] 
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      company: 'CEO, FinanceFlow',
      text: 'SoftDevSquad transformed our traditional banking processes with their cutting-edge fintech solutions. Our customer satisfaction increased by 40% and operational costs decreased by 30%.',
      rating: 5,
      image: '/images/testimonial-fintech-1.jpg'
    },
    {
      name: 'Sarah Williams',
      company: 'CTO, PaymentPro',
      text: 'The fraud detection system they built for us has been phenomenal. We\'ve seen a 95% reduction in fraudulent transactions while maintaining seamless user experience.',
      rating: 5,
      image: '/images/testimonial-fintech-2.jpg'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Founder, CryptoVault',
      text: 'Their expertise in blockchain and cryptocurrency development is outstanding. They delivered a secure, scalable platform that handles millions in daily trading volume.',
      rating: 5,
      image: '/images/testimonial-fintech-3.jpg'
    }
  ];

  const stats = [
    { number: '200+', label: 'FinTech Projects' },
    { number: '$50B+', label: 'Transactions Processed' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Security Monitoring' }
  ];

  return (
    <div className="fintech-page">
      {/* Hero Section */}
      <div className="fintech-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="fintech-hero-container">
            <div className="fintech-hero-content">
              <div className="hero-badge">
                <FaCreditCard className="badge-icon" />
                <span>Leading FinTech Development Company</span>
              </div>
              <h1 className="fintech-hero-title">
                Revolutionary <span className="highlight">FinTech Solutions</span> for Digital Finance
              </h1>
              <p className="fintech-hero-subtitle">
                Transform your financial services with cutting-edge technology. We build secure, scalable, and innovative fintech solutions that drive business growth and enhance customer experience.
              </p>
            </div>
            <div className="fintech-hero-image">
              <div className="fintech-image-container">
                <div className="fintech-dashboard">
                  <div className="dashboard-header">
                    <div className="dashboard-nav">
                      <div className="nav-item active">Dashboard</div>
                      <div className="nav-item">Transactions</div>
                      <div className="nav-item">Analytics</div>
                    </div>
                    <div className="user-profile">
                      <div className="notification-bell"></div>
                      <div className="user-avatar"></div>
                    </div>
                  </div>
                  <div className="dashboard-content">
                    <div className="balance-card">
                      <div className="balance-title">Total Balance</div>
                      <div className="balance-amount">$247,892.50</div>
                      <div className="balance-change positive">+12.5%</div>
                    </div>
                    <div className="chart-section">
                      <div className="chart-header">Portfolio Performance</div>
                      <div className="chart-container">
                        <div className="chart-line"></div>
                        <div className="chart-bars">
                          {[40, 60, 35, 80, 45, 70, 55].map((height, index) => (
                            <div 
                              key={index} 
                              className="chart-bar" 
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="quick-actions">
                      <div className="action-btn">Send Money</div>
                      <div className="action-btn">Receive</div>
                      <div className="action-btn">Invest</div>
                    </div>
                    <div className="transactions-preview">
                      <div className="transaction-header">Recent Transactions</div>
                      <div className="transaction-list">
                        {[
                          { name: 'Netflix', amount: '-$15.99', type: 'debit' },
                          { name: 'Salary Deposit', amount: '+$5,200.00', type: 'credit' },
                          { name: 'Amazon', amount: '-$89.47', type: 'debit' }
                        ].map((transaction, index) => (
                          <div key={index} className="transaction-item">
                            <div className="transaction-icon"></div>
                            <div className="transaction-details">
                              <div className="transaction-name">{transaction.name}</div>
                              <div className={`transaction-amount ${transaction.type}`}>
                                {transaction.amount}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fintech-glow"></div>
              </div>
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
              <FaHeadset className="btn-icon" />
              Start Your FinTech Project
            </Link>
            <Link to="/demo" className="btn btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="fintech-services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive FinTech Development Services</h2>
            <p className="section-subtitle">
              From digital payments to blockchain solutions, we deliver end-to-end fintech services that revolutionize financial operations.
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

      {/* Portfolio Section */}
      <div className="fintech-portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our FinTech Success Stories</h2>
            <p className="section-subtitle">
              Discover how we've helped financial institutions and startups build innovative solutions that drive business growth.
            </p>
          </div>
          <div className="fintech-portfolio-grid">
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
                  <div className="portfolio-image-placeholder" style={{ display: 'none', color: project.color }}>
                    <FaCreditCard size={60} />
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
      </div>

      {/* Technologies Section */}
      <div className="fintech-technologies-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Advanced FinTech Technologies We Master</h2>
            <p className="section-subtitle">
              Our expertise spans across cutting-edge technologies that power modern financial services.
            </p>
          </div>
          <div className="fintech-technologies-grid">
            {technologies.map((techCategory, index) => (
              <div key={index} className="tech-category-card">
                <h3 className="tech-category-title">{techCategory.category}</h3>
                <ul className="tech-category-list">
                  {techCategory.items.map((item, idx) => (
                    <li key={idx} className="tech-category-item">
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

      {/* Testimonials Section */}
      <div className="fintech-testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our FinTech Clients Say</h2>
            <p className="section-subtitle">
              Hear from financial industry leaders who trust us with their digital transformation.
            </p>
          </div>
          <div className="fintech-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="avatar-placeholder" style={{ display: 'none' }}>
                      <FaUsers />
                    </div>
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="fintech-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Financial Services?</h3>
            <p className="cta-subtitle">
              Let's build innovative fintech solutions that drive growth, enhance security, and deliver exceptional user experiences.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Get Started Today
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinTechPage;
