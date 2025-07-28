import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Main/Services';
import About from '../components/Main/About';
import CallToAction from '../components/Main/CallToAction';

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