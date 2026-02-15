import React from 'react';
import styles from './OurTeamPage.module.css';
import Link from 'next/link';

import {
  FaUsers, FaCheckCircle, FaArrowRight, FaHeadset, FaLinkedin,
  FaGithub, FaTwitter, FaEnvelope, FaCode, FaRocket, FaLightbulb
} from 'react-icons/fa';

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
    <div className={styles['our-team-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaUsers className={styles['badge-icon']} />
                <span>Meet Our Team</span>
              </div>
              <h1 className={styles['hero-title']}>
                Our <span className={styles.highlight}>Team</span>
              </h1>
              <p className={styles['hero-subtitle']}>
                Meet the talented individuals who make SoftDevSquad a trusted technology partner. Our diverse team of experts is dedicated to delivering exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['team-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Team</h2>
            <p className={styles['section-subtitle']}>
              Meet the talented individuals who make SoftDevSquad a trusted technology partner
            </p>
          </div>
          <div className={styles['team-grid']}>
            {team.map((member, index) => (
              <div key={index} className={styles['team-card']}>
                <div className={styles['team-image']}>
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
                      <div className={styles['team-image-placeholder']} style={{ display: 'none' }}>
                        <FaUsers size={60} />
                      </div>
                    </>
                  ) : (
                    <div className={styles['team-image-placeholder']} style={{ display: 'flex' }}>
                      <FaUsers size={60} />
                    </div>
                  )}
                </div>
                <div className={styles['team-info']}>
                  <h3 className={styles['team-name']}>{member.name}</h3>
                  <p className={styles['team-role']}>{member.role}</p>
                  <p className={styles['team-description']}>{member.description}</p>
                  <div className={styles['team-skills']}>
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className={styles['skill-tag']}>{skill}</span>
                    ))}
                  </div>
                  <div className={styles['team-social']}>
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className={styles['social-link']}>
                        <FaLinkedin />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className={styles['social-link']}>
                        <FaGithub />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className={styles['social-link']}>
                        <FaTwitter />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} className={styles['social-link']}>
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

      <div className={styles['departments-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Departments</h2>
            <p className={styles['section-subtitle']}>
              Specialized teams working together
            </p>
          </div>
          <div className={styles['departments-grid']}>
            {departments.map((dept, index) => (
              <div key={index} className={styles['department-card']}>
                <div className={styles['department-count']}>{dept.count}</div>
                <h3 className={styles['department-name']}>{dept.name}</h3>
                <p className={styles['department-description']}>{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Want to Join Our Team?</h3>
            <p className={styles['cta-subtitle']}>
              We're always looking for talented individuals to join our growing team.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/careers" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                <FaHeadset className={styles['btn-icon']} />
                View Open Positions
              </a></Link>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
                Get in Touch
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;

