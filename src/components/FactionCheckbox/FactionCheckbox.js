/* eslint react/forbid-prop-types: 0 */ // --> OFF

import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import propTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import './FactionCheckbox.css';

const FactionCheckbox = ({
  name, label, factions, selectedFactions,
}) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'UPDATE', payload: selectedFactions.length });
  });

  return (
    <div className="faction-checkbox">
      <div data-tip={factions}>
        <ReactTooltip className="tooltip" place="top" delayShow={1000} />
        <input
          name={name}
          type="checkbox"
          checked={checked}
          id={label}
          onChange={() => {
            setChecked(!checked);
            if (!checked) dispatch({ type: 'ADD_FACTIONS', payload: factions });
            else dispatch({ type: 'REMOVE_FACTIONS', payload: factions });
          }}
        />
        <label htmlFor={label}>{name}</label>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedFactions: state.selectedFactions,
});

FactionCheckbox.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  factions: propTypes.array.isRequired,
  selectedFactions: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(FactionCheckbox);
