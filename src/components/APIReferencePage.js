import React, { useState } from 'react';
import styles from './APIReferencePage.module.css';
import { mapClasses } from '../utils/cssMapper';
import Link from 'next/link';

import {
  FaCode, FaKey, FaServer, FaArrowRight, FaHeadset, FaCopy
} from 'react-icons/fa';

const APIReferencePage = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);

  const apiEndpoints = [
    {
      method: 'POST',
      path: '/api/v1/auth/login',
      description: 'Authenticate user and get access token',
      parameters: [
        { name: 'email', type: 'string', required: true, description: 'User email address' },
        { name: 'password', type: 'string', required: true, description: 'User password' }
      ],
      response: {
        status: 200,
        body: {
          token: 'string',
          user: 'object',
          expiresIn: 'number'
        }
      },
      example: `{
  "email": "user@example.com",
  "password": "password123"
}`
    },
    {
      method: 'GET',
      path: '/api/v1/users',
      description: 'Get list of users',
      parameters: [
        { name: 'page', type: 'number', required: false, description: 'Page number' },
        { name: 'limit', type: 'number', required: false, description: 'Items per page' }
      ],
      response: {
        status: 200,
        body: {
          users: 'array',
          total: 'number',
          page: 'number'
        }
      },
      example: `{
  "page": 1,
  "limit": 10
}`
    },
    {
      method: 'POST',
      path: '/api/v1/projects',
      description: 'Create a new project',
      parameters: [
        { name: 'name', type: 'string', required: true, description: 'Project name' },
        { name: 'description', type: 'string', required: false, description: 'Project description' },
        { name: 'type', type: 'string', required: true, description: 'Project type' }
      ],
      response: {
        status: 201,
        body: {
          id: 'string',
          name: 'string',
          createdAt: 'string'
        }
      },
      example: `{
  "name": "My Project",
  "description": "Project description",
  "type": "web"
}`
    }
  ];

  const authMethods = [
    {
      name: 'API Key',
      description: 'Include your API key in the request header',
      example: 'Authorization: Bearer YOUR_API_KEY'
    },
    {
      name: 'OAuth 2.0',
      description: 'Use OAuth 2.0 for secure authentication',
      example: 'Authorization: Bearer ACCESS_TOKEN'
    }
  ];

  return (
    <div className="api-reference-page">
      <div className="page-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaCode className="badge-icon" />
                <span>API Documentation</span>
              </div>
              <h1 className="hero-title">
                API <span className="highlight">Reference</span>
              </h1>
              <p className="hero-subtitle">
                Complete API documentation with endpoints, authentication, request/response formats, and code examples.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="api-section">
        <div className="container">
          <div className="api-layout">
            <div className="api-sidebar">
              <h3 className="sidebar-title">Endpoints</h3>
              <ul className="endpoint-list">
                {apiEndpoints.map((endpoint, index) => (
                  <li key={index}>
                    <button
                      className={`endpoint-item ${selectedEndpoint === index ? 'active' : ''}`}
                      onClick={() => setSelectedEndpoint(index)}
                    >
                      <span className="endpoint-method">{endpoint.method}</span>
                      <span className="endpoint-path">{endpoint.path}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="api-content">
              {apiEndpoints[selectedEndpoint] && (
                <div className="endpoint-details">
                  <div className="endpoint-header">
                    <span className="method-badge">{apiEndpoints[selectedEndpoint].method}</span>
                    <span className="endpoint-path-large">{apiEndpoints[selectedEndpoint].path}</span>
                  </div>
                  <p className="endpoint-description">{apiEndpoints[selectedEndpoint].description}</p>

                  <div className="endpoint-section">
                    <h4 className="section-title">Parameters</h4>
                    <div className="parameters-table">
                      <div className="table-header">
                        <div>Name</div>
                        <div>Type</div>
                        <div>Required</div>
                        <div>Description</div>
                      </div>
                      {apiEndpoints[selectedEndpoint].parameters.map((param, idx) => (
                        <div key={idx} className="table-row">
                          <div className="param-name">{param.name}</div>
                          <div className="param-type">{param.type}</div>
                          <div className="param-required">{param.required ? 'Yes' : 'No'}</div>
                          <div className="param-desc">{param.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="endpoint-section">
                    <h4 className="section-title">Response</h4>
                    <div className="response-code">
                      Status: {apiEndpoints[selectedEndpoint].response.status}
                    </div>
                    <pre className="code-block">
                      <code>{JSON.stringify(apiEndpoints[selectedEndpoint].response.body, null, 2)}</code>
                    </pre>
                  </div>

                  <div className="endpoint-section">
                    <h4 className="section-title">Example Request</h4>
                    <pre className="code-block">
                      <code>{apiEndpoints[selectedEndpoint].example}</code>
                      <button className="copy-button">
                        <FaCopy /> Copy
                      </button>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="auth-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Authentication</h2>
            <p className="section-subtitle">
              Methods for authenticating API requests
            </p>
          </div>
          <div className="auth-methods-grid">
            {authMethods.map((method, index) => (
              <div key={index} className="auth-method-card">
                <FaKey className="auth-icon" />
                <h3 className="auth-name">{method.name}</h3>
                <p className="auth-description">{method.description}</p>
                <pre className="auth-example">
                  <code>{method.example}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Need API Support?</h3>
            <p className="cta-subtitle">
              Get help with API integration and troubleshooting.
            </p>
            <div className="cta-actions">
              <Link href="/contact-support" legacyBehavior><a className="btn btn-primary">
                <FaHeadset className="btn-icon" />
                Contact Support
              </a></Link>
              <Link href="/documentation" legacyBehavior><a className="btn btn-outline">
                View Full Documentation
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIReferencePage;
