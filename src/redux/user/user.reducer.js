import { /* SET_CURRENT_USER,  */GOOGLE_SIGN_IN_START, GOOGLE_SIGN_IN_SUCCESS, EMAIL_SIGN_IN_SUCCESS, GOOGLE_SIGN_IN_FAILURE, EMAIL_SIGN_IN_FAILURE } from '../constants';

const initialState = {
    currentUser: null,
    error: null,
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        // case SET_CURRENT_USER:
        case GOOGLE_SIGN_IN_SUCCESS:
        case EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null,
            }
        case GOOGLE_SIGN_IN_FAILURE:
        case EMAIL_SIGN_IN_FAILURE: 
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default userReducer;