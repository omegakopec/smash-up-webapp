import React from 'react';
import './SetList.scss';
import FactionCheckbox from '../FactionCheckbox/FactionCheckbox';
import sets from '../../../lib/Sets';

const SetList = () => (
  <div className="checkbox-container">
    <ul>
      {sets.map((set) => (
        <li key={set.name}>
          <FactionCheckbox name={set.name} label={set.label} factions={set.factions} />
        </li>
      ))}
    </ul>
  </div>
);

export default SetList;
