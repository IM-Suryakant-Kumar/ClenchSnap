import { IUserAction, IUserState } from "../types/statesAndActions";
import { getUserFromLocalStorage } from "../utils/handleUser";

export const userInitialState: IUserState = {
	user: getUserFromLocalStorage() || null,
	users: null,
	followers: null,
	followings: null,
};

export const userReducer = (state: IUserState, action: IUserAction) => {
	switch (action.type) {
		case "GET_PROFILE":
			return { ...state, user: action.payload.user };
		case "GET_LOGOUT":
			return {
				...state,
				user: null,
				users: null,
				followers: null,
				followings: null,
			};
		case "UPDATE_PROFILE":
			return { ...state, user: action.payload.user };
		case "GET_ALL_SUGGESTED_USERS":
			return { ...state, suggestedUsers: action.payload.suggestedUsers };
		case "GET_FOLLOWERS":
			return {
				...state,
				followers: action.payload.followers,
				message: null,
			};
		case "GET_FOLLOWINGS":
			return {
				...state,
				followings: action.payload.followings,
			};
		default:
			return state;
	}
};
