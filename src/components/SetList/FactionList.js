import React from 'react';
import './FactionList.css';
import sets from '../../helpers/Sets';

const FactionList = () => (
  <div className="checkbox-container">
    <h2 id="checkbox-header">Select Your Expansions</h2>
    <ul className="cb-tags">
      {sets.map((set) => (
        <li>
          <input type="checkbox" id={set.label} />
          <label htmlFor={set.label}>{set.name}</label>
        </li>
      ))}
      <li>
        <input type="checkbox" id="all" />
        <label htmlFor="all">All</label>
      </li>
    </ul>
  </div>
);

export default FactionList;
