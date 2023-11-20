import IUser from "./user";

// loading
export interface ILoadingState {
	loading?: boolean;
	submitting?: boolean;
}
export interface ILoadingAction {
	type: string;
	payload: ILoadingState;
}

// auth
export interface IAuthState {
	user?: IUser | null;
	errorMessage?: string | null;
}
export interface IAuthAction {
	type: string;
	payload: IAuthState;
}

// user
export interface IUserState {
	users: IUser[] | null;
}
export interface IUserAction {
	type: string;
	payload: IUserState;
}
