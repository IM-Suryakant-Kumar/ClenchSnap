import IUser from "./user";

export type TData = {
	success: boolean;
	message: string;
	token: string;
	user: IUser;
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

export default interface IApiRes extends SuccessResponse, FaildResponse {}
