import React from 'react';
import styles from './UIUXDesign.module.css';
import Link from 'next/link';
import {
  FaPalette, FaMobile, FaDesktop, FaUsers, FaStar, FaCheckCircle, 
  FaArrowRight, FaHeadset, FaChartBar, FaLightbulb, FaEye, FaHeart,
  FaPencilAlt, FaMousePointer, FaTabletAlt, FaLayerGroup, FaBrush,
  FaRocket, FaUserCheck, FaChartLine, FaCode, FaSearch, FaMagic
} from 'react-icons/fa';
import { 
  SiFigma, SiAdobexd, SiSketch, SiAdobeillustrator, SiAdobephotoshop,
  SiInvision, SiFramer, SiMiro, SiNotion
} from 'react-icons/si';

const UIUXDesign = () => {
  const services = [
    {
      icon: FaUsers,
      title: 'User Experience Research',
      description: 'Deep user research and analysis to understand your audience, their needs, and behaviors for creating user-centered designs.',
      features: ['User Interviews', 'Persona Development', 'Journey Mapping', 'Usability Testing'],
      color: '#e74c3c'
    },
    {
      icon: FaPalette,
      title: 'UI Visual Design',
      description: 'Beautiful, modern, and intuitive user interfaces that align with your brand identity and create memorable user experiences.',
      features: ['Visual Design Systems', 'Brand Integration', 'Icon Design', 'Color Psychology'],
      color: '#9b59b6'
    },
    {
      icon: FaMobile,
      title: 'Mobile App Design',
      description: 'Native and responsive mobile app designs for iOS and Android platforms with focus on touch interactions and mobile usability.',
      features: ['iOS Design Guidelines', 'Material Design', 'Touch Interactions', 'Mobile Optimization'],
      color: '#3498db'
    },
    {
      icon: FaDesktop,
      title: 'Web Application Design',
      description: 'Responsive web application designs that work seamlessly across all devices and provide excellent user experiences.',
      features: ['Responsive Design', 'Cross-browser Compatibility', 'Web Accessibility', 'Performance Optimization'],
      color: '#1abc9c'
    },
    {
      icon: FaLayerGroup,
      title: 'Design Systems',
      description: 'Comprehensive design systems and style guides that ensure consistency across all your digital products and platforms.',
      features: ['Component Libraries', 'Style Guides', 'Design Tokens', 'Documentation'],
      color: '#f39c12'
    },
    {
      icon: FaRocket,
      title: 'Prototyping & Testing',
      description: 'Interactive prototypes and comprehensive usability testing to validate designs before development begins.',
      features: ['Interactive Prototypes', 'A/B Testing', 'User Testing', 'Design Validation'],
      color: '#e67e22'
    }
  ];

  const portfolio = [
    {
      title: 'FinTech Mobile App',
      description: 'Complete UI/UX design for a financial technology mobile app with focus on security and ease of use.',
      image: '/images/uiux-portfolio-1.jpg',
      technologies: ['Figma', 'Principle', 'After Effects', 'Sketch'],
      features: ['Biometric Authentication', 'Data Visualization', 'Dark Mode', 'Accessibility'],
      stats: { screens: '150+', users: '500K+', rating: '4.8★' }
    },
    {
      title: 'E-Learning Platform',
      description: 'Comprehensive design system for an online education platform serving students and educators worldwide.',
      image: '/images/uiux-portfolio-2.jpg',
      technologies: ['Adobe XD', 'Figma', 'Miro', 'InVision'],
      features: ['Course Management', 'Progress Tracking', 'Interactive Learning', 'Multi-language'],
      stats: { courses: '10K+', students: '1M+', satisfaction: '95%' }
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Medical dashboard design for healthcare professionals with complex data visualization and patient management.',
      image: '/images/uiux-portfolio-3.jpg',
      technologies: ['Figma', 'D3.js', 'Framer', 'Zeplin'],
      features: ['Patient Records', 'Medical Charts', 'Appointment System', 'HIPAA Compliance'],
      stats: { doctors: '5K+', patients: '100K+', efficiency: '+40%' }
    }
  ];

  const techStack = [
    {
      category: 'Design Tools',
      technologies: [
        { name: 'Figma', icon: SiFigma },
        { name: 'Adobe XD', icon: SiAdobexd },
        { name: 'Sketch', icon: SiSketch },
        { name: 'Framer', icon: SiFramer },
        { name: 'InVision', icon: SiInvision }
      ]
    },
    {
      category: 'Graphics & Illustration',
      technologies: [
        { name: 'Adobe Illustrator', icon: SiAdobeillustrator },
        { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
        { name: 'Procreate', icon: FaBrush },
        { name: 'Canva', icon: FaPalette },
        { name: 'Blender', icon: FaLayerGroup }
      ]
    },
    {
      category: 'Prototyping Tools',
      technologies: [
        { name: 'Principle', icon: FaMousePointer },
        { name: 'ProtoPie', icon: FaTabletAlt },
        { name: 'Marvel', icon: FaMagic },
        { name: 'Axure RP', icon: FaCode },
        { name: 'Flinto', icon: FaMobile }
      ]
    },
    {
      category: 'Collaboration Tools',
      technologies: [
        { name: 'Miro', icon: SiMiro },
        { name: 'Notion', icon: SiNotion },
        { name: 'Slack', icon: FaUsers },
        { name: 'Trello', icon: FaLayerGroup },
        { name: 'Abstract', icon: FaSearch }
      ]
    },
    {
      category: 'Research & Testing',
      technologies: [
        { name: 'Hotjar', icon: FaEye },
        { name: 'Maze', icon: FaSearch },
        { name: 'UserTesting', icon: FaUsers },
        { name: 'Optimal Workshop', icon: FaChartBar },
        { name: 'Google Analytics', icon: FaChartLine }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      position: 'Product Manager, TechFlow',
      company: 'SaaS Platform',
      content: 'SoftDevSquad transformed our complex software into an intuitive, beautiful experience. User engagement increased by 200% after the redesign.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David Kim',
      position: 'CEO, MedTech Solutions',
      company: 'Healthcare Technology',
      content: 'Their healthcare dashboard design exceeded our expectations. The team understood our complex requirements and delivered exceptional results.',
      rating: 5,
      avatar: '👨‍⚕️'
    },
    {
      name: 'Sophie Anderson',
      position: 'Founder, EduLearn',
      company: 'EdTech Startup',
      content: 'The e-learning platform design is not just beautiful but highly functional. Our student satisfaction scores improved dramatically.',
      rating: 5,
      avatar: '👩‍🏫'
    }
  ];

  const stats = [
    { number: '300+', label: 'Design Projects' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '150%', label: 'Avg. Engagement Increase' },
    { number: '24hr', label: 'Design Turnaround' }
  ];

  const designSolutions = [
    {
      category: 'User-Centered',
      title: 'Human-Centered Design',
      description: 'Designs that put users first and solve real problems',
      icon: FaHeart,
      benefits: ['User Research', 'Persona Development', 'Empathy Mapping', 'User Journey Analysis']
    },
    {
      category: 'Accessibility',
      title: 'Inclusive Design',
      description: 'Accessible designs that work for everyone',
      icon: FaUserCheck,
      benefits: ['WCAG Compliance', 'Screen Reader Support', 'Color Contrast', 'Keyboard Navigation']
    },
    {
      category: 'Performance',
      title: 'Optimized Experience',
      description: 'Fast-loading, performance-optimized designs',
      icon: FaRocket,
      benefits: ['Fast Loading', 'Optimized Assets', 'Minimal Code', 'Progressive Enhancement']
    },
    {
      category: 'Innovation',
      title: 'Cutting-Edge Design',
      description: 'Modern, innovative designs that stand out',
      icon: FaLightbulb,
      benefits: ['Latest Trends', 'Innovative Interactions', 'Modern Aesthetics', 'Future-Proof Design']
    }
  ];

  return (
    <div className={styles['uiux-page']}>
      {/* Hero Section */}
      <div className={styles['uiux-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['uiux-hero-container']}>
            <div className={styles['uiux-hero-content']}>
              <div className={styles['hero-badge']}>
                <FaPalette className={styles['badge-icon']} />
                <span>Leading UI/UX Design Agency</span>
              </div>
              <h1 className={styles['uiux-hero-title']}>
                Exceptional <span className={styles.highlight}>UI/UX Design</span> That Converts
              </h1>
              <p className={styles['uiux-hero-subtitle']}>
                Create stunning user experiences that delight your users and drive business results. We design intuitive, beautiful, and conversion-focused interfaces that make your brand stand out.
              </p>
            </div>
            <div className={styles['uiux-hero-image']}>
              <div className={styles['uiux-mockup-container']}>
                <div className={`${styles['uiux-device']} ${styles['uiux-laptop']}`}>
                  <div className={styles['laptop-screen']}>
                    <div className={styles['uiux-interface']}>
                      <div className={styles['uiux-header']}>
                        <div className={styles['nav-bar']}>
                          <div className={styles.logo}>DesignStudio</div>
                          <div className={styles['nav-items']}>
                            <div className={styles['nav-item']}>Home</div>
                            <div className={styles['nav-item']}>Portfolio</div>
                            <div className={styles['nav-item']}>Services</div>
                            <div className={styles['nav-item']}>Contact</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles['uiux-content']}>
                        <div className={styles['hero-section']}>
                          <div className={styles['hero-text']}>
                            <div className={styles['hero-title']}>Creative Design Solutions</div>
                            <div className={styles['hero-subtitle']}>Transform your ideas into reality</div>
                            <div className={styles['hero-button']}>Get Started</div>
                          </div>
                          <div className={styles['hero-visual']}>
                            <div className={`${styles['design-element']} ${styles.circle}`}></div>
                            <div className={`${styles['design-element']} ${styles.square}`}></div>
                            <div className={`${styles['design-element']} ${styles.triangle}`}></div>
                          </div>
                        </div>
                        <div className={styles['features-section']}>
                          <div className={styles['feature-card']}>
                            <div className={styles['feature-icon']}>🎨</div>
                            <div className={styles['feature-title']}>UI Design</div>
                          </div>
                          <div className={styles['feature-card']}>
                            <div className={styles['feature-icon']}>👥</div>
                            <div className={styles['feature-title']}>UX Research</div>
                          </div>
                          <div className={styles['feature-card']}>
                            <div className={styles['feature-icon']}>📱</div>
                            <div className={styles['feature-title']}>Mobile Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles['uiux-device']} ${styles['uiux-tablet']}`}>
                  <div className={styles['tablet-screen']}>
                    <div className={styles['tablet-uiux-interface']}>
                      <div className={styles['tablet-header']}>
                        <div className={styles['tablet-nav']}>
                          <div className={styles['menu-icon']}>☰</div>
                          <div className={styles['tablet-logo']}>Design</div>
                          <div className={styles['search-icon']}>🔍</div>
                        </div>
                      </div>
                      <div className={styles['tablet-content']}>
                        <div className={styles['tablet-hero']}>
                          <div className={styles['tablet-hero-title']}>Portfolio</div>
                          <div className={styles['tablet-hero-subtitle']}>Our Latest Work</div>
                        </div>
                        <div className={styles['tablet-grid']}>
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className={styles['tablet-project']}>
                              <div className={styles['tablet-project-image']}></div>
                              <div className={styles['tablet-project-info']}>
                                <div className={styles['tablet-project-title']}>Project {i}</div>
                                <div className={styles['tablet-project-type']}>UI/UX Design</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles['uiux-device']} ${styles['uiux-mobile']}`}>
                  <div className={styles['mobile-screen']}>
                    <div className={styles['mobile-uiux-interface']}>
                      <div className={styles['mobile-header']}>
                        <div className={styles['mobile-nav']}>
                          <div className={styles['back-icon']}>←</div>
                          <div className={styles['mobile-logo']}>App</div>
                          <div className={styles['more-icon']}>⋯</div>
                        </div>
                      </div>
                      <div className={styles['mobile-content']}>
                        <div className={styles['mobile-profile']}>
                          <div className={styles['profile-avatar']}></div>
                          <div className={styles['profile-name']}>John Designer</div>
                          <div className={styles['profile-title']}>UI/UX Designer</div>
                        </div>
                        <div className={styles['mobile-stats']}>
                          <div className={styles.stat}>
                            <div className={styles['stat-number']}>127</div>
                            <div className={styles['stat-label']}>Projects</div>
                          </div>
                          <div className={styles.stat}>
                            <div className={styles['stat-number']}>45K</div>
                            <div className={styles['stat-label']}>Followers</div>
                          </div>
                          <div className={styles.stat}>
                            <div className={styles['stat-number']}>892</div>
                            <div className={styles['stat-label']}>Likes</div>
                          </div>
                        </div>
                        <div className={styles['mobile-actions']}>
                          <div className={`${styles['action-btn']} ${styles.primary}`}>Follow</div>
                          <div className={`${styles['action-btn']} ${styles.secondary}`}>Message</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['uiux-image-glow']}></div>
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
            <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}><FaHeadset className={styles['btn-icon']} />Start Your Design Project</a></Link>
            <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>View Portfolio</a></Link>
          </div>
        </div>
      </div>

      {/* Design Solutions Section */}
      <section className={styles['design-solutions']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Why Choose Our Design Solutions</h2>
            <p className={styles['section-subtitle']}>
              User-centered design approach that creates meaningful and impactful experiences
            </p>
          </div>
          <div className={styles['services-grid']}>
            {designSolutions.map((solution, index) => (
              <div key={index} className={styles['service-card']}>
                <div className={styles['service-icon']} style={{ color: '#e74c3c' }}>
                  <solution.icon />
                </div>
                <div className={styles['solution-category']}>{solution.category}</div>
                <h3 className={styles['service-title']}>{solution.title}</h3>
                <p className={styles['service-description']}>{solution.description}</p>

                <ul className={styles['service-features']}>
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className={styles['service-feature']}>
                      <FaCheckCircle className={styles['feature-icon']} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" legacyBehavior><a className={styles['service-cta']}>Learn More<FaArrowRight className={styles['cta-icon']} /></a></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles['uiux-services']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our UI/UX Design Services</h2>
            <p className={styles['section-subtitle']}>
              Comprehensive design solutions for every stage of your product journey
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

                <Link href="/contact" legacyBehavior><a className={styles['service-cta']}>Get Started<FaArrowRight className={styles['cta-icon']} /></a></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className={styles['uiux-portfolio']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Design Portfolio</h2>
            <p className={styles['section-subtitle']}>
              Successful design projects that showcase our expertise and creativity
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
            <h2 className={styles['section-title']}>Our Design Technology Stack</h2>
            <p className={styles['section-subtitle']}>
              Industry-leading tools and technologies for exceptional design outcomes
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
      <section className={styles['uiux-process']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Design Process</h2>
            <p className={styles['section-subtitle']}>
              A proven methodology that ensures exceptional design outcomes
            </p>
          </div>
          <div className={styles['process-steps']}>
            {[
              {
                step: '01',
                title: 'Discovery & Research',
                description: 'Understanding your users, business goals, and market landscape.',
                icon: FaSearch,
                color: '#e74c3c'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Defining user personas, journey maps, and design strategy.',
                icon: FaLightbulb,
                color: '#9b59b6'
              },
              {
                step: '03',
                title: 'Design & Prototype',
                description: 'Creating wireframes, mockups, and interactive prototypes.',
                icon: FaPencilAlt,
                color: '#3498db'
              },
              {
                step: '04',
                title: 'Test & Validate',
                description: 'User testing, feedback collection, and design refinement.',
                icon: FaUserCheck,
                color: '#1abc9c'
              },
              {
                step: '05',
                title: 'Deliver & Support',
                description: 'Final delivery with design systems and ongoing support.',
                icon: FaRocket,
                color: '#f39c12'
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
      <section className={styles['uiux-testimonials']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>What Our Design Clients Say</h2>
            <p className={styles['section-subtitle']}>
              Success stories from businesses we've helped transform through design
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
      <section className={styles['uiux-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h2 className={styles['cta-title']}>Ready to Create Amazing User Experiences?</h2>
            <p className={styles['cta-description']}>
              Let's design beautiful, intuitive, and conversion-focused interfaces that delight your users and drive business growth.
            </p>
            <div className={styles['cta-buttons']}>
              <Link to="/contact" className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaHeadset className={styles['btn-icon']} />
                Start Your Project
              </Link>
              <Link to="/demo" className={`${styles.btn} ${styles['btn-outline']}`}>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;
