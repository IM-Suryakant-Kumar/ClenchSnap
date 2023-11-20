import { createContext, useReducer } from "react";
import { userInitialState, userReducer } from "../reducers/user";
import { IUserAction, IUserInitialState } from "../types/statesAndActions";

interface IContext {
	userState: IUserInitialState;
	userDispatch: React.Dispatch<IUserAction>;
	getFollowers: () => Promise<void>;
	getFollowings: () => Promise<void>;
}

const UserContext = createContext<IContext | null>(null);

type Props = {
	children?: React.ReactNode;
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
	const [userState, userDispatch] = useReducer(userReducer, userInitialState);

	const getFollowers = async () => {};
	const getFollowings = async () => {};

	const providerItem = {
		userState,
		userDispatch,
		getFollowers,
		getFollowings,
	};

	return (
		<UserContext.Provider value={providerItem}>
			{children}
		</UserContext.Provider>
	);
};
