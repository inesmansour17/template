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
    case types.REGISTER_CENTER:
      return {
        ...state,
        list: [...state.list, action.user],
      };
    default:
      return state;
  }
};

export default users;
