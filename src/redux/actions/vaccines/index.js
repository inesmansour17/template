import * as types from "../../types";
import * as api from "../../../services/vaccines.service";

export const setSelectedVaccine = (vaccine) => ({
  type: types.SET_SELECTED_VACCINE,
  vaccine,
});

export const fetchVaccines = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_VACCINES_REQUEST,
  });

  try {
    dispatch({
      type: types.FETCH_VACCINES_SUCCESS,
      list: await api.fetchVaccines(),
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_VACCINES_FAILURE,
    });
  }
};

export const getVaccineById = (id) => async (dispatch) => {
  const vaccine = await api.getVaccineById(id);
  dispatch({
    type: types.FETCH_VACCINE_BY_ID,
    vaccine,
  });
};

export const addVaccine = (vaccine) => async (dispatch) => {
  try {
    const newVaccine = await api.addVaccine(vaccine);
    dispatch({
      type: types.ADD_VACCINE,
      vaccine: newVaccine,
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateVaccine = (vaccine) => async (dispatch) => {
  try {
    const updatedVaccine = await api.updateVaccine(vaccine);
    dispatch({
      type: types.UPDATE_VACCINE,
      vaccine: updatedVaccine,
    });
  } catch (e) {
    console.log(e);
  }
};
export const deleteVaccine = (id) => async (dispatch) => {
  await api.deleteVaccine(id);
  dispatch({
    type: types.DELETE_VACCINE,
    vaccine: id,
  });
};

export const setDisplayed = (value) => ({
  type: types.SET_DISPLAYED_VACCINE,
  value,
});

export const setDisplayUpdate = (value) => ({
  type: types.SET_DISPLAY_UPDATE_VACCINE,
  value,
});
