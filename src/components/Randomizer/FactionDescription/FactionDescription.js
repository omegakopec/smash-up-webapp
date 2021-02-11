import React from 'react';
import propTypes from 'prop-types';
import factionDescription from '../../../lib/FactionDescription';

const FactionDescription = ({ faction }) => (
  <div>
    <p id="faction-description">
      {' '}
      {factionDescription[faction.replace(/ /g, '_')]}
      {' '}
    </p>
  </div>
);

FactionDescription.propTypes = {
  faction: propTypes.string.isRequired,
};

export default FactionDescription;
