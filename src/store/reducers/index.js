import { combineReducers } from "redux";
import error from "./error";
import flights from "./flight";
import currentUser from './currentUser'
const rootReducer = combineReducers({
  error,
  flights,
  currentUser
});

export default rootReducer;
