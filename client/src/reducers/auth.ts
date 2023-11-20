import { IAuthAction, IAuthIntialState } from "../types/statesAndActions";

export const authInitialState: IAuthIntialState = {
	user: null,
	message: null,
	errorMessage: null,
};

export const authReducer = (state: IAuthIntialState, action: IAuthAction) => {
	switch (action.type) {
        case "REGISTER": {
            const { message } = action.payload
            return {...state, message}
        }
        case "LOGIN": {
            const { message } = action.payload
            return {...state, message}
        }
        case "GUEST_LOGIN": {
            const { message } = action.payload
            return {...state, message}
        }
        case "GET_LOGGED_IN_USER": {
            const { user } = action.payload
            return {...state, user}
        }
		default:
			return state;
	}
};
