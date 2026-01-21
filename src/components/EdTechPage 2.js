import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap, FaBook, FaLaptopCode, FaMobile, FaRobot, FaDatabase,
  FaChalkboardTeacher, FaUsers, FaStar, FaCheckCircle, FaArrowRight, FaHeadset,
  FaVideo, FaGamepad, FaCertificate, FaChartLine, FaCloud, FaBrain,
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaMicrosoft,
  FaDocker, FaAws, FaCode, FaLock, FaKey, FaGlobe
} from 'react-icons/fa';
import { 
  SiTypescript, SiFlutter, SiDjango, SiTensorflow, SiPytorch, SiMongodb,
  SiPostgresql, SiRedis, SiElasticsearch
} from 'react-icons/si';
import './EdTechPage.css';

const EdTechPage = () => {
  const services = [
    {
      icon: FaChalkboardTeacher,
      title: 'Learning Management Systems',
      description: 'Comprehensive LMS platforms with course management, student tracking, assessment tools, and interactive learning experiences for educational institutions.',
      features: ['Course Management', 'Student Analytics', 'Assessment Tools', 'Mobile Learning'],
      color: '#00ffff'
    },
    {
      icon: FaVideo,
      title: 'Virtual Classroom Solutions',
      description: 'Interactive virtual classroom platforms with video conferencing, screen sharing, whiteboard tools, and real-time collaboration features.',
      features: ['Video Conferencing', 'Interactive Whiteboard', 'Screen Sharing', 'Real-time Chat'],
      color: '#8a2be2'
    },
    {
      icon: FaBrain,
      title: 'AI-Powered Tutoring',
      description: 'Intelligent tutoring systems that provide personalized learning paths, adaptive assessments, and AI-driven recommendations for students.',
      features: ['Personalized Learning', 'Adaptive Assessments', 'AI Recommendations', 'Progress Tracking'],
      color: '#ffd700'
    },
    {
      icon: FaGamepad,
      title: 'Educational Games & Simulations',
      description: 'Engaging educational games and interactive simulations that make learning fun and effective across various subjects and age groups.',
      features: ['Interactive Games', 'Subject Simulations', 'Gamification', 'Progress Rewards'],
      color: '#ff6b6b'
    },
    {
      icon: FaCertificate,
      title: 'Certification Platforms',
      description: 'Digital certification and credentialing platforms with secure badge systems, skill verification, and blockchain-based certificates.',
      features: ['Digital Badges', 'Skill Verification', 'Blockchain Certificates', 'Portfolio Integration'],
      color: '#00ff00'
    },
    {
      icon: FaChartLine,
      title: 'Learning Analytics',
      description: 'Advanced analytics platforms that provide insights into student performance, learning patterns, and educational outcomes for data-driven decisions.',
      features: ['Performance Analytics', 'Learning Insights', 'Predictive Modeling', 'Custom Reports'],
      color: '#ff00ff'
    },
    {
      icon: FaMobile,
      title: 'Mobile Learning Apps',
      description: 'Cross-platform mobile learning applications with offline capabilities, push notifications, and seamless synchronization across devices.',
      features: ['Cross-platform', 'Offline Learning', 'Push Notifications', 'Cloud Sync'],
      color: '#ffa500'
    },
    {
      icon: FaDatabase,
      title: 'Student Information Systems',
      description: 'Comprehensive SIS platforms for managing student records, enrollment, grades, attendance, and administrative workflows.',
      features: ['Student Records', 'Enrollment Management', 'Grade Tracking', 'Administrative Tools'],
      color: '#20b2aa'
    }
  ];

  const portfolio = [
    {
      title: 'University LMS Platform',
      category: 'Higher Education',
      description: 'Comprehensive learning management system serving 50K+ students across 200+ universities with advanced analytics and mobile support.',
      image: '/images/edtech-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      results: ['50K+ Students', '200+ Universities', '99.8% Uptime', 'Mobile Optimized'],
      color: '#00ffff'
    },
    {
      title: 'AI Tutoring Platform',
      category: 'Personalized Learning',
      description: 'AI-powered tutoring system providing personalized learning experiences with 85% improvement in student performance.',
      image: '/images/edtech-portfolio-2.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      results: ['85% Performance Boost', 'AI-powered', '1M+ Lessons', 'Adaptive Learning'],
      color: '#8a2be2'
    },
    {
      title: 'Virtual Classroom App',
      category: 'Remote Learning',
      description: 'Interactive virtual classroom platform supporting 10K+ concurrent users with HD video, interactive tools, and real-time collaboration.',
      image: '/images/edtech-portfolio-3.jpg',
      technologies: ['WebRTC', 'React', 'Socket.io', 'Redis'],
      results: ['10K+ Concurrent Users', 'HD Video Quality', 'Interactive Tools', 'Real-time Sync'],
      color: '#ffd700'
    },
    {
      title: 'Educational Gaming Platform',
      category: 'Gamified Learning',
      description: 'Engaging educational games platform with 500+ interactive games covering K-12 curriculum across multiple subjects.',
      image: '/images/edtech-portfolio-4.jpg',
      technologies: ['Unity', 'C#', 'Firebase', 'Analytics'],
      results: ['500+ Games', 'K-12 Curriculum', '2M+ Downloads', '4.8 Rating'],
      color: '#ff6b6b'
    },
    {
      title: 'Corporate Training Portal',
      category: 'Professional Development',
      description: 'Enterprise training platform with certification management, skill tracking, and compliance training for Fortune 500 companies.',
      image: '/images/edtech-portfolio-5.jpg',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
      results: ['100+ Enterprises', 'Certification System', 'Compliance Training', 'Skill Tracking'],
      color: '#00ff00'
    },
    {
      title: 'Language Learning App',
      category: 'Language Education',
      description: 'AI-powered language learning application with speech recognition, interactive lessons, and cultural immersion experiences.',
      image: '/images/edtech-portfolio-6.jpg',
      technologies: ['React Native', 'Python', 'Speech API', 'Machine Learning'],
      results: ['20+ Languages', 'Speech Recognition', '5M+ Users', 'Cultural Content'],
      color: '#ff00ff'
    }
  ];

  const technologies = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'React.js', icon: FaReact },
        { name: 'Angular', icon: FaAngular },
        { name: 'Vue.js', icon: FaVuejs },
        { name: 'React Native', icon: FaReact },
        { name: 'Flutter', icon: SiFlutter },
        { name: 'TypeScript', icon: SiTypescript }
      ] 
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'C#', icon: FaMicrosoft },
        { name: '.NET Core', icon: FaCode },
        { name: 'Django', icon: SiDjango }
      ] 
    },
    { 
      category: 'AI/ML', 
      items: [
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'NLP', icon: FaRobot },
        { name: 'Computer Vision', icon: FaRobot },
        { name: 'Adaptive Learning', icon: FaBrain },
        { name: 'Recommendation Systems', icon: FaChartLine }
      ] 
    },
    { 
      category: 'Game Development', 
      items: [
        { name: 'Unity 3D', icon: FaGamepad },
        { name: 'Unreal Engine', icon: FaGamepad },
        { name: 'C#', icon: FaMicrosoft },
        { name: 'JavaScript', icon: FaCode },
        { name: 'WebGL', icon: FaCode },
        { name: 'AR/VR Technologies', icon: FaGamepad }
      ] 
    },
    { 
      category: 'Video & Communication', 
      items: [
        { name: 'WebRTC', icon: FaVideo },
        { name: 'Socket.io', icon: FaCode },
        { name: 'Zoom SDK', icon: FaVideo },
        { name: 'Twilio', icon: FaVideo },
        { name: 'Agora', icon: FaVideo },
        { name: 'Stream Processing', icon: FaVideo }
      ] 
    },
    { 
      category: 'Databases', 
      items: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'MySQL', icon: FaDatabase },
        { name: 'Redis', icon: SiRedis },
        { name: 'Elasticsearch', icon: SiElasticsearch },
        { name: 'Firebase', icon: FaDatabase }
      ] 
    },
    { 
      category: 'Cloud & Infrastructure', 
      items: [
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: FaMicrosoft },
        { name: 'Google Cloud', icon: FaCloud },
        { name: 'Docker', icon: FaDocker },
        { name: 'Kubernetes', icon: FaCode },
        { name: 'CDN', icon: FaGlobe }
      ] 
    },
    { 
      category: 'Educational Standards', 
      items: [
        { name: 'SCORM', icon: FaCertificate },
        { name: 'xAPI (Tin Can)', icon: FaCertificate },
        { name: 'LTI', icon: FaCertificate },
        { name: 'QTI', icon: FaCertificate },
        { name: 'EDUPUB', icon: FaBook },
        { name: 'Learning Analytics', icon: FaChartLine }
      ] 
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Adams',
      company: 'Dean of Digital Learning, State University',
      text: 'SoftDevSquad\'s LMS platform revolutionized our online education delivery. Student engagement increased by 60% and our administrative efficiency improved dramatically.',
      rating: 5,
      image: '/images/testimonial-edtech-1.jpg'
    },
    {
      name: 'Mark Thompson',
      company: 'CTO, EduCorp Solutions',
      text: 'The AI tutoring system they developed has transformed personalized learning. Our students show 85% better performance with adaptive learning paths.',
      rating: 5,
      image: '/images/testimonial-edtech-2.jpg'
    },
    {
      name: 'Lisa Chen',
      company: 'Director of Innovation, K-12 District',
      text: 'Their virtual classroom solution kept our 20,000 students engaged during remote learning. The platform is intuitive, reliable, and feature-rich.',
      rating: 5,
      image: '/images/testimonial-edtech-3.jpg'
    }
  ];

  const stats = [
    { number: '100+', label: 'EdTech Projects' },
    { number: '2M+', label: 'Students Impacted' },
    { number: '500+', label: 'Educational Institutions' },
    { number: '24/7', label: 'Learning Support' }
  ];

  return (
    <div className="edtech-page">
      {/* Hero Section */}
      <div className="edtech-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="edtech-hero-container">
            <div className="edtech-hero-content">
              <div className="hero-badge">
                <FaGraduationCap className="badge-icon" />
                <span>Leading EdTech Development Company</span>
              </div>
              <h1 className="edtech-hero-title">
                Innovative <span className="highlight">EdTech Solutions</span> for Modern Learning
              </h1>
              <p className="edtech-hero-subtitle">
                Transform education with cutting-edge technology. We build comprehensive learning platforms, AI-powered tutoring systems, and interactive educational experiences that enhance learning outcomes.
              </p>
            </div>
            <div className="edtech-hero-image">
              <div className="edtech-visual-container">
                <div className="edtech-laptop">
                  <div className="laptop-screen">
                    <div className="learning-interface">
                      <div className="interface-header">
                        <div className="header-nav">
                          <div className="nav-item active">Dashboard</div>
                          <div className="nav-item">Courses</div>
                          <div className="nav-item">Progress</div>
                          <div className="nav-item">Assignments</div>
                        </div>
                        <div className="user-profile">
                          <div className="profile-avatar">👨‍🎓</div>
                        </div>
                      </div>
                      <div className="interface-body">
                        <div className="welcome-section">
                          <h3 className="welcome-title">Welcome back, Student!</h3>
                          <p className="welcome-subtitle">Continue your learning journey</p>
                        </div>
                        <div className="course-progress">
                          <div className="progress-item">
                            <div className="course-icon">📊</div>
                            <div className="course-info">
                              <div className="course-name">Data Science</div>
                              <div className="progress-bar">
                                <div className="progress-fill" style={{width: '75%'}}></div>
                              </div>
                              <div className="progress-text">75% Complete</div>
                            </div>
                          </div>
                          <div className="progress-item">
                            <div className="course-icon">💻</div>
                            <div className="course-info">
                              <div className="course-name">Web Development</div>
                              <div className="progress-bar">
                                <div className="progress-fill" style={{width: '60%'}}></div>
                              </div>
                              <div className="progress-text">60% Complete</div>
                            </div>
                          </div>
                          <div className="progress-item">
                            <div className="course-icon">🤖</div>
                            <div className="course-info">
                              <div className="course-name">AI & Machine Learning</div>
                              <div className="progress-bar">
                                <div className="progress-fill" style={{width: '45%'}}></div>
                              </div>
                              <div className="progress-text">45% Complete</div>
                            </div>
                          </div>
                        </div>
                        <div className="achievements">
                          <div className="achievement-badge">🏆</div>
                          <div className="achievement-badge">🥇</div>
                          <div className="achievement-badge">⭐</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="floating-elements">
                  <div className="floating-book">📚</div>
                  <div className="floating-graduation">🎓</div>
                  <div className="floating-lightbulb">💡</div>
                </div>
              </div>
              <div className="hero-image-glow"></div>
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
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
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
              Start Your EdTech Project
            </Link>
            <Link to="/demo" className="btn btn-outline">
              View Educational Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="edtech-services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive EdTech Development Services</h2>
            <p className="section-subtitle">
              From learning management systems to AI-powered tutoring, we deliver end-to-end educational technology solutions that revolutionize learning experiences.
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
      </div>

      {/* Portfolio Section */}
      <div className="edtech-portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our EdTech Success Stories</h2>
            <p className="section-subtitle">
              Discover how we've helped educational institutions and organizations build innovative learning solutions that improve educational outcomes.
            </p>
          </div>
          <div className="edtech-portfolio-grid">
            {portfolio.map((project, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="portfolio-image-placeholder" style={{ display: 'none', color: project.color }}>
                    <FaGraduationCap size={60} />
                  </div>
                  <div className="portfolio-overlay">
                    <div className="portfolio-category">{project.category}</div>
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
                  <div className="portfolio-results">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="result-item">
                        <FaCheckCircle className="result-icon" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="edtech-technologies-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Advanced EdTech Technologies We Master</h2>
            <p className="section-subtitle">
              Our expertise spans across cutting-edge technologies and educational standards that power modern learning platforms.
            </p>
          </div>
          <div className="edtech-technologies-grid">
            {technologies.map((techCategory, index) => (
              <div key={index} className="tech-category-card">
                <h3 className="tech-category-title">{techCategory.category}</h3>
                <ul className="tech-category-list">
                  {techCategory.items.map((item, idx) => (
                    <li key={idx} className="tech-category-item">
                      <item.icon className="tech-icon" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="edtech-testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Educational Clients Say</h2>
            <p className="section-subtitle">
              Hear from educators and institutions who trust us with their digital transformation in education.
            </p>
          </div>
          <div className="edtech-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="avatar-placeholder" style={{ display: 'none' }}>
                      <FaGraduationCap />
                    </div>
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="edtech-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Education with Technology?</h3>
            <p className="cta-subtitle">
              Let's build innovative educational solutions that enhance learning experiences, improve outcomes, and prepare students for the future.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Get Started Today
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Schedule Educational Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdTechPage;
