import React from 'react';
import propTypes from 'prop-types';
import FactionResult from '../FactionResult/FactionResult';
import './ResultCard.scss';

const ResultsCard = ({ name, faction1, faction2 }) => (
  <div className="result-card">
    <h4 id="card-title">
      {name}
    </h4>
    <FactionResult faction={faction1} />
    <p>&</p>
    <FactionResult faction={faction2} />
  </div>
);

ResultsCard.propTypes = {
  name: propTypes.string.isRequired,
  faction1: propTypes.string.isRequired,
  faction2: propTypes.string.isRequired,
};

export default ResultsCard;
