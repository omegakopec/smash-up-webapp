import { combineReducers } from 'redux';
import playerCounterReducer from './PlayerCounter';
import selectedFactionReducer from './SelectedFactions';
import factionCounterReducer from "./factionCounter";

const rootReducer = combineReducers({
  playerCount: playerCounterReducer,
  selectedFactions: selectedFactionReducer,
  factionCounter: factionCounterReducer,
});

export default rootReducer;
