import React, { useState } from 'react';
import styles from './PortfolioPage.module.css';
import Link from 'next/link';
import {
  FaRocket, FaCheckCircle, FaArrowRight, FaHeadset, FaFilter,
  FaCode, FaMobile, FaCloud, FaCreditCard, FaHeartbeat, FaGraduationCap
} from 'react-icons/fa';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'FinTech', 'HealthTech', 'EdTech', 'E-commerce', 'SaaS', 'Startups', 'Enterprise'];

  const portfolio = [
    {
      title: 'Digital Banking Platform',
      category: 'FinTech',
      description: 'Comprehensive digital banking solution serving 500K+ users with advanced security features and real-time transaction processing.',
      image: '/images/fintech-portfolio-1.jpg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      results: ['500K+ Active Users', '99.9% Uptime', '40% Faster Transactions'],
      icon: FaCreditCard
    },
    {
      title: 'AI-Powered Trading Bot',
      category: 'FinTech',
      description: 'Intelligent trading system with machine learning algorithms achieving 85% success rate in automated trades.',
      image: '/images/fintech-portfolio-2.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      results: ['85% Success Rate', '$50M+ Trades Executed', '24/7 Operations'],
      icon: FaCode
    },
    {
      title: 'Telemedicine Platform',
      category: 'HealthTech',
      description: 'Comprehensive telemedicine solution serving 100K+ patients with video consultations and remote monitoring.',
      image: '/images/healthtech-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
      results: ['100K+ Patients', '99.5% Uptime', '40% Cost Reduction'],
      icon: FaHeartbeat
    },
    {
      title: 'AI Diagnostic System',
      category: 'HealthTech',
      description: 'Machine learning-powered diagnostic tool for radiology with 95% accuracy in detecting abnormalities.',
      image: '/images/healthtech-portfolio-2.jpg',
      technologies: ['Python', 'TensorFlow', 'DICOM', 'Flask'],
      results: ['95% Accuracy', '50% Faster Diagnosis', '500+ Hospitals'],
      icon: FaHeartbeat
    },
    {
      title: 'EdTech Learning Platform',
      category: 'EdTech',
      description: 'AI-powered personalized learning platform with adaptive content delivery for students.',
      image: '/images/edtech-portfolio-1.jpg',
      technologies: ['Vue.js', 'Django', 'TensorFlow', 'Redis'],
      results: ['20K+ Students', '100+ Courses', '85% Completion Rate'],
      icon: FaGraduationCap
    },
    {
      title: 'E-commerce Marketplace',
      category: 'E-commerce',
      description: 'Multi-vendor e-commerce platform with advanced search, payment integration, and inventory management.',
      image: '/images/ecommerce-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      results: ['10K+ Products', '50K+ Users', '$2M+ Revenue'],
      icon: FaMobile
    },
    {
      title: 'SaaS CRM Platform',
      category: 'SaaS',
      description: 'Cloud-based CRM solution with sales automation, analytics, and customer management features.',
      image: '/images/saas-crm.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: ['500+ Companies', '99.9% Uptime', '30% Sales Increase'],
      icon: FaCloud
    },
    {
      title: 'FinTech Startup Platform',
      category: 'Startups',
      description: 'Revolutionary peer-to-peer lending platform with AI-powered risk assessment.',
      image: '/images/startup-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'Python', 'AWS'],
      results: ['10K+ Users', '$2M Funding', '300% Growth'],
      icon: FaRocket
    },
    {
      title: 'Enterprise ERP System',
      category: 'Enterprise',
      description: 'Comprehensive ERP solution for large enterprises with modules for finance, HR, and operations.',
      image: '/images/enterprise-portfolio-1.jpg',
      technologies: ['React', 'Java', 'PostgreSQL', 'Azure'],
      results: ['50+ Enterprises', '40% Efficiency Gain', '24/7 Support'],
      icon: FaCloud
    }
  ];

  const filteredPortfolio = selectedCategory === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '15+', label: 'Industries Served' },
    { number: '99.9%', label: 'Client Satisfaction' }
  ];

  return (
    <div className={styles['portfolio-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaRocket className={styles['badge-icon']} />
                <span>Our Work</span>
              </div>
              <h1 className={styles['hero-title']}>
                Our <span className={styles.highlight}>Portfolio</span>
              </h1>
              <p className={styles['hero-subtitle']}>
                Explore our successful projects across various industries. From startups to enterprises, we've delivered innovative solutions that drive business growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['hero-stats-section']}>
        <div className={styles.container}>
          <div className={styles['hero-stats']}>
            {stats.map((stat, index) => (
              <div key={index} className={styles['stat-item']}>
                <span className={styles['stat-number']}>{stat.number}</span>
                <span className={styles['stat-label']}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['portfolio-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Featured Projects</h2>
            <p className={styles['section-subtitle']}>
              Showcasing our best work across different industries and technologies
            </p>
          </div>
          
          <div className={styles['filter-tabs']}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${filter-tab} ${${selectedCategory} ${===} ${category} ${?} ${'active'} ${:} ${''}}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles['portfolio-grid']}>
            {filteredPortfolio.map((project, index) => (
              <div key={index} className={styles['portfolio-card']}>
                <div className={styles['portfolio-image']}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={styles['portfolio-image-placeholder']} style={{ display: 'none' }}>
                    <project.icon size={60} />
                  </div>
                  <div className={styles['portfolio-overlay']}>
                    <div className={styles['portfolio-category']}>{project.category}</div>
                  </div>
                </div>
                <div className={styles['portfolio-content']}>
                  <h3 className={styles['portfolio-title']}>{project.title}</h3>
                  <p className={styles['portfolio-description']}>{project.description}</p>
                  <div className={styles['portfolio-technologies']}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={styles['tech-tag']}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles['portfolio-results']}>
                    {project.results.map((result, idx) => (
                      <div key={idx} className={styles['result-item']}>
                        <FaCheckCircle className={styles['result-icon']} />
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

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Start Your Project?</h3>
            <p className={styles['cta-subtitle']}>
              Let's discuss how we can help bring your vision to life.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}><FaHeadset className={styles['btn-icon']} />Get Started</a></Link>
              <Link href="/case-studies" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>View Case Studies</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
