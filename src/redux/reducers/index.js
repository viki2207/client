//root recducer
//root reducer : its going to hold all reducer details at one place
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
const rootReducers = combineReducers({
  authReducer,
  alertReducer,
});

export default rootReducers;
