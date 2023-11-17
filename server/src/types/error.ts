import { CustomAPIError } from "../errors";

export default interface IError extends CustomAPIError {
	statusCode: number;
	message: string;
}
