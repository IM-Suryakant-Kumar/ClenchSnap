import { createContext, useReducer, useContext } from "react";
import { IUserState } from "../types/statesAndActions";
import { userInitialState, userReducer } from "../reducers/user";
import { getLoggedInUser, updateUser } from "../apis/user";
import IUser from "../types/user";
import { logout } from "../apis/auth";

interface IUserContext {
	userState: IUserState;
	getLogout: () => Promise<void>;
	getProfile: () => Promise<void>;
	updateProfile: ({ fullname, email, avatar }: IUser) => Promise<void>;
	// getFollowers: () => Promise<void>;
	// getFollowings: () => Promise<void>;
}

const UserContext = createContext<IUserContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const UserContextProvider: React.FC<Props> = ({ children }) => {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState);

	// get logout
	const getLogout = async () => {
		const { success } = await logout();
		success &&
			userDispatch({
				type: "GET_LOGOUT",
				payload: { user: null },
			});
	};
	// get profile
	const getProfile = async () => {
		const { success, user } = await getLoggedInUser();
		success &&
			userDispatch({
				type: "GET_PROFILE",
				payload: { user },
			});
	};
	// update profile
	const updateProfile = async ({ fullname, email, avatar }: IUser) => {
		const { success, user } = await updateUser({
			fullname,
			email,
			avatar,
		} as IUser);
		success &&
			userDispatch({
				type: "UPDATE_PROFILE",
				payload: { user },
			});
	};

	// const getFollowers = async () => {};
	// const getFollowings = async () => {};

	const providerItem = {
		userState,
		getLogout,
		getProfile,
		updateProfile,
		// getFollowers,
		// getFollowings,
	};

	return (
		<UserContext.Provider value={providerItem}>
			{children}
		</UserContext.Provider>
	);
};

const useUser = () => useContext(UserContext) as IUserContext;

export { UserContextProvider, useUser };
