import IUser from "./user";

// export interface IRes {
// 	success: boolean;
// 	token: string;
// 	message: string;
// 	user: IUser;
// }
// // export default interface IApiRes {
// // 	data: IRes;
// // }

// export interface IApiError {
// 	response: {
// 		data: {
// 			success: boolean;
// 			message: string;
// 		};
// 	};
// }

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
