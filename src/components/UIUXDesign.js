import React from 'react';
import { Link } from 'react-router-dom';
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
import './UIUXDesign.css';

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
    <div className="uiux-page">
      {/* Hero Section */}
      <div className="uiux-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="uiux-hero-container">
            <div className="uiux-hero-content">
              <div className="hero-badge">
                <FaPalette className="badge-icon" />
                <span>Leading UI/UX Design Agency</span>
              </div>
              <h1 className="uiux-hero-title">
                Exceptional <span className="highlight">UI/UX Design</span> That Converts
              </h1>
              <p className="uiux-hero-subtitle">
                Create stunning user experiences that delight your users and drive business results. We design intuitive, beautiful, and conversion-focused interfaces that make your brand stand out.
              </p>
            </div>
            <div className="uiux-hero-image">
              <div className="uiux-mockup-container">
                <div className="uiux-device uiux-laptop">
                  <div className="laptop-screen">
                    <div className="uiux-interface">
                      <div className="uiux-header">
                        <div className="nav-bar">
                          <div className="logo">DesignStudio</div>
                          <div className="nav-items">
                            <div className="nav-item">Home</div>
                            <div className="nav-item">Portfolio</div>
                            <div className="nav-item">Services</div>
                            <div className="nav-item">Contact</div>
                          </div>
                        </div>
                      </div>
                      <div className="uiux-content">
                        <div className="hero-section">
                          <div className="hero-text">
                            <div className="hero-title">Creative Design Solutions</div>
                            <div className="hero-subtitle">Transform your ideas into reality</div>
                            <div className="hero-button">Get Started</div>
                          </div>
                          <div className="hero-visual">
                            <div className="design-element circle"></div>
                            <div className="design-element square"></div>
                            <div className="design-element triangle"></div>
                          </div>
                        </div>
                        <div className="features-section">
                          <div className="feature-card">
                            <div className="feature-icon">🎨</div>
                            <div className="feature-title">UI Design</div>
                          </div>
                          <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <div className="feature-title">UX Research</div>
                          </div>
                          <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <div className="feature-title">Mobile Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uiux-device uiux-tablet">
                  <div className="tablet-screen">
                    <div className="tablet-uiux-interface">
                      <div className="tablet-header">
                        <div className="tablet-nav">
                          <div className="menu-icon">☰</div>
                          <div className="tablet-logo">Design</div>
                          <div className="search-icon">🔍</div>
                        </div>
                      </div>
                      <div className="tablet-content">
                        <div className="tablet-hero">
                          <div className="tablet-hero-title">Portfolio</div>
                          <div className="tablet-hero-subtitle">Our Latest Work</div>
                        </div>
                        <div className="tablet-grid">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="tablet-project">
                              <div className="tablet-project-image"></div>
                              <div className="tablet-project-info">
                                <div className="tablet-project-title">Project {i}</div>
                                <div className="tablet-project-type">UI/UX Design</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="uiux-device uiux-mobile">
                  <div className="mobile-screen">
                    <div className="mobile-uiux-interface">
                      <div className="mobile-header">
                        <div className="mobile-nav">
                          <div className="back-icon">←</div>
                          <div className="mobile-logo">App</div>
                          <div className="more-icon">⋯</div>
                        </div>
                      </div>
                      <div className="mobile-content">
                        <div className="mobile-profile">
                          <div className="profile-avatar"></div>
                          <div className="profile-name">John Designer</div>
                          <div className="profile-title">UI/UX Designer</div>
                        </div>
                        <div className="mobile-stats">
                          <div className="stat">
                            <div className="stat-number">127</div>
                            <div className="stat-label">Projects</div>
                          </div>
                          <div className="stat">
                            <div className="stat-number">45K</div>
                            <div className="stat-label">Followers</div>
                          </div>
                          <div className="stat">
                            <div className="stat-number">892</div>
                            <div className="stat-label">Likes</div>
                          </div>
                        </div>
                        <div className="mobile-actions">
                          <div className="action-btn primary">Follow</div>
                          <div className="action-btn secondary">Message</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uiux-image-glow"></div>
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
              Start Your Design Project
            </Link>
            <Link to="/demo" className="btn btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Design Solutions Section */}
      <section className="design-solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Design Solutions</h2>
            <p className="section-subtitle">
              User-centered design approach that creates meaningful and impactful experiences
            </p>
          </div>
          <div className="services-grid">
            {designSolutions.map((solution, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: '#e74c3c' }}>
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
      <section className="uiux-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our UI/UX Design Services</h2>
            <p className="section-subtitle">
              Comprehensive design solutions for every stage of your product journey
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
      <section className="uiux-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Design Portfolio</h2>
            <p className="section-subtitle">
              Successful design projects that showcase our expertise and creativity
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
                          <span className="stat-key">{key}</span>
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
            <h2 className="section-title">Our Design Technology Stack</h2>
            <p className="section-subtitle">
              Industry-leading tools and technologies for exceptional design outcomes
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
      <section className="uiux-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Design Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures exceptional design outcomes
            </p>
          </div>
          <div className="process-steps">
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
      <section className="uiux-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Design Clients Say</h2>
            <p className="section-subtitle">
              Success stories from businesses we've helped transform through design
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
      <section className="uiux-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Create Amazing User Experiences?</h2>
            <p className="cta-description">
              Let's design beautiful, intuitive, and conversion-focused interfaces that delight your users and drive business growth.
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

export default UIUXDesign;
