import IUser from "./user";

// user
export interface IUserInitialState {
	users: IUser[] | null;
}

export interface IUserAction {
	type: string;
	payload: IUser[];
}
