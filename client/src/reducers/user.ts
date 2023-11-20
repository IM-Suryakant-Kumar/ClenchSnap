import { IUserAction, IUserState } from "../types/statesAndActions";

export const userInitialState: IUserState = {
	users: null,
};

export const userReducer = (state: IUserState, action: IUserAction) => {
	switch (action.type) {
		case "GET_FOLLOWERS":
			return { ...state, users: action.payload.users };
		case "GET_FOLLOWINGS":
			return { ...state, users: action.payload.users };
		default:
			return state;
	}
};
