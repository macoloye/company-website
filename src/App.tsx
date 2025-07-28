import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import SolutionPage from './pages/SolutionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ROICalculatorPage from './pages/ROICalculatorPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
