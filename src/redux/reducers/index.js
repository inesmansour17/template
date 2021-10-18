
import { combineReducers } from "redux"
import centers from './centers'
import pharmacies from './pharmacies' 
import vaccines from "./vaccines";
const rootReducer = () =>{
 return combineReducers({
     centers,
     pharmacies, vaccines
  })
}


export default rootReducer;
