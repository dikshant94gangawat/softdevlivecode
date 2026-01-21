import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket, FaLightbulb, FaUsers, FaChartLine, FaMobile, FaLaptop,
  FaDatabase, FaCloud, FaStar, FaCheckCircle, FaArrowRight, FaHeadset,
  FaCog, FaShieldAlt, FaGlobe, FaCode, FaLock, FaDollarSign,
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaDocker,
  FaAws, FaMicrosoft, FaApple, FaAndroid, FaGitAlt
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiDjango, SiExpress, SiFlutter, SiMongodb,
  SiPostgresql, SiRedis, SiKubernetes
} from 'react-icons/si';
import './StartupsPage.css';

const StartupsPage = () => {
  const services = [
    {
      icon: FaRocket,
      title: 'MVP Development',
      description: 'Rapidly build and launch your Minimum Viable Product with cutting-edge technology stack and agile development methodology.',
      features: ['Rapid Prototyping', 'Agile Development', 'User Feedback Integration', 'Quick Market Entry'],
      color: '#00ffff'
    },
    {
      icon: FaLightbulb,
      title: 'Product Strategy & Consulting',
      description: 'Strategic guidance for product development, market validation, technology choices, and scaling roadmaps tailored for startups.',
      features: ['Market Analysis', 'Technology Roadmap', 'Competitive Analysis', 'Growth Strategy'],
      color: '#8a2be2'
    },
    {
      icon: FaUsers,
      title: 'Team Augmentation',
      description: 'Scale your development team quickly with experienced developers, designers, and technical specialists on demand.',
      features: ['Expert Developers', 'Flexible Engagement', 'Quick Onboarding', 'Cost-Effective Scaling'],
      color: '#ffd700'
    },
    {
      icon: FaChartLine,
      title: 'Growth & Analytics',
      description: 'Implement analytics, growth hacking strategies, and data-driven optimization to accelerate your startup growth.',
      features: ['Growth Analytics', 'A/B Testing', 'User Behavior Analysis', 'Conversion Optimization'],
      color: '#ff6b6b'
    },
    {
      icon: FaMobile,
      title: 'Mobile-First Solutions',
      description: 'Build mobile apps and responsive web platforms that engage users and drive growth with modern UX/UI design.',
      features: ['Cross-platform Apps', 'Progressive Web Apps', 'Mobile Optimization', 'User-Centric Design'],
      color: '#00ff00'
    },
    {
      icon: FaCloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions that grow with your startup from day one to enterprise scale.',
      features: ['Auto-Scaling', 'Cost Optimization', 'Security Best Practices', 'DevOps Integration'],
      color: '#3498db'
    }
  ];

  const portfolio = [
    {
      title: 'FinTech Startup Platform',
      description: 'Revolutionary peer-to-peer lending platform with AI-powered risk assessment and automated investment strategies.',
      image: '/images/startup-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB'],
      metrics: { users: '10K+', funding: '$2M', growth: '300%' },
      category: 'FinTech'
    },
    {
      title: 'HealthTech Mobile App',
      description: 'Telemedicine app connecting patients with healthcare providers, featuring video consultations and health monitoring.',
      image: '/images/startup-portfolio-2.jpg',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js', 'PostgreSQL'],
      metrics: { downloads: '50K+', doctors: '500+', consultations: '25K+' },
      category: 'HealthTech'
    },
    {
      title: 'EdTech Learning Platform',
      description: 'AI-powered personalized learning platform with adaptive content delivery and progress tracking for students.',
      image: '/images/startup-portfolio-3.jpg',
      technologies: ['Vue.js', 'Django', 'TensorFlow', 'Redis', 'Docker'],
      metrics: { students: '20K+', courses: '100+', completion: '85%' },
      category: 'EdTech'
    }
  ];

  const techStack = [
    {
      category: 'Frontend Development',
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
        { name: 'Django', icon: SiDjango },
        { name: 'Express.js', icon: SiExpress },
        { name: 'Java', icon: FaJava }
      ]
    },
    {
      category: 'Mobile Development',
      technologies: [
        { name: 'React Native', icon: FaReact },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'iOS', icon: FaApple },
        { name: 'Android', icon: FaAndroid },
        { name: 'PWA', icon: FaGlobe }
      ]
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: FaMicrosoft },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Git', icon: FaGitAlt }
      ]
    },
    {
      category: 'Database & Analytics',
      technologies: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Redis', icon: SiRedis },
        { name: 'Analytics', icon: FaChartLine },
        { name: 'Machine Learning', icon: FaChartLine }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      company: 'Founder, TechStart',
      text: 'SoftDevSquad helped us build and launch our MVP in just 3 months. Their startup-focused approach and technical expertise were invaluable for our success.',
      rating: 5,
      image: '/images/testimonial-startup-1.jpg'
    },
    {
      name: 'Maria Rodriguez',
      company: 'CEO, InnovateNow',
      text: 'The team understood our startup challenges and delivered a scalable solution that grew with us from 100 to 10,000 users. Exceptional technical partnership.',
      rating: 5,
      image: '/images/testimonial-startup-2.jpg'
    },
    {
      name: 'David Kim',
      company: 'Co-founder, GrowthLab',
      text: 'Their agile approach and startup expertise helped us pivot quickly and build exactly what our users needed. Highly recommended for any startup.',
      rating: 5,
      image: '/images/testimonial-startup-3.jpg'
    }
  ];

  const stats = [
    { number: '100+', label: 'Startups Launched' },
    { number: '$50M+', label: 'Funding Raised' },
    { number: '3x', label: 'Average Growth' },
    { number: '90%', label: 'Success Rate' }
  ];

  const startupJourney = [
    {
      phase: 'Ideation',
      title: 'Concept Validation',
      description: 'Market research, competitive analysis, and technical feasibility assessment.',
      icon: FaLightbulb,
      color: '#ffd700'
    },
    {
      phase: 'MVP',
      title: 'Rapid Development',
      description: 'Build core features quickly with modern tech stack and agile methodology.',
      icon: FaRocket,
      color: '#00ffff'
    },
    {
      phase: 'Launch',
      title: 'Market Entry',
      description: 'Deploy, monitor, and gather user feedback for continuous improvement.',
      icon: FaGlobe,
      color: '#ff6b6b'
    },
    {
      phase: 'Scale',
      title: 'Growth & Optimization',
      description: 'Scale infrastructure, optimize performance, and add advanced features.',
      icon: FaChartLine,
      color: '#00ff00'
    }
  ];

  return (
    <div className="startups-page">
      {/* Hero Section */}
      <div className="startups-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="startups-hero-content">
            <div className="hero-badge">
              <FaRocket className="badge-icon" />
              <span>Leading Startup Development Partner</span>
            </div>
            <h1 className="startups-hero-title">
              Launch Your <span className="highlight">Startup Success</span> with Expert Development
            </h1>
            <p className="startups-hero-subtitle">
              From idea to market-ready product, we help startups build, launch, and scale with cutting-edge technology, agile development, and strategic guidance.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Start Your Startup Journey
              </Link>
              <Link to="/demo" className="btn btn-outline">
                View Success Stories
              </Link>
            </div>
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
      </div>

      {/* Startup Journey Section */}
      <section className="startup-journey">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your Startup Journey with Us</h2>
            <p className="section-subtitle">
              From concept to scale, we guide startups through every phase of development
            </p>
          </div>
          <div className="journey-timeline">
            {startupJourney.map((phase, index) => (
              <div key={index} className="journey-phase">
                <div className="phase-icon" style={{ backgroundColor: phase.color }}>
                  <phase.icon />
                </div>
                <div className="phase-content">
                  <div className="phase-label">{phase.phase}</div>
                  <h3 className="phase-title">{phase.title}</h3>
                  <p className="phase-description">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="startups-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Startup-Focused Development Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions designed specifically for startup needs and challenges
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
      <section className="startups-portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Startup Success Stories</h2>
            <p className="section-subtitle">
              Real startups we've helped launch, grow, and scale to success
            </p>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-category">{project.category}</div>
                    <div className="portfolio-metrics">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="metric-item">
                          <span className="metric-value">{value}</span>
                          <span className="metric-label">{key}</span>
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
            <h2 className="section-title">Startup-Ready Technology Stack</h2>
            <p className="section-subtitle">
              Modern, scalable technologies that grow with your startup
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

      {/* Testimonials Section */}
      <section className="startups-testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Startup Founders Say</h2>
            <p className="section-subtitle">
              Success stories from founders we've partnered with
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
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="startups-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Launch Your Startup?</h2>
            <p className="cta-description">
              Let's turn your innovative idea into a market-ready product that users love and investors fund.
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

export default StartupsPage;
