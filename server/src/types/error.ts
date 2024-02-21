import { CustomAPIError } from "../errors";

export interface IError extends CustomAPIError {
	statusCode: number;
	message: string;
}
