import IUser from "./user";

// loading
export interface ILoadingState {
	loading?: boolean;
	submitting?: boolean;
}
export interface ILoadingAction {
	type: string;
	payload?: ILoadingState;
}

// user
export interface IUserState {
	user?: IUser | null;
	followers?: IUser[] | null;
	followings?: IUser[] | null;
}
export interface IUserAction {
	type: string;
	payload: IUserState;
}
