import React from 'react';
import styles from './PricingPage.module.css';
import Link from 'next/link';
import {
  FaCheckCircle, FaArrowRight, FaHeadset, FaRocket, FaCode, FaCloud, FaBuilding
} from 'react-icons/fa';

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
    <div className={styles['pricing-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaRocket className={styles['badge-icon']} />
                <span>Transparent Pricing</span>
              </div>
              <h1 className={styles['hero-title']}>
                Our <span className={styles.highlight}>Pricing</span>
              </h1>
              <p className={styles['hero-subtitle']}>
                Flexible pricing plans tailored to your needs. All projects are custom-quoted based on your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['pricing-plans-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Project-Based Pricing</h2>
            <p className={styles['section-subtitle']}>
              Choose the plan that fits your project needs
            </p>
          </div>
          <div className={styles['pricing-grid']}>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className={styles['popular-badge']}>Most Popular</div>}
                <div className={styles['pricing-icon']}>
                  <plan.icon />
                </div>
                <h3 className={styles['pricing-name']}>{plan.name}</h3>
                <div className={styles['pricing-price']}>{plan.price}</div>
                <p className={styles['pricing-description']}>{plan.description}</p>
                <ul className={styles['pricing-features']}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={styles['pricing-feature']}>
                      <FaCheckCircle className={styles['feature-icon']} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" legacyBehavior><a className={styles['pricing-cta']}>Get Quote<FaArrowRight className={styles['cta-icon']} /></a></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* 
      <div className={styles['services-pricing-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Service Pricing</h2>
            <p className={styles['section-subtitle']}>
              Starting prices for individual services
            </p>
          </div>
          <div className={styles['services-grid']}>
            {services.map((service, index) => (
              <div key={index} className={styles['service-pricing-card']}>
                <h3 className={styles['service-name']}>{service.name}</h3>
                <div className={styles['service-price']}>{service.price}</div>
                <p className={styles['service-description']}>{service.description}</p>
                <Link to="/contact" className={styles['service-cta']}>
                  Contact Us
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Need a Custom Quote?</h3>
            <p className={styles['cta-subtitle']}>
              Every project is unique. Contact us for a personalized quote based on your specific requirements.
            </p>
            <div className={styles['cta-actions']}>
                <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}><FaHeadset className={styles['btn-icon']} />Get Custom Quote</a></Link>
              <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>Schedule Demo</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
