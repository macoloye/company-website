import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and scale with your growth.',
      icon: '💻'
    },
    {
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud migration and management services to optimize your infrastructure and reduce costs.',
      icon: '☁️'
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic guidance and implementation to transform your business processes through technology.',
      icon: '🚀'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced analytics and business intelligence solutions to unlock insights from your data.',
      icon: '📊'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      icon: '📱'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business assets and ensure compliance.',
      icon: '🔒'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive technology solutions tailored to your business needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;