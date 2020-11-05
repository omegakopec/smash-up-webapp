import React from 'react';
import propTypes from 'prop-types';

const FactionDescription = ({ faction }) => (
  <div>
    <p>{faction}</p>
  </div>
);

FactionDescription.propTypes = {
  faction: propTypes.string.isRequired,
};

export default FactionDescription;
