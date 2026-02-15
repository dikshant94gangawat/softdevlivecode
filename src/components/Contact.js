import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaPaperPlane, FaUsers } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configure EmailJS service (dynamically import to keep server-side safe)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        to_name: 'SoftDevSquad Team'
      };

      // Dynamically import emailjs in client runtime
      const emailjsModule = await import('emailjs-com');
      const emailjsClient = emailjsModule.default || emailjsModule;

      await emailjsClient.send(
        'service_rtt3nfn',
        'template_6ksqawr',
        templateParams,
        '0drflmj55utEx9sEX'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: 'softdevsquad@gmail.com',
      link: 'mailto:softdevsquad@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Call Dikshant',
      details: '+91 77605 54526',
      link: 'tel:+917760554526'
    },
    {
      icon: <FaUsers />,
      title: 'Founders',
      details: 'Dikshant Gangawat & Abhishek Dhang',
      link: 'mailto:softdevsquad@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'India',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/softdevsquad'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/softdevsquad'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/softdevsquad'
    }
  ];

  return (
    <section id="contact" className={`${styles.contact} ${styles.section}`}>
      <div className={styles.container}>
        <div className={`${styles['contact-header']} ${styles['text-center']}`}>
          <h2 className={`${styles['section-title']} ${styles['fade-in']}`}>
            Get In <span className={styles['gradient-text']}>Touch</span>
          </h2>
          <p className={`${styles['section-description']} ${styles['slide-up']}`}>
            Ready to start your project? We'd love to hear from you. Send us a message 
            and we'll respond as soon as possible.
          </p>
        </div>

        <div className={styles['contact-content']}>
          <div className={`${styles['contact-info']} ${styles['slide-up']}`}>
            <h3>Let's Start a Conversation</h3>
            <p>
              Whether you have a project in mind, need technical consultation, or want to 
              join our team, we're here to help. Reach out to us through any of the 
              channels below.
            </p>

            <div className={styles['contact-methods']}>
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className={styles['contact-method']}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className={styles['method-icon']}>
                    {info.icon}
                  </div>
                  <div className={styles['method-content']}>
                    <h4>{info.title}</h4>
                    <p>{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles['social-links']}>
              <h4>Follow Us</h4>
              <div className={styles['social-icons']}>
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

          <div className={`${styles['contact-form-container']} ${styles['slide-up']}`}>
            <form onSubmit={handleSubmit} className={styles['contact-form']}>
              <div className={styles['form-row']}>
                <div className={styles['form-group']}>
                  <label htmlFor="name" className={styles['form-label']}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles['form-input']}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor="email" className={styles['form-label']}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles['form-input']}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className={styles['form-row']}>
                <div className={styles['form-group']}>
                  <label htmlFor="company" className={styles['form-label']}>Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles['form-input']}
                    placeholder="Enter your company name"
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor="service" className={styles['form-label']}>Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={styles['form-select']}
                  >
                    <option value="">Select a service</option>
                    <option value="app-development">App Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="it-recruitment">IT Recruitment</option>
                    <option value="it-consultation">IT Consultation</option>
                    <option value="tech-support">Tech Support</option>
                    <option value="digital-services">Digital Services</option>
                  </select>
                </div>
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="message" className={styles['form-label']}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles['form-textarea']}
                  required
                  placeholder="Tell us about your project or requirements..."
                  rows="5"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className={`${styles.alert} ${styles['alert-success']}`}>
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={`${styles.alert} ${styles['alert-error']}`}>
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                className={`${styles.btn} ${styles['btn-primary']} ${styles['btn-lg']}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.loading}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className={styles['icon-sm']} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 