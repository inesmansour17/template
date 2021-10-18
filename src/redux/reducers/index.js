import { combineReducers } from "redux"
import centers from './centers'
import auth from './auth'
const rootReducer = () =>{
 return combineReducers({
     centers,
     auth
  })
}

export default rootReducer