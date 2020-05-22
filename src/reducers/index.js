import { combineReducers } from 'redux';
import playerCounterReducer from './PlayerCounter';

const rootReducer = combineReducers({
  playerCount: playerCounterReducer,

});

export default rootReducer;
