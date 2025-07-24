import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  const contactStyles = `
    .contact-page {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 100px 0 80px;
      background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
      color: var(--text-primary);
      position: relative;
    }
    .contact-page::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%);
      pointer-events: none;
    }
    .contact-form {
      background: var(--tertiary-bg);
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 10px 40px rgba(59, 130, 246, 0.1);
      max-width: 480px;
      width: 100%;
      margin-bottom: 2.5rem;
      border: 1px solid var(--border-color);
      position: relative;
      z-index: 1;
      backdrop-filter: blur(10px);
    }
    .contact-form h1 {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--text-primary);
      font-size: 2.5rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .form-group {
      margin-bottom: 1.75rem;
    }
    .form-group label {
      display: block;
      margin-bottom: 0.75rem;
      font-weight: 600;
      color: var(--text-primary);
      font-size: 1.05rem;
    }
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 1rem;
      border: 2px solid var(--border-color);
      border-radius: 12px;
      font-size: 1rem;
      background: var(--secondary-bg);
      color: var(--text-primary);
      font-family: inherit;
      resize: none;
      transition: all 0.3s ease;
    }
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--accent-color);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    .contact-form button {
      width: 100%;
      padding: 1.25rem;
      border-radius: 12px;
      background: var(--accent-color);
      color: var(--primary-bg);
      font-weight: 700;
      font-size: 1.1rem;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px var(--shadow-color);
    }
    .contact-form button:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 8px 30px var(--shadow-color);
    }
    .contact-alt {
      text-align: center;
      color: var(--text-secondary);
      font-size: 1.15rem;
      position: relative;
      z-index: 1;
    }
    .contact-alt a {
      color: var(--accent-color);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
    }
    .contact-alt a:hover {
      color: var(--accent-hover);
      text-decoration: underline;
    }
    .contact-success {
      text-align: center;
      color: var(--accent-color);
      font-size: 1.3rem;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .contact-page {
        padding: 80px 0;
      }
      .contact-form {
        padding: 2rem;
        margin: 0 1rem 2rem;
      }
      .contact-form h1 {
        font-size: 2rem;
      }
    }
  `;

  return (
    <div className="contact-page">
      <style>{contactStyles}</style>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        <h1>Contact Us</h1>
        {submitted ? (
          <div className="contact-success">Thank you for your enquiry! We will get back to you soon.</div>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
      <div className="contact-alt">
        Or email us directly at <a href="mailto:contact@straits.com">contact@straits.com</a>
      </div>
    </div>
  );
};

export default ContactPage; 