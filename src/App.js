import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FactionList from './components/SetList/FactionList';
import PlayerSelect from './components/PlayerSelect/PlayerSelect';
import Results from './components/Results/Results';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-wrapper">
        <FactionList />
        <PlayerSelect />
        <Results />
      </div>
        <Footer/>

    </div>
  );
}

export default App;
