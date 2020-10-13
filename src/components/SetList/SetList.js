import React from 'react';
import './SetList.css';
import FactionCheckbox from '../FactionCheckbox/FactionCheckbox';
import sets from '../../helpers/Sets';

const SetList = () => (
  <div className="checkbox-container">
    <h2 id="checkbox-header">Select Your Expansions</h2>
    <ul>
      {sets.map((set) => (
        <li>
          <FactionCheckbox name={set.name} label={set.label} factions={set.factions} />
        </li>
      ))}
    </ul>
  </div>
);

export default SetList;
