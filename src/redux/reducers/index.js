import { combineReducers } from "redux";
import centers from "./centers";
import vaccines from "./vaccines";
const rootReducer = () => {
  return combineReducers({
    centers,
    vaccines,
  });
};

export default rootReducer;
