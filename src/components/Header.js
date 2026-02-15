import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import styles from './Header.module.css';
import { mapClasses } from '../utils/cssMapper';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={mapClasses(styles, `header ${isScrolled ? 'header-scrolled' : ''}`)}>
      <div className={mapClasses(styles, 'container')}>
        <div className={mapClasses(styles, 'header-content')}>
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className={mapClasses(styles, 'logo')} onClick={closeMenu}>
              <FaCode className={mapClasses(styles, 'logo-icon')} />
              <span className={mapClasses(styles, 'logo-text')}>SoftDevSquad</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className={mapClasses(styles, 'nav-desktop')}>
            <ul className={mapClasses(styles, 'nav-list')}>
                          <li className={mapClasses(styles, 'nav-item')}>
              <Link href="/" legacyBehavior>
                <a className={mapClasses(styles, 'nav-link')}>
                  Home
                </a>
              </Link>
            </li>
              <li className={mapClasses(styles, 'nav-item dropdown')}>
                <Link href="/services" legacyBehavior>
                  <a className={mapClasses(styles, 'nav-link dropdown-toggle')}>
                    Services
                    <span className={mapClasses(styles, 'dropdown-arrow')}>▼</span>
                  </a>
                </Link>
                <div className={mapClasses(styles, 'dropdown-menu')}>
                  <div className={mapClasses(styles, 'dropdown-menu-container')}>
                    <div className={mapClasses(styles, 'dropdown-section')}>
                      <h4 className={mapClasses(styles, 'dropdown-title')}>Development</h4>
                      <Link href="/mobile-app-development" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Mobile App Development</a></Link>
                      <Link href="/full-stack-development" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Full Stack Development</a></Link>
                      <Link href="/ai-development" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>AI Development</a></Link>
                      <Link href="/blockchain-development" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Blockchain Development</a></Link>
                      <Link href="/software-product-development" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Software Product Development</a></Link>
                      <Link href="/uiux-design" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>UI/UX Design</a></Link>
                    </div>
                    <div className={mapClasses(styles, 'dropdown-section')}>
                      <h4 className={mapClasses(styles, 'dropdown-title')}>Technologies</h4>
                      <Link href="/react-nodejs" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>React & Node.js</a></Link>
                      <Link href="/react-native" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>React Native</a></Link>
                      <Link href="/javascript-typescript" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>JavaScript & TypeScript</a></Link>
                      <Link href="/python-development" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Python Development</a></Link>
                      <Link href="/cloud-solutions" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Cloud Solutions</a></Link>
                    </div>
                    <div className={mapClasses(styles, 'dropdown-section')}>
                      <h4 className={mapClasses(styles, 'dropdown-title')}>Business Services</h4>
                      <Link href="/it-recruitment" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>IT Recruitment</a></Link>
                      <Link href="/it-consultation" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>IT Consultation</a></Link>
                      <Link href="/tech-support" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Tech Support</a></Link>
                      <Link href="/digital-transformation" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Digital Transformation</a></Link>
                      <Link href="/maintenance-support" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Maintenance & Support</a></Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/industries" legacyBehavior><a className="nav-link dropdown-toggle">Industries <span className="dropdown-arrow">▼</span></a></Link>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-container">
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Technology</h4>
                      <Link href="/fintech" legacyBehavior><a className="dropdown-link">FinTech</a></Link>
                      <Link href="/healthtech" legacyBehavior><a className="dropdown-link">HealthTech</a></Link>
                      <Link href="/edtech" legacyBehavior><a className="dropdown-link">EdTech</a></Link>
                      <Link href="/ecommerce" legacyBehavior><a className="dropdown-link">E-commerce</a></Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Business</h4>
                      <Link href="/startups" legacyBehavior><a className="dropdown-link">Startups</a></Link>
                      <Link href="/smes" legacyBehavior><a className="dropdown-link">SMEs</a></Link>
                      <Link href="/enterprises" legacyBehavior><a className="dropdown-link">Enterprises</a></Link>
                      <Link href="/agencies" legacyBehavior><a className="dropdown-link">Agencies</a></Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Solutions</h4>
                      <Link href="/custom-solutions" legacyBehavior><a className="dropdown-link">Custom Solutions</a></Link>
                      <Link href="/saas-development" legacyBehavior><a className="dropdown-link">SaaS Development</a></Link>
                      <Link href="/digital-platforms" legacyBehavior><a className="dropdown-link">Digital Platforms</a></Link>
                      <Link href="/integration-services" legacyBehavior><a className="dropdown-link">Integration Services</a></Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link href="/about" legacyBehavior><a className="nav-link dropdown-toggle">Company <span className="dropdown-arrow">▼</span></a></Link>
                <div className="dropdown-menu">
                  <div className="dropdown-menu-container">
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">About Us</h4>
                      <Link href="/our-story" legacyBehavior><a className="dropdown-link">Our Story</a></Link>
                      <Link href="/our-team" legacyBehavior><a className="dropdown-link">Our Team</a></Link>
                      <Link href="/mission-vision" legacyBehavior><a className="dropdown-link">Mission & Vision</a></Link>
                      <Link href="/careers" legacyBehavior><a className="dropdown-link">Careers</a></Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Resources</h4>
                      <Link href="/portfolio" legacyBehavior><a className="dropdown-link">Portfolio</a></Link>
                      <Link href="/case-studies" legacyBehavior><a className="dropdown-link">Case Studies</a></Link>
                      <Link href="/blog" legacyBehavior><a className="dropdown-link">Blog</a></Link>
                      <Link href="/pricing" legacyBehavior><a className="dropdown-link">Pricing</a></Link>
                    </div>
                    <div className="dropdown-section">
                      <h4 className="dropdown-title">Support</h4>
                      <Link href="/help-center" legacyBehavior><a className="dropdown-link">Help Center</a></Link>
                      <Link href="/documentation" legacyBehavior><a className="dropdown-link">Documentation</a></Link>
                      <Link href="/api-reference" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>API Reference</a></Link>
                      <Link href="/contact-support" legacyBehavior><a className={mapClasses(styles, 'dropdown-link')}>Contact Support</a></Link>
                    </div>
                  </div>
                </div>
              </li>
                          <li className="nav-item">
              <Link href="/contact" legacyBehavior><a className="nav-link">Contact</a></Link>
            </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className={mapClasses(styles, 'header-actions')}>
            <Link href="/demo" legacyBehavior><a className={mapClasses(styles, 'btn btn-primary btn-sm')}>Book Demo</a></Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={mapClasses(styles, 'menu-toggle')}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={mapClasses(styles, `nav-mobile ${isMenuOpen ? 'nav-mobile-open' : ''}`)}>
          <ul className={mapClasses(styles, 'nav-mobile-list')}>
            <li>
              <Link href="/" legacyBehavior><a className={mapClasses(styles, 'nav-mobile-link')} onClick={closeMenu}>🏠 Home</a></Link>
            </li>
            <li className={mapClasses(styles, 'mobile-section')}>
              <div className={mapClasses(styles, 'mobile-section-title')}>🛠️ Development Services</div>
              <Link href="/mobile-app-development" legacyBehavior><a className={mapClasses(styles, 'nav-mobile-sublink')} onClick={closeMenu}>Mobile App Development</a></Link>
              <Link href="/full-stack-development" legacyBehavior><a className={mapClasses(styles, 'nav-mobile-sublink')} onClick={closeMenu}>Full Stack Development</a></Link>
              <Link href="/ai-development" legacyBehavior><a className={mapClasses(styles, 'nav-mobile-sublink')} onClick={closeMenu}>AI Development</a></Link>
              <Link href="/blockchain-development" legacyBehavior><a className={mapClasses(styles, 'nav-mobile-sublink')} onClick={closeMenu}>Blockchain Development</a></Link>
              <Link href="/software-product-development" legacyBehavior><a className={mapClasses(styles, 'nav-mobile-sublink')} onClick={closeMenu}>Software Product Development</a></Link>
              <Link href="/uiux-design" legacyBehavior><a className={mapClasses(styles, 'nav-mobile-sublink')} onClick={closeMenu}>UI/UX Design</a></Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">💻 Technologies</div>
              <Link href="/react-nodejs" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>React & Node.js</a></Link>
              <Link href="/react-native" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>React Native</a></Link>
              <Link href="/javascript-typescript" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>JavaScript & TypeScript</a></Link>
              <Link href="/python-development" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Python Development</a></Link>
              <Link href="/cloud-solutions" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Cloud Solutions</a></Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">🎯 Business Services</div>
              <Link href="/it-recruitment" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>IT Recruitment</a></Link>
              <Link href="/it-consultation" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>IT Consultation</a></Link>
              <Link href="/tech-support" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Tech Support</a></Link>
              <Link href="/digital-transformation" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Digital Transformation</a></Link>
              <Link href="/maintenance-support" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Maintenance & Support</a></Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">🏭 Industries</div>
              <Link href="/fintech" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>FinTech</a></Link>
              <Link href="/healthtech" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>HealthTech</a></Link>
              <Link href="/edtech" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>EdTech</a></Link>
              <Link href="/ecommerce" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>E-commerce</a></Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">🏢 Business</div>
              <Link href="/startups" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Startups</a></Link>
              <Link href="/smes" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>SMEs</a></Link>
              <Link href="/enterprises" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Enterprises</a></Link>
              <Link href="/agencies" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Agencies</a></Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">⚙️ Solutions</div>
              <Link href="/custom-solutions" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Custom Solutions</a></Link>
              <Link href="/saas-development" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>SaaS Development</a></Link>
              <Link href="/digital-platforms" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Digital Platforms</a></Link>
              <Link href="/integration-services" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Integration Services</a></Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">🏢 About Us</div>
              <Link href="/our-story" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Our Story</a></Link>
              <Link href="/our-team" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Our Team</a></Link>
              <Link href="/mission-vision" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Mission & Vision</a></Link>
              <Link href="/careers" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Careers</a></Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">📚 Resources</div>
              <Link href="/portfolio" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Portfolio</a></Link>
              <Link href="/case-studies" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Case Studies</a></Link>
              <Link href="/blog" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Blog</a></Link>
              <Link href="/pricing" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Pricing</a></Link>
            </li>
            <li className="mobile-section">
              <div className="mobile-section-title">🛟 Support</div>
              <Link href="/help-center" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Help Center</a></Link>
              <Link href="/documentation" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Documentation</a></Link>
              <Link href="/api-reference" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>API Reference</a></Link>
              <Link href="/contact-support" legacyBehavior><a className="nav-mobile-sublink" onClick={closeMenu}>Contact Support</a></Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior><a className="nav-mobile-link" onClick={closeMenu}>📞 Contact</a></Link>
            </li>
            <li className={mapClasses(styles, 'mobile-cta-section')}>
              <Link href="/demo" legacyBehavior><a className={mapClasses(styles, 'nav-mobile-cta primary')} onClick={closeMenu}>📋 Book Demo</a></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 