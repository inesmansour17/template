import { combineReducers } from "redux"
import centers from './centers'
import pharmacies from './pharmacies'
const rootReducer = () =>{
 return combineReducers({
     centers,
     pharmacies
  })
}

export default rootReducer