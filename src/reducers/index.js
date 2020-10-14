import { combineReducers } from 'redux';
import playerCounterReducer from './PlayerCounter';
import selectedFactionReducer from './SelectedFactions';

const rootReducer = combineReducers({
  playerCount: playerCounterReducer,
  selectedFactions: selectedFactionReducer,
});

export default rootReducer;
