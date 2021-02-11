/* eslint react/forbid-prop-types: 0 */ // --> OFF

import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { connect, useDispatch } from 'react-redux';
import './FactionCheckbox.scss';

const FactionCheckbox = ({
  name, label, factions, selectedFactions,
}) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const LightTooltip = withStyles(() => ({
    tooltip: {
      fontFamily: 'main-font, sans-serif',
      backgroundColor: 'white',
      color: '#020f42',
      fontSize: 18,
      maxWidth: '100%',
      border: 'solid 1px #020f42',
      borderRadius: '25px',
    },
  }))(Tooltip);

  const createToolTipList = () => {
    const list = [];
    for (let i = 0; i < factions.length; i += 1) {
      list[i] = (`${factions[i]}, `);
      if (i === factions.length - 1) list[i] = (factions[i]);
    }
    return list;
  };

  useEffect(() => {
    dispatch({ type: 'UPDATE', payload: selectedFactions.length });
  });

  return (
    <LightTooltip
      title={createToolTipList(factions)}
      TransitionProps={{ timeout: 1500 }}
    >
      <div className="faction-checkbox">
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
    </LightTooltip>
  );
};

const mapStateToProps = (state) => ({
  selectedFactions: state.selectedFactions,
});

FactionCheckbox.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  factions: propTypes.any.isRequired,
  selectedFactions: propTypes.array.isRequired,
};

export default connect(mapStateToProps)(FactionCheckbox);
