import { SET_ERRORS } from '../types';

const initialState = {};

const setErrors = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERRORS:
            alert(action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default setErrors


