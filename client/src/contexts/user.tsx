import { createContext, useReducer, useContext } from "react";
import { userInitialState, userReducer } from "../reducers/user";
import { IUserState } from "../types/statesAndActions";
import { getLoggedInUser } from "../utils/userApi";
import loadingWrapper from "../utils/loadingWrapper";
import { useLoading } from ".";
import { ILoadingContext } from "./Loading";
import { IRes } from "../types/response";

interface IUserContext {
	userState: IUserState;
	getProfile: () => Promise<void>;
	getFollowers: () => Promise<void>;
	getFollowings: () => Promise<void>;
}

const UserContext = createContext<IUserContext | null>(null);

type Props = {
	children?: React.ReactNode;
};

const UserContextProvider: React.FC<Props> = ({ children }) => {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState);
    const { loadingStart, loadingStop } = useLoading() as ILoadingContext;

	// get profile
	const getProfile = async () => {
		const fn = async () => {
			const { success, user } = (await getLoggedInUser()) as IRes;
			userDispatch({
				type: "GET_PROFILE",
				payload: { user: success ? user : null },
			});
		};

		loadingWrapper(loadingStart, loadingStop, fn);
	};
	const getFollowers = async () => {};
	const getFollowings = async () => {};

	const providerItem = {
		userState,
		userDispatch,
        getProfile,
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
