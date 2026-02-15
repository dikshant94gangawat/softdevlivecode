import React from 'react';
import Link from 'next/link';

import { 
  FaCreditCard, 
  FaHeartbeat, 
  FaGraduationCap, 
  FaShoppingCart,
  FaRocket,
  FaBuilding,
  FaCity,
  FaHandshake,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaIndustry
} from 'react-icons/fa';

const IndustriesPage = () => {
  const industries = [
    {
      icon: FaCreditCard,
      title: 'FinTech',
      description: 'Financial technology solutions including digital payments, banking apps, and trading platforms',
      features: ['Digital Payments', 'Mobile Banking', 'Trading Platforms', 'Fraud Detection'],
      link: '/fintech',
      category: 'Technology'
    },
    {
      icon: FaHeartbeat,
      title: 'HealthTech',
      description: 'Healthcare technology solutions for telemedicine, patient management, and medical devices',
      features: ['Telemedicine', 'EHR Systems', 'Health Monitoring', 'Medical Apps'],
      link: '/healthtech',
      category: 'Technology'
    },
    {
      icon: FaGraduationCap,
      title: 'EdTech',
      description: 'Educational technology platforms for online learning, student management, and virtual classrooms',
      features: ['LMS Platforms', 'E-Learning', 'Student Portals', 'Virtual Classrooms'],
      link: '/edtech',
      category: 'Technology'
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce',
      description: 'Complete e-commerce solutions with shopping carts, payment gateways, and inventory management',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Order Tracking'],
      link: '/ecommerce',
      category: 'Technology'
    },
    {
      icon: FaRocket,
      title: 'Startups',
      description: 'Technology solutions tailored for startups, from MVP development to scaling',
      features: ['MVP Development', 'Rapid Prototyping', 'Scalable Architecture', 'Startup Support'],
      link: '/startups',
      category: 'Business'
    },
    {
      icon: FaBuilding,
      title: 'SMEs',
      description: 'Cost-effective technology solutions for small and medium enterprises',
      features: ['Business Automation', 'Cloud Solutions', 'Digital Transformation', 'IT Support'],
      link: '/smes',
      category: 'Business'
    },
    {
      icon: FaCity,
      title: 'Enterprises',
      description: 'Enterprise-grade solutions for large organizations with complex requirements',
      features: ['Enterprise Systems', 'Integration Services', 'Security Solutions', '24/7 Support'],
      link: '/enterprises',
      category: 'Business'
    },
    {
      icon: FaHandshake,
      title: 'Agencies',
      description: 'White-label development services and technical support for agencies',
      features: ['White-Label Solutions', 'Technical Support', 'API Development', 'Agency Partnerships'],
      link: '/agencies',
      category: 'Business'
    }
  ];

  const solutions = [
    {
      title: 'Custom Solutions',
      description: 'Tailored technology solutions designed specifically for your business needs',
      link: '/custom-solutions'
    },
    {
      title: 'SaaS Development',
      description: 'Scalable Software-as-a-Service platforms for subscription-based businesses',
      link: '/saas-development'
    },
    {
      title: 'Digital Platforms',
      description: 'Comprehensive digital platforms connecting users, services, and businesses',
      link: '/digital-platforms'
    },
    {
      title: 'Integration Services',
      description: 'Seamless integration of systems, APIs, and third-party services',
      link: '/integration-services'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'FinTech Innovations',
      text: 'SoftDevSquad transformed our financial platform with cutting-edge technology and exceptional service.',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      company: 'HealthCare Plus',
      text: 'Their HealthTech solutions helped us reach more patients and improve care delivery significantly.',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      company: 'EduLearn Inc.',
      text: 'The EdTech platform they built has revolutionized how we deliver education to our students.',
      rating: 5
    }
  ];

  const technologyIndustries = industries.filter(ind => ind.category === 'Technology');
  const businessIndustries = industries.filter(ind => ind.category === 'Business');

  return (
    <div className="industries-page">
      {/* Hero Section */}
      <div className="industries-hero">
        <div className="industries-hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="container">
          <div className="industries-hero-content">
            <div className="hero-badge">
              <FaIndustry className="badge-icon" />
              <span>Industry Expertise</span>
            </div>
            <h1 className="industries-hero-title">
              Industries We <span className="highlight">Serve</span>
            </h1>
            <p className="industries-hero-subtitle">
              Specialized technology solutions across diverse industries. 
              We understand your unique challenges and deliver tailored solutions that drive growth.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">12+</span>
                <span className="stat-label">Industries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Industries Section */}
      <div className="industries-main">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technology Industries</h2>
            <p className="section-subtitle">
              Cutting-edge solutions for technology-driven sectors
            </p>
          </div>

          <div className="industries-grid">
            {technologyIndustries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">
                  <industry.icon />
                </div>
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-description">{industry.description}</p>
                
                <ul className="industry-features">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="industry-feature">
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={industry.link} className="industry-cta">
                  Learn More
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Industries Section */}
      <div className="industries-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Business Sectors</h2>
            <p className="section-subtitle">
              Tailored solutions for businesses of all sizes
            </p>
          </div>

          <div className="industries-grid">
            {businessIndustries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">
                  <industry.icon />
                </div>
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-description">{industry.description}</p>
                
                <ul className="industry-features">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="industry-feature">
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={industry.link} className="industry-cta">
                  Learn More
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="solutions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Specialized Solutions</h2>
            <p className="section-subtitle">
              Advanced solutions for complex business requirements
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <Link key={index} to={solution.link} className="solution-card">
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <div className="solution-link">
                  Explore Solution
                  <FaArrowRight className="solution-arrow" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Real feedback from satisfied customers across industries
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
      <div className="industries-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Industry?</h3>
            <p className="cta-subtitle">
              Let's discuss how our industry-specific solutions can help your business grow
            </p>
            <div className="cta-actions">
              <Link href="/contact" legacyBehavior><a className="btn btn-primary">
                <FaRocket className="btn-icon" />
                Get Started
              </a></Link>
              <Link href="/demo" legacyBehavior><a className="btn btn-outline">
                Book a Demo
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;

