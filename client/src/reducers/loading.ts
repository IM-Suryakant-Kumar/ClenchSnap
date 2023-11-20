import { ILoadingAction, ILoadingState } from "../types/statesAndActions";

export const loadingInitialState: ILoadingState = {
	loading: false,
	submitting: false,
};

export const loadingReducer = (
	state: ILoadingState,
	action: ILoadingAction,
) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, loading: action.payload.loading };
		case "SUBMITTING":
			return { ...state, submitting: action.payload.submitting };
		default:
			return state;
	}
};
