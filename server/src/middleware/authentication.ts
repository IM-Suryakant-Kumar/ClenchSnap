import { NextFunction, Request, Response } from "express";
import { UnauthenticatedError } from "../errors";
import jwt from "jsonwebtoken";
import { IUser } from "user";
import { User } from "../models";

interface IReq extends Request {
	user: IUser;
}

export const authenticateUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const newReq = req as IReq;
	let { token } = newReq.cookies;

	// check header
	const authHeader = req.headers.authorization;
	if (!token && !(authHeader && authHeader.startsWith("Bearer")))
		throw new UnauthenticatedError("Authentication failed!");

	!token && (token = authHeader.split(" ")[1]);
	if (token === "null")
		throw new UnauthenticatedError("Authentication failed!");

	const JWT_SECRET: string = process.env.JWT_SECRET;

	const { _id } = jwt.verify(token, JWT_SECRET) as { _id: string };

	newReq.user = await User.findById(_id);
	next();
};