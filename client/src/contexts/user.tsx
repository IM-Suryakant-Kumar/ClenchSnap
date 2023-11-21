import { createContext, useReducer, useContext } from "react";
import { userInitialState, userReducer } from "../reducers/user";
import { IUserState } from "../types/statesAndActions";
import { getLoggedInUser, updateUser } from "../utils/userApi";
import { IRes } from "../types/response";
import IUser from "../types/user";
import { logout } from "../utils/authApi";

interface IUserContext {
	userState: IUserState;
	getLogout: () => Promise<void>;
	getProfile: () => Promise<void>;
	updateProfile: ({ name, email, avatar }: IUser) => Promise<void>;
	getFollowers: () => Promise<void>;
	getFollowings: () => Promise<void>;
}

const UserContext = createContext<IUserContext | null>(null);

type Props = {
	children?: React.ReactNode;
};

const UserContextProvider: React.FC<Props> = ({ children }) => {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState);

	// get logout
	const getLogout = async () => {
		const { success } = (await logout()) as IRes;
		success && userDispatch({ type: "GET_LOGOUT" });
	};
	// get profile
	const getProfile = async () => {
		const { success, user } = (await getLoggedInUser()) as IRes;
		success &&
			userDispatch({
				type: "GET_PROFILE",
				payload: { user: user },
			});
	};
	// update profile
	const updateProfile = async ({ name, email, avatar }: IUser) => {
		const { success, user } = (await updateUser({
			name,
			email,
			avatar,
		})) as IRes;
		success &&
			userDispatch({
				type: "UPDATE_PROFILE",
				payload: { user },
			});
	};

	const getFollowers = async () => {};
	const getFollowings = async () => {};

	const providerItem = {
		userState,
		userDispatch,
        getLogout,
		getProfile,
		updateProfile,
		getFollowers,
		getFollowings,
	};

	return (
		<UserContext.Provider value={providerItem}>
			{children}
		</UserContext.Provider>
	);
};

const useUser = () => useContext(UserContext) as IUserContext;

export { UserContextProvider, useUser };
