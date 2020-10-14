import React from 'react';
import propTypes from 'prop-types';
import './ResultCard.css';

const convertName = (factionName) => {
    return factionName.replace(/ /g,"_")
}

const ResultsCard = ({ name, faction1, faction2 }) => (
  <div className="result-card">
    <h4 id="card-title">
      {`${name}`}
    </h4>
    <p>
      {`${faction1}`}
        <div className="logo-container">
            <img src={require(`../../assets/FactionLogos/${convertName(faction1)}.png`)} alt="faction1" id="factionLogo" height="60" width="45" />
        </div>
    </p>
    <p>&</p>
    <p>
      {`${faction2}`}
        <div className="logo-container">
            <img src={require(`../../assets/FactionLogos/${convertName(faction2)}.png`)} alt="faction1" id="factionLogo" height="60" width="45" />
        </div>
    </p>

  </div>
);



ResultsCard.propTypes = {
  name: propTypes.string.isRequired,
  faction1: propTypes.string.isRequired,
  faction2: propTypes.string.isRequired,
};

export default ResultsCard;
