import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import FactionList from "./components/FactionList/FactionList";
import PlayerSelect from "./components/PlayerSelect/PlayerSelect";
import Results from "./components/Results/Results";
import {useSelector} from "react-redux";

function App() {
    const counter = useSelector(state => state.playerCount)

    return (
    <div className="App">
      <Header />
          <div className="body-wrapper">
              <h4>Players: {counter}</h4>
            <FactionList />
            <PlayerSelect/>
            <Results />
          </div>
    </div>
  );
}

export default App;
