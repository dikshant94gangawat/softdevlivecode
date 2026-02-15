import React from 'react';
import styles from './MissionVisionPage.module.css';
import Link from 'next/link';

import {
  FaRocket, FaEye, FaBullseye, FaCheckCircle, FaArrowRight, FaHeadset,
  FaLightbulb, FaUsers, FaHeart, FaGlobe
} from 'react-icons/fa';

const MissionVisionPage = () => {
  const mission = {
    title: 'Our Mission',
    description: 'To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting value. We are committed to delivering exceptional software development services that transform ideas into reality.',
    icon: FaBullseye
  };

  const vision = {
    title: 'Our Vision',
    description: 'To become the most trusted technology partner globally, recognized for innovation, quality, and client success. We envision a future where every business can leverage cutting-edge technology to achieve their goals.',
    icon: FaEye
  };

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
    },
    {
      icon: FaGlobe,
      title: 'Global Impact',
      description: 'We aim to make a positive impact on businesses and communities worldwide.'
    }
  ];

  return (
    <div className={styles['mission-vision-page']}>
      <div className={styles['page-hero']}>
        <div className={styles['hero-background']}>
          <div className={styles['hero-pattern']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['hero-container']}>
            <div className={styles['hero-content']}>
              <div className={styles['hero-badge']}>
                <FaRocket className={styles['badge-icon']} />
                <span>Our Purpose</span>
              </div>
              <h1 className={styles['hero-title']}>
                Mission & <span className={styles.highlight}>Vision</span>
              </h1>
              <p className={styles['hero-subtitle']}>
                Discover what drives us and where we're heading. Our mission and vision guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['mission-vision-section']}>
        <div className={styles.container}>
          <div className={styles['mission-vision-grid']}>
            <div className={styles['mission-card']}>
              <div className={styles['mission-icon']}>
                <mission.icon />
              </div>
              <h2 className={styles['mission-title']}>{mission.title}</h2>
              <p className={styles['mission-description']}>{mission.description}</p>
            </div>
            <div className={styles['vision-card']}>
              <div className={styles['vision-icon']}>
                <vision.icon />
              </div>
              <h2 className={styles['vision-title']}>{vision.title}</h2>
              <p className={styles['vision-description']}>{vision.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['values-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Our Core Values</h2>
            <p className={styles['section-subtitle']}>
              The principles that guide our actions and decisions
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
            <h3 className={styles['cta-title']}>Ready to Work With Us?</h3>
            <p className={styles['cta-subtitle']}>
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className={styles['cta-actions']}>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>
                <FaHeadset className={styles['btn-icon']} />
                Get in Touch
              </a></Link>
              <Link href="/our-story" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>
                Learn More
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionPage;
