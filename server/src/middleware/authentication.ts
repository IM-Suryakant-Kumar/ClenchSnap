import { NextFunction, Request, Response } from "express";
import { UnauthenticatedError, UnauthorizedError } from "../errors";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
	// const { token } = req.cookies;

	// check header
	const authHeader = req.headers.authorization;
	if (!(authHeader && authHeader.startsWith("Bearer")))
		throw new UnauthenticatedError("Authentication failed!");

	const token = authHeader.split(" ")[1];
	const JWT_SECRET: string = process.env.JWT_SECRET;

	const { _id } = jwt.verify(token, JWT_SECRET) as { _id: string };

	const user = await User.findById(_id);
	next();
};

interface IReq extends Request {
	user: { role: string };
}

export const authorizedUser = (...roles: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const {
			user: { role },
		} = req as IReq;

		if (!roles.includes(role)) throw new UnauthorizedError("Unauthorized to access this route");
		next();
	};
};
