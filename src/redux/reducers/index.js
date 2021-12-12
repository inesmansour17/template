import { combineReducers } from "redux";
import centers from "./centers";
import auth from "./auth";
import pharmacies from "./pharmacies";
import vaccines from "./vaccines";
import users from "./users";
import updateRDV from "./Rdv";

const rootReducer = () => {
  return combineReducers({
    centers,
    pharmacies,
    vaccines,
    auth,
    users,
    updateRDV
    
  });
};

export default rootReducer;
