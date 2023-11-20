import { createContext, useReducer, useContext } from "react";
import { ILoadingState } from "../types/statesAndActions";
import { loadingInitialState, loadingReducer } from "../reducers/loading";

export interface ILoadingContext {
	loadingState: ILoadingState;
	loadingStart: () => void;
	loadingStop: () => void;
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
		loadingDispatch({ type: "LOADING", payload: { loading: true } });
	};

	const loadingStop = () => {
		loadingDispatch({ type: "LOADING", payload: { loading: false } });
	};

	const providerItem = { loadingState, loadingStart, loadingStop };

	return (
		<LoadingContext.Provider value={providerItem}>
			{children}
		</LoadingContext.Provider>
	);
};

const useLoading = () => useContext(LoadingContext) as ILoadingContext;

export { LoadingContextProvider, useLoading };
