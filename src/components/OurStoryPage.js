import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket, FaUsers, FaAward, FaChartLine, FaCheckCircle, FaArrowRight, FaHeadset,
  FaLightbulb, FaHeart, FaGlobe, FaCode
} from 'react-icons/fa';
import './OurStoryPage.css';

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
    <div className="our-story-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaRocket className="badge-icon" />
                <span>Our Journey</span>
              </div>
              <h1 className="hero-title">
                Our <span className="highlight">Story</span>
              </h1>
              <p className="hero-subtitle">
                From a small startup to a trusted technology partner, discover the journey of SoftDevSquad and how we've been helping businesses transform digitally since 2021.
              </p>
            </div>
          </div>
        </div>
      </div>

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

      <div className="story-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Milestones that shaped who we are today
            </p>
          </div>
          <div className="milestones-timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-item">
                <div className="milestone-icon">
                  <milestone.icon />
                </div>
                <div className="milestone-year">{milestone.year}</div>
                <h3 className="milestone-title">{milestone.title}</h3>
                <p className="milestone-description">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
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
            <h3 className="cta-title">Want to Be Part of Our Story?</h3>
            <p className="cta-subtitle">
              Join us on our journey and let's create something amazing together.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Get in Touch
              </Link>
              <Link to="/careers" className="btn btn-outline">
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;

