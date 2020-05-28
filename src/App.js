import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FactionList from './components/FactionList/FactionList';
import PlayerSelect from './components/PlayerSelect/PlayerSelect';
import Results from './components/Results/Results';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-wrapper">
        <FactionList />
        <PlayerSelect />
        <Results />
      </div>
    </div>
  );
}

export default App;
