/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ResultCard from '../ResultCard/ResultCard';
import './Results.css';

const generateCards = (players, selectedFactions) => {
  selectedFactions.sort(() => 0.5 - Math.random());
  const cardList = [];
  for (let i = 0; i < players; i += 1) {
    cardList.push(
      <li className="card">
        <ResultCard name={`Player #${i + 1}`} faction1={selectedFactions[2*i]} faction2={selectedFactions[2*i + 1]} />
      </li>,
    );
  }
  return cardList;
};

const Results = ({ playerTotal, selectedFactions }) => (
  <div className="results-wrapper">
    <div className="table">
      <ul id="card-list">
        {generateCards(playerTotal, selectedFactions)}
      </ul>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  playerTotal: state.playerCount,
  selectedFactions: state.selectedFactions,
});

Results.propTypes = {
  playerTotal: propTypes.number.isRequired,
  selectedFactions: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(Results);
