import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import StatSection from './components/StatSection/StatSection';
import AnimalSection from './components/AnimalsSection/AnimalSection';
import ExchangeRateSection from './components/ExchangeRateSection/ExchangeRateSection';

function App() {
  return (
    <div className="App">
        <Profile/>
        <StatSection/>
        <AnimalSection/>
        <ExchangeRateSection/>
    </div>
  );
}

export default App;
