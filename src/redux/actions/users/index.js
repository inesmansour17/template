import * as types from "../../../redux/types";
import * as api from "../../../services/users.service";

export const registerCenter = (user) => async (dispatch) => {
  try {
    const newUser = await api.registerCenter(user);
    dispatch({
      type: types.REGISTER_CENTER,
      user: newUser,
    });
  } catch (e) {
    console.log(e);
  }
};
