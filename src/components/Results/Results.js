import React from 'react';
import { useSelector } from 'react-redux';
import ResultCard from '../ResultCard/ResultCard';
import './Results.css';

const generateCards = (players) => {
  const cardList = [];
  for (let i = 1; i <= players; i++) {
    cardList.push(<li className="card">
      {' '}
      <ResultCard name={`Player #${i}`} faction1="Pirates" faction2="Aliens" />
                  </li>);
  }
  return cardList;
};


const Results = () => {
  const playerTotal = useSelector((state) => state.playerCount);

  return (
    <div className="results-wrapper">
      <div className="table">
        <ul id="card-list">
          {generateCards(playerTotal)}
        </ul>
      </div>
    </div>
  );
};

export default Results;
