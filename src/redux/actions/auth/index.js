import * as types from "../../types";
import * as api from "../../../services/auth.service";

export const login = (loggedUser) => async (dispatch) => {
  // try{
  //     const user = await api.login(loggedUser);
  //     dispatch({
  //         type: types.FETCH_USER_REQUEST,
  //         loggedUser: user
  //     });
  // }
  // catch(e){}

  dispatch({
    type: types.FETCH_USER_REQUEST,
  });

  try {
    const user = await api.login(loggedUser);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: user,
    });
  } catch (e) {
    dispatch({
      type: types.LOGIN_FAIL,
      payload: {},
    });
  }
};
