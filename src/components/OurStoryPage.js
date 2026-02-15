import React from 'react';
import styles from './OurStoryPage.module.css';
import Link from 'next/link';

import {
  FaRocket, FaUsers, FaAward, FaChartLine, FaCheckCircle, FaArrowRight, FaHeadset,
  FaLightbulb, FaHeart, FaGlobe, FaCode
} from 'react-icons/fa';

const OurStoryPage = () => {
  const milestones = [
    {
      year: '2021',
      title: 'The Beginning',
      description: 'SoftDevSquad was founded with a vision to deliver exceptional software solutions and help businesses transform digitally.',
      icon: FaRocket
    },
    {
      year: '2022',
      title: 'Rapid Growth',
      description: 'Expanded our team and completed 50+ successful projects across various industries.',
      icon: FaChartLine
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Started serving clients globally and established partnerships with leading technology companies.',
      icon: FaGlobe
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Reached 100+ projects milestone and received recognition for excellence in software development.',
      icon: FaAward
    }
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver for our clients.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve exceptional results together.'
    },
    {
      icon: FaCheckCircle,
      title: 'Quality',
      description: 'We never compromise on quality and always deliver solutions that exceed expectations.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className={styles['our-story-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaRocket className={styles['badge-icon']} />
                <span>Our Journey</span>
              </div>
              <h1 className={styles['hero-title']}>
                Our <span className={styles.highlight}>Story</span>
              </h1>
              <p className={styles['hero-subtitle']}>
                From a small startup to a trusted technology partner, discover the journey of SoftDevSquad and how we've been helping businesses transform digitally since 2021.
              </p>
            </div>
          </div>
        </div>
      </div>

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

      <div className={styles['story-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Journey</h2>
            <p className={styles['section-subtitle']}>
              Milestones that shaped who we are today
            </p>
          </div>
          <div className={styles['milestones-timeline']}>
            {milestones.map((milestone, index) => (
              <div key={index} className={styles['milestone-item']}>
                <div className={styles['milestone-icon']}>
                  <milestone.icon />
                </div>
                <div className={styles['milestone-year']}>{milestone.year}</div>
                <h3 className={styles['milestone-title']}>{milestone.title}</h3>
                <p className={styles['milestone-description']}>{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['values-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Values</h2>
            <p className={styles['section-subtitle']}>
              The principles that guide everything we do
            </p>
          </div>
          <div className={styles['values-grid']}>
            {values.map((value, index) => (
              <div key={index} className={styles['value-card']}>
                <div className={styles['value-icon']}>
                  <value.icon />
                </div>
                <h3 className={styles['value-title']}>{value.title}</h3>
                <p className={styles['value-description']}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['cta-section']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Want to Be Part of Our Story?</h3>
            <p className={styles['cta-subtitle']}>
              Join us on our journey and let's create something amazing together.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                <FaHeadset className={styles['btn-icon']} />
                Get in Touch
              </a></Link>
              <Link href="/careers" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
                View Careers
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;

