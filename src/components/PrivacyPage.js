import React from 'react';
import styles from './PrivacyPage.module.css';
import Link from 'next/link';
import { 
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaEye,
  FaDatabase,
  FaCookie,
  FaCheckCircle,
  FaInfoCircle
} from 'react-icons/fa';

const PrivacyPage = () => {
  const privacyFeatures = [
    {
      icon: FaShieldAlt,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.'
    },
    {
      icon: FaLock,
      title: 'Secure Storage',
      description: 'Your data is stored securely using encryption and access controls to ensure confidentiality and integrity.'
    },
    {
      icon: FaUserShield,
      title: 'User Rights',
      description: 'You have the right to access, update, or delete your personal information at any time through your account settings.'
    },
    {
      icon: FaEye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and share your information, providing clear privacy notices.'
    }
  ];

  const dataTypes = [
    {
      icon: FaDatabase,
      title: 'Personal Information',
      items: [
        'Name and contact information',
        'Email address and phone number',
        'Company name and job title',
        'Billing and payment information'
      ]
    },
    {
      icon: FaCookie,
      title: 'Usage Data',
      items: [
        'Website usage and navigation patterns',
        'Device and browser information',
        'IP address and location data',
        'Cookies and tracking technologies'
      ]
    },
    {
      icon: FaInfoCircle,
      title: 'Communication Data',
      items: [
        'Messages and inquiries sent to us',
        'Support tickets and feedback',
        'Survey responses and preferences',
        'Marketing communication preferences'
      ]
    }
  ];

  const userRights = [
    {
      icon: FaCheckCircle,
      title: 'Access',
      description: 'Request access to your personal data we hold'
    },
    {
      icon: FaCheckCircle,
      title: 'Correction',
      description: 'Request correction of inaccurate or incomplete data'
    },
    {
      icon: FaCheckCircle,
      title: 'Deletion',
      description: 'Request deletion of your personal data under certain circumstances'
    },
    {
      icon: FaCheckCircle,
      title: 'Portability',
      description: 'Request transfer of your data to another service provider'
    },
    {
      icon: FaCheckCircle,
      title: 'Objection',
      description: 'Object to processing of your personal data for specific purposes'
    },
    {
      icon: FaCheckCircle,
      title: 'Restriction',
      description: 'Request restriction of processing in certain situations'
    }
  ];

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className={styles['privacy-page']}>
      {/* Hero Section */}
      <div className={styles['privacy-hero']}>
        <div className={styles['privacy-hero-background']}>
          <div className={styles['hero-pattern']}></div>
          <div className={styles['hero-glow']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['privacy-hero-content']}>
            <div className={styles['hero-badge']}>
              <FaShieldAlt className={styles['badge-icon']} />
              <span>Privacy Policy</span>
            </div>
            <h1 className={styles['privacy-hero-title']}>
              Your <span className={styles.highlight}>Privacy</span> Matters
            </h1>
            <p className={styles['privacy-hero-subtitle']}>
              At SoftDevSquad, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className={styles['privacy-update-date']}>
              <FaInfoCircle className={styles['update-icon']} />
              <span>Last Updated: {currentDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className={styles['privacy-overview-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Privacy Overview</h2>
            <p className={styles['section-subtitle']}>
              Understanding how we handle your personal information
            </p>
          </div>
          <div className={styles['privacy-features-grid']}>
            {privacyFeatures.map((feature, index) => (
              <div key={index} className={styles['privacy-feature-card']}>
                <div className={styles['privacy-feature-icon']}>
                  <feature.icon />
                </div>
                <h3 className={styles['privacy-feature-title']}>{feature.title}</h3>
                <p className={styles['privacy-feature-description']}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Information We Collect Section */}
      <div className={styles['privacy-info-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Information We Collect</h2>
            <p className={styles['section-subtitle']}>
              We collect information that you provide directly to us and information that is automatically 
              collected when you use our services.
            </p>
          </div>
          <div className={styles['data-types-grid']}>
            {dataTypes.map((dataType, index) => (
              <div key={index} className={styles['data-type-card']}>
                <div className={styles['data-type-header']}>
                  <div className={styles['data-type-icon']}>
                    <dataType.icon />
                  </div>
                  <h3 className={styles['data-type-title']}>{dataType.title}</h3>
                </div>
                <ul className={styles['data-type-list']}>
                  {dataType.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles['data-type-item']}>
                      <FaCheckCircle className={styles['list-icon']} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Use Information Section */}
      <div className={styles['privacy-usage-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>How We Use Your Information</h2>
            <p className={styles['section-subtitle']}>
              We use the information we collect to provide, maintain, and improve our services
            </p>
          </div>
          <div className={styles['usage-content']}>
            <div className={styles['usage-card']}>
              <h3 className={styles['usage-card-title']}>Service Delivery</h3>
              <p className={styles['usage-card-text']}>
                To provide, maintain, and improve our services, process transactions, and respond to your 
                inquiries and requests.
              </p>
            </div>
            <div className={styles['usage-card']}>
              <h3 className={styles['usage-card-title']}>Communication</h3>
              <p className={styles['usage-card-text']}>
                To send you updates, newsletters, marketing communications, and other information that may 
                be of interest to you (with your consent).
              </p>
            </div>
            <div className={styles['usage-card']}>
              <h3 className={styles['usage-card-title']}>Analytics & Improvement</h3>
              <p className={styles['usage-card-text']}>
                To analyze usage patterns, monitor performance, and improve our website functionality and 
                user experience.
              </p>
            </div>
            <div className={styles['usage-card']}>
              <h3 className={styles['usage-card-title']}>Legal Compliance</h3>
              <p className={styles['usage-card-text']}>
                To comply with legal obligations, enforce our terms of service, and protect our rights and 
                the rights of our users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Your Rights Section */}
      <div className={styles['privacy-rights-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Your Privacy Rights</h2>
            <p className={styles['section-subtitle']}>
              You have certain rights regarding your personal information under applicable privacy laws
            </p>
          </div>
          <div className={styles['rights-grid']}>
            {userRights.map((right, index) => (
              <div key={index} className={styles['right-card']}>
                <div className={styles['right-icon']}>
                  <right.icon />
                </div>
                <h3 className={styles['right-title']}>{right.title}</h3>
                <p className={styles['right-description']}>{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Security Section */}
      <div className={styles['privacy-security-section']}>
        <div className={styles.container}>
          <div className={styles['security-content']}>
            <div className={styles['security-text']}>
              <h2 className={styles['security-title']}>Data Security</h2>
              <p className={styles['security-description']}>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include encryption, secure servers, access controls, and regular security audits.
              </p>
              <p className={styles['security-description']}>
                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, we cannot 
                guarantee absolute security.
              </p>
            </div>
            <div className={styles['security-features']}>
              <div className={styles['security-feature']}>
                <FaShieldAlt className={styles['security-feature-icon']} />
                <span>Encryption</span>
              </div>
              <div className={styles['security-feature']}>
                <FaLock className={styles['security-feature-icon']} />
                <span>Secure Servers</span>
              </div>
              <div className={styles['security-feature']}>
                <FaUserShield className={styles['security-feature-icon']} />
                <span>Access Controls</span>
              </div>
              <div className={styles['security-feature']}>
                <FaCheckCircle className={styles['security-feature-icon']} />
                <span>Regular Audits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles['privacy-contact-section']}>
        <div className={styles.container}>
          <div className={styles['contact-content']}>
            <h2 className={styles['contact-title']}>Questions About Privacy?</h2>
            <p className={styles['contact-description']}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
              practices, please contact us. We are committed to addressing your privacy concerns promptly.
            </p>
            <div className={styles['contact-actions']}>
              <Link href="/contact" legacyBehavior><a className={`${styles.btn} ${styles['btn-primary']}`}><FaInfoCircle className={styles['btn-icon']} />Contact Us</a></Link>
              <Link href="/" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>Back to Home</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

