import IUser from "./user";

// loading
export interface ILoadingState {
	loading: boolean;
}
export interface ILoadingAction {
	type: string;
	payload: ILoadingState;
}

// auth
export interface IAuthIntialState {
	user?: IUser | null;
	errorMessage?: string | null;
}
export interface IAuthAction {
	type: string;
	payload: IAuthIntialState;
}

// user
export interface IUserInitialState {
	users: IUser[] | null;
}
export interface IUserAction {
	type: string;
	payload: IUserInitialState;
}
