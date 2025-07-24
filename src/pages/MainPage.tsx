import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import CallToAction from '../components/CallToAction';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <Header />
      <Hero />
      <main>
        <Services />
        <About />
        <CallToAction />
      </main>
    </div>
  );
};

export default MainPage; 