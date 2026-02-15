import React from 'react';
import styles from './HealthTechPage.module.css';
import Link from 'next/link';

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
    <div className={styles['healthtech-page']}>
      {/* Hero Section */}
      <div className={styles['healthtech-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['healthtech-hero-container']}>
            <div className={styles['healthtech-hero-content']}>
              <div className={styles['hero-badge']}>
                <FaHeartbeat className={styles['badge-icon']} />
                <span>Leading HealthTech Development Company</span>
              </div>
              <h1 className={styles['healthtech-hero-title']}>
                Innovative <span className={styles.highlight}>HealthTech Solutions</span> for Better Patient Care
              </h1>
              <p className={styles['healthtech-hero-subtitle']}>
                Transform healthcare delivery with cutting-edge technology. We build HIPAA-compliant, secure, and scalable healthcare solutions that improve patient outcomes and streamline medical operations.
              </p>
            </div>
            <div className={styles['healthtech-hero-image']}>
              <div className={styles['hero-healthcare-visual']}>
                <div className={styles['healthcare-dashboard']}>
                  <div className={styles['dashboard-header']}>
                    <div className={styles['header-title']}>HealthTech Dashboard</div>
                    <div className={styles['header-status']}>
                      <div className={`${styles['status-dot']} ${styles.active}`}></div>
                      <span>Live</span>
                    </div>
                  </div>
                  <div className={styles['dashboard-content']}>
                    <div className={styles['patient-stats']}>
                      <div className={styles['stat-card']}>
                        <div className={styles['stat-icon']}>
                          <FaUserMd />
                        </div>
                        <div className={styles['stat-info']}>
                          <div className={styles['stat-number']}>1,247</div>
                          <div className={styles['stat-label']}>Active Patients</div>
                        </div>
                      </div>
                      <div className={styles['stat-card']}>
                        <div className={styles['stat-icon']}>
                          <FaHeartbeat />
                        </div>
                        <div className={styles['stat-info']}>
                          <div className={styles['stat-number']}>98.5%</div>
                          <div className={styles['stat-label']}>Health Score</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles['health-chart']}>
                      <div className={styles['chart-title']}>Patient Monitoring</div>
                      <div className={styles['chart-visualization']}>
                        <div className={styles['chart-bars']}>
                          {[85, 92, 78, 95, 88, 90, 87].map((height, index) => (
                            <div 
                              key={index} 
                              className={styles['chart-bar']} 
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                        <div className={styles['chart-labels']}>
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                            <div key={index} className={styles['chart-label']}>{day}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={styles['recent-activity']}>
                      <div className={styles['activity-title']}>Recent Activity</div>
                      <div className={styles['activity-list']}>
                        <div className={styles['activity-item']}>
                          <div className={styles['activity-icon']}>
                            <FaStethoscope />
                          </div>
                          <div className={styles['activity-text']}>New consultation completed</div>
                        </div>
                        <div className={styles['activity-item']}>
                          <div className={styles['activity-icon']}>
                            <FaPrescriptionBottleAlt />
                          </div>
                          <div className={styles['activity-text']}>Prescription updated</div>
                        </div>
                        <div className={styles['activity-item']}>
                          <div className={styles['activity-icon']}>
                            <FaAmbulance />
                          </div>
                          <div className={styles['activity-text']}>Emergency alert resolved</div>
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
              <FaHeadset className={styles['btn-icon']} />
              Start Your HealthTech Project
            </a></Link>
            <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
              View Healthcare Portfolio
            </a></Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles['healthtech-services-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Comprehensive HealthTech Development Services</h2>
            <p className={styles['section-subtitle']}>
              From telemedicine platforms to AI-powered diagnostics, we deliver end-to-end healthcare solutions that revolutionize patient care.
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
      </div>

      {/* Portfolio Section */}
      <div className={styles['healthtech-portfolio-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our HealthTech Success Stories</h2>
            <p className={styles['section-subtitle']}>
              Discover how we've helped healthcare organizations build innovative solutions that improve patient outcomes and operational efficiency.
            </p>
          </div>
          <div className={styles['healthtech-portfolio-grid']}>
            {portfolio.map((project, index) => (
              <div key={index} className={styles['portfolio-card']}>
                <div className={styles['portfolio-image']}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={styles['portfolio-image-placeholder']} style={{ display: 'none', color: project.color }}>
                    <FaHeartbeat size={60} />
                  </div>
                  <div className={styles['portfolio-overlay']}>
                    <div className={styles['portfolio-category']}>{project.category}</div>
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
                  <div className={styles['portfolio-results']}>
                    {project.results.map((result, idx) => (
                      <div key={idx} className={styles['result-item']}>
                        <FaCheckCircle className={styles['result-icon']} />
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
      <div className={styles['healthtech-technologies-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Advanced HealthTech Technologies We Master</h2>
            <p className={styles['section-subtitle']}>
              Our expertise spans across cutting-edge technologies and healthcare standards that power modern medical solutions.
            </p>
          </div>
          <div className={styles['healthtech-technologies-grid']}>
            {technologies.map((techCategory, index) => (
              <div key={index} className={styles['tech-category-card']}>
                <h3 className={styles['tech-category-title']}>{techCategory.category}</h3>
                <ul className={styles['tech-category-list']}>
                  {techCategory.items.map((item, idx) => (
                    <li key={idx} className={styles['tech-category-item']}>
                      <item.icon className={styles['tech-icon']} />
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
      <div className={styles['healthtech-testimonials-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>What Our Healthcare Clients Say</h2>
            <p className={styles['section-subtitle']}>
              Hear from medical professionals and healthcare organizations who trust us with their digital transformation.
            </p>
          </div>
          <div className={styles['healthtech-testimonials-grid']}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles['testimonial-card']}>
                <div className={styles['testimonial-rating']}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={styles['star-icon']} />
                  ))}
                </div>
                <p className={styles['testimonial-text']}>"{testimonial.text}"</p>
                <div className={styles['testimonial-author']}>
                  <div className={styles['author-avatar']}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className={styles['avatar-placeholder']} style={{ display: 'none' }}>
                      <FaUserMd />
                    </div>
                  </div>
                  <div className={styles['author-info']}>
                    <div className={styles['author-name']}>{testimonial.name}</div>
                    <div className={styles['author-company']}>{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles['healthtech-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Transform Healthcare with Technology?</h3>
            <p className={styles['cta-subtitle']}>
              Let's build innovative healthcare solutions that improve patient outcomes, enhance operational efficiency, and ensure regulatory compliance.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}>
                <FaHeadset className={styles['btn-icon']} />
                Get Started Today
              </a></Link>
              <Link href="/demo" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                Schedule Healthcare Consultation
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTechPage;
