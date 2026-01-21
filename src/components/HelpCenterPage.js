import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaQuestionCircle, FaSearch, FaChevronDown, FaHeadset, FaBook, FaCog, FaRocket, FaArrowRight
} from 'react-icons/fa';
import './HelpCenterPage.css';

const HelpCenterPage = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: FaRocket,
      faqs: [
        {
          question: 'How do I start a project with SoftDevSquad?',
          answer: 'You can start by contacting us through our contact page or booking a demo. We\'ll schedule a consultation to understand your requirements and provide a custom quote.'
        },
        {
          question: 'What information do I need to provide?',
          answer: 'Please provide details about your project goals, target audience, preferred technologies, timeline, and budget. The more information you share, the better we can tailor our solution.'
        },
        {
          question: 'How long does the development process take?',
          answer: 'Project timelines vary based on complexity. Simple projects may take 1-3 months, while complex enterprise solutions can take 6-12 months. We\'ll provide a detailed timeline during the planning phase.'
        }
      ]
    },
    {
      title: 'Services & Pricing',
      icon: FaCog,
      faqs: [
        {
          question: 'What services do you offer?',
          answer: 'We offer mobile app development, web development, full-stack solutions, UI/UX design, cloud migration, AI/ML integration, blockchain development, and ongoing maintenance & support.'
        },
        {
          question: 'How is pricing determined?',
          answer: 'Pricing is based on project scope, complexity, timeline, and specific requirements. We provide custom quotes after understanding your needs. Contact us for a detailed estimate.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans. Typically, we work with milestone-based payments - initial deposit, progress payments, and final payment upon completion.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: FaBook,
      faqs: [
        {
          question: 'What support do you provide after project completion?',
          answer: 'We offer various support packages including bug fixes, updates, maintenance, and 24/7 technical support. Support plans are customizable based on your needs.'
        },
        {
          question: 'How quickly do you respond to support requests?',
          answer: 'Response times vary by support tier. Priority support gets response within 1 hour, standard support within 4 hours, and basic support within 24 hours during business days.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes, we provide comprehensive training and documentation to help your team understand and maintain the solution. Training can be included in the project scope.'
        }
      ]
    },
    {
      title: 'Development Process',
      icon: FaCog,
      faqs: [
        {
          question: 'What is your development methodology?',
          answer: 'We follow Agile/Scrum methodology with regular sprints, demos, and feedback cycles. This ensures transparency and allows for adjustments throughout the development process.'
        },
        {
          question: 'How do you ensure code quality?',
          answer: 'We follow best practices, conduct code reviews, implement automated testing, and perform thorough QA testing before delivery. We also maintain coding standards and documentation.'
        },
        {
          question: 'Will I own the source code?',
          answer: 'Yes, upon final payment, you will receive full ownership of the source code and all project assets. We can also help with deployment and hosting setup.'
        }
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to Choose the Right Tech Stack', link: '#' },
    { title: 'Mobile App vs Web App: Which is Right for You?', link: '#' },
    { title: 'Understanding Cloud Migration', link: '#' },
    { title: 'Best Practices for API Development', link: '#' }
  ];

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="help-center-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaQuestionCircle className="badge-icon" />
                <span>Help & Support</span>
              </div>
              <h1 className="hero-title">
                Help <span className="highlight">Center</span>
              </h1>
              <p className="hero-subtitle">
                Find answers to common questions and get the help you need. Can't find what you're looking for? Contact our support team.
              </p>
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search for help..." className="search-input" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="help-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Browse common questions organized by category
            </p>
          </div>
          
          <div className="faq-categories">
            {faqCategories.map((category, index) => (
              <div key={index} className="faq-category">
                <div 
                  className="faq-category-header"
                  onClick={() => toggleCategory(index)}
                >
                  <div className="faq-category-title">
                    <category.icon className="category-icon" />
                    <span>{category.title}</span>
                  </div>
                  <FaChevronDown className={`chevron ${openCategory === index ? 'open' : ''}`} />
                </div>
                {openCategory === index && (
                  <div className="faq-list">
                    {category.faqs.map((faq, idx) => (
                      <div key={idx} className="faq-item">
                        <h4 className="faq-question">{faq.question}</h4>
                        <p className="faq-answer">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Articles</h2>
            <p className="section-subtitle">
              Most viewed help articles
            </p>
          </div>
          <div className="articles-grid">
            {popularArticles.map((article, index) => (
              <Link key={index} to={article.link} className="article-card">
                <h3 className="article-title">{article.title}</h3>
                <FaArrowRight className="article-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Still Need Help?</h3>
            <p className="cta-subtitle">
              Our support team is here to assist you. Get in touch and we'll respond as soon as possible.
            </p>
            <div className="cta-actions">
              <Link to="/contact-support" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Contact Support
              </Link>
              <Link to="/documentation" className="btn btn-outline">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
