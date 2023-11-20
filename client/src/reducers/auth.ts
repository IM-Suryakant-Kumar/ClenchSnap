import { IAuthAction, IAuthState } from "../types/statesAndActions";

export const authInitialState: IAuthState = {
	user: null,
	errorMessage: null,
};

export const authReducer = (state: IAuthState, action: IAuthAction) => {
	switch (action.type) {
        case "REGISTER": {
            const { errorMessage } = action.payload
            return {...state, errorMessage}
        }
        case "LOGIN": {
            const { errorMessage } = action.payload
            return {...state, errorMessage}
        }
        case "GUEST_LOGIN": {
            const { errorMessage } = action.payload
            return {...state, errorMessage}
        }
        case "LOGOUT": {
            const { errorMessage } = action.payload
            return {...state, errorMessage}
        }
        case "GET_PROFILE": {
            const { user } = action.payload
            return {...state, user}
        }
		default:
			return state;
	}
};
