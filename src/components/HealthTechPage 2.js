import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat, FaUserMd, FaPrescriptionBottleAlt, FaMobile, FaRobot, FaDatabase,
  FaLock, FaGlobe, FaUsers, FaStar, FaCheckCircle, FaArrowRight, FaHeadset,
  FaStethoscope, FaHospital, FaAmbulance, FaMicroscope, FaChartBar, FaCloud,
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaMicrosoft,
  FaDocker, FaAws, FaShieldAlt, FaCode, FaWifi, FaKey
} from 'react-icons/fa';
import { 
  SiTypescript, SiFlutter, SiDotnet, SiSpringboot, SiTensorflow, SiPytorch,
  SiOpencv, SiMongodb, SiPostgresql, SiRedis, SiElasticsearch
} from 'react-icons/si';
import './HealthTechPage.css';

const HealthTechPage = () => {
  const services = [
    {
      icon: FaUserMd,
      title: 'Telemedicine Platforms',
      description: 'Comprehensive telehealth solutions enabling remote consultations, patient monitoring, and digital health records management with HIPAA compliance.',
      features: ['Video Consultations', 'Patient Portal', 'Digital Prescriptions', 'HIPAA Compliant'],
      color: '#00ffff'
    },
    {
      icon: FaHeartbeat,
      title: 'Remote Patient Monitoring',
      description: 'IoT-enabled health monitoring systems that track vital signs, medication adherence, and chronic disease management in real-time.',
      features: ['IoT Integration', 'Real-time Monitoring', 'Alert Systems', 'Chronic Care Management'],
      color: '#8a2be2'
    },
    {
      icon: FaMicroscope,
      title: 'AI Medical Diagnosis',
      description: 'Machine learning-powered diagnostic tools for medical imaging analysis, disease prediction, and clinical decision support systems.',
      features: ['Medical Imaging AI', 'Disease Prediction', 'Clinical Decision Support', 'Diagnostic Accuracy'],
      color: '#ffd700'
    },
    {
      icon: FaPrescriptionBottleAlt,
      title: 'Pharmacy Management',
      description: 'Digital pharmacy solutions with inventory management, prescription tracking, drug interaction alerts, and automated dispensing systems.',
      features: ['Inventory Management', 'Prescription Tracking', 'Drug Interaction Alerts', 'Automated Dispensing'],
      color: '#ff6b6b'
    },
    {
      icon: FaHospital,
      title: 'Hospital Management Systems',
      description: 'Integrated hospital management platforms covering patient registration, billing, staff scheduling, and resource optimization.',
      features: ['Patient Registration', 'Billing Systems', 'Staff Scheduling', 'Resource Optimization'],
      color: '#00ff00'
    },
    {
      icon: FaDatabase,
      title: 'Electronic Health Records',
      description: 'Secure, interoperable EHR systems that centralize patient data, enable seamless information sharing, and improve care coordination.',
      features: ['Centralized Records', 'Interoperability', 'Data Security', 'Care Coordination'],
      color: '#ff00ff'
    },
    {
      icon: FaRobot,
      title: 'Healthcare Automation',
      description: 'Robotic process automation for administrative tasks, appointment scheduling, claims processing, and workflow optimization.',
      features: ['Process Automation', 'Appointment Scheduling', 'Claims Processing', 'Workflow Optimization'],
      color: '#ffa500'
    },
    {
      icon: FaChartBar,
      title: 'Health Analytics',
      description: 'Advanced analytics platforms for population health management, clinical research, and healthcare performance optimization.',
      features: ['Population Health', 'Clinical Research', 'Performance Analytics', 'Predictive Modeling'],
      color: '#20b2aa'
    }
  ];

  const portfolio = [
    {
      title: 'Telemedicine Platform',
      category: 'Telehealth',
      description: 'Comprehensive telemedicine solution serving 100K+ patients with video consultations, digital prescriptions, and remote monitoring.',
      image: '/images/healthtech-portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
      results: ['100K+ Patients', '99.5% Uptime', '40% Cost Reduction', 'HIPAA Compliant'],
      color: '#00ffff'
    },
    {
      title: 'AI Diagnostic System',
      category: 'Medical AI',
      description: 'Machine learning-powered diagnostic tool for radiology with 95% accuracy in detecting abnormalities in medical imaging.',
      image: '/images/healthtech-portfolio-2.jpg',
      technologies: ['Python', 'TensorFlow', 'DICOM', 'Flask'],
      results: ['95% Accuracy', '50% Faster Diagnosis', 'FDA Approved', '500+ Hospitals'],
      color: '#8a2be2'
    },
    {
      title: 'Remote Monitoring System',
      category: 'IoT Health',
      description: 'IoT-based patient monitoring platform tracking vital signs and chronic conditions for 50K+ patients in real-time.',
      image: '/images/healthtech-portfolio-3.jpg',
      technologies: ['IoT', 'React Native', 'AWS IoT', 'PostgreSQL'],
      results: ['50K+ Patients', 'Real-time Monitoring', '30% Readmission Reduction', '24/7 Support'],
      color: '#ffd700'
    },
    {
      title: 'Hospital Management System',
      category: 'HMS',
      description: 'Integrated hospital management platform streamlining operations for 200+ healthcare facilities worldwide.',
      image: '/images/healthtech-portfolio-4.jpg',
      technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
      results: ['200+ Hospitals', '60% Efficiency Gain', 'Multi-language Support', 'Cloud-based'],
      color: '#ff6b6b'
    },
    {
      title: 'Pharmacy Management App',
      category: 'Pharmacy Tech',
      description: 'Digital pharmacy solution with inventory management, prescription tracking, and automated dispensing for 1000+ pharmacies.',
      image: '/images/healthtech-portfolio-5.jpg',
      technologies: ['Flutter', 'Firebase', 'Barcode Scanning', 'Cloud Storage'],
      results: ['1000+ Pharmacies', '80% Error Reduction', 'Automated Dispensing', 'Real-time Inventory'],
      color: '#00ff00'
    },
    {
      title: 'Mental Health Platform',
      category: 'Digital Therapy',
      description: 'AI-powered mental health platform providing therapy sessions, mood tracking, and personalized treatment plans.',
      image: '/images/healthtech-portfolio-6.jpg',
      technologies: ['React Native', 'Python', 'NLP', 'Machine Learning'],
      results: ['500K+ Users', 'AI-powered Therapy', '85% Satisfaction', 'Multi-platform'],
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
        { name: '.NET Core', icon: SiDotnet },
        { name: 'Spring Boot', icon: SiSpringboot }
      ] 
    },
    { 
      category: 'AI/ML', 
      items: [
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'OpenCV', icon: SiOpencv },
        { name: 'NLP', icon: FaRobot },
        { name: 'Computer Vision', icon: FaRobot },
        { name: 'Deep Learning', icon: FaRobot }
      ] 
    },
    { 
      category: 'IoT & Hardware', 
      items: [
        { name: 'Arduino', icon: FaCode },
        { name: 'Raspberry Pi', icon: FaCode },
        { name: 'Sensors', icon: FaMicroscope },
        { name: 'Bluetooth', icon: FaWifi },
        { name: 'WiFi', icon: FaWifi },
        { name: 'Edge Computing', icon: FaCloud }
      ] 
    },
    { 
      category: 'Medical Standards', 
      items: [
        { name: 'HIPAA', icon: FaShieldAlt },
        { name: 'HL7 FHIR', icon: FaDatabase },
        { name: 'DICOM', icon: FaDatabase },
        { name: 'ICD-10', icon: FaDatabase },
        { name: 'SNOMED CT', icon: FaDatabase },
        { name: 'FDA Guidelines', icon: FaShieldAlt }
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
        { name: 'InfluxDB', icon: FaDatabase }
      ] 
    },
    { 
      category: 'Cloud & Security', 
      items: [
        { name: 'AWS', icon: FaAws },
        { name: 'Azure', icon: FaMicrosoft },
        { name: 'Google Cloud', icon: FaCloud },
        { name: 'Encryption', icon: FaLock },
        { name: 'OAuth 2.0', icon: FaKey },
        { name: 'GDPR Compliance', icon: FaShieldAlt }
      ] 
    },
    { 
      category: 'Integration', 
      items: [
        { name: 'HL7 APIs', icon: FaCode },
        { name: 'EHR Integration', icon: FaHospital },
        { name: 'Payment Gateways', icon: FaDatabase },
        { name: 'Third-party APIs', icon: FaGlobe },
        { name: 'Webhook Integration', icon: FaCode },
        { name: 'Medical Devices', icon: FaStethoscope }
      ] 
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Emily Johnson',
      company: 'Chief Medical Officer, MediCare Plus',
      text: 'SoftDevSquad\'s telemedicine platform revolutionized our patient care delivery. We\'ve seen a 40% increase in patient satisfaction and significant cost savings.',
      rating: 5,
      image: '/images/testimonial-health-1.jpg'
    },
    {
      name: 'Robert Martinez',
      company: 'CTO, Regional Hospital Network',
      text: 'The AI diagnostic system they developed has improved our diagnostic accuracy by 25% and reduced diagnosis time by half. Truly innovative healthcare technology.',
      rating: 5,
      image: '/images/testimonial-health-2.jpg'
    },
    {
      name: 'Dr. Sarah Kim',
      company: 'Director, Digital Health Initiative',
      text: 'Their expertise in healthcare compliance and security is exceptional. The remote monitoring system has helped us reduce patient readmissions by 30%.',
      rating: 5,
      image: '/images/testimonial-health-3.jpg'
    }
  ];

  const stats = [
    { number: '150+', label: 'Healthcare Projects' },
    { number: '1M+', label: 'Patients Served' },
    { number: '99.9%', label: 'HIPAA Compliance' },
    { number: '24/7', label: 'Medical Support' }
  ];

  return (
    <div className="healthtech-page">
      {/* Hero Section */}
      <div className="healthtech-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="healthtech-hero-container">
            <div className="healthtech-hero-content">
              <div className="hero-badge">
                <FaHeartbeat className="badge-icon" />
                <span>Leading HealthTech Development Company</span>
              </div>
              <h1 className="healthtech-hero-title">
                Innovative <span className="highlight">HealthTech Solutions</span> for Better Patient Care
              </h1>
              <p className="healthtech-hero-subtitle">
                Transform healthcare delivery with cutting-edge technology. We build HIPAA-compliant, secure, and scalable healthcare solutions that improve patient outcomes and streamline medical operations.
              </p>
            </div>
            <div className="healthtech-hero-image">
              <div className="hero-healthcare-visual">
                <div className="healthcare-dashboard">
                  <div className="dashboard-header">
                    <div className="header-title">HealthTech Dashboard</div>
                    <div className="header-status">
                      <div className="status-dot active"></div>
                      <span>Live</span>
                    </div>
                  </div>
                  <div className="dashboard-content">
                    <div className="patient-stats">
                      <div className="stat-card">
                        <div className="stat-icon">
                          <FaUserMd />
                        </div>
                        <div className="stat-info">
                          <div className="stat-number">1,247</div>
                          <div className="stat-label">Active Patients</div>
                        </div>
                      </div>
                      <div className="stat-card">
                        <div className="stat-icon">
                          <FaHeartbeat />
                        </div>
                        <div className="stat-info">
                          <div className="stat-number">98.5%</div>
                          <div className="stat-label">Health Score</div>
                        </div>
                      </div>
                    </div>
                    <div className="health-chart">
                      <div className="chart-title">Patient Monitoring</div>
                      <div className="chart-visualization">
                        <div className="chart-bars">
                          {[85, 92, 78, 95, 88, 90, 87].map((height, index) => (
                            <div 
                              key={index} 
                              className="chart-bar" 
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                        <div className="chart-labels">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                            <div key={index} className="chart-label">{day}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="recent-activity">
                      <div className="activity-title">Recent Activity</div>
                      <div className="activity-list">
                        <div className="activity-item">
                          <div className="activity-icon">
                            <FaStethoscope />
                          </div>
                          <div className="activity-text">New consultation completed</div>
                        </div>
                        <div className="activity-item">
                          <div className="activity-icon">
                            <FaPrescriptionBottleAlt />
                          </div>
                          <div className="activity-text">Prescription updated</div>
                        </div>
                        <div className="activity-item">
                          <div className="activity-icon">
                            <FaAmbulance />
                          </div>
                          <div className="activity-text">Emergency alert resolved</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
              Start Your HealthTech Project
            </Link>
            <Link to="/demo" className="btn btn-outline">
              View Healthcare Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="healthtech-services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive HealthTech Development Services</h2>
            <p className="section-subtitle">
              From telemedicine platforms to AI-powered diagnostics, we deliver end-to-end healthcare solutions that revolutionize patient care.
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
      <div className="healthtech-portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our HealthTech Success Stories</h2>
            <p className="section-subtitle">
              Discover how we've helped healthcare organizations build innovative solutions that improve patient outcomes and operational efficiency.
            </p>
          </div>
          <div className="healthtech-portfolio-grid">
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
                    <FaHeartbeat size={60} />
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
      <div className="healthtech-technologies-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Advanced HealthTech Technologies We Master</h2>
            <p className="section-subtitle">
              Our expertise spans across cutting-edge technologies and healthcare standards that power modern medical solutions.
            </p>
          </div>
          <div className="healthtech-technologies-grid">
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
      <div className="healthtech-testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Healthcare Clients Say</h2>
            <p className="section-subtitle">
              Hear from medical professionals and healthcare organizations who trust us with their digital transformation.
            </p>
          </div>
          <div className="healthtech-testimonials-grid">
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
                      <FaUserMd />
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
      <div className="healthtech-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Healthcare with Technology?</h3>
            <p className="cta-subtitle">
              Let's build innovative healthcare solutions that improve patient outcomes, enhance operational efficiency, and ensure regulatory compliance.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Get Started Today
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Schedule Healthcare Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTechPage;
