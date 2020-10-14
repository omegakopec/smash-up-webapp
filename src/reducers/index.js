import { combineReducers } from 'redux';
import playerCounterReducer from './PlayerCounter';
import selectedFactionReducer from './SelectedFactions';
import selectedFactionCountReducer from './selectedFactionCount';

const rootReducer = combineReducers({
  playerCount: playerCounterReducer,
  selectedFactions: selectedFactionReducer,
  selectedFactionCount: selectedFactionCountReducer,
});

export default rootReducer;
