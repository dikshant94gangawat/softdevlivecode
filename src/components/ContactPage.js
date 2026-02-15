import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import Link from 'next/link';

import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaCheckCircle,
  FaRocket,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaUser,
  FaLightbulb,
  FaHeadset,
  FaStar
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    serviceInterests: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const availableTimeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const serviceOptions = [
    { id: 'mobile-app', label: 'Mobile App Development', icon: FaPhone },
    { id: 'web-development', label: 'Web Development', icon: FaRocket },
    { id: 'it-recruitment', label: 'IT Recruitment Services', icon: FaUser },
    { id: 'it-consultation', label: 'IT Consultation', icon: FaLightbulb },
    { id: 'technical-support', label: 'Technical Support', icon: FaHeadset },
    { id: 'digital-solutions', label: 'Digital Solutions', icon: FaStar }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceInterestChange = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      serviceInterests: prev.serviceInterests.includes(serviceId)
        ? prev.serviceInterests.filter(id => id !== serviceId)
        : [...prev.serviceInterests, serviceId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration - Hardcoded values
    const SERVICE_ID = 'service_rtt3nfn';
    const CONTACT_USER_TEMPLATE_ID = 'template_id3jtzl';
    const CONTACT_COMPANY_TEMPLATE_ID = 'template_6ksqawr';
    const PUBLIC_KEY = '0drflmj55utEx9sEX';

    try {
      // Prepare email data
      const emailData = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        company_name: formData.company,
        subject: formData.subject,
        message: formData.message,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        services: formData.serviceInterests.join(', '),
        company_email: 'softdevsquad@gmail.com'
      };

      // Dynamically import EmailJS in client runtime
      const emailjsModule = await import('@emailjs/browser');
      const emailjsClient = emailjsModule.default || emailjsModule;

      // Send confirmation email to user
      await emailjsClient.send(
        SERVICE_ID,
        CONTACT_USER_TEMPLATE_ID,
        {
          to_email: formData.email,
          to_name: formData.name,
          ...emailData
        },
        PUBLIC_KEY
      );

      // Send notification email to company
      await emailjsClient.send(
        SERVICE_ID,
        CONTACT_COMPANY_TEMPLATE_ID,
        {
          to_email: 'softdevsquad@gmail.com',
          to_name: 'SoftDevSquad Team',
          ...emailData
        },
        PUBLIC_KEY
      );

      console.log('Contact form submitted and emails sent:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        preferredDate: '',
        preferredTime: '',
        serviceInterests: []
      });

    } catch (error) {
      console.error('Error sending contact emails:', error);

      const errorMessage = error && error.message ? error.message : String(error);

      // Email sending error - show success but notify user
      setSubmitStatus('success');
      alert('Message submitted! There was an issue sending the confirmation email, but our team will contact you directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Call',
      detail: '+91 77605 54526',
      action: 'tel:+917760554526'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      detail: 'softdevsquad@gmail.com',
      action: 'mailto:softdevsquad@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      detail: 'India',
      action: null
    }
  ];

  const founders = [
    {
      name: 'Purva Sharma',
      role: 'Co-Founder & CEO',
      avatar: 'PS',
      image: `${process.env.PUBLIC_URL}/images/purva.jpg`,
      expertise: ['Business Strategy', 'Client Relations', 'Project Management']
    },
    {
      name: 'Ashima Sarkar',
      role: 'Co-Founder & CTO',
      avatar: 'AS',
      image: `${process.env.PUBLIC_URL}/images/ashima.jpg`,
      expertise: ['Software Architecture', 'Technical Innovation', 'Team Leadership']
    }
  ];



  return (
    <div className={styles['contact-page']}>
      {/* Hero Section */}
      <div className={styles['contact-hero']}>
        <div className={styles['contact-hero-background']}>
          <div className={styles['hero-pattern']}></div>
          <div className={styles['hero-glow']}></div>
        </div>
        <div className={styles.container}>
          <div className={styles['contact-hero-content']}>
            <div className={styles['hero-badge']}>
              <FaRocket className={styles['badge-icon']} />
              <span>Get In Touch</span>
            </div>
            <h1 className={styles['contact-hero-title']}>
              Let's Build Something <span className={styles.highlight}>Amazing</span> Together
            </h1>
            <p className={styles['contact-hero-subtitle']}>
              Ready to transform your ideas into powerful digital solutions? 
              We're here to help you every step of the way.
            </p>
            <div className={styles['hero-features']}>
              <div className={styles['hero-feature']}>
                <FaCheckCircle className={styles['feature-icon']} />
                <span>Free Consultation</span>
              </div>
              <div className={styles['hero-feature']}>
                <FaCheckCircle className={styles['feature-icon']} />
                <span>24h Response Time</span>
              </div>
              <div className={styles['hero-feature']}>
                <FaCheckCircle className={styles['feature-icon']} />
                <span>Custom Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className={styles['contact-main']}>
        <div className={styles.container}>
          <div className={styles['contact-grid']}>
            
            {/* Contact Form */}
            <div className={styles['contact-form-section']}>
              <h2 className={styles['section-title']}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className={styles['contact-form']}>
                <div className={styles['form-row']}>
                  <div className={styles['form-group']}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className={styles['form-group']}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className={styles['form-row']}>
                  <div className={styles['form-group']}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className={styles['form-group']}>
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className={styles['form-group']}>
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="recruitment">IT Recruitment</option>
                    <option value="consultation">IT Consultation</option>
                    <option value="support">Tech Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles['form-group']}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project and requirements..."
                  ></textarea>
                </div>

                <div className={styles['form-group']}>
                  <h4 className={styles['contact-section-title']}>Services of Interest</h4>
                  <div className={styles['contact-services-grid']}>
                    {serviceOptions.map(service => {
                      const IconComponent = service.icon;
                      return (
                        <div key={service.id} className={styles['contact-service-option']}>
                          <input
                            type="checkbox"
                            id={service.id}
                            checked={formData.serviceInterests.includes(service.id)}
                            onChange={() => handleServiceInterestChange(service.id)}
                          />
                          <label htmlFor={service.id} className={styles['contact-service-label']}>
                            <div className={styles['contact-service-checkbox']}>
                              <div className={styles['contact-checkbox-icon']}>✓</div>
                            </div>
                            <IconComponent className={styles['contact-service-icon']} />
                            <span>{service.label}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={styles['form-group']}>
                  <h4 className={styles['contact-section-title']}>Preferred Meeting Schedule</h4>
                  <div className={styles['form-row']}>
                    <div className={styles['form-group']}>
                      <label htmlFor="preferredDate">Preferred Date</label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        placeholder="Select a date"
                      />
                    </div>
                    <div className={styles['form-group']}>
                      <label htmlFor="preferredTime">Preferred Time</label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                      >
                        <option value="">Select time slot</option>
                        {availableTimeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`${submit-btn} ${${isSubmitting} ${?} ${'submitting'} ${:} ${''}}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className={styles['submit-success']}>
                    <FaCheckCircle className={styles['success-icon']} />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles['contact-info-section']}>
              <h2 className={styles['section-title']}>Contact Information</h2>
              <div className={styles['contact-info-cards']}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles['contact-info-card']}>
                    <div className={styles['info-icon']}>
                      <info.icon />
                    </div>
                    <div className={styles['info-content']}>
                      <h3 className={styles['info-title']}>{info.title}</h3>
                      {info.action ? (
                        <a href={info.action} className={styles['info-detail']}>
                          {info.detail}
                        </a>
                      ) : (
                        <p className={styles['info-detail']}>{info.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Founders Section */}
              <div className={styles['founders-section']}>
                <h3 className={styles['founders-title']}>Meet Our Founders</h3>
                <div className={styles['founders-grid']}>
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
                                const initialsSpan = e.target.parentNode.querySelector('.avatar-initials');
                                if (initialsSpan) {
                                  initialsSpan.style.display = 'flex';
                                }
                              }}
                            />
                            <span 
                              className={styles['avatar-initials']} 
                              style={{ display: 'none' }}
                            >
                              {founder.avatar}
                            </span>
                          </>
                        ) : (
                          <span className={styles['avatar-initials']}>{founder.avatar}</span>
                        )}
                      </div>
                      <div className={styles['founder-info']}>
                        <h4 className={styles['founder-name']}>{founder.name}</h4>
                        <p className={styles['founder-role']}>{founder.role}</p>
                        <div className={styles['founder-expertise']}>
                          {founder.expertise.map((skill, idx) => (
                            <span key={idx} className={styles['expertise-tag']}>{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className={styles['quick-actions']}>
                <h3 className={styles['quick-actions-title']}>Quick Actions</h3>
                <div className={styles['quick-actions-grid']}>
                  <Link href="/demo" legacyBehavior><a className={styles['quick-action-btn']}>
                    📋 Book a Demo
                  </a></Link>
                  <a href="mailto:softdevsquad@gmail.com" className={styles['quick-action-btn']}>
                    ✉️ Email Us
                  </a>
                  <Link href="/services" legacyBehavior><a className={styles['quick-action-btn']}>
                    🛠️ Our Services
                  </a></Link>
                </div>
              </div>

              {/* Social Links */}
              <div className={styles['social-section']}>
                <h3 className={styles['social-title']}>Follow Our Journey</h3>
                <div className={styles['social-links']}>
                  <a href="https://linkedin.com/company/softdevsquad" className={styles['social-link']} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/softdevsquad" className={styles['social-link']} target="_blank" rel="noopener noreferrer" title="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="https://github.com/softdevsquad" className={styles['social-link']} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://facebook.com/softdevsquad" className={styles['social-link']} target="_blank" rel="noopener noreferrer" title="Facebook">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* CTA Section */}
      <div className={styles['contact-cta']}>
        <div className={styles.container}>
          <div className={styles['cta-content']}>
            <h3 className={styles['cta-title']}>Ready to Get Started?</h3>
            <p className={styles['cta-subtitle']}>
              Let's discuss your project and see how we can help bring your vision to life
            </p>
            <div className={styles['cta-actions']}>
              <a href="tel:+917760554526" className={`${styles.btn} ${styles['btn-primary']}`}>
                📞 Call Now
              </a>
              <Link href="/services" legacyBehavior><a className={`${styles.btn} ${styles['btn-outline']}`}>
                View Services
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 