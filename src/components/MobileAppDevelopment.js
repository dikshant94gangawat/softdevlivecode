import React from 'react';
import styles from './MobileAppDevelopment.module.css';
import Link from 'next/link';

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

const MobileAppDevelopment = () => {
  // Function to render app screen content
  const renderAppScreen = (appScreen) => {
    const { type, title, subtitle, elements } = appScreen;
    
    return (
      <div className={styles['app-screen-content']}>
        <div className={styles['app-header']}>
          <div className={styles['app-status-bar']}>
            <div className={styles['status-time']}>9:41</div>
            <div className={styles['status-icons']}>
              <div className={styles['signal-bars']}></div>
              <div className={styles['wifi-icon']}></div>
              <div className={styles['battery-icon']}></div>
            </div>
          </div>
          <div className={styles['app-title-bar']}>
            <h3 className={styles['app-title']}>{title}</h3>
            <p className={styles['app-subtitle']}>{subtitle}</p>
          </div>
        </div>
        
        <div className={styles['app-body']}>
          {type === 'ecommerce' && (
            <div className={styles['ecommerce-screen']}>
              <div className={styles['search-section']}>
                <div className={styles['search-bar']}>
                  <div className={styles['search-icon']}></div>
                  <div className={styles['search-text']}>Search products...</div>
                </div>
                <div className={styles['cart-icon']}>
                  <div className={styles['cart-badge']}>3</div>
                </div>
              </div>
              <div className={styles['product-grid']}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={styles['product-card']}>
                    <div className={styles['product-image']}></div>
                    <div className={styles['product-info']}>
                      <div className={styles['product-name']}></div>
                      <div className={styles['product-price']}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {type === 'fitness' && (
            <div className={styles['fitness-screen']}>
              <div className={styles['stats-section']}>
                <div className={styles['main-stat']}>
                  <div className={styles['stat-number']}>8,247</div>
                  <div className={styles['stat-label']}>Steps Today</div>
                </div>
                <div className={styles['progress-ring']}></div>
              </div>
              <div className={styles['workout-cards']}>
                {['Cardio', 'Strength', 'Yoga'].map(workout => (
                  <div key={workout} className={styles['workout-card']}>
                    <div className={styles['workout-icon']}></div>
                    <div className={styles['workout-name']}>{workout}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {type === 'social' && (
            <div className={styles['social-screen']}>
              <div className={styles['stories-section']}>
                <div className={`${styles['story-item']} ${styles.active}`}>
                  <div className={styles['story-avatar']}></div>
                  <div className={styles['story-name']}>Your Story</div>
                </div>
                {[1, 2, 3].map(i => (
                  <div key={i} className={styles['story-item']}>
                    <div className={styles['story-avatar']}></div>
                    <div className={styles['story-name']}>User {i}</div>
                  </div>
                ))}
              </div>
              <div className={styles['posts-section']}>
                <div className={styles.post}>
                  <div className={styles['post-header']}>
                    <div className={styles['post-avatar']}></div>
                    <div className={styles['post-info']}>
                      <div className={styles['post-name']}></div>
                      <div className={styles['post-time']}></div>
                    </div>
                  </div>
                  <div className={styles['post-content']}></div>
                  <div className={styles['post-actions']}>
                    <div className={styles['action-btn']}></div>
                    <div className={styles['action-btn']}></div>
                    <div className={styles['action-btn']}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {type === 'finance' && (
            <div className={styles['finance-screen']}>
              <div className={styles['balance-section']}>
                <div className={styles['balance-label']}>Total Balance</div>
                <div className={styles['balance-amount']}>$12,456.78</div>
                <div className={styles['balance-change']}>+2.4% this month</div>
              </div>
              <div className={styles['quick-actions']}>
                {['Send', 'Receive', 'Pay', 'Invest'].map(action => (
                  <div key={action} className={styles['action-item']}>
                    <div className={styles['action-icon']}></div>
                    <div className={styles['action-name']}>{action}</div>
                  </div>
                ))}
              </div>
              <div className={styles.transactions}>
                <div className={styles['transaction-item']}>
                  <div className={styles['transaction-icon']}></div>
                  <div className={styles['transaction-details']}>
                    <div className={styles['transaction-name']}></div>
                    <div className={styles['transaction-date']}></div>
                  </div>
                  <div className={styles['transaction-amount']}></div>
                </div>
                <div className={styles['transaction-item']}>
                  <div className={styles['transaction-icon']}></div>
                  <div className={styles['transaction-details']}>
                    <div className={styles['transaction-name']}></div>
                    <div className={styles['transaction-date']}></div>
                  </div>
                  <div className={styles['transaction-amount']}></div>
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
    <div className={styles['mobile-app-page']}>
      {/* Hero Section */}
      <div className={styles['mobile-hero']}>
        <div className={styles['mobile-hero-background']}>
          <div className={styles['hero-pattern']}></div>
          <div className={styles['hero-glow']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['mobile-hero-container']}>
            <div className={styles['mobile-hero-content']}>
              <div className={styles['hero-badge']}>
                <FaMobile className={styles['badge-icon']} />
                <span>Professional Mobile Development</span>
              </div>
              <h1 className={styles['mobile-hero-title']}>
                Top-Rated <span className={styles.highlight}>Mobile App Development</span> Company
              </h1>
              <p className={styles['mobile-hero-subtitle']}>
                Renowned for our mobile app development services, SoftDevSquad delivers top-quality mobile applications 
                for multiple platforms. With our proven process and 50+ successful apps, we ensure tailored solutions for your business needs.
              </p>
            </div>
            <div className={styles['mobile-hero-image']}>
              <div className={styles['hero-phones-container']}>
                <div className={`${styles['hero-phone']} ${styles['hero-phone-1']}`}>
                  <div className={styles['phone-screen']}>
                    <div className={styles['app-screen-content']}>
                      <div className={styles['app-header']}>
                        <div className={styles['app-status-bar']}>
                          <div className={styles['status-time']}>9:41</div>
                          <div className={styles['status-icons']}>
                            <div className={styles['signal-bars']}></div>
                            <div className={styles['wifi-icon']}></div>
                            <div className={styles['battery-icon']}></div>
                          </div>
                        </div>
                        <div className={styles['app-nav-bar']}>
                          <div className={styles['nav-title']}>Shopping</div>
                          <div className={styles['nav-cart']}>
                            <div className={styles['cart-badge']}>3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles['app-body']}>
                        <div className={styles['search-section']}>
                          <div className={styles['search-bar']}>
                            <div className={styles['search-icon']}></div>
                            <div className={styles['search-placeholder']}>Search products...</div>
                          </div>
                        </div>
                        <div className={styles['hero-product-grid']}>
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className={styles['hero-product-card']}>
                              <div className={styles['hero-product-image']}></div>
                              <div className={styles['hero-product-info']}>
                                <div className={styles['hero-product-name']}></div>
                                <div className={styles['hero-product-price']}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles['hero-phone']} ${styles['hero-phone-2']}`}>
                  <div className={styles['phone-screen']}>
                    <div className={styles['app-screen-content']}>
                      <div className={styles['app-header']}>
                        <div className={styles['app-status-bar']}>
                          <div className={styles['status-time']}>9:41</div>
                          <div className={styles['status-icons']}>
                            <div className={styles['signal-bars']}></div>
                            <div className={styles['wifi-icon']}></div>
                            <div className={styles['battery-icon']}></div>
                          </div>
                        </div>
                        <div className={styles['app-nav-bar']}>
                          <div className={styles['nav-title']}>Fitness</div>
                        </div>
                      </div>
                      <div className={styles['app-body']}>
                        <div className={styles['fitness-stats']}>
                          <div className={styles['main-stat']}>
                            <div className={styles['stat-number']}>8,247</div>
                            <div className={styles['stat-label']}>Steps Today</div>
                          </div>
                          <div className={styles['progress-circle']}>
                            <div className={styles['progress-ring']}></div>
                          </div>
                        </div>
                        <div className={styles['workout-section']}>
                          {['Cardio', 'Strength', 'Yoga'].map(workout => (
                            <div key={workout} className={styles['hero-workout-card']}>
                              <div className={styles['hero-workout-icon']}></div>
                              <div className={styles['hero-workout-name']}>{workout}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['hero-image-glow']}></div>
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
                <span className={styles['stat-number']}>{stat.number}</span>
                <span className={styles['stat-label']}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Actions Section */}
      <div className={styles['hero-actions-section']}>
        <div className={styles.container}>
          <div className={styles['hero-actions']}>
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

      {/* Platforms Section */}
      <div className={styles['platforms-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Mobile App Development on Multiple Platforms</h2>
            <p className={styles['section-subtitle']}>
              Leverage our expertise in mobile app development - from iOS and Android, to everything in between and beyond.
            </p>
          </div>

          <div className={styles['platforms-alternating']}>
            {platforms.map((platform, index) => (
              <div key={index} className={`${platform-row} ${${index} ${%} ${2} ${===} ${0} ${?} ${'platform-row-even'} ${:} ${'platform-row-odd'}}`}>
                <div className={styles['platform-content']}>
                  <div className={styles['platform-details']}>
                    <div className={styles['platform-icon-large']} style={{ color: platform.color }}>
                      <platform.icon />
                    </div>
                    <h3 className={styles['platform-title']}>{platform.title}</h3>
                    <p className={styles['platform-description']}>{platform.description}</p>
                    <ul className={styles['platform-features']}>
                      {platform.features.map((feature, idx) => (
                        <li key={idx} className={styles['platform-feature']}>
                          <FaCheckCircle className={styles['feature-icon']} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" legacyBehavior><a className={styles['platform-cta']}>
                      Learn More
                      <FaArrowRight className={styles['cta-icon']} />
                    </a></Link>
                  </div>
                </div>
                <div className={styles['platform-visual']}>
                  <div className={styles['platform-image-container']}>
                    <img 
                      src={platform.image} 
                      alt={platform.alt}
                      className={styles['platform-development-image']}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className={styles['image-fallback']} style={{display: 'none'}}>
                      <div className={styles['fallback-icon']} style={{ color: platform.color }}>
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
      <div className={styles['services-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Expert Mobile App Development Solutions</h2>
            <p className={styles['section-subtitle']}>
              Explore a wide array of expert Mobile Application Development Solutions tailored to meet diverse business needs.
            </p>
          </div>

          <div className={styles['services-grid']}>
            {services.map((service, index) => (
              <div key={index} className={styles['service-card']}>
                <div className={styles['service-icon']}>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className={styles['process-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Mobile App Development Process</h2>
            <p className={styles['section-subtitle']}>
              A proven methodology that ensures successful mobile app delivery from concept to launch.
            </p>
          </div>

          <div className={styles['process-steps']}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles['process-step']}>
                <div className={styles['step-number']}>{step.step}</div>
                <div className={styles['step-content']}>
                  <h3 className={styles['step-title']}>{step.title}</h3>
                  <p className={styles['step-description']}>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className={styles['step-connector']}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className={styles['technologies-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Technologies We Use</h2>
            <p className={styles['section-subtitle']}>
              Build high-performing and scalable mobile apps with the best and latest tools and technologies.
            </p>
          </div>

          <div className={styles['technologies-grid']}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles['tech-item']}>
                <div className={styles['tech-icon']}>
                  <tech.icon />
                </div>
                <span className={styles['tech-name']}>{tech.name}</span>
                <span className={styles['tech-category']}>{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={styles['testimonials-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>What Our Clients Say</h2>
            <p className={styles['section-subtitle']}>
              Real feedback from satisfied customers who trusted us with their mobile app development.
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
                  <div className={styles['author-project']}>{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles['mobile-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Bring Your App Ideas to Life?</h3>
            <p className={styles['cta-subtitle']}>
              Connect with our mobile app development experts and transform your vision into a successful mobile application.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaRocket className={styles['btn-icon']} />
                Start Your Project
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                <FaUsers className={styles['btn-icon']} />
                Book a Consultation
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;
