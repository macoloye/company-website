import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI for Your Customers',
      description: 'Engage your customers with intelligent, real-time experiences — personalized, responsive, and always available.',
      icon: '🤖',
      products: [
        'Customer Support Chatbot',
        'Marketing Automation System',
        'CRM Automation'
      ]
    },
    {
      title: 'AI for Your Team',
      description: 'Streamline operations with intelligent tools that automate routine work and elevate human focus.',
      icon: '⚙️',
      products: [
        'Internal Workflow Copilot',
        'Document Understanding Pipelines',
        'Retrieval-Augmented Generation (RAG)'
      ]
    },
    {
      title: 'Custom LLMs',
      description: 'We develop domain-trained models tailored to your industry — precise, efficient, and deeply aligned.',
      products: [
        'Private LLM Hosting',
        'Domain-Specific LLM',
      ],
      icon: '🧠'
    },
    {
      title: 'AI Assurance',
      description: 'For regulated or high-risk use cases, we provide technical assurance — including bias audits, safety testing, model alignment, and reliability evaluation.',
      icon: '🛡️',
      products: [
        'Model Alignment Review',
        'Bias & Robustness Audits',
        'Safety Testing for LLM Outputs',
        'Compliance Reporting Toolkit'
      ]
    }
  ];

  const servicesStyles = `
    .services {
      padding: 120px 0;
      background: linear-gradient(180deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
      position: relative;
    }
    .services::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
    .services-header {
      text-align: center;
      margin-bottom: 5rem;
      position: relative;
      z-index: 1;
    }
    .services-header h2 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }
    .services-header p {
      color: var(--text-secondary);
      font-size: 1.2rem;
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
      max-width: 1100px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .service-card {
      background: var(--tertiary-bg);
      padding: 3rem;
      border-radius: 20px;
      border: 1px solid var(--border-color);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(10px);
    }
    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--accent-color), var(--accent-hover));
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .service-card::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .service-card:hover::before,
    .service-card:hover::after {
      opacity: 1;
    }
    .service-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.2);
      border-color: var(--accent-color);
    }
    .service-icon {
      font-size: 3.5rem;
      margin-bottom: 2rem;
      display: block;
      filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3));
    }
    .service-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
      color: var(--text-primary);
      font-weight: 700;
      letter-spacing: -0.01em;
    }
    .service-card p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      flex-grow: 1;
      line-height: 1.7;
      font-size: 1.05rem;
    }
    .service-products {
      margin: 0 0 2.5rem 0;
      padding-left: 0;
      list-style: none;
      color: var(--text-secondary);
      font-size: 1rem;
    }
    .service-products li {
      margin-bottom: 1rem;
      padding-left: 2rem;
      position: relative;
      transition: color 0.3s ease;
    }
    .service-products li::before {
      content: '▶';
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-size: 0.8rem;
      top: 0.1rem;
    }
    .service-products li:hover {
      color: var(--text-primary);
    }
    .service-link {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 600;
      margin-top: auto;
      padding: 1rem 2rem;
      border: 2px solid var(--accent-color);
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background: var(--accent-color);
      font-size: 1.05rem;
    }
    .service-link:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
      text-decoration: none;
    }
    
    @media (max-width: 768px) {
      .services {
        padding: 80px 0;
      }
      .services-header h2 {
        font-size: 2.25rem;
      }
      .services-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .service-card {
        padding: 2rem;
      }
    }
  `;

  return (
    <section id="services" className="services">
      <style>{servicesStyles}</style>
      <div className="container">
        <div className="services-header">
          <h2>Full AI Solutions & Assurance</h2>
          <p>We deliver a holistic AI ecosystem designed to enhance every facet of your business, from customer interactions to internal operations and strategic decision-making.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-products">
                {service.products.map((product, idx) => (
                  <li key={idx}>{product}</li>
                ))}
              </ul>
              <a href={`/solution#${service.title.toLowerCase().replace(/ /g, '-')}`} className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;