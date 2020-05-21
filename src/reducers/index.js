import playerCounterReducer from "./PlayerCounter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playerCount : playerCounterReducer

});

export default rootReducer;