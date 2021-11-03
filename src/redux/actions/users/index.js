import * as types from "../../../redux/types";
import * as api from "../../../services/users.service";

export const addUser = (user) => async (dispatch) => {
  try {
    const newUser = await api.addUser(user);
    dispatch({
      type: types.ADD_USER,
      user: newUser,
    });
  } catch (e) {
    console.log(e);
  }
};
