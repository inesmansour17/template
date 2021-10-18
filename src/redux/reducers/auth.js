import * as types from "../types" 
let user = localStorage.getItem('token'); 
const initialState =  user ? { loggedIn: true, user, errors:false } : {loggedIn: false, errors:false };

const auth = (state = initialState, action) => {

  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return { ...state, errors: true }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        errors: false,
        user: action.payload
      };
    case types.LOGIN_FAIL:
      return { 
        ...state, 
        errors: true};
    default:
      return state 
    }
}


export default auth;