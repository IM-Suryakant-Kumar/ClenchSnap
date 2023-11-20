import { ILoadingAction, ILoadingState } from "../types/statesAndActions";

export const loadingInitialState: ILoadingState = {
	loading: false,
};

export const loadingReducer = (
	state: ILoadingState,
	action: ILoadingAction,
) => {
	switch (action.type) {
		case "LOADING":
			return { loading: action.payload.loading };
		default:
			return state;
	}
};
