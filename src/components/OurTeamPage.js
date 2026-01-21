import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUsers, FaCheckCircle, FaArrowRight, FaHeadset, FaLinkedin,
  FaGithub, FaTwitter, FaEnvelope, FaCode, FaRocket, FaLightbulb
} from 'react-icons/fa';
import './OurTeamPage.css';

const OurTeamPage = () => {
  const team = [
    {
      name: 'Purva',
      role: 'Owner',
      description: 'Owner of SoftDevSquad with expertise in business strategy and leadership.',
      image: '/images/purva.jpg',
      skills: ['Business Strategy', 'Leadership', 'Management'],
      social: {
        linkedin: '#',
        email: 'purva@softdevsquad.com'
      }
    },
    {
      name: 'Ashima',
      role: 'Owner',
      description: 'Owner of SoftDevSquad with expertise in operations and business development.',
      image: '/images/ashima.jpg',
      skills: ['Operations', 'Business Development', 'Strategy'],
      social: {
        linkedin: '#',
        email: 'ashima@softdevsquad.com'
      }
    },
    {
      name: 'Dikshant Gangawat',
      role: 'Tech Specialist',
      description: 'Technical specialist with expertise in software architecture, full-stack development, and cutting-edge technologies.',
      image: '',
      skills: ['Software Architecture', 'Full-Stack Development', 'Technical Consulting'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'dikshant@softdevsquad.com'
      }
    },
    {
      name: 'Abhishek Dhang',
      role: 'Tech Specialist',
      description: 'Technical specialist specializing in backend systems, cloud solutions, and system architecture.',
      image: '/images/abhishek-dhang.jpg',
      skills: ['Backend Development', 'Cloud Solutions', 'System Architecture'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'abhishek@softdevsquad.com'
      }
    }
  ];

  const departments = [
    {
      name: 'Development',
      count: '15+',
      description: 'Expert developers across various technologies'
    },
    {
      name: 'Design',
      count: '5+',
      description: 'Creative designers and UX specialists'
    },
    {
      name: 'QA & Testing',
      count: '8+',
      description: 'Quality assurance engineers'
    },
    {
      name: 'Support',
      count: '10+',
      description: '24/7 technical support team'
    }
  ];

  return (
    <div className="our-team-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaUsers className="badge-icon" />
                <span>Meet Our Team</span>
              </div>
              <h1 className="hero-title">
                Our <span className="highlight">Team</span>
              </h1>
              <p className="hero-subtitle">
                Meet the talented individuals who make SoftDevSquad a trusted technology partner. Our diverse team of experts is dedicated to delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">
              Meet the talented individuals who make SoftDevSquad a trusted technology partner
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  {member.image ? (
                    <>
                      <img 
                        src={member.image} 
                        alt={member.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="team-image-placeholder" style={{ display: 'none' }}>
                        <FaUsers size={60} />
                      </div>
                    </>
                  ) : (
                    <div className="team-image-placeholder" style={{ display: 'flex' }}>
                      <FaUsers size={60} />
                    </div>
                  )}
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                  <div className="team-skills">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="team-social">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="social-link">
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="social-link">
                        <FaGithub />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="social-link">
                        <FaTwitter />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className="social-link">
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="departments-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Departments</h2>
            <p className="section-subtitle">
              Specialized teams working together
            </p>
          </div>
          <div className="departments-grid">
            {departments.map((dept, index) => (
              <div key={index} className="department-card">
                <div className="department-count">{dept.count}</div>
                <h3 className="department-name">{dept.name}</h3>
                <p className="department-description">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Want to Join Our Team?</h3>
            <p className="cta-subtitle">
              We're always looking for talented individuals to join our growing team.
            </p>
            <div className="cta-actions">
              <Link to="/careers" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                View Open Positions
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;

