import {
	createContext,
	useReducer,
	useContext,
	useCallback,
} from "react";
import { IUserState } from "../types/statesAndActions";
import { userInitialState, userReducer } from "../reducers/user";
import { getAllusers, getLoggedInUser, updateUser } from "../apis/user";
import IUser from "../types/user";
import { logout } from "../apis/auth";
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
	const updateProfile = useCallback(async ({
		fullname,
		username,
		email,
		avatar,
		bio,
		website,
	}: IUser) => {
		const { success, user, message } = await updateUser({
			fullname,
			username,
			email,
			avatar,
			bio,
			website,
		} as IUser);
		success
			? userDispatch({
                type: "UPDATE_PROFILE",
                payload: { user },}) 
            : toast.error(message, {
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
	}, []);

    const getAllUser = useCallback(async () => {
        const { success, users  } = await getAllusers()
        success && userDispatch({ 
            type: "GET_ALL_USER",
            payload: { users }
         })
    }, []) 

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
		<UserContext.Provider value={providerItem}>
			{children}
		</UserContext.Provider>
	);
};

const useUser = () => useContext(UserContext) as IUserContext;

export { UserContextProvider, useUser };
