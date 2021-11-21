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

export const updateUser = (user) => async (dispatch) => {
  try {
    const updatedUser = await api.updateUser(user);
    dispatch({
      type: types.UPDATE_USER,
      user: updatedUser,
    });
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  await api.deleteUser(id);
  dispatch({
    type: types.DELETE_USER,
    user: id,
  });
};

export const getAllUsers = () => async (dispatch) => {
  await api.getAllUsers();
  dispatch({
    type: types.GET_ALL_USER,
    //ne9s retour :)
  });
};
export const setDisplayed = (value) => ({
  type: types.SET_DISPLAYED_USER,
  value,
});
