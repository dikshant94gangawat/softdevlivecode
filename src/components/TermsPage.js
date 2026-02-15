import React from 'react';
import styles from './TermsPage.module.css';
import Link from 'next/link';
import { 
  FaFileContract,
  FaGavel,
  FaHandshake,
  FaExclamationTriangle,
  FaCheckCircle,
  FaInfoCircle,
  FaBan,
  FaShieldAlt,
  FaBalanceScale
} from 'react-icons/fa';

const TermsPage = () => {
  const termsSections = [
    {
      icon: FaHandshake,
      title: 'Acceptance of Terms',
      description: 'By accessing and using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.'
    },
    {
      icon: FaShieldAlt,
      title: 'Service Description',
      description: 'SoftDevSquad provides software development, IT recruitment, consultation, and related technology services. We reserve the right to modify, suspend, or discontinue any service at any time.'
    },
    {
      icon: FaBalanceScale,
      title: 'User Obligations',
      description: 'You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.'
    },
    {
      icon: FaGavel,
      title: 'Intellectual Property',
      description: 'All content, trademarks, logos, and intellectual property on our platform are owned by SoftDevSquad or our licensors. You may not use, reproduce, or distribute our content without permission.'
    }
  ];

  const userResponsibilities = [
    {
      icon: FaCheckCircle,
      title: 'Accurate Information',
      items: [
        'Provide accurate and complete information when using our services',
        'Update your information promptly if it changes',
        'Maintain the security of your account credentials',
        'Notify us immediately of any unauthorized access'
      ]
    },
    {
      icon: FaBan,
      title: 'Prohibited Activities',
      items: [
        'Violate any applicable laws or regulations',
        'Infringe upon intellectual property rights',
        'Transmit harmful code, viruses, or malware',
        'Attempt to gain unauthorized access to our systems',
        'Interfere with or disrupt our services'
      ]
    },
    {
      icon: FaExclamationTriangle,
      title: 'Limitations',
      items: [
        'We are not liable for indirect or consequential damages',
        'Our services are provided "as is" without warranties',
        'We do not guarantee uninterrupted or error-free service',
        'You use our services at your own risk'
      ]
    }
  ];

  const paymentTerms = [
    {
      icon: FaCheckCircle,
      title: 'Payment Obligations',
      description: 'Payment terms will be specified in individual service agreements. All fees are due according to the agreed payment schedule.'
    },
    {
      icon: FaCheckCircle,
      title: 'Refund Policy',
      description: 'Refund policies vary by service type and will be clearly stated in your service agreement. Contact us for specific refund inquiries.'
    },
    {
      icon: FaCheckCircle,
      title: 'Late Payments',
      description: 'Late payments may incur additional fees or result in service suspension. We will provide notice before taking such actions.'
    },
    {
      icon: FaCheckCircle,
      title: 'Disputes',
      description: 'Payment disputes should be reported within 30 days of the transaction. We will work with you to resolve any billing issues promptly.'
    }
  ];

  const terminationTerms = [
    {
      icon: FaInfoCircle,
      title: 'Termination by You',
      description: 'You may terminate your use of our services at any time by providing written notice. Any outstanding fees remain due.'
    },
    {
      icon: FaInfoCircle,
      title: 'Termination by Us',
      description: 'We reserve the right to suspend or terminate your access if you violate these Terms or engage in fraudulent activities.'
    },
    {
      icon: FaInfoCircle,
      title: 'Effect of Termination',
      description: 'Upon termination, your right to use our services will cease immediately. We may delete your account and data as permitted by law.'
    }
  ];

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className={styles['terms-page']}>
      {/* Hero Section */}
      <div className={styles['terms-hero']}>
        <div className={styles['terms-hero-background']}>
          <div className={styles['hero-pattern']}></div>
          <div className={styles['hero-glow']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['terms-hero-content']}>
            <div className={styles['hero-badge']}>
              <FaFileContract className={styles['badge-icon']} />
              <span>Terms & Conditions</span>
            </div>
            <h1 className={styles['terms-hero-title']}>
              Terms of <span className={styles.highlight}>Service</span>
            </h1>
            <p className={styles['terms-hero-subtitle']}>
              Please read these Terms and Conditions carefully before using our services. 
              These terms govern your relationship with SoftDevSquad and outline your rights and obligations.
            </p>
            <div className={styles['terms-update-date']}>
              <FaInfoCircle className={styles['update-icon']} />
              <span>Last Updated: {currentDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className={styles['terms-overview-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Terms Overview</h2>
            <p className={styles['section-subtitle']}>
              Understanding the terms that govern your use of our services
            </p>
          </div>
          <div className={styles['terms-features-grid']}>
            {termsSections.map((section, index) => (
              <div key={index} className={styles['terms-feature-card']}>
                <div className={styles['terms-feature-icon']}>
                  <section.icon />
                </div>
                <h3 className={styles['terms-feature-title']}>{section.title}</h3>
                <p className={styles['terms-feature-description']}>{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Responsibilities Section */}
      <div className={styles['terms-responsibilities-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>User Responsibilities</h2>
            <p className={styles['section-subtitle']}>
              Your obligations and responsibilities when using our services
            </p>
          </div>
          <div className={styles['responsibilities-grid']}>
            {userResponsibilities.map((responsibility, index) => (
              <div key={index} className={styles['responsibility-card']}>
                <div className={styles['responsibility-header']}>
                  <div className={styles['responsibility-icon']}>
                    <responsibility.icon />
                  </div>
                  <h3 className={styles['responsibility-title']}>{responsibility.title}</h3>
                </div>
                <ul className={styles['responsibility-list']}>
                  {responsibility.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles['responsibility-item']}>
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

      {/* Payment Terms Section */}
      <div className={styles['terms-payment-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Payment Terms</h2>
            <p className={styles['section-subtitle']}>
              Information about payments, refunds, and billing policies
            </p>
          </div>
          <div className={styles['payment-grid']}>
            {paymentTerms.map((term, index) => (
              <div key={index} className={styles['payment-card']}>
                <div className={styles['payment-icon']}>
                  <term.icon />
                </div>
                <h3 className={styles['payment-title']}>{term.title}</h3>
                <p className={styles['payment-description']}>{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Termination Section */}
      <div className={styles['terms-termination-section']}>
        <div className={styles.container}>
          <div className={styles['section-header']}>
            <h2 className={styles['section-title']}>Termination</h2>
            <p className={styles['section-subtitle']}>
              Conditions under which services may be terminated
            </p>
          </div>
          <div className={styles['termination-grid']}>
            {terminationTerms.map((term, index) => (
              <div key={index} className={styles['termination-card']}>
                <div className={styles['termination-icon']}>
                  <term.icon />
                </div>
                <h3 className={styles['termination-title']}>{term.title}</h3>
                <p className={styles['termination-description']}>{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Limitation of Liability Section */}
      <div className={styles['terms-liability-section']}>
        <div className={styles.container}>
          <div className={styles['liability-content']}>
            <div className={styles['liability-text']}>
              <h2 className={styles['liability-title']}>Limitation of Liability</h2>
              <p className={styles['liability-description']}>
                To the maximum extent permitted by law, SoftDevSquad shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
              <p className={styles['liability-description']}>
                Our total liability for any claims arising from or related to the use of our services shall not 
                exceed the amount you paid to us in the twelve (12) months preceding the claim. Some jurisdictions 
                do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.
              </p>
            </div>
            <div className={styles['liability-features']}>
              <div className={styles['liability-feature']}>
                <FaExclamationTriangle className={styles['liability-feature-icon']} />
                <span>Limited Liability</span>
              </div>
              <div className={styles['liability-feature']}>
                <FaShieldAlt className={styles['liability-feature-icon']} />
                <span>Service Warranty</span>
              </div>
              <div className={styles['liability-feature']}>
                <FaBalanceScale className={styles['liability-feature-icon']} />
                <span>Legal Protection</span>
              </div>
              <div className={styles['liability-feature']}>
                <FaInfoCircle className={styles['liability-feature-icon']} />
                <span>Jurisdiction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Changes to Terms Section */}
      <div className={styles['terms-changes-section']}>
        <div className={styles.container}>
          <div className={styles['changes-content']}>
            <h2 className={styles['changes-title']}>Changes to Terms</h2>
            <p className={styles['changes-description']}>
              We reserve the right to modify these Terms and Conditions at any time. We will notify you of any 
              material changes by posting the new Terms on this page and updating the "Last Updated" date. 
              Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
            </p>
            <p className={styles['changes-description']}>
              We encourage you to review these Terms periodically to stay informed about how we operate and 
              what terms apply to your use of our services.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles['terms-contact-section']}>
        <div className={styles.container}>
          <div className={styles['contact-content']}>
            <h2 className={styles['contact-title']}>Questions About Terms?</h2>
            <p className={styles['contact-description']}>
              If you have any questions, concerns, or need clarification regarding these Terms and Conditions, 
              please contact us. We are here to help you understand your rights and obligations.
            </p>
            <div className={styles['contact-actions']}>
              <Link href="/contact" legacyBehavior><a className={`styles.btn styles['btn-primary']`}><FaInfoCircle className={styles['btn-icon']} />Contact Us</a></Link>
              <Link href="/" legacyBehavior><a className={`styles.btn styles['btn-outline']`}>Back to Home</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

