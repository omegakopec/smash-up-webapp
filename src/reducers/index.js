import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import playerCounterReducer from './PlayerCounter';

const rootReducer = combineReducers({
  playerCount: playerCounterReducer,
  form: formReducer,
});

export default rootReducer;
