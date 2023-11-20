import { createContext, useReducer, useContext } from "react";
import { IAuthIntialState } from "../types/statesAndActions";
import { authInitialState, authReducer } from "../reducers/auth";
import { ILogCred, IRegCred } from "../types/user";
import { guestLogin, login, logout, signup } from "../utils/authApi";
import IRes from "../types/response";
import { getLoggedInUser } from "../utils/userApi";

interface IContext {
	authState: IAuthIntialState;
	registerUser: (cred: IRegCred) => Promise<void>;
	loginUser: (cred: ILogCred) => Promise<void>;
	loginGuestUser: () => Promise<void>;
	logoutUser: () => Promise<void>;
	getProfile: () => Promise<void>;
}

export const AuthContext = createContext<IContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const AuthContextProvider: React.FC<Props> = ({ children }) => {
	const [authState, authDispatch] = useReducer(authReducer, authInitialState);

	// register
	const registerUser = async (cred: IRegCred) => {
		const { success, message } = (await signup(cred)) as IRes;
		authDispatch({
			type: "REGISTER",
			payload: { errorMessage: success ? null : message },
		});
	};
	//login
	const loginUser = async (cred: ILogCred) => {
		const { success, message } = (await login(cred)) as IRes;
		authDispatch({
			type: "LOGIN",
			payload: { errorMessage: success ? null : message },
		});
	};
    // guest login
	const loginGuestUser = async () => {
		const { success, message } = (await guestLogin()) as IRes;
		authDispatch({
			type: "GUEST_LOGIN",
			payload: { errorMessage: success ? null : message },
		});
	};
    // logout
	const logoutUser = async () => {
		const { success, message } = (await logout()) as IRes;
		authDispatch({
			type: "LOGOUT",
			payload: { errorMessage: success ? null : message },
		});
	};
    // get logged-in user
	const getProfile = async () => {
		const { success, user } = (await getLoggedInUser()) as IRes;
		authDispatch({
			type: "GET_PROFILE",
			payload: { user: success ? user : null },
		});
	};

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

const useAuth = () => useContext(AuthContext)

export { AuthContextProvider, useAuth }
