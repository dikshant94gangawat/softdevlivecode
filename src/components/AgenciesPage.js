import React from 'react';
import styles from './AgenciesPage.module.css';
import Link from 'next/link';

import {
  FaHandshake, FaUsers, FaRocket, FaCogs, FaMobile, FaLaptop,
  FaCode, FaDesktop, FaStar, FaCheckCircle, FaArrowRight, FaHeadset,
  FaPalette, FaBullhorn, FaChartLine, FaGlobe, FaLightbulb, FaAward,
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaPhp, FaJava,
  FaDocker, FaAws, FaApple, FaAndroid, FaGithub, FaDatabase, FaLock
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiFlutter, SiMui, SiGraphql,
  SiFigma
} from 'react-icons/si';

const AgenciesPage = () => {
  const services = [
    {
      icon: FaHandshake,
      title: 'White Label Development',
      description: 'Complete white label development services that you can brand as your own, with full technical documentation and support.',
      features: ['Complete Branding', 'Technical Documentation', 'Ongoing Support', 'Quality Assurance'],
      color: '#e67e22'
    },
    {
      icon: FaUsers,
      title: 'Team Extension',
      description: 'Extend your agency capabilities with our skilled developers, designers, and technical specialists working as part of your team.',
      features: ['Skilled Developers', 'Flexible Engagement', 'Seamless Integration', 'Direct Communication'],
      color: '#3498db'
    },
    {
      icon: FaRocket,
      title: 'Rapid Project Delivery',
      description: 'Fast-track your client projects with our agile development approach and proven delivery methodologies.',
      features: ['Agile Methodology', 'Quick Turnaround', 'Milestone Tracking', 'Client Satisfaction'],
      color: '#e74c3c'
    },
    {
      icon: FaCogs,
      title: 'Custom Solutions',
      description: 'Tailored development solutions that match your clients specific requirements and your agency brand standards.',
      features: ['Custom Development', 'Brand Alignment', 'Scalable Solutions', 'Technical Excellence'],
      color: '#9b59b6'
    },
    {
      icon: FaMobile,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that enhance your service portfolio and client satisfaction.',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'App Store Deployment'],
      color: '#1abc9c'
    },
    {
      icon: FaDesktop,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with latest technologies and best practices.',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized', 'Performance Focus'],
      color: '#f39c12'
    }
  ];

  const partnershipModels = [
    {
      title: 'White Label Partnership',
      description: 'Complete development services under your brand',
      icon: FaHandshake,
      benefits: ['Your Brand', 'Full Control', 'Client Direct', 'Higher Margins'],
      pricing: 'Revenue Share'
    },
    {
      title: 'Subcontractor Model',
      description: 'We work as your technical subcontractor',
      icon: FaCogs,
      benefits: ['Project Based', 'Flexible Terms', 'Quality Assured', 'On-Time Delivery'],
      pricing: 'Fixed Price'
    },
    {
      title: 'Team Extension',
      description: 'Dedicated developers as part of your team',
      icon: FaUsers,
      benefits: ['Dedicated Team', 'Long-term', 'Direct Access', 'Skill Variety'],
      pricing: 'Monthly Retainer'
    },
    {
      title: 'Joint Venture',
      description: 'Collaborative partnership for large projects',
      icon: FaRocket,
      benefits: ['Shared Risk', 'Combined Expertise', 'Larger Projects', 'Market Expansion'],
      pricing: 'Profit Sharing'
    }
  ];

  const portfolio = [
    {
      title: 'Digital Marketing Platform',
      description: 'White label digital marketing platform developed for creative agency with 50+ clients.',
      image: '/images/agency-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      metrics: { clients: '50+', campaigns: '200+', roi: '+150%', retention: '95%' },
      agency: 'Creative Digital Agency'
    },
    {
      title: 'E-commerce Multi-Store',
      description: 'Multi-tenant e-commerce platform enabling agency to serve multiple retail clients efficiently.',
      image: '/images/agency-portfolio-2.jpg',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'PayPal'],
      metrics: { stores: '25+', orders: '10K+', revenue: '$2M+', uptime: '99.9%' },
      agency: 'Retail Solutions Agency'
    },
    {
      title: 'SaaS Dashboard Suite',
      description: 'Comprehensive SaaS dashboard solution for business consulting agency serving enterprise clients.',
      image: '/images/agency-portfolio-3.jpg',
      technologies: ['Angular', 'Django', 'PostgreSQL', 'Docker', 'Azure'],
      metrics: { dashboards: '100+', users: '5K+', insights: '1M+', satisfaction: '98%' },
      agency: 'Business Consulting Group'
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
      category: 'Backend Development',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Python', icon: FaPython },
        { name: 'PHP', icon: FaPhp },
        { name: 'Ruby', icon: FaCode },
        { name: 'Java', icon: FaJava }
      ]
    },
    {
      category: 'Mobile Development',
      technologies: [
        { name: 'React Native', icon: FaReact },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'iOS Native', icon: FaApple },
        { name: 'Android', icon: FaAndroid },
        { name: 'PWA', icon: FaGlobe }
      ]
    },
    {
      category: 'Design & UX',
      technologies: [
        { name: 'Figma', icon: SiFigma },
        { name: 'Adobe XD', icon: FaPalette },
        { name: 'Sketch', icon: FaDesktop },
        { name: 'Prototyping', icon: FaCogs },
        { name: 'User Testing', icon: FaUsers }
      ]
    },
    {
      category: 'DevOps & Cloud',
      technologies: [
        { name: 'AWS', icon: FaAws },
        { name: 'Docker', icon: FaDocker },
        { name: 'CI/CD', icon: FaCogs },
        { name: 'Monitoring', icon: FaChartLine },
        { name: 'Security', icon: FaLock }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Adams',
      company: 'Founder, Creative Digital Agency',
      text: 'SoftDevSquad has been our secret weapon. Their white label development services helped us scale from 10 to 50+ clients while maintaining quality and our brand reputation.',
      rating: 5,
      image: '/images/testimonial-agency-1.jpg'
    },
    {
      name: 'Mark Thompson',
      company: 'CEO, Retail Solutions Agency',
      text: 'The multi-store e-commerce platform they developed under our brand generated $2M+ revenue for our clients. Exceptional technical expertise and partnership.',
      rating: 5,
      image: '/images/testimonial-agency-2.jpg'
    },
    {
      name: 'Sarah Martinez',
      company: 'Partner, Business Consulting Group',
      text: 'Their team extension model worked perfectly for our enterprise projects. 100+ dashboards delivered with 98% client satisfaction rate.',
      rating: 5,
      image: '/images/testimonial-agency-3.jpg'
    }
  ];

  const stats = [
    { number: '150+', label: 'Agency Partners' },
    { number: '500+', label: 'White Label Projects' },
    { number: '95%', label: 'Partner Retention' },
    { number: '48hr', label: 'Response Time' }
  ];

  return (
    <div className={styles['agencies-page']}>
      {/* Hero Section */}
      <div className={styles['agencies-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['agencies-hero-content']}>
            <div className={styles['hero-badge']}>
              <FaHandshake className={styles['badge-icon']} />
              <span>Trusted Agency Development Partner</span>
            </div>
            <h1 className={styles['agencies-hero-title']}>
              Scale Your <span className={styles.highlight}>Agency Success</span> with Expert Development
            </h1>
            <p className={styles['agencies-hero-subtitle']}>
              Partner with us to expand your service offerings, deliver exceptional client projects, and grow your agency with white label development solutions.
            </p>
            <div className={styles['hero-actions']}>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                <FaHeadset className={styles['btn-icon']} />
                Become a Partner
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
                View Partnership Models
              </a></Link>
            </div>
            <div className={styles['hero-stats']}>
              {stats.map((stat, index) => (
                <div key={index} className={styles['stat-item']}>
                  <div className={styles['stat-number']}>{stat.number}</div>
                  <div className={styles['stat-label']}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Models Section */}
      <section className={styles['partnership-models']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Partnership Models That Work</h2>
            <p className={styles['section-subtitle']}>
              Flexible partnership options designed to fit your agency's needs and business model
            </p>
          </div>
          <div className={styles['services-grid']}>
            {partnershipModels.map((model, index) => (
              <div key={index} className={styles['service-card']}>
                <div className={styles['service-icon']} style={{ color: model.color || '#00ffff' }}>
                  <model.icon />
                </div>
                <h3 className={styles['service-title']}>{model.title}</h3>
                <p className={styles['service-description']}>{model.description}</p>

                <ul className={styles['service-features']}>
                  {model.benefits.map((benefit, idx) => (
                    <li key={idx} className={styles['service-feature']}>
                      <FaCheckCircle className={styles['feature-icon']} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <div className={styles['model-pricing-wrapper']}>
                  <div className={styles['model-pricing']}>
                    <FaAward className={styles['pricing-icon']} />
                    {model.pricing}
                  </div>
                </div>

                <Link href="/contact" legacyBehavior><a className={styles['service-cta']}>
                  Choose Model
                  <FaArrowRight className={styles['cta-icon']} />
                </a></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles['agencies-services']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Agency-Focused Development Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive development services designed specifically for agency partnerships
            </p>
          </div>
          <div className={styles['services-grid']}>
            {services.map((service, index) => (
              <div key={index} className={styles['service-card']}>
                <div className={styles['service-icon']} style={{ color: service.color }}>
                  <service.icon />
                </div>
                <h3 className={styles['service-title']}>{service.title}</h3>
                <p className={styles['service-description']}>{service.description}</p>

                <ul className={styles['service-features']}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles['service-feature']}>
                      <FaCheckCircle className={styles['feature-icon']} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" legacyBehavior><a className={styles['service-cta']}>
                  Get Started
                  <FaArrowRight className={styles['cta-icon']} />
                </a></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className={styles['agencies-portfolio']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Agency Partnership Success Stories</h2>
            <p className={styles['section-subtitle']}>
              Real partnerships that delivered exceptional results for agencies and their clients
            </p>
          </div>
          <div className={styles['portfolio-grid']}>
            {portfolio.map((project, index) => (
              <div key={index} className={styles['portfolio-card']}>
                <div className={styles['portfolio-image']}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles['portfolio-overlay']}>
                    <div className={styles['portfolio-agency']}>{project.agency}</div>
                    <div className={styles['portfolio-metrics']}>
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className={styles['metric-item']}>
                          <span className={styles['metric-value']}>{value}</span>
                          <span className={styles['metric-label']}>{key}</span>
                        </div>
                      ))}
                    </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className={styles['tech-stack']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Agency-Ready Technology Stack</h2>
            <p className={styles['section-subtitle']}>
              Modern technologies and tools that help agencies deliver exceptional client results
            </p>
          </div>
          <div className={styles['tech-categories']}>
            {techStack.map((category, index) => (
              <div key={index} className={styles['tech-category']}>
                <h3 className={styles['category-title']}>{category.category}</h3>
                <div className={styles['tech-items']}>
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className={styles['tech-item']}>
                      <tech.icon className={styles['tech-icon']} />
                      <span className={styles['tech-name']}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles['agencies-testimonials']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>What Agency Partners Say</h2>
            <p className={styles['section-subtitle']}>
              Success stories from agency leaders who transformed their business with our partnership
            </p>
          </div>
          <div className={styles['testimonials-grid']}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles['testimonial-card']}>
                <div className={styles['testimonial-content']}>
                  <div className={styles['testimonial-stars']}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className={styles.star} />
                    ))}
                  </div>
                  <p className={styles['testimonial-text']}>"{testimonial.text}"</p>
                </div>
                <div className={styles['testimonial-author']}>
                  <div className={styles['author-avatar']}>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className={styles['author-info']}>
                    <h4 className={styles['author-name']}>{testimonial.name}</h4>
                    <p className={styles['author-company']}>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles['agencies-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h2 className={styles['cta-title']}>Ready to Scale Your Agency?</h2>
            <p className={styles['cta-description']}>
              Join 150+ agencies who trust us to deliver exceptional development services under their brand. Let's grow together.
            </p>
            <div className={styles['cta-buttons']}>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                <FaHeadset className={styles['btn-icon']} />
                Start Partnership
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
                Schedule Partnership Call
              </a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgenciesPage;
