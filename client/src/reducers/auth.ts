import { IAuthAction, IAuthState } from "../types/statesAndActions";

export const authInitialState: IAuthState = {
	user: null,
	errorMessage: null,
};

export const authReducer = (state: IAuthState, action: IAuthAction) => {
	switch (action.type) {
        case "GET_PROFILE": {
            const { user } = action.payload
            return {...state, user}
        }
		default:
			return state;
	}
};
