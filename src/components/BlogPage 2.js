import React from 'react';
import Link from 'next/link';

import {
  FaBlog, FaCalendar, FaUser, FaArrowRight, FaHeadset, FaTag
} from 'react-icons/fa';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of React Development in 2024',
      excerpt: 'Exploring the latest trends and best practices in React development, including new features and performance optimizations.',
      author: 'Dikshant Gangawat',
      date: 'January 15, 2024',
      category: 'Development',
      readTime: '5 min read',
      image: '/images/react-native-development.jpg'
    },
    {
      title: 'AI Integration in Mobile Applications',
      excerpt: 'How artificial intelligence is transforming mobile app development and user experiences across industries.',
      author: 'Abhishek Dhang',
      date: 'January 10, 2024',
      category: 'AI/ML',
      readTime: '7 min read',
      image: '/images/android-development.jpg'
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to migrating your applications to the cloud with minimal downtime and maximum efficiency.',
      author: 'Tech Team',
      date: 'January 5, 2024',
      category: 'Cloud',
      readTime: '6 min read',
      image: '/images/flutter-development.jpg'
    },
    {
      title: 'Building Scalable FinTech Solutions',
      excerpt: 'Key considerations and architecture patterns for developing secure and scalable financial technology applications.',
      author: 'Dikshant Gangawat',
      date: 'December 28, 2023',
      category: 'FinTech',
      readTime: '8 min read',
      image: '/images/fintech-app.jpg'
    },
    {
      title: 'The Rise of Low-Code Development Platforms',
      excerpt: 'Understanding how low-code platforms are changing the software development landscape and when to use them.',
      author: 'Tech Team',
      date: 'December 20, 2023',
      category: 'Development',
      readTime: '5 min read',
      image: '/images/ios-development.jpg'
    },
    {
      title: 'Cybersecurity in Modern Web Applications',
      excerpt: 'Essential security practices and measures to protect your web applications from modern threats and vulnerabilities.',
      author: 'Abhishek Dhang',
      date: 'December 15, 2023',
      category: 'Security',
      readTime: '6 min read',
      image: '/images/ecommerce-app.jpg'
    }
  ];

  const categories = ['All', 'Development', 'AI/ML', 'Cloud', 'FinTech', 'Security'];

  return (
    <div className="blog-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaBlog className="badge-icon" />
                <span>Latest Insights</span>
              </div>
              <h1 className="hero-title">
                Our <span className="highlight">Blog</span>
              </h1>
              <p className="hero-subtitle">
                Stay updated with the latest trends, insights, and best practices in software development, technology, and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={index} className="blog-card">
                <div className="blog-image">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="blog-image-placeholder" style={{ display: 'none' }}>
                    <FaBlog size={60} />
                  </div>
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <FaCalendar /> {post.date}
                    </span>
                    <span className="blog-author">
                      <FaUser /> {post.author}
                    </span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link href="#" legacyBehavior><a className="blog-read-more">
                    Read More <FaArrowRight />
                  </a></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Want to Stay Updated?</h3>
            <p className="cta-subtitle">
              Subscribe to our newsletter for the latest articles and insights.
            </p>
            <div className="cta-actions">
              <Link href="/contact" legacyBehavior><a className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Subscribe
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
