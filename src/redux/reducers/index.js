import { combineReducers } from "redux";
import centers from "./centers";
import auth from "./auth";
import pharmacies from "./pharmacies";
import vaccines from "./vaccines";
import users from "./users";
import updateRDV from "./Rdv"; 
import errorReducer from './errorReducer'

const rootReducer = () => {
  return combineReducers({
    centers,
    pharmacies,
    vaccines,
    auth,
    users,
    updateRDV,
    errorReducer
    
  });
};

export default rootReducer;
