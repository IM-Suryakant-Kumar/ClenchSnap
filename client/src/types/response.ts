import IUser from "./user";

interface SuccessResponse {
	data: { success: boolean; token: string; message: string; user: IUser };
}

interface FaildResponse {
	response: {
		data: {
			success: boolean;
			message: string;
		};
	};
}

export default interface IApiRes extends SuccessResponse, FaildResponse {}
