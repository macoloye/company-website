import React from 'react';
import Header from '../components/Header';
import AboutContent from '../components/AboutContent';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <Header />
      <main>
        <AboutContent />
      </main>
    </div>
  );
};

export default AboutPage; 