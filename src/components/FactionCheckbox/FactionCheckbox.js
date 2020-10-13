/* eslint react/forbid-prop-types: 0 */ // --> OFF

import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './FactionCheckbox.css';

const FactionCheckbox = ({ name, label, factions }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="faction-checkbox">
      <input
        name={name}
        type="checkbox"
        checked={checked}
        id={label}
        onChange={() => {
          setChecked(!checked);
          if (!checked) dispatch({ type: 'ADD_FACTIONS', payload: factions })
          else dispatch({ type: 'REMOVE_FACTIONS', payload: factions });
        }}
      />
      <label htmlFor={label}>
        {' '}
        {name}
        {' '}
      </label>
    </div>
  );
};

FactionCheckbox.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  factions: propTypes.array.isRequired,
};

export default FactionCheckbox;
