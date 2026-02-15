import React from 'react';
import styles from './ECommercePage.module.css';
import Link from 'next/link';

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
    <div className={styles['ecommerce-page']}>
      {/* Hero Section */}
      <div className={styles['ecommerce-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['ecommerce-hero-container']}>
            <div className={styles['ecommerce-hero-content']}>
              <div className={styles['hero-badge']}>
                <FaShoppingCart className={styles['badge-icon']} />
                <span>Leading E-commerce Development Company</span>
              </div>
              <h1 className={styles['ecommerce-hero-title']}>
                Revolutionary <span className={styles.highlight}>E-commerce Solutions</span> for Digital Commerce
              </h1>
              <p className={styles['ecommerce-hero-subtitle']}>
                Transform your business with cutting-edge e-commerce technology. We build secure, scalable, and innovative online solutions that drive sales growth and enhance customer experience.
              </p>
            </div>
            <div className={styles['ecommerce-hero-image']}>
              <div className={styles['ecommerce-mockup-container']}>
                <div className={`styles['ecommerce-device'] styles['ecommerce-laptop']`}>
                  <div className={styles['laptop-screen']}>
                    <div className={styles['ecommerce-interface']}>
                      <div className={styles['ecommerce-header']}>
                        <div className={styles['nav-bar']}>
                          <div className={styles.logo}>ShopZone</div>
                          <div className={styles['nav-items']}>
                            <div className={styles['nav-item']}>Categories</div>
                            <div className={styles['nav-item']}>Deals</div>
                            <div className={styles['nav-item']}>Cart (3)</div>
                          </div>
                        </div>
                        <div className={styles['search-section']}>
                          <div className={styles['search-bar']}>
                            <FaSearch className={styles['search-icon']} />
                            <div className={styles['search-text']}>Search products...</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles['ecommerce-content']}>
                        <div className={styles['hero-banner']}>
                          <div className={styles['banner-text']}>
                            <div className={styles['banner-title']}>Summer Sale</div>
                            <div className={styles['banner-subtitle']}>Up to 70% Off</div>
                          </div>
                        </div>
                        <div className={styles['product-section']}>
                          <div className={styles['section-title']}>Featured Products</div>
                          <div className={styles['products-grid']}>
                            {[1, 2, 3, 4].map(i => (
                              <div key={i} className={styles['product-card']}>
                                <div className={styles['product-image']}></div>
                                <div className={styles['product-info']}>
                                  <div className={styles['product-name']}></div>
                                  <div className={styles['product-price']}>$99</div>
                                  <div className={styles['add-to-cart']}>Add to Cart</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`styles['ecommerce-device'] styles['ecommerce-mobile']`}>
                  <div className={styles['mobile-screen']}>
                    <div className={styles['mobile-ecommerce-interface']}>
                      <div className={styles['mobile-header']}>
                        <div className={styles['mobile-nav']}>
                          <div className={styles['menu-icon']}>☰</div>
                          <div className={styles['mobile-logo']}>Shop</div>
                          <div className={styles['cart-icon']}>
                            <FaShoppingCart />
                            <div className={styles['cart-badge']}>2</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles['mobile-content']}>
                        <div className={styles['mobile-search']}>
                          <FaSearch className={styles['mobile-search-icon']} />
                          <div className={styles['mobile-search-text']}>Search...</div>
                        </div>
                        <div className={styles['mobile-categories']}>
                          {['Electronics', 'Fashion', 'Home'].map(cat => (
                            <div key={cat} className={styles['category-chip']}>{cat}</div>
                          ))}
                        </div>
                        <div className={styles['mobile-products']}>
                          {[1, 2].map(i => (
                            <div key={i} className={styles['mobile-product']}>
                              <div className={styles['mobile-product-image']}></div>
                              <div className={styles['mobile-product-info']}>
                                <div className={styles['mobile-product-name']}></div>
                                <div className={styles['mobile-product-price']}>$49</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['ecommerce-image-glow']}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className={styles['hero-stats-section']}>
        <div className={styles.container}>
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

      {/* Hero Actions Section */}
      <div className={styles['hero-actions-section']}>
        <div className={styles.container}>
          <div className={styles['hero-actions']}>
            <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
              <FaHeadset className={styles['btn-icon']} />
              Start Your E-commerce Project
            </a></Link>
            <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
              View Portfolio
            </a></Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className={styles['ecommerce-services']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our E-commerce Development Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive solutions for every aspect of your online business
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
      <section className={styles['ecommerce-portfolio']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our E-commerce Portfolio</h2>
            <p className={styles['section-subtitle']}>
              Successful projects that showcase our expertise in e-commerce development
            </p>
          </div>
          <div className={styles['portfolio-grid']}>
            {portfolio.map((project, index) => (
              <div key={index} className={styles['portfolio-card']}>
                <div className={styles['portfolio-image']}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles['portfolio-overlay']}>
                    <div className={styles['portfolio-stats']}>
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className={styles['portfolio-stat']}>
                          <span className={styles['stat-value']}>{value}</span>
                          <span className={styles['stat-key']}>{key}</span>
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
                  <div className={styles['portfolio-features']}>
                    {project.features.map((feature, idx) => (
                      <span key={idx} className={styles['portfolio-feature']}>
                        <FaCheckCircle className={styles['feature-check']} />
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
      <section className={styles['tech-stack']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our E-commerce Technology Stack</h2>
            <p className={styles['section-subtitle']}>
              Cutting-edge technologies for robust and scalable e-commerce solutions
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

      {/* Process Section */}
      <section className={styles['ecommerce-process']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our E-commerce Development Process</h2>
            <p className={styles['section-subtitle']}>
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className={styles['process-steps']}>
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
              <div key={index} className={styles['process-step']}>
                <div className={styles['step-number']} style={{ backgroundColor: process.color }}>
                  {process.step}
                </div>
                <div className={styles['step-icon']} style={{ color: process.color }}>
                  <process.icon />
                </div>
                <h3 className={styles['step-title']}>{process.title}</h3>
                <p className={styles['step-description']}>{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles['ecommerce-testimonials']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>What Our E-commerce Clients Say</h2>
            <p className={styles['section-subtitle']}>
              Success stories from businesses we've helped grow
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
                  <p className={styles['testimonial-text']}>"{testimonial.content}"</p>
                </div>
                <div className={styles['testimonial-author']}>
                  <div className={styles['author-avatar']}>{testimonial.avatar}</div>
                  <div className={styles['author-info']}>
                    <h4 className={styles['author-name']}>{testimonial.name}</h4>
                    <p className={styles['author-position']}>{testimonial.position}</p>
                    <p className={styles['author-company']}>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles['ecommerce-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h2 className={styles['cta-title']}>Ready to Launch Your E-commerce Success?</h2>
            <p className={styles['cta-description']}>
              Let's build an e-commerce solution that drives sales, delights customers, and grows your business.
            </p>
            <div className={styles['cta-buttons']}>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                <FaHeadset className={styles['btn-icon']} />
                Start Your Project
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
                Schedule Consultation
              </a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommercePage;
