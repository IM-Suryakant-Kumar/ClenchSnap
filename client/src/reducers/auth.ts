import { IAuthAction, IAuthIntialState } from "../types/statesAndActions";

export const authInitialState: IAuthIntialState = {
	user: null,
	errorMessage: null,
};

export const authReducer = (state: IAuthIntialState, action: IAuthAction) => {
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
