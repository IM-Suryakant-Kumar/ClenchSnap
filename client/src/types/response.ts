import IUser from "./user";

export default interface IRes {
	success: boolean;
	message?: string;
	user?: IUser;
}

export interface IError {
	response: {
		data: {
			success: boolean;
			message: string;
		};
	};
}
