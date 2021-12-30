// import * as types from "../types";

// const loggedUser = JSON.parse(localStorage.getItem("token"));

// const initialState = loggedUser
//   ? { isLoggedIn: true, loggedUser }
//   : { isLoggedIn: false, loggedUser: null };

// const auth = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case types.LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoggedIn: true,
//         loggedUser: payload.loggedUser,
//       };
//     case types.LOGIN_FAIL:
//       return {
//         ...state,
//         isLoggedIn: false,
//         loggedUser: null,
//       };

//     default:
//       return state;
//   }
// };

// export default auth;
