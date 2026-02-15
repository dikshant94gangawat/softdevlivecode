import React from 'react';
import styles from './IndustriesPage.module.css';
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
    <div className={styles['industries-page']}>
      {/* Hero Section */}
      <div className={styles['industries-hero']}>
        <div className={styles['industries-hero-background']}>
          <div className={styles['hero-pattern']}></div>
          <div className={styles['hero-glow']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['industries-hero-content']}>
            <div className={styles['hero-badge']}>
              <FaIndustry className={styles['badge-icon']} />
              <span>Industry Expertise</span>
            </div>
            <h1 className={styles['industries-hero-title']}>
              Industries We <span className={styles.highlight}>Serve</span>
            </h1>
            <p className={styles['industries-hero-subtitle']}>
              Specialized technology solutions across diverse industries. 
              We understand your unique challenges and deliver tailored solutions that drive growth.
            </p>
            <div className={styles['hero-stats']}>
              <div className={styles['stat-item']}>
                <span className={styles['stat-number']}>12+</span>
                <span className={styles['stat-label']}>Industries</span>
              </div>
              <div className={styles['stat-item']}>
                <span className={styles['stat-number']}>200+</span>
                <span className={styles['stat-label']}>Projects Delivered</span>
              </div>
              <div className={styles['stat-item']}>
                <span className={styles['stat-number']}>98%</span>
                <span className={styles['stat-label']}>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Industries Section */}
      <div className={styles['industries-main']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Technology Industries</h2>
            <p className={styles['section-subtitle']}>
              Cutting-edge solutions for technology-driven sectors
            </p>
          </div>

          <div className={styles['industries-grid']}>
            {technologyIndustries.map((industry, index) => (
              <div key={index} className={styles['industry-card']}>
                <div className={styles['industry-icon']}>
                  <industry.icon />
                </div>
                <h3 className={styles['industry-title']}>{industry.title}</h3>
                <p className={styles['industry-description']}>{industry.description}</p>
                
                <ul className={styles['industry-features']}>
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className={styles['industry-feature']}>
                      <FaCheckCircle className={styles['feature-icon']} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={industry.link} className={styles['industry-cta']}>
                  Learn More
                  <FaArrowRight className={styles['cta-icon']} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Industries Section */}
      <div className={styles['industries-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Business Sectors</h2>
            <p className={styles['section-subtitle']}>
              Tailored solutions for businesses of all sizes
            </p>
          </div>

          <div className={styles['industries-grid']}>
            {businessIndustries.map((industry, index) => (
              <div key={index} className={styles['industry-card']}>
                <div className={styles['industry-icon']}>
                  <industry.icon />
                </div>
                <h3 className={styles['industry-title']}>{industry.title}</h3>
                <p className={styles['industry-description']}>{industry.description}</p>
                
                <ul className={styles['industry-features']}>
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className={styles['industry-feature']}>
                      <FaCheckCircle className={styles['feature-icon']} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={industry.link} className={styles['industry-cta']}>
                  Learn More
                  <FaArrowRight className={styles['cta-icon']} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className={styles['solutions-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Specialized Solutions</h2>
            <p className={styles['section-subtitle']}>
              Advanced solutions for complex business requirements
            </p>
          </div>

          <div className={styles['solutions-grid']}>
            {solutions.map((solution, index) => (
              <Link key={index} to={solution.link} className={styles['solution-card']}>
                <h3 className={styles['solution-title']}>{solution.title}</h3>
                <p className={styles['solution-description']}>{solution.description}</p>
                <div className={styles['solution-link']}>
                  Explore Solution
                  <FaArrowRight className={styles['solution-arrow']} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className={styles['testimonials-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>What Our Clients Say</h2>
            <p className={styles['section-subtitle']}>
              Real feedback from satisfied customers across industries
            </p>
          </div>

          <div className={styles['testimonials-grid']}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles['testimonial-card']}>
                <div className={styles['testimonial-rating']}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={styles['star-icon']} />
                  ))}
                </div>
                <p className={styles['testimonial-text']}>"{testimonial.text}"</p>
                <div className={styles['testimonial-author']}>
                  <div className={styles['author-name']}>{testimonial.name}</div>
                  <div className={styles['author-company']}>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles['industries-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Transform Your Industry?</h3>
            <p className={styles['cta-subtitle']}>
              Let's discuss how our industry-specific solutions can help your business grow
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaRocket className={styles['btn-icon']} />
                Get Started
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
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

