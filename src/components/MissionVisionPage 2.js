import React from 'react';
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
    <div className="mission-vision-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaRocket className="badge-icon" />
                <span>Our Purpose</span>
              </div>
              <h1 className="hero-title">
                Mission & <span className="highlight">Vision</span>
              </h1>
              <p className="hero-subtitle">
                Discover what drives us and where we're heading. Our mission and vision guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <mission.icon />
              </div>
              <h2 className="mission-title">{mission.title}</h2>
              <p className="mission-description">{mission.description}</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">
                <vision.icon />
              </div>
              <h2 className="vision-title">{vision.title}</h2>
              <p className="vision-description">{vision.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our actions and decisions
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Work With Us?</h3>
            <p className="cta-subtitle">
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="cta-actions">
              <Link href="/contact" legacyBehavior><a className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Get in Touch
              </a></Link>
              <Link href="/our-story" legacyBehavior><a className="btn btn-outline">
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
