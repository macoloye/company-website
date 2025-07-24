import React, { useEffect } from 'react';

const Solution: React.FC = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, []);

  const solutionStyles = `
    .solution-page {
      padding: 100px 0 80px;
      color: var(--text-primary);
      background: linear-gradient(180deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
      position: relative;
    }
    .solution-page::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 60% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
    .solution-content {
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .solution-content h1 {
        font-size: 3.5rem;
        font-weight: 800;
        margin-bottom: 3rem;
        text-align: center;
        color: var(--text-primary);
        letter-spacing: -0.02em;
    }
    .solution-cards-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    .solution-card {
        background: var(--tertiary-bg);
        padding: 3rem;
        border-radius: 20px;
        border: 1px solid var(--border-color);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
    }
    .solution-card::before {
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
    .solution-card:hover::before {
      opacity: 1;
    }
    .solution-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px -8px rgba(59, 130, 246, 0.15);
        border-color: var(--accent-color);
    }
    .solution-card h2 {
      font-size: 2rem;
      margin-top: 0;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid var(--border-color);
      padding-bottom: 1rem;
      color: var(--text-primary);
      font-weight: 700;
      letter-spacing: -0.01em;
    }
    .solution-card h4 {
        font-size: 1.4rem;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        color: var(--accent-color);
        font-weight: 700;
    }
    .solution-card p,
    .solution-card ul {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-secondary);
    }
    .solution-card ul {
      padding-left: 0;
      list-style: none;
      margin-top: 1.5rem;
    }
    .solution-card ul li {
      margin-bottom: 1rem;
      padding-left: 2rem;
      position: relative;
    }
    .solution-card ul li::before {
      content: '▶';
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-size: 0.8rem;
      top: 0.1rem;
    }
    .solution-card strong {
        color: var(--text-primary);
        font-weight: 600;
    }
    .solution-card em {
        color: var(--text-secondary);
        font-style: italic;
        font-size: 1.15rem;
        display: block;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 768px) {
      .solution-page {
        padding: 80px 0;
      }
      .solution-content h1 {
        font-size: 2.75rem;
      }
      .solution-card {
        padding: 2rem;
      }
      .solution-card h2 {
        font-size: 1.75rem;
      }
    }
  `;

  return (
    <div className="solution-page">
      <style>{solutionStyles}</style>
      <div className="container">
        <div className="solution-content">
          <h1>Our Solutions</h1>

          <div className="solution-cards-grid">
            <div id="ai-for-your-customers" className="solution-card">
              <h2>AI for Your Customers</h2>
              <p><em>Engage your customers with intelligent, real-time experiences — personalized, responsive, and always available.</em></p>
              <p>Our customer-facing AI solutions are designed to enhance every touchpoint of the customer journey. We build intelligent systems that not only respond to customer needs but also anticipate them, driving satisfaction and sales.</p>
              <h4>Key Offerings:</h4>
              <ul>
                <li><strong>Customer Support Chatbot:</strong> Provide instant, 24/7 support across platforms like WhatsApp, Telegram, and your website. Our chatbots can handle inquiries, resolve issues, and escalate complex cases to human agents seamlessly.</li>
                <li><strong>Marketing Automation System:</strong> Leverage AI to understand customer behavior and deliver hyper-personalized marketing campaigns. From targeted promotions to automated follow-ups, we help you connect with your audience at the right time with the right message.</li>
                <li><strong>CRM Automation:</strong> Enhance your existing CRM with AI-powered features. We automate data entry, score leads, and provide sales teams with actionable insights to close deals faster.</li>
            </ul>
          </div>

            <div id="ai-for-your-team" className="solution-card">
              <h2>AI for Your Team</h2>
              <p><em>Streamline operations with intelligent tools that automate routine work and elevate human focus.</em></p>
              <p>Empower your team with AI assistants that handle repetitive tasks, analyze complex data, and provide decision-making support. Our solutions are designed to integrate with your existing workflows, boosting productivity and freeing up your team to focus on high-value work.</p>
              <h4>Key Offerings:</h4>
              <ul>
                <li><strong>Internal Workflow Copilot:</strong> An AI-powered assistant that helps with scheduling, drafting documents, summarizing meetings, and managing tasks.</li>
                <li><strong>Document Understanding Pipelines:</strong> Automatically extract and structure information from invoices, contracts, and reports. Our pipelines can handle various document formats, including PDFs, images, and scanned documents.</li>
                <li><strong>Retrieval-Augmented Generation (RAG):</strong> Create a centralized knowledge base for your organization. Our RAG systems allow your team to ask natural language questions and get accurate answers from your company's documents and data.</li>
            </ul>
          </div>

            <div id="custom-llms" className="solution-card">
              <h2>Custom LLMs</h2>
              <p><em>We develop domain-trained models tailored to your industry — precise, efficient, and deeply aligned.</em></p>
              <p>For businesses with unique requirements, we offer custom Large Language Model (LLM) development and hosting. We work with you to build and fine-tune models on your proprietary data, ensuring they understand the nuances of your industry and deliver unparalleled performance.</p>
              <h4>Key Offerings:</h4>
              <ul>
                <li><strong>Private LLM Hosting:</strong> Securely host your custom LLMs on-premise or in a private cloud, ensuring data privacy and compliance.</li>
                <li><strong>Domain-Specific LLM:</strong> We develop LLMs tailored for specific domains, such as legal, finance, and healthcare. These models are trained on domain-specific data to provide expert-level insights and assistance.</li>
            </ul>
          </div>

            <div id="ai-assurance" className="solution-card">
              <h2>AI Assurance</h2>
              <p><em>For regulated or high-risk use cases, we provide technical assurance — including bias audits, safety testing, model alignment, and reliability evaluation.</em></p>
              <p>In an era of increasing AI regulation, ensuring your AI systems are safe, fair, and robust is critical. Our AI Assurance services provide independent, third-party validation of your AI models, helping you build trust and comply with emerging standards.</p>
              <h4>Key Offerings:</h4>
              <ul>
                <li><strong>Model Alignment Review:</strong> We assess your AI models to ensure they are aligned with your company's values and ethical guidelines.</li>
                <li><strong>Bias & Robustness Audits:</strong> We conduct rigorous testing to identify and mitigate biases in your AI systems and ensure they are resilient to adversarial attacks.</li>
                <li><strong>Safety Testing for LLM Outputs:</strong> We evaluate the outputs of your LLMs to ensure they are safe, accurate, and free from harmful content.</li>
                <li><strong>Compliance Reporting Toolkit:</strong> We provide you with the tools and documentation needed to comply with AI regulations and standards.</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution; 