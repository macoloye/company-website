import React from 'react';
import Header from '../components/Header';
import Solution from '../components/Solution';

const SolutionPage: React.FC = () => {
  return (
    <div className="solution-page">
      <Header />
      <main>
        <Solution />
      </main>
    </div>
  );
};

export default SolutionPage; 