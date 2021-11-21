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
    case types.SET_DISPLAYED_USER:
      return {
        ...state,
        displayed: action.value,
      };
    case types.SET_DISPLAY_UPDATE_USER:
      return {
        ...state,
        displayUpdate: action.value,
      };
    case types.REGISTER_CENTER:
      return {
        ...state,
        list: [...state.list, action.user],
      };
    case types.ADD_USER:
      return {
        ...state,
        list: [...state.list, action.user],
      };
    case types.UPDATE_USER:
      return {
        ...state,
        list: [...state.list, action.user],
      };
    case types.DELETE_USER:
      return {
        ...state,
        list: [...state.list, action.user],
      };
    case types.GET_ALL_USER:
      return {
        ...state,
        list: [...state.list, action.user],
      };
    default:
      return state;
  }
};

export default users;
