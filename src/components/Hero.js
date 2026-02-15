import React from 'react';
import styles from './Hero.module.css';
import { mapClasses } from '../utils/cssMapper';
import Link from 'next/link';
import { FaRocket, FaArrowRight, FaPlay } from 'react-icons/fa';


const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero bg-pattern">
      <div className="hero-background">
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop&crop=center" alt="Technology Background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <FaRocket className="icon-sm" />
              <span>Welcome to SoftDevSquad</span>
            </div>
            
            <h1 className="hero-title fade-in">
              Transform Your Ideas Into 
              <span className="gradient-text" data-text=" Digital Solutions"> Digital Solutions</span>
            </h1>
            
            <p className="hero-description slide-up">
              From stunning mobile apps to powerful websites, we bring your digital vision to life. 
              Our expert team crafts innovative solutions with cutting-edge technologies, 
              delivering premium quality and exceptional user experiences that drive business growth.
            </p>
            
            <div className="hero-stats slide-up">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            
            <div className="hero-actions slide-up">
              <button 
                onClick={scrollToServices}
                className="btn btn-primary btn-lg"
              >
                Get Started
                <FaArrowRight className="icon-sm" />
              </button>
              
              <Link href="/demo" legacyBehavior>
                <a className="btn btn-outline btn-lg">
                  <FaPlay className="icon-sm" />
                  Book Demo
                </a>
              </Link>
            </div>
            
            <div className="hero-features slide-up">
              <div className="feature">
                <span className="feature-icon">📱</span>
                <span>Mobile Apps</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🌐</span>
                <span>Web Development</span>
              </div>
              <div className="feature">
                <span className="feature-icon">👥</span>
                <span>IT Recruitment</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💡</span>
                <span>Tech Consultation</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-image-main">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center" 
                  alt="Modern Technology Solutions" 
                  className="hero-main-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hero-image-fallback" style={{display: 'none'}}>
                  <FaRocket size={80} />
                </div>
              </div>
              <div className="hero-image-grid">
                <div className="grid-item grid-item-1">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center" 
                    alt="Mobile Development" 
                    className="grid-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="grid-image-fallback" style={{display: 'none'}}>📱</div>
                </div>
                <div className="grid-item grid-item-2">
                  <img 
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop&crop=center" 
                    alt="Web Development" 
                    className="grid-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="grid-image-fallback" style={{display: 'none'}}>💻</div>
                </div>
                <div className="grid-item grid-item-3">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center" 
                    alt="Cloud Solutions" 
                    className="grid-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="grid-image-fallback" style={{display: 'none'}}>☁️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 