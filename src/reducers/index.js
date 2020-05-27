import { combineReducers } from 'redux';
import playerCounterReducer from './PlayerCounter';
import selectedExpansionsReducer from './SelectedExpansions';

const rootReducer = combineReducers({
  playerCount: playerCounterReducer,
  selectedExpansions: selectedExpansionsReducer,

});

export default rootReducer;
