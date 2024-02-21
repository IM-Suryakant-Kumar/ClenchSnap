import { createContext, useReducer, useContext } from "react";
import { ILoadingState } from "../types";
import { loadingInitialState, loadingReducer } from "../reducers";

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
		loadingInitialState
	);

	const loadingStart = () => {
		loadingDispatch({
			type: "LOADING",
			payload: true,
		});
	};

	const loadingStop = () => {
		loadingDispatch({
			type: "LOADING",
			payload: false,
		});
	};

	const submittingStart = () => {
		loadingDispatch({
			type: "SUBMITTING",
			payload: true,
		});
	};

	const submittingStop = () => {
		loadingDispatch({
			type: "SUBMITTING",
			payload: false,
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
