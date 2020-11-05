/* eslint import/no-dynamic-require: 0 */ // --> OFF

import React from 'react';
import propTypes from 'prop-types';

const FactionLogo = ({ faction }) => (
  <div className="logo-container">
    <img
      src={require(`../../assets/FactionLogos/${faction.replace(/ /g, '_')}.png`)}
      alt="faction1"
      id="factionLogo"
      height="60"
      width="45"
    />
  </div>
);

FactionLogo.propTypes = {
  faction: propTypes.string.isRequired,
};

export default FactionLogo;
