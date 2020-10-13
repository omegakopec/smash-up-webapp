import React from 'react';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard/ResultCard';
import './Results.css';

const generateCards = (players, selectedFactions) => {
  selectedFactions.sort(() => 0.5 - Math.random())
  const cardList = [];
  for (let i = 0; i < players; i += 1) {
    cardList.push(
      <li className="card">
        <ResultCard name={`Player #${i + 1}`} faction1={selectedFactions[i+i]} faction2={selectedFactions[i + i + 1]} />
      </li>,
    );
  }
  return cardList;
};

const Results = (props) => {
  let players = props.playerTotal
  let selections = props.selectedFactions
  return (
    <div className="results-wrapper">
      <div className="table">
        <ul id="card-list">
          {generateCards(players, selections)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  playerTotal: state.playerCount,
  selectedFactions: state.selectedFactions,
});

export default connect(mapStateToProps)(Results);
