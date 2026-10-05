import React from 'react';
import './styles/portfolio.css';
import Portfolio from './components/Portfolio';
import DotGrid from './components/DotGrid';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';

function App() {
  return (
    <div className="portfolio-app">
      <Preloader />
      <Navbar />
      <DotGrid />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
