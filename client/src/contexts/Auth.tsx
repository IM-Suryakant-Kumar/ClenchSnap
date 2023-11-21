import { createContext, useReducer, useContext, useMemo } from "react";
import { IAuthState } from "../types/statesAndActions";
import { authInitialState, authReducer } from "../reducers/auth";
import { ILogCred, IRegCred } from "../types/user";
import { guestLogin, login, logout, signup } from "../utils/authApi";
import IRes from "../types/response";
import { getLoggedInUser } from "../utils/userApi";
import { useLoading } from ".";
import { ILoadingContext } from "./Loading";
import loadingWrapper from "../utils/loadingWrapper";

export interface IAuthContext {
	authState: IAuthState;
	registerUser: (cred: IRegCred) => Promise<void>;
	loginUser: (cred: ILogCred) => Promise<void>;
	loginGuestUser: () => Promise<void>;
	logoutUser: () => Promise<void>;
	getProfile: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const AuthContextProvider: React.FC<Props> = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, authInitialState);
	const { loadingStart, loadingStop, submittingStart, submittingStop } =
		useLoading() as ILoadingContext;

	// register
	const registerUser = async (cred: IRegCred) => {
		const fn = async () => {
			const { success, message } = (await signup(cred)) as IRes;
			authDispatch({
				type: "REGISTER",
				payload: { errorMessage: success ? null : message },
			});
		};

		loadingWrapper(submittingStart, submittingStop, fn);
	};
	//login
	const loginUser = async (cred: ILogCred) => {
		const fn = async () => {
			const { success, message } = (await login(cred)) as IRes;
			authDispatch({
				type: "LOGIN",
				payload: { errorMessage: success ? null : message },
			});
		};

		loadingWrapper(submittingStart, submittingStop, fn);
	};
	// guest login
	const loginGuestUser = async () => {
		const fn = async () => {
			const { success, message } = (await guestLogin()) as IRes;
			authDispatch({
				type: "GUEST_LOGIN",
				payload: { errorMessage: success ? null : message },
			});
		};

		loadingWrapper(submittingStart, submittingStop, fn);
	};
	// logout
	const logoutUser = async () => {
		const fn = async () => {
			const { success, message } = (await logout()) as IRes;
			authDispatch({
				type: "LOGOUT",
				payload: { errorMessage: success ? null : message },
			});
		};

		loadingWrapper(loadingStart, loadingStop, fn);
	};
	// get logged-in user
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

	useMemo(() => authState, []);

	const providerItem = {
		authState,
		registerUser,
		loginUser,
		loginGuestUser,
		logoutUser,
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
