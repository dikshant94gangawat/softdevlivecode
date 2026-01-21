import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBrain, FaRobot, FaCogs, FaChartLine, FaShieldAlt, FaRocket,
  FaLaptopCode, FaMobileAlt, FaCog, FaUsers, FaStar, FaCheckCircle,
  FaArrowRight, FaHeadset, FaEye, FaSearch, FaDatabase, FaLightbulb,
  FaMicrochip, FaNetworkWired, FaGlobe, FaLock, FaCode, FaServer,
  FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaAws, FaMicrosoft,
  FaDocker, FaGitAlt, FaChartBar, FaCloud, FaDesktop
} from 'react-icons/fa';
import { 
  SiTensorflow, SiPytorch, SiScikitlearn, SiJupyter, SiAnaconda,
  SiKeras, SiOpencv, SiNumpy, SiPandas, SiMongodb, SiPostgresql,
  SiElasticsearch, SiKubernetes, SiTableau, SiPowerbi
} from 'react-icons/si';
import './AIDevelopment.css';

const AIDevelopment = () => {
  const services = [
    {
      icon: FaBrain,
      title: 'AI & ML Solutions',
      description: 'We empower your business with the unmatched benefits of solutions to actively take on your competitors. Our experts leverage AI and ML\'s abilities to meet your target audience\'s unique customer expectations. Let\'s create solutions that deliver unmatched experiences to your users.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Business Intelligence'],
      color: '#00ffff'
    },
    {
      icon: FaCogs,
      title: 'AI/ML Support and Maintenance',
      description: 'The success of your AI and ML solutions is incomplete if you don\'t have the right support and maintenance team to back them up. Let SoftDevSquad be your backend support to manage all the latest updates on the app while you scale your business. No matter the issues with your AI ML solution, we help you navigate such a situation.',
      features: ['24/7 Support', 'Model Updates', 'Performance Monitoring', 'Issue Resolution'],
      color: '#8a2be2'
    },
    {
      icon: FaLaptopCode,
      title: 'Custom AI/ML Applications',
      description: 'Different businesses have different needs, and AI ML technologies have the potential to meet these unique needs. Our experts specialize in creating highly performant and unique AI ML apps that align with your business needs. With the right custom AI ML solution, we will help you drive better engagements and boost conversions.',
      features: ['Custom Algorithms', 'Business-Specific Models', 'Scalable Solutions', 'Integration Services'],
      color: '#ffd700'
    },
    {
      icon: FaUsers,
      title: 'AI/ML Training, Support & Maintenance',
      description: 'Our expertise with Artificial Intelligence and Machine Learning services extends to AI ML training, support, and maintenance. Our experts train your teams to leverage the full potential of these technologies and facilitate better growth. Your teams can then determine effective ways to use these technologies to meet organizational goals.',
      features: ['Team Training', 'Best Practices', 'Implementation Guidance', 'Ongoing Support'],
      color: '#ff6b6b'
    },
    {
      icon: FaChartLine,
      title: 'Consulting and Strategy',
      description: 'AI and ML are relatively new technologies that continue to evolve for their users. Our AI and ML experts are here to help you better understand the nuances of these technologies and use their abilities to your advantage. We evaluate your business\'s unique needs and consult you on creating the right strategy that works to your advantage.',
      features: ['Strategic Planning', 'Technology Assessment', 'ROI Analysis', 'Implementation Roadmap'],
      color: '#00ff00'
    },
    {
      icon: FaShieldAlt,
      title: 'AI Ethics and Governance',
      description: 'The growing application and popularity of advanced technologies such as AI ML have raised a big question about their ethics and governance. We serve as the benchmark to address it with effective AI ML ethics and governance services. We monitor your AI use and ensure it aligns with all the relevant ethical and governance standards.',
      features: ['Ethical Guidelines', 'Compliance Standards', 'Risk Assessment', 'Governance Framework'],
      color: '#ff00ff'
    },
    {
      icon: FaLightbulb,
      title: 'Generative AI Development',
      description: 'We specialize in generative AI development to help you create fresh content, chat responses, and designs that make your process stand out. SoftDevSquad backs your operations with the right experts to implement generative AI models and algorithms that operate with unmatched proficiency. We integrate solutions that enable you to automate repetitive tasks and promote better creativity.',
      features: ['Content Generation', 'Chat Solutions', 'Creative Design', 'Automation Tools'],
      color: '#ffa500'
    },
    {
      icon: FaRobot,
      title: 'Robotics Process Automation',
      description: 'AI-powered software robots are becoming more prevalent with the increasing popularity of robotic process automation. Our experts have the essential skills to build AI-powered solutions that understand and automate routine operations within your organization. This ensures you maximize the available resources and foster long-term growth.',
      features: ['Process Automation', 'Workflow Optimization', 'Resource Maximization', 'Efficiency Enhancement'],
      color: '#20b2aa'
    }
  ];

  const solutions = [
    {
      icon: FaRobot,
      title: 'AI-Driven Chatbot Development',
      description: 'We create unique AI-powered chatbots that communicate with your audiences in real time and deliver prompt responses. This enhances customer support, contributing to better experiences and increased conversions.',
      benefits: ['Access to prompt responses for your workflow', 'Seamless customer support at multiple levels', 'Access to better conversions and customer experiences'],
      color: '#00ffff'
    },
    {
      icon: FaSearch,
      title: 'Natural Language Processing (NLP)',
      description: 'Our experts will provide you with algorithms that work across large data sets to generate meaningful insights. These solutions allow you to analyze text data and determine trends, business opportunities, and potential threats.',
      benefits: ['Determine the latest trends and developments', 'Make business decisions that help navigate complexities', 'Analyze text data for meaningful insights'],
      color: '#8a2be2'
    },
    {
      icon: FaEye,
      title: 'Computer Vision',
      description: 'Computer vision technology enables machines to interpret and understand visual information from the world. Our solutions help businesses automate visual tasks and gain insights from images and videos.',
      benefits: ['Image Recognition', 'Video Analysis', 'Visual Automation', 'Pattern Detection'],
      color: '#ffd700'
    },
    {
      icon: FaShieldAlt,
      title: 'Fraud Detection',
      description: 'With the recent spike in cybercrime, fraud detection is becoming increasingly important. AI ML solutions detect unusual activities and developments and notify you about them, enabling you to ensure proper fraud detection.',
      benefits: ['Anomaly Detection', 'Real-time Monitoring', 'Risk Assessment', 'Security Enhancement'],
      color: '#ff6b6b'
    },
    {
      icon: FaDatabase,
      title: 'Synthetic Data Model',
      description: 'Synthetic data models are important in determining what alternate scenarios could play out. We leverage artificial information irrelevant to the real world to create synthetic data models to help you better determine risks and take measures to avoid them.',
      benefits: ['Scenario Planning', 'Risk Assessment', 'Data Privacy', 'Model Training'],
      color: '#00ff00'
    },
    {
      icon: FaServer,
      title: 'Data Engineering',
      description: 'Never miss out on any business opportunities with advanced data engineering solutions for effective data generation and comprehension. We help you design and build systems to collect data more effectively and gain valuable insights.',
      benefits: ['Data Collection', 'System Design', 'Insight Generation', 'Business Opportunities'],
      color: '#ff00ff'
    },
    {
      icon: FaCog,
      title: 'Intelligent Automation',
      description: 'Intelligent automation is one of the most important tools businesses need to survive increased competition. We leverage technology\'s potential to simplify processes, better use resources, and enhance operational efficiencies.',
      benefits: ['Process Simplification', 'Resource Optimization', 'Operational Efficiency', 'Competitive Advantage'],
      color: '#ffa500'
    },
    {
      icon: FaChartLine,
      title: 'Recommendation System',
      description: 'The unmatched potential of AI and ML technologies helps create effective recommendation systems for better experiences. These systems analyze user data and make the most relevant recommendations.',
      benefits: ['Personalized Recommendations', 'User Data Analysis', 'Enhanced Experience', 'Increased Engagement'],
      color: '#20b2aa'
    },
    {
      icon: FaEye,
      title: 'Visual Recognition',
      description: 'Visual recognition technology is evolving fast, and businesses must make the most of it before their competitors do. Our experts implement visual recognition to discern the difference between different images and get you valuable insights.',
      benefits: ['Image Classification', 'Object Detection', 'Visual Insights', 'Competitive Edge'],
      color: '#ff69b4'
    },
    {
      icon: FaDatabase,
      title: 'Data Mining',
      description: 'Data mining with AI and ML solutions enables your business to process large data sets more efficiently. It further helps you to determine essential patterns and trends and use them for more informed decision-making.',
      benefits: ['Pattern Recognition', 'Trend Analysis', 'Data Processing', 'Informed Decisions'],
      color: '#32cd32'
    }
  ];

  const useCases = [
    {
      title: 'Healthcare',
      description: 'SoftDevSquad has the right expertise and resources to enable healthcare organizations to use AI/ML for different purposes. For instance, you can use them to predict risks, collect customer data, reduce dosage errors, diagnose alerts, and more.',
      benefits: ['Access to transparent healthcare operation', 'Tap into better risk prediction with complete data'],
      icon: FaShieldAlt,
      color: '#00ffff'
    }
  ];

  const techStack = [
    {
      category: 'Languages',
      items: [
        { name: 'Python', icon: FaPython },
        { name: 'Java', icon: FaJava },
        { name: 'JavaScript', icon: FaJs },
        { name: 'TypeScript', icon: FaJs },
        { name: 'C++', icon: FaCode },
        { name: 'SQL', icon: FaDatabase }
      ],
      icon: FaCode,
      color: '#00ffff'
    },
    {
      category: 'ML Frameworks',
      items: [
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'Scikit-learn', icon: SiScikitlearn },
        { name: 'Keras', icon: SiKeras },
        { name: 'OpenCV', icon: SiOpencv },
        { name: 'NumPy', icon: SiNumpy },
        { name: 'Pandas', icon: SiPandas }
      ],
      icon: FaCogs,
      color: '#8a2be2'
    },
    {
      category: 'Cloud & Infrastructure',
      items: [
        { name: 'AWS', icon: FaAws },
        { name: 'Microsoft Azure', icon: FaMicrosoft },
        { name: 'Google Cloud', icon: FaCloud },
        { name: 'Kubernetes', icon: SiKubernetes },
        { name: 'Docker', icon: FaDocker },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql }
      ],
      icon: FaDatabase,
      color: '#ffd700'
    },
    {
      category: 'Development Tools',
      items: [
        { name: 'Jupyter', icon: SiJupyter },
        { name: 'Anaconda', icon: SiAnaconda },
        { name: 'Git', icon: FaGitAlt },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'React', icon: FaReact },
        { name: 'Elasticsearch', icon: SiElasticsearch }
      ],
      icon: FaNetworkWired,
      color: '#ff6b6b'
    },
    {
      category: 'BI & Visualization',
      items: [
        { name: 'Tableau', icon: SiTableau },
        { name: 'Power BI', icon: SiPowerbi },
        { name: 'Chart.js', icon: FaChartBar },
        { name: 'D3.js', icon: FaChartLine },
        { name: 'Plotly', icon: FaChartLine },
        { name: 'Matplotlib', icon: FaChartBar }
      ],
      icon: FaChartLine,
      color: '#00ff00'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah M.',
      company: 'CTO, HealthTech Solutions',
      text: 'SoftDevSquad\'s AI solutions transformed our healthcare operations. Their predictive analytics helped us reduce medical errors by 40% and improve patient outcomes significantly.',
      rating: 5
    },
    {
      name: 'Michael R.',
      company: 'Founder, FinTech Innovations',
      text: 'The AI-powered fraud detection system they built for us has been game-changing. We\'ve seen a 60% reduction in fraudulent transactions and enhanced customer trust.',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      company: 'Product Manager, RetailMax',
      text: 'Their recommendation engine increased our sales by 35% and customer engagement by 50%. The AI solutions are intuitive and deliver exceptional results.',
      rating: 5
    },
    {
      name: 'David K.',
      company: 'CEO, Manufacturing Pro',
      text: 'The predictive maintenance AI solution has saved us millions in downtime costs. SoftDevSquad\'s expertise in AI/ML is truly outstanding.',
      rating: 5
    }
  ];

  return (
    <div className="ai-development-page">
      {/* Hero Section */}
      <div className="ai-hero">
        <div className="ai-hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="container">
          <div className="ai-hero-container">
            <div className="ai-hero-content">
              <div className="hero-badge">
                <FaBrain className="badge-icon" />
                <span>Leading AI ML Development Company</span>
              </div>
              <h1 className="ai-hero-title">
                Leading <span className="highlight">AI ML Development</span> Company
              </h1>
              <p className="ai-hero-subtitle">
                Revamp your operations with advanced Artificial Intelligence and Machine Learning Development Services. Tap into AI ML solutions that give you an edge over your competitors.
              </p>
            </div>
            <div className="ai-hero-image">
              <div className="ai-visualization">
                <div className="ai-brain-container">
                  <div className="ai-brain">
                    <div className="brain-core">
                      <FaBrain className="brain-icon" />
                    </div>
                    <div className="neural-network">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className={`neural-node node-${i + 1}`}>
                          <div className="node-pulse"></div>
                        </div>
                      ))}
                    </div>
                    <div className="data-connections">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className={`connection connection-${i + 1}`}></div>
                      ))}
                    </div>
                  </div>
                  <div className="ai-features">
                    <div className="feature-item feature-ml">
                      <FaCogs className="feature-icon" />
                      <span>Machine Learning</span>
                    </div>
                    <div className="feature-item feature-nlp">
                      <FaSearch className="feature-icon" />
                      <span>Natural Language</span>
                    </div>
                    <div className="feature-item feature-vision">
                      <FaEye className="feature-icon" />
                      <span>Computer Vision</span>
                    </div>
                    <div className="feature-item feature-analytics">
                      <FaChartLine className="feature-icon" />
                      <span>Predictive Analytics</span>
                    </div>
                  </div>
                </div>
                <div className="ai-glow-effect"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="hero-stats-section">
        <div className="container">
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">AI Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">ML Models Deployed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Accuracy Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">AI Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Actions Section */}
      <div className="hero-actions-section">
        <div className="container">
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              <FaHeadset className="btn-icon" />
              Let's Connect
            </Link>
            <Link to="/demo" className="btn btn-outline">
              Got Questions? We're Here to Answer
            </Link>
          </div>
        </div>
      </div>

      {/* Tailored Solutions Section */}
      <div className="tailored-solutions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tailored Solutions for Leading Enterprises</h2>
            <p className="section-subtitle">
              Enabling digital transformation through the leading AI development services and high-end solutions.
            </p>
          </div>
          <div className="services-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: useCase.color }}>
                  <useCase.icon />
                </div>
                <h3 className="service-title">{useCase.title}</h3>
                <p className="service-description">{useCase.description}</p>

                <ul className="service-features">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="service-feature">
                      <FaCheckCircle className="feature-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-cta">
                  Get Started
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="ai-services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Next-gen AI ML Development Services</h2>
            <p className="section-subtitle">
              Take your business to greater heights with advanced AI ML development services. Align your workflow with tech that meets the requirements of an evolving market.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: service.color }}>
                  <service.icon />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-cta">
                  Get Started
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="ai-solutions-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Dynamic AI ML Solutions</h2>
            <p className="section-subtitle">
              Access highly advanced and dynamic AI ML solutions that resonate with your target audiences and deliver them superior experiences to drive better engagement.
            </p>
          </div>
          <div className="services-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: solution.color }}>
                  <solution.icon />
                </div>
                <h3 className="service-title">{solution.title}</h3>
                <p className="service-description">{solution.description}</p>

                <ul className="service-features">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="service-feature">
                      <FaCheckCircle className="feature-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-cta">
                  Get Started
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Varied Use Cases Section */}
      <div className="varied-use-cases-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Varied Use Cases of AI ML Solutions</h2>
            <p className="section-subtitle">
              AI and ML are today's most useful and powerful business technologies. Many AI and ML solutions are being used across different industries.
            </p>
          </div>
          <div className="services-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: useCase.color }}>
                  <useCase.icon />
                </div>
                <h3 className="service-title">{useCase.title}</h3>
                <p className="service-description">{useCase.description}</p>

                <ul className="service-features">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="service-feature">
                      <FaCheckCircle className="feature-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-cta">
                  Get Started
                  <FaArrowRight className="cta-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="ai-tech-stack-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technology Stack</h2>
            <p className="section-subtitle">
              We leverage what's best for your business!
            </p>
          </div>
          <div className="ai-tech-stack-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="ai-tech-category-card">
                <h3 className="tech-category-title">{tech.category}</h3>
                <ul className="tech-category-list">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="tech-category-item">
                      <item.icon className="tech-icon" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="ai-testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What our Clients Say</h2>
            <p className="section-subtitle">
              Explore first hand accounts of client experiences, echoing our transformative AI Solutions.
            </p>
          </div>
          <div className="ai-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="ai-testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ai-cta">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Let's Leverage The Full Potential of Advanced Technologies!</h3>
            <p className="cta-subtitle">
              Ready to transform your business with AI and ML? Let's discuss your requirements and create intelligent solutions that drive growth and innovation.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Let's Talk
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDevelopment;
