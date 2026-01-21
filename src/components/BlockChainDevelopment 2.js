import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBitcoin, FaEthereum, FaShieldAlt, FaCode, FaUsers, FaStar, FaCheckCircle, 
  FaArrowRight, FaHeadset, FaChartBar, FaLock, FaGlobe, FaRocket, FaDatabase,
  FaCoins, FaExchangeAlt, FaWallet, FaCubes, FaNetworkWired, FaLayerGroup,
  FaUserShield, FaChartLine, FaCloud, FaServer, FaMicrochip
} from 'react-icons/fa';
import { 
  SiSolidity, SiWeb3Dotjs, SiNodedotjs, SiPython, SiReact, SiMongodb,
  SiPostgresql, SiDocker, SiKubernetes, SiAmazonaws
} from 'react-icons/si';
import './BlockChainDevelopment.css';

const BlockChainDevelopment = () => {
  const services = [
    {
      icon: FaBitcoin,
      title: 'Cryptocurrency Development',
      description: 'Create custom cryptocurrencies, tokens, and digital assets with advanced blockchain technology and smart contract integration.',
      features: ['Custom Token Creation', 'ICO/STO Development', 'Wallet Integration', 'Exchange Listing Support'],
      color: '#f7931a'
    },
    {
      icon: FaCode,
      title: 'Smart Contract Development',
      description: 'Build secure, audited smart contracts for various blockchain platforms including Ethereum, Binance Smart Chain, and Polygon.',
      features: ['Solidity Development', 'Contract Auditing', 'Gas Optimization', 'Multi-chain Support'],
      color: '#627eea'
    },
    {
      icon: FaExchangeAlt,
      title: 'DeFi Solutions',
      description: 'Develop decentralized finance applications including DEXs, lending platforms, yield farming, and liquidity protocols.',
      features: ['DEX Development', 'Lending Protocols', 'Yield Farming', 'Liquidity Pools'],
      color: '#1abc9c'
    },
    {
      icon: FaCubes,
      title: 'NFT Marketplace',
      description: 'Create comprehensive NFT marketplaces with minting, trading, and auction capabilities across multiple blockchain networks.',
      features: ['NFT Minting', 'Marketplace Development', 'Auction Systems', 'Royalty Management'],
      color: '#e74c3c'
    },
    {
      icon: FaNetworkWired,
      title: 'Blockchain Integration',
      description: 'Integrate blockchain technology into existing systems and applications with seamless API connections and data synchronization.',
      features: ['API Integration', 'Legacy System Connection', 'Data Migration', 'Real-time Sync'],
      color: '#9b59b6'
    },
    {
      icon: FaUserShield,
      title: 'Blockchain Security',
      description: 'Comprehensive security audits, penetration testing, and vulnerability assessments for blockchain applications.',
      features: ['Security Audits', 'Penetration Testing', 'Vulnerability Assessment', 'Compliance Check'],
      color: '#f39c12'
    }
  ];

  const portfolio = [
    {
      title: 'DeFi Trading Platform',
      description: 'Decentralized exchange with advanced trading features, liquidity pools, and yield farming capabilities.',
      image: '/images/blockchain-portfolio-1.jpg',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'IPFS'],
      features: ['Automated Market Making', 'Liquidity Mining', 'Cross-chain Swaps', 'Governance Token'],
      stats: { tvl: '$50M+', users: '25K+', transactions: '1M+' }
    },
    {
      title: 'NFT Art Marketplace',
      description: 'Full-featured NFT marketplace with minting, auctions, and royalty distribution for digital artists.',
      image: '/images/blockchain-portfolio-2.jpg',
      technologies: ['Ethereum', 'IPFS', 'React', 'Express.js', 'MongoDB'],
      features: ['Lazy Minting', 'Dutch Auctions', 'Creator Royalties', 'Multi-wallet Support'],
      stats: { nfts: '100K+', artists: '5K+', volume: '$10M+' }
    },
    {
      title: 'Supply Chain Tracking',
      description: 'Blockchain-based supply chain solution providing transparency and traceability from source to consumer.',
      image: '/images/blockchain-portfolio-3.jpg',
      technologies: ['Hyperledger', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      features: ['Product Tracking', 'Authenticity Verification', 'Smart Contracts', 'IoT Integration'],
      stats: { products: '1M+', companies: '500+', countries: '25+' }
    }
  ];

  const techStack = [
    {
      category: 'Blockchain Platforms',
      technologies: [
        { name: 'Ethereum', icon: FaEthereum },
        { name: 'Bitcoin', icon: FaBitcoin },
        { name: 'Binance Smart Chain', icon: FaCoins },
        { name: 'Polygon', icon: FaLayerGroup },
        { name: 'Hyperledger', icon: FaNetworkWired }
      ]
    },
    {
      category: 'Smart Contract Languages',
      technologies: [
        { name: 'Solidity', icon: SiSolidity },
        { name: 'Rust', icon: FaCode },
        { name: 'Go', icon: FaCode },
        { name: 'JavaScript', icon: FaCode },
        { name: 'Python', icon: SiPython }
      ]
    },
    {
      category: 'Development Tools',
      technologies: [
        { name: 'Web3.js', icon: SiWeb3Dotjs },
        { name: 'Truffle', icon: FaCode },
        { name: 'Hardhat', icon: FaCode },
        { name: 'Remix IDE', icon: FaCode },
        { name: 'MetaMask', icon: FaWallet }
      ]
    },
    {
      category: 'Backend & Database',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express.js', icon: FaServer },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'IPFS', icon: FaDatabase }
      ]
    },
    {
      category: 'Infrastructure',
      technologies: [
        { name: 'AWS', icon: SiAmazonaws },
        { name: 'Docker', icon: SiDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Infura', icon: FaCloud },
        { name: 'Alchemy', icon: FaNetworkWired }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      position: 'CTO, CryptoTrade Pro',
      company: 'DeFi Platform',
      content: 'SoftDevSquad delivered an exceptional DeFi platform that exceeded our expectations. Their blockchain expertise and attention to security is outstanding.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Williams',
      position: 'Founder, ArtBlock NFTs',
      company: 'NFT Marketplace',
      content: 'The NFT marketplace they built has revolutionized how we connect artists with collectors. The platform is robust, scalable, and user-friendly.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'Michael Rodriguez',
      position: 'CEO, SupplyChain Solutions',
      company: 'Enterprise Blockchain',
      content: 'Their blockchain supply chain solution provided complete transparency and traceability. It transformed our business operations entirely.',
      rating: 5,
      avatar: '👨‍💼'
    }
  ];

  const stats = [
    { number: '100+', label: 'Blockchain Projects' },
    { number: '$500M+', label: 'Value Locked' },
    { number: '50+', label: 'Smart Contracts' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  const blockchainSolutions = [
    {
      category: 'Scalability',
      title: 'High-Performance Solutions',
      description: 'Blockchain solutions that handle thousands of transactions per second',
      icon: FaRocket,
      benefits: ['Layer 2 Solutions', 'Sharding Implementation', 'Optimistic Rollups', 'State Channels']
    },
    {
      category: 'Security',
      title: 'Enterprise-Grade Security',
      description: 'Multi-layered security with comprehensive audits and testing',
      icon: FaShieldAlt,
      benefits: ['Smart Contract Audits', 'Penetration Testing', 'Formal Verification', 'Bug Bounty Programs']
    },
    {
      category: 'Interoperability',
      title: 'Cross-Chain Solutions',
      description: 'Seamless integration across multiple blockchain networks',
      icon: FaNetworkWired,
      benefits: ['Cross-chain Bridges', 'Multi-chain Support', 'Protocol Agnostic', 'Atomic Swaps']
    },
    {
      category: 'Compliance',
      title: 'Regulatory Compliance',
      description: 'Solutions built with regulatory requirements in mind',
      icon: FaLock,
      benefits: ['KYC/AML Integration', 'GDPR Compliance', 'SOX Compliance', 'Regulatory Reporting']
    }
  ];

  return (
    <div className="blockchain-page">
      {/* Hero Section */}
      <div className="blockchain-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="blockchain-hero-container">
            <div className="blockchain-hero-content">
              <div className="hero-badge">
                <FaBitcoin className="badge-icon" />
                <span>Leading Blockchain Development Company</span>
              </div>
              <h1 className="blockchain-hero-title">
                Revolutionary <span className="highlight">Blockchain Solutions</span> for the Future
              </h1>
              <p className="blockchain-hero-subtitle">
                Transform your business with cutting-edge blockchain technology. We build secure, scalable, and innovative decentralized solutions that drive digital transformation and unlock new possibilities.
              </p>
            </div>
            <div className="blockchain-hero-image">
              <div className="blockchain-mockup-container">
                <div className="blockchain-device blockchain-desktop">
                  <div className="desktop-screen">
                    <div className="blockchain-interface">
                      <div className="blockchain-header">
                        <div className="nav-bar">
                          <div className="logo">BlockChain Pro</div>
                          <div className="nav-items">
                            <div className="nav-item">Dashboard</div>
                            <div className="nav-item">Wallet</div>
                            <div className="nav-item">Trading</div>
                          </div>
                        </div>
                      </div>
                      <div className="blockchain-content">
                        <div className="stats-section">
                          <div className="stat-card">
                            <div className="stat-title">Portfolio Value</div>
                            <div className="stat-value">$125,430</div>
                            <div className="stat-change">+12.5%</div>
                          </div>
                          <div className="stat-card">
                            <div className="stat-title">Total Transactions</div>
                            <div className="stat-value">1,247</div>
                            <div className="stat-change">+5.2%</div>
                          </div>
                        </div>
                        <div className="crypto-section">
                          <div className="section-title">Your Assets</div>
                          <div className="crypto-list">
                            {[
                              { name: 'Bitcoin', symbol: 'BTC', value: '$45,230', change: '+2.1%' },
                              { name: 'Ethereum', symbol: 'ETH', value: '$32,180', change: '+5.8%' },
                              { name: 'Binance Coin', symbol: 'BNB', value: '$18,920', change: '-1.2%' }
                            ].map((crypto, i) => (
                              <div key={i} className="crypto-item">
                                <div className="crypto-icon"></div>
                                <div className="crypto-info">
                                  <div className="crypto-name">{crypto.name}</div>
                                  <div className="crypto-symbol">{crypto.symbol}</div>
                                </div>
                                <div className="crypto-value">
                                  <div className="value">{crypto.value}</div>
                                  <div className={`change ${crypto.change.startsWith('+') ? 'positive' : 'negative'}`}>
                                    {crypto.change}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blockchain-device blockchain-mobile">
                  <div className="mobile-screen">
                    <div className="mobile-blockchain-interface">
                      <div className="mobile-header">
                        <div className="mobile-nav">
                          <div className="menu-icon">☰</div>
                          <div className="mobile-logo">Crypto</div>
                          <div className="notification-icon">🔔</div>
                        </div>
                      </div>
                      <div className="mobile-content">
                        <div className="mobile-balance">
                          <div className="balance-title">Total Balance</div>
                          <div className="balance-value">$125,430</div>
                        </div>
                        <div className="mobile-actions">
                          <div className="action-btn">Send</div>
                          <div className="action-btn">Receive</div>
                          <div className="action-btn">Trade</div>
                        </div>
                        <div className="mobile-assets">
                          {['BTC', 'ETH', 'BNB'].map(symbol => (
                            <div key={symbol} className="mobile-asset">
                              <div className="mobile-asset-icon"></div>
                              <div className="mobile-asset-info">
                                <div className="mobile-asset-symbol">{symbol}</div>
                                <div className="mobile-asset-value">$15.2K</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blockchain-image-glow"></div>
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
              Start Your Blockchain Project
            </Link>
            <Link to="/demo" className="btn btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Blockchain Solutions Section */}
      <section className="blockchain-solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Blockchain Solutions</h2>
            <p className="section-subtitle">
              Cutting-edge blockchain development with enterprise-grade security and scalability
            </p>
          </div>
          <div className="services-grid">
            {blockchainSolutions.map((solution, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: '#ffd700' }}>
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
      <section className="blockchain-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Blockchain Development Services</h2>
            <p className="section-subtitle">
              Comprehensive blockchain solutions for every business need
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
      <section className="blockchain-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Blockchain Portfolio</h2>
            <p className="section-subtitle">
              Successful blockchain projects that showcase our expertise
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
                          <span className="stat-key">{key.toUpperCase()}</span>
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
            <h2 className="section-title">Our Blockchain Technology Stack</h2>
            <p className="section-subtitle">
              Cutting-edge technologies for robust and scalable blockchain solutions
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
      <section className="blockchain-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Blockchain Development Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful blockchain project delivery
            </p>
          </div>
          <div className="process-steps">
            {[
              {
                step: '01',
                title: 'Consultation & Analysis',
                description: 'Understanding your business requirements and blockchain use case analysis.',
                icon: FaUsers,
                color: '#f7931a'
              },
              {
                step: '02',
                title: 'Architecture Design',
                description: 'Designing blockchain architecture and smart contract specifications.',
                icon: FaCubes,
                color: '#627eea'
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Building blockchain solutions with comprehensive testing and auditing.',
                icon: FaCode,
                color: '#1abc9c'
              },
              {
                step: '04',
                title: 'Deployment & Integration',
                description: 'Deploying to mainnet and integrating with existing systems.',
                icon: FaRocket,
                color: '#e74c3c'
              },
              {
                step: '05',
                title: 'Support & Maintenance',
                description: 'Ongoing support, monitoring, and performance optimization.',
                icon: FaHeadset,
                color: '#9b59b6'
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
      <section className="blockchain-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Blockchain Clients Say</h2>
            <p className="section-subtitle">
              Success stories from businesses we've helped transform with blockchain
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
      <section className="blockchain-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build the Future with Blockchain?</h2>
            <p className="cta-description">
              Let's create innovative blockchain solutions that transform your business and unlock new opportunities in the decentralized economy.
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

export default BlockChainDevelopment;
