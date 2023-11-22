import { createContext, useReducer, useContext } from "react";
import { ILoadingState } from "../types/statesAndActions";
import { loadingInitialState, loadingReducer } from "../reducers/loading";

export interface ILoadingContext {
	loadingState: ILoadingState;
	loadingStart: () => void;
	loadingStop: () => void;
	submittingStart: () => void;
	submittingStop: () => void;
}

const LoadingContext = createContext<ILoadingContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const LoadingContextProvider: React.FC<Props> = ({ children }) => {
	const [loadingState, loadingDispatch] = useReducer(
		loadingReducer,
		loadingInitialState,
	);

	const loadingStart = () => {
		loadingDispatch({
			type: "LOADING",
			payload: { loading: true, submitting: false },
		});
	};

	const loadingStop = () => {
		loadingDispatch({
			type: "LOADING",
			payload: { loading: false, submitting: false },
		});
	};

	const submittingStart = () => {
		loadingDispatch({
			type: "SUBMITTING",
			payload: { submitting: true, loading: false },
		});
	};

	const submittingStop = () => {
		loadingDispatch({
			type: "SUBMITTING",
			payload: { submitting: false, loading: false },
		});
	};

	const providerItem = {
		loadingState,
		loadingStart,
		loadingStop,
		submittingStart,
		submittingStop,
	};

	return (
		<LoadingContext.Provider value={providerItem}>
			{children}
		</LoadingContext.Provider>
	);
};

const useLoading = () => useContext(LoadingContext) as ILoadingContext;

export { LoadingContextProvider, useLoading };
