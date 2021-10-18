
import { combineReducers } from "redux"
import centers from './centers'
import auth from './auth'
import pharmacies from './pharmacies' 
import vaccines from "./vaccines";

const rootReducer = () =>{
 return combineReducers({
     centers,
     pharmacies, 
     vaccines,
     auth
  })
}


export default rootReducer;
