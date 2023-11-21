import { createContext, useReducer, useContext } from "react";
import { IAuthState } from "../types/statesAndActions";
import { authInitialState, authReducer } from "../reducers/auth";
import { getLoggedInUser } from "../utils/userApi";
import { useLoading } from ".";
import { ILoadingContext } from "./Loading";
import loadingWrapper from "../utils/loadingWrapper";
import { IRes } from "../types/response";

export interface IAuthContext {
	authState: IAuthState;
	getProfile: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const AuthContextProvider: React.FC<Props> = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, authInitialState);
	const { loadingStart, loadingStop } = useLoading() as ILoadingContext;

	// get profile
	const getProfile = async () => {
		const fn = async () => {
			const { success, user } = (await getLoggedInUser()) as IRes;
			authDispatch({
				type: "GET_PROFILE",
				payload: { user: success ? user : null },
			});
		};

		loadingWrapper(loadingStart, loadingStop, fn);
	};

	const providerItem = {
		authState,
		getProfile,
	};

	return (
		<AuthContext.Provider value={providerItem}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext) as IAuthContext;

export { AuthContextProvider, useAuth };
