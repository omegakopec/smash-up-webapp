import React from 'react';
import propTypes from 'prop-types';

const FactionLogo = ({ faction }) => (
  <div className="logo-container">
    <img
      src={process.env.PUBLIC_URL + `FactionLogos/${faction.replace(/ /g, '_')}.png`}
      alt="faction_img"
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
