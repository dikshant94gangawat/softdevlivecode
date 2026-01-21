import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBriefcase, FaCheckCircle, FaArrowRight, FaHeadset, FaMapMarkerAlt,
  FaClock, FaUsers, FaCode, FaRocket, FaHeart
} from 'react-icons/fa';
import './CareersPage.css';

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
    <div className="careers-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaBriefcase className="badge-icon" />
                <span>Join Our Team</span>
              </div>
              <h1 className="hero-title">
                Build Your <span className="highlight">Career</span> With Us
              </h1>
              <p className="hero-subtitle">
                Join a team of passionate professionals working on cutting-edge projects. We're always looking for talented individuals to help us grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="positions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              Explore current job opportunities
            </p>
          </div>
          <div className="positions-grid">
            {openPositions.map((position, index) => (
              <div key={index} className="position-card">
                <div className="position-icon">
                  <position.icon />
                </div>
                <h3 className="position-title">{position.title}</h3>
                <div className="position-meta">
                  <span className="position-department">{position.department}</span>
                  <span className="position-location">
                    <FaMapMarkerAlt /> {position.location}
                  </span>
                  <span className="position-type">
                    <FaClock /> {position.type}
                  </span>
                </div>
                <p className="position-description">{position.description}</p>
                <div className="position-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check-icon" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="position-apply">
                  Apply Now
                  <FaArrowRight className="arrow-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Work With Us</h2>
            <p className="section-subtitle">
              Benefits and perks of joining our team
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <benefit.icon />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Don't See a Position That Fits?</h3>
            <p className="cta-subtitle">
              We're always interested in connecting with talented individuals. Send us your resume!
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Send Your Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

