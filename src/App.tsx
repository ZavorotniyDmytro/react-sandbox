import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import BenefitListSection from './components/BenefitListSection/BenefitListSection';
import RuleListSection from './components/RuleListSection/RuleListSection';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <div className="App">
      <MainSection/>
      <RuleListSection/>
      <BenefitListSection/>
    </div>
  );
}

export default App;
