import { IUserAction, IUserInitialState } from "../types/statesAndActions";

export const userInitialState: IUserInitialState = {
	users: null,
};

export const userReducer = (state: IUserInitialState, action: IUserAction) => {
	switch (action.type) {
		case "GET_FOLLOWERS":
			return { ...state, users: action.payload.users };
		case "GET_FOLLOWINGS":
			return { ...state, users: action.payload.users };
		default:
			return state;
	}
};
