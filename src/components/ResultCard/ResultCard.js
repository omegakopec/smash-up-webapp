import React from 'react';
import propTypes from 'prop-types';
import './ResultCard.css';
import pirateLogo from '../../assets/FactionLogos/Pirates.png';
import alienLogo from '../../assets/FactionLogos/Aliens.png';

const ResultsCard = ({ name, faction1, faction2 }) => (
  <div className="result-card">
    <h4 id="card-title">
      {`${name}`}
    </h4>
    <p>
      {`${faction1}`}
    </p>
    <p>&</p>
    <p>
      {`${faction2}`}
    </p>
    <div className="logo-container">
      <img src={pirateLogo} alt="faction1" id="factionLogo" height="50" width="50" />
      <img src={alienLogo} alt="faction2" id="factionLogo" height="50" width="50" />
    </div>
  </div>
);

ResultsCard.propTypes = {
  name: propTypes.string.isRequired,
  faction1: propTypes.string.isRequired,
  faction2: propTypes.string.isRequired,
};

export default ResultsCard;
