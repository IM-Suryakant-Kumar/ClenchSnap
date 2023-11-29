import { IPostAction, IPostState } from "../types/statesAndActions";

const initialPostState: IPostState = {
	posts: null
};

const postReducer = (state: IPostState, action: IPostAction) => {
	switch (action.type) {
        case "GET_POSTS":
            return { ...state, posts: action.payload }
        case "CREATE_POSTS":
            return { ...state, posts: action.payload }
        case "UPDATE_POSTS":
            return { ...state, posts: action.payload }
		default:
			return state;
	}
};
