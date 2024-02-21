/* eslint-disable no-mixed-spaces-and-tabs */
import { createContext, useReducer, useContext, useCallback } from "react";
import { IUser, IUserState } from "../types";
import { userInitialState, userReducer } from "../reducers";
import { getAllusers, getLoggedInUser, logout, updateUser } from "../apis";
import { toast } from "react-toastify";

interface IUserContext {
	userState: IUserState;
	getLogout: () => Promise<void>;
	getProfile: () => Promise<void>;
	getAllUser: () => Promise<void>;
	updateProfile: ({
		fullname,
		username,
		email,
		avatar,
		bio,
		website,
	}: IUser) => Promise<void>;
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
	const getLogout = useCallback(async () => {
		const { success } = await logout();
		success &&
			userDispatch({
				type: "GET_LOGOUT",
				payload: { user: null },
			});
	}, []);
	// get profile
	const getProfile = useCallback(async () => {
		const { success, user } = await getLoggedInUser();
		success &&
			userDispatch({
				type: "GET_PROFILE",
				payload: { user },
			});
	}, []);
	// update profile
	const updateProfile = useCallback(async (newUser: IUser) => {
		const { success, user, users, message } = await updateUser(
			newUser as IUser
		);
		success
			? userDispatch({
					type: "UPDATE_PROFILE",
					payload: { user, users },
			  })
			: toast.error(message, {
					autoClose: 6000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
			  });
	}, []);

	const getAllUser = useCallback(async () => {
		const { success, users } = await getAllusers();
		success &&
			userDispatch({
				type: "GET_ALL_USER",
				payload: { users },
			});
	}, []);

	// const getFollowers = async () => {};
	// const getFollowings = async () => {};

	const providerItem = {
		userState,
		getLogout,
		getProfile,
		updateProfile,
		getAllUser,
		// getFollowers,
		// getFollowings,
	};

	return (
		<UserContext.Provider value={providerItem}>{children}</UserContext.Provider>
	);
};

const useUser = () => useContext(UserContext) as IUserContext;

export { UserContextProvider, useUser };
