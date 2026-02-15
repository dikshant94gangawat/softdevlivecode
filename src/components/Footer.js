import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import { FaCode, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram, FaArrowUp, FaUsers } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const founders = [
    {
      name: 'Purva Sharma',
      initials: 'PS',
      image: `${process.env.PUBLIC_URL}/images/purva.jpg`
    },
    {
      name: 'Ashima Sarkar',
      initials: 'AS',
      image: `${process.env.PUBLIC_URL}/images/ashima.jpg`
    }
  ];

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    'Mobile App Development',
    'Web Development',
    'IT Recruitment',
    'IT Consultation',
    'Tech Support',
    'Digital Services'
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/softdevsquad'
    },
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      url: 'https://facebook.com/softdevsquad'
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://instagram.com/softdevsquad'
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['footer-main']}>
          <div className={styles['footer-brand']}>
            <Link href="/" legacyBehavior>
              <a className={styles['footer-logo']}>
                <FaCode className={styles['logo-icon']} />
                <span className={styles['logo-text']}>SoftDevSquad</span>
              </a>
            </Link>
            <div className={styles['footer-description']}>
              <p>Transforming ideas into powerful digital solutions. We're your trusted partner for a full spectrum of IT services, including:</p>
              <ul className={styles['footer-services-list']}>
                <li>App and Web Development</li>
                <li>IT Recruitment</li>
                <li>Consultation & Tech Support</li>
              </ul>
            </div>
            <div className={styles['footer-contact']}>
              <div className={styles['contact-item']}>
                <FaEnvelope className={styles['contact-icon']} />
                <a href="mailto:softdevsquad@gmail.com">softdevsquad@gmail.com</a>
              </div>
              <div className={styles['contact-item']}>
                <FaPhone className={styles['contact-icon']} />
                <a href="tel:+917760554526">+91 77605 54526</a>
              </div>
              <div className={`styles['contact-item'] styles['founders-item']`}>
                <FaUsers className={styles['contact-icon']} />
                <div className={styles['founders-info']}>
                  <span className={styles['founders-label']}>Founders:</span>
                  <div className={styles['founders-avatars']}>
                    {founders.map((founder, index) => (
                      <div key={index} className={styles['founder-card']}>
                        <div className={styles['founder-avatar']}>
                          {founder.image ? (
                            <>
                              <img 
                                src={founder.image} 
                                alt={founder.name}
                                className={styles['founder-avatar-image']}
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const initialsSpan = e.target.parentNode.querySelector('.founder-initials');
                                  if (initialsSpan) {
                                    initialsSpan.style.display = 'flex';
                                  }
                                }}
                              />
                              <span 
                                className={styles['founder-initials']} 
                                style={{ display: 'none' }}
                              >
                                {founder.initials}
                              </span>
                            </>
                          ) : (
                            <span className={styles['founder-initials']}>{founder.initials}</span>
                          )}
                        </div>
                        <span className={styles['founder-name']}>{founder.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles['contact-item']}>
                <FaMapMarkerAlt className={styles['contact-icon']} />
                <span>India</span>
              </div>
            </div>
          </div>

          <div className={styles['footer-links']}>
            <div className={styles['footer-section']}>
              <h3 className={styles['section-title']}>Quick Links</h3>
              <ul className={styles['footer-list']}>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path} legacyBehavior>
                      <a className={styles['footer-link']}>{link.label}</a>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/demo" legacyBehavior><a className={styles['footer-link']}>Book Demo</a></Link>
                </li>
              </ul>
            </div>

            <div className={styles['footer-section']}>
              <h3 className={styles['section-title']}>Our Services</h3>
              <ul className={styles['footer-list']}>
                {services.map((service, index) => (
                  <li key={index}>
                    <span className={styles['footer-link']}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles['footer-section']}>
              <h3 className={styles['section-title']}>Company</h3>
              <ul className={styles['footer-list']}>
                <li><Link href="/about" legacyBehavior><a className={styles['footer-link']}>About Us</a></Link></li>
                                              <li><a href="#" className={styles['footer-link']} onClick={(e) => e.preventDefault()}>Careers</a></li>
                  <li><a href="#" className={styles['footer-link']} onClick={(e) => e.preventDefault()}>Blog</a></li>
                  <li><a href="#" className={styles['footer-link']} onClick={(e) => e.preventDefault()}>Case Studies</a></li>
                  <li><Link href="/privacy" legacyBehavior><a className={styles['footer-link']}>Privacy Policy</a></Link></li>
                  <li><Link href="/terms" legacyBehavior><a className={styles['footer-link']}>Terms of Service</a></Link></li>
              </ul>
            </div>

            <div className={styles['footer-section']}>
              <h3 className={styles['section-title']}>Get Started</h3>
              <p className={styles['section-description']}>
                Ready to start your project? Let's discuss how we can help you achieve your goals.
              </p>
              <div className={styles['footer-cta']}>
                <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}>Start Your Project</a></Link>
                <Link href="/demo" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>Book Demo</a></Link>
              </div>
              <div className={styles['footer-social']}>
                <h4>Follow Us</h4>
                <div className={styles['social-links']}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles['social-link']}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <div className={styles.container}>
          <div className={styles['footer-bottom-content']}>
            <div className={styles['footer-copyright']}>
              <p>&copy; {currentYear} SoftDevSquad. All rights reserved.</p>
            </div>
            
            <div className={styles['footer-bottom-links']}>
                        <Link href="/privacy" legacyBehavior><a className={styles['footer-bottom-link']}>Privacy</a></Link>
          <Link href="/terms" legacyBehavior><a className={styles['footer-bottom-link']}>Terms</a></Link>
          <a href="#" className={styles['footer-bottom-link']} onClick={(e) => e.preventDefault()}>Cookies</a>
            </div>
            
            <button onClick={scrollToTop} className={styles['scroll-to-top']} aria-label="Scroll to top">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 