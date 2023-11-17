import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { BadRequestError, UnauthenticatedError, UnauthorizedError } from "../errors";
import User from "../models/User";
import sendToken from "../utils/sendToken";

interface IReq extends Request {
	body: {
		name: string;
		email: string;
		avatar?: string;
		password?: string;
	};
}

// Create User
export const createUser = async (req: Request, res: Response) => {
	const {
		body: { name, email, avatar, password },
	} = req as IReq;

	const user = await User.create({ name, email, avatar, password });
	sendToken(user, StatusCodes.CREATED, res, "Successfully registered");
};

// Login user
export const login = async (req: Request, res: Response) => {
	const {
		body: { email, password },
	} = req as IReq;

	if (!(email && password)) throw new BadRequestError("Please provide all values");

	const user = await User.findOne({ email });
	if (!user) throw new UnauthenticatedError("Invalid Credentials!");

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) throw new UnauthorizedError("Invalid credentials!");

	sendToken(user, StatusCodes.CREATED, res, "Successfully logged in");
};

// Logout user
export const logout = async (req: Request, res: Response) => {
	res.cookie("token", null, { maxAge: 0, httpOnly: true })
		.status(StatusCodes.OK)
		.json({ success: true, message: "logged out successfully!" });
};
