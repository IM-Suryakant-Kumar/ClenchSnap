import { IUserAction, IUserState } from "../types/statesAndActions";
import { getUserFromLocalStorage } from "../utils/handleUser";

export const userInitialState: IUserState = {
	user: getUserFromLocalStorage() || null,
	followers: null,
	followings: null,
};

export const userReducer = (state: IUserState, action: IUserAction) => {
	switch (action.type) {
		case "GET_PROFILE":
			return { ...state, user: action.payload.user };
		case "GET_LOGOUT":
			return { ...state, user: action.payload.user };
		case "UPDATE_PROFILE":{
			return { ...state, user: action.payload.user };}
		case "GET_FOLLOWERS":
			return { ...state, followers: action.payload.followers };
		case "GET_FOLLOWINGS":
			return { ...state, followings: action.payload.followings };
		default:
			return state;
	}
};
