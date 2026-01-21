import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle, FaArrowRight, FaHeadset, FaRocket, FaCode, FaCloud, FaBuilding
} from 'react-icons/fa';
import './PricingPage.css';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      icon: FaCode,
      price: 'Custom',
      description: 'Perfect for small projects and startups',
      features: [
        'Basic Web/Mobile App',
        'Up to 3 months development',
        'Basic UI/UX Design',
        'Standard Support',
        '1-2 Team Members',
        'Source Code Delivery'
      ],
      popular: false
    },
    {
      name: 'Professional',
      icon: FaCloud,
      price: 'Custom',
      description: 'Ideal for growing businesses',
      features: [
        'Full-Stack Application',
        '3-6 months development',
        'Advanced UI/UX Design',
        'Priority Support',
        '3-5 Team Members',
        'Cloud Deployment',
        'API Integration',
        'Performance Optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: FaBuilding,
      price: 'Custom',
      description: 'For large-scale enterprise solutions',
      features: [
        'Enterprise-Grade Solutions',
        '6+ months development',
        'Custom Architecture',
        '24/7 Dedicated Support',
        'Unlimited Team Members',
        'Multi-Cloud Deployment',
        'Advanced Security',
        'Scalability Planning',
        'Ongoing Maintenance',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ];

  const services = [
    {
      name: 'Mobile App Development',
      price: 'From $5,000',
      description: 'Native iOS, Android, or cross-platform apps'
    },
    {
      name: 'Web Development',
      price: 'From $3,000',
      description: 'Custom websites and web applications'
    },
    {
      name: 'Full-Stack Development',
      price: 'From $8,000',
      description: 'Complete end-to-end solutions'
    },
    {
      name: 'UI/UX Design',
      price: 'From $2,000',
      description: 'Professional design services'
    },
    {
      name: 'Cloud Migration',
      price: 'From $4,000',
      description: 'Migrate to AWS, Azure, or GCP'
    },
    {
      name: 'Maintenance & Support',
      price: 'From $500/month',
      description: 'Ongoing support and updates'
    }
  ];

  return (
    <div className="pricing-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaRocket className="badge-icon" />
                <span>Transparent Pricing</span>
              </div>
              <h1 className="hero-title">
                Our <span className="highlight">Pricing</span>
              </h1>
              <p className="hero-subtitle">
                Flexible pricing plans tailored to your needs. All projects are custom-quoted based on your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-plans-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Project-Based Pricing</h2>
            <p className="section-subtitle">
              Choose the plan that fits your project needs
            </p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="pricing-icon">
                  <plan.icon />
                </div>
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">{plan.price}</div>
                <p className="pricing-description">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="pricing-feature">
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="pricing-cta">
                  Get Quote
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="services-pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Service Pricing</h2>
            <p className="section-subtitle">
              Starting prices for individual services
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-pricing-card">
                <h3 className="service-name">{service.name}</h3>
                <div className="service-price">{service.price}</div>
                <p className="service-description">{service.description}</p>
                <Link to="/contact" className="service-cta">
                  Contact Us
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Need a Custom Quote?</h3>
            <p className="cta-subtitle">
              Every project is unique. Contact us for a personalized quote based on your specific requirements.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Get Custom Quote
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
