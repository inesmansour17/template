import { combineReducers } from "redux";
import centers from "./centers";
import auth from "./auth";
import pharmacies from "./pharmacies";
import vaccines from "./vaccines";
import users from "./users";

const rootReducer = () => {
  return combineReducers({
    centers,
    pharmacies,
    vaccines,
    auth,
    users,
  });
};

export default rootReducer;
