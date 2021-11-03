import * as types from "../types";

const initialState = {
  selectedUser: {},
  loading: false,
  displayed: false,
  displayUpdate: false,
  errors: false,
  list: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.user || {},
      };

    case types.FETCH_USER_REQUEST:
      return { ...state, loading: true, errors: true };
    case types.FETCH_USERS_SUCCESS:
      return { ...state, list: [...action.list], loading: false, errors: true };
    case types.FETCH_USERS_FAILURE:
      return { ...state, errors: true, loading: false };
    case types.FETCH_USER_BY_ID:
      return {
        ...state,
        selectedUser: action.user,
      };
    case types.ADD_USER:
      return {
        ...state,
        list: [...state.list, action.user],
      };
    default:
      return state;
  }
};

export default users;
