import { IPost, IUser } from ".";

export type TData = {
	success: boolean;
	message: string;
	token: string;
	user: IUser;
	users: IUser[];
	posts: IPost[];
};

interface SuccessResponse {
	data: TData;
}

interface FaildResponse {
	response: {
		data: TData;
		status: string;
		statusText: string;
	};
}

export interface IApiRes extends SuccessResponse, FaildResponse {}
