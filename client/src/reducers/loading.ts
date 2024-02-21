import { ILoadingAction, ILoadingState } from "../types";

export const loadingInitialState: ILoadingState = {
	loading: false,
	submitting: false,
};

export const loadingReducer = (
	state: ILoadingState,
	action: ILoadingAction
) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, loading: action.payload };
		case "SUBMITTING":
			return { ...state, submitting: action.payload };
		default:
			return state;
	}
};
