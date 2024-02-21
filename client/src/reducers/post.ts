import { IPostAction, IPostState } from "../types";

export const postInitialState: IPostState = {
	posts: null,
};

export const postReducer = (state: IPostState, action: IPostAction) => {
	switch (action.type) {
		case "GET_POSTS":
			return { ...state, posts: action.payload };
		case "CREATE_POST":
			return { ...state, posts: action.payload };
		case "UPDATE_POST":
			return { ...state, posts: action.payload };
		case "DELETE_POST":
			return { ...state, posts: action.payload };
		default:
			return state;
	}
};
