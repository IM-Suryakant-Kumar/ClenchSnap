import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import {
	BadRequestError,
	UnauthenticatedError,
	UnauthorizedError,
} from "../errors";
import User from "../models/User";
import sendToken from "../utils/sendToken";
import IUser from "user";

interface IReq extends Request {
	body: IUser;
}

// Create User
export const createUser = async (req: Request, res: Response) => {
	const {
		body: { fullname, username, email, password },
	} = req as IReq;

	if (!(fullname && username && email && password))
		throw new BadRequestError("Please provide all values");

	const user = await User.create({ fullname, username, email, password });
	sendToken(user, StatusCodes.CREATED, res, "Successfully registered");
};
// Login user
export const login = async (req: Request, res: Response) => {
	const {
		body: { email, password },
	} = req as IReq;

	if (!(email && password))
		throw new BadRequestError("Please provide all values");

	const user = await User.findOne({ email }).select("+password");
	if (!user) throw new UnauthenticatedError("Invalid Credentials!");

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) throw new UnauthorizedError("Invalid credentials!");

	sendToken(user, StatusCodes.CREATED, res, "Successfully logged in");
};
// guest login
export const guestLogin = async (req: Request, res: Response) => {
	const user = await User.findOne({ email: "clenchsnap@gmail.com" }).select(
		"+password",
	);
	if (!user) throw new UnauthenticatedError("Invalid Credentials!");

	const isPasswordCorrect = await user.comparePassword("secret");
	if (!isPasswordCorrect) throw new UnauthorizedError("Invalid credentials!");

	sendToken(user, StatusCodes.CREATED, res, "Successfully logged in");
};
// Logout user
export const logout = async (req: Request, res: Response) => {
	res.cookie("token", null, { maxAge: 0, httpOnly: true })
		.status(StatusCodes.OK)
		.json({ success: true, message: "Logged out successfully!" });
};
