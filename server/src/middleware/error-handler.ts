import IError from "error";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err: IError, req: Request, res: Response, next: NextFunction) => {
	const customError = {
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		message: err.message || "Something went wrong try again",
	};

	res.status(customError.statusCode).json({ success: false, message: customError.message });
};

export default errorHandlerMiddleware;
