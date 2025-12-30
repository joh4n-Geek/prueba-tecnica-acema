import { authTypes } from "../types/authTypes";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case authTypes.login:
            return {
                ...state,
                isLogged: true,
                user: action.payload,
            };
        case authTypes.error:
            return {
                isLogged: false,
                errorMessage: action.payload.errorMessage,
            }
        default:
            return state;
    }
};