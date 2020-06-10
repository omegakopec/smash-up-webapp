import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './SetList.css';
import sets from '../../helpers/Sets';

const SetList = () => (
  <div className="checkbox-container">
    <form>
      <h2 id="checkbox-header">Select Your Expansions</h2>
      <ul className="cb-tags">
        {sets.map((set) => (
          <li>
            <Field name={set.name} component="input" type="checkbox" id={set.label} />
            <label htmlFor={set.label}>{set.name}</label>
          </li>
        ))}
      </ul>
    </form>
  </div>
);

export default reduxForm({
  form: 'SetList',
})(SetList);
