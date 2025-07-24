import React from 'react';

const AboutContent: React.FC = () => {
  const aboutContentStyles = `
    .about-page-content {
      padding: 100px 0 80px;
      color: var(--text-primary);
      background: linear-gradient(180deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
      position: relative;
    }
    .about-page-content::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }
    .about-header {
      text-align: center;
      margin-bottom: 3rem;
      position: relative;
      z-index: 1;
    }
    .about-header h1 {
      font-size: 3.5rem;
      font-weight: 800;
      color: var(--text-primary);
      letter-spacing: -0.02em;
      margin-bottom: 1rem;
    }
    .about-intro {
      max-width: 900px;
      margin: 0 auto 5rem;
      text-align: center;
      font-size: 1.3rem;
      color: var(--text-secondary);
      line-height: 1.7;
      position: relative;
      z-index: 1;
    }
    .founders-section {
      position: relative;
      z-index: 1;
    }
    .founders-section h2 {
      text-align: center;
      font-size: 2.75rem;
      font-weight: 800;
      margin-bottom: 4rem;
      color: var(--text-primary);
      letter-spacing: -0.02em;
    }
    .founders-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .founder-card {
      background: var(--tertiary-bg);
      padding: 3rem;
      border-radius: 20px;
      border: 1px solid var(--border-color);
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
    }
    .founder-card::before {
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
    .founder-card:hover::before {
      opacity: 1;
    }
    .founder-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px -8px rgba(59, 130, 246, 0.15);
      border-color: var(--accent-color);
    }
    .founder-card h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--accent-color);
      font-weight: 700;
      letter-spacing: -0.01em;
    }
    .founder-card h3:nth-of-type(2) {
      color: var(--text-secondary);
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    .founder-card p {
      line-height: 1.7;
      margin-bottom: 1.5rem;
      color: var(--text-secondary);
      font-size: 1.05rem;
    }
    .founder-card ul {
      padding-left: 0;
      margin-bottom: 1.5rem;
      color: var(--text-secondary);
      list-style: none;
    }
    .founder-card ul li {
      margin-bottom: 0.75rem;
      padding-left: 1.5rem;
      position: relative;
    }
    .founder-card ul li::before {
      content: '▶';
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-size: 0.8rem;
      top: 0.1rem;
    }

    @media (max-width: 992px) {
      .about-page-content {
        padding: 80px 0;
      }
      .about-header h1 {
        font-size: 2.75rem;
      }
      .about-intro {
        font-size: 1.15rem;
      }
      .founders-section h2 {
        font-size: 2.25rem;
      }
      .founders-grid {
        grid-template-columns: 1fr;
        max-width: 700px;
        gap: 2.5rem;
      }
      .founder-card {
        padding: 2.5rem;
      }
    }
  `;

  return (
    <section className="about-page-content">
      <style>{aboutContentStyles}</style>
      <div className="container">
        <div className="about-header">
          <h1>About Us</h1>
        </div>
        <div className="about-intro">
          <p>
            We are a team of expert AI engineers and software developers dedicated to building practical and powerful AI solutions. With roots in world-class institutions like Tsinghua University and hands-on experience at top technology firms, we bridge the gap between cutting-edge research and real-world business results.
          </p>
        </div>
        <div className="founders-section">
          <h2>Our Founders</h2>
          <div className="founders-grid">
            <div className="founder-card">
              <h3>Maco Loye </h3>
              <h3> Co-Founder & AI Lead</h3>
              <p>Maco is an AI engineer with over two years of intensive experience at leading technology companies and labs, including Tencent and Z.ai, and has collaborated on research with Huawei. His work has been at the forefront of AI development, where he has been instrumental in creating:</p>
              <ul>
                <li>Advanced Data Augmentation Systems to improve model accuracy.</li>
                <li>Robust Adversarial Testing Systems to ensure AI models are secure and reliable.</li>
                <li>Specialized Language Models, including foundational work on a dedicated Malaysian language model.</li>
              </ul>
              <p>His expertise ensures that the AI we deploy is not only powerful but also safe, precise, and perfectly tuned to your specific business context.</p>
            </div>
            <div className="founder-card">
              <h3>Wei Meng Soh </h3>
              <h3> Co-Founder & Software Lead</h3>
              <p>With [X] years of experience in software development, Bay is an expert in building scalable, enterprise-grade systems. His background includes time at WhyLabs, a pioneer in AI observability and data monitoring. Bay specializes in creating the robust infrastructure that powers our AI solutions, ensuring they are not only intelligent but also reliable, fast, and seamlessly integrated into your existing workflows. He transforms complex AI models into practical, user-friendly applications for web, mobile, and desktop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent; 