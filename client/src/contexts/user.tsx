import { createContext, useReducer, useContext } from "react";
import { userInitialState, userReducer } from "../reducers/user";
import { IUserAction, IUserState } from "../types/statesAndActions";

interface IUserContext {
	userState: IUserState;
	userDispatch: React.Dispatch<IUserAction>;
	getFollowers: () => Promise<void>;
	getFollowings: () => Promise<void>;
}

const UserContext = createContext<IUserContext | null>(null);

type Props = {
	children?: React.ReactNode;
};

const UserContextProvider: React.FC<Props> = ({ children }) => {
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

const useUser = () => useContext(UserContext) as IUserContext;

export { UserContextProvider, useUser };
