import React from 'react';
import styles from './CareersPage.module.css';
import Link from 'next/link';

import {
  FaBriefcase, FaCheckCircle, FaArrowRight, FaHeadset, FaMapMarkerAlt,
  FaClock, FaUsers, FaCode, FaRocket, FaHeart
} from 'react-icons/fa';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Development',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'We are looking for an experienced full-stack developer to join our team.',
      requirements: ['5+ years experience', 'React & Node.js', 'TypeScript', 'Cloud platforms'],
      icon: FaCode
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Creative designer to create beautiful and functional user interfaces.',
      requirements: ['3+ years experience', 'Figma/Sketch', 'Design systems', 'User research'],
      icon: FaRocket
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'DevOps engineer to manage our cloud infrastructure and CI/CD pipelines.',
      requirements: ['4+ years experience', 'AWS/Azure', 'Docker/Kubernetes', 'CI/CD'],
      icon: FaCode
    },
    {
      title: 'QA Engineer',
      department: 'Quality Assurance',
      location: 'Remote',
      type: 'Full-time',
      description: 'QA engineer to ensure the quality of our software products.',
      requirements: ['3+ years experience', 'Testing frameworks', 'Automation', 'Agile'],
      icon: FaCheckCircle
    }
  ];

  const benefits = [
    {
      icon: FaHeart,
      title: 'Competitive Salary',
      description: 'Attractive compensation packages'
    },
    {
      icon: FaUsers,
      title: 'Remote Work',
      description: 'Work from anywhere flexibility'
    },
    {
      icon: FaRocket,
      title: 'Career Growth',
      description: 'Opportunities for professional development'
    },
    {
      icon: FaClock,
      title: 'Flexible Hours',
      description: 'Work-life balance'
    }
  ];

  return (
    <div className={styles['careers-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaBriefcase className={styles['badge-icon']} />
                <span>Join Our Team</span>
              </div>
              <h1 className={styles['hero-title']}>
                Build Your <span className={styles.highlight}>Career</span> With Us
              </h1>
              <p className={styles['hero-subtitle']}>
                Join a team of passionate professionals working on cutting-edge projects. We're always looking for talented individuals to help us grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['positions-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Open Positions</h2>
            <p className={styles['section-subtitle']}>
              Explore current job opportunities
            </p>
          </div>
          <div className={styles['positions-grid']}>
            {openPositions.map((position, index) => (
              <div key={index} className={styles['position-card']}>
                <div className={styles['position-icon']}>
                  <position.icon />
                </div>
                <h3 className={styles['position-title']}>{position.title}</h3>
                <div className={styles['position-meta']}>
                  <span className={styles['position-department']}>{position.department}</span>
                  <span className={styles['position-location']}>
                    <FaMapMarkerAlt /> {position.location}
                  </span>
                  <span className={styles['position-type']}>
                    <FaClock /> {position.type}
                  </span>
                </div>
                <p className={styles['position-description']}>{position.description}</p>
                <div className={styles['position-requirements']}>
                  <h4>Requirements:</h4>
                  <ul>
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className={styles['check-icon']} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" legacyBehavior><a className={styles['position-apply']}>
                  Apply Now
                  <FaArrowRight className={styles['arrow-icon']} />
                </a></Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['benefits-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Why Work With Us</h2>
            <p className={styles['section-subtitle']}>
              Benefits and perks of joining our team
            </p>
          </div>
          <div className={styles['benefits-grid']}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles['benefit-card']}>
                <div className={styles['benefit-icon']}>
                  <benefit.icon />
                </div>
                <h3 className={styles['benefit-title']}>{benefit.title}</h3>
                <p className={styles['benefit-description']}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Don't See a Position That Fits?</h3>
            <p className={styles['cta-subtitle']}>
              We're always interested in connecting with talented individuals. Send us your resume!
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                <FaHeadset className={styles['btn-icon']} />
                Send Your Resume
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

