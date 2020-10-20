/* eslint import/no-dynamic-require: 0 */ // --> OFF

import React from 'react';
import propTypes from 'prop-types';
import './ResultCard.css';

const ResultsCard = ({ name, faction1, faction2 }) => (
  <div className="result-card">
    <h4 id="card-title">
      {name}
    </h4>
    <div className="faction-wrapper">
      {faction1}
      <div className="logo-container">
        <img
          src={require(`../../assets/FactionLogos/${faction1.replace(/ /g, '_')}.png`)}
          alt="faction1"
          id="factionLogo"
          height="60"
          width="45"
        />
      </div>
    </div>
    <p>&</p>
    <div className="faction-wrapper">
      {faction2}
      <div className="logo-container">
        <img
          src={require(`../../assets/FactionLogos/${faction2.replace(/ /g, '_')}.png`)}
          alt="faction1"
          id="factionLogo"
          height="60"
          width="45"
        />
      </div>
    </div>
  </div>
);

ResultsCard.propTypes = {
  name: propTypes.string.isRequired,
  faction1: propTypes.string.isRequired,
  faction2: propTypes.string.isRequired,
};

export default ResultsCard;
