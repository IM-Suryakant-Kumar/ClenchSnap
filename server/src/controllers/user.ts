import { Request, Response } from "express";
import User from "../models/User";
import { StatusCodes } from "http-status-codes";
import IUser from "user";

interface IReq extends Request {
	user: IUser;
}

// get logged-in user
export const getLoggedInUser = async (req: Request, res: Response) => {
	const {
		user: { _id },
	} = req as IReq;

	const user = await User.findById(_id);
	res.status(StatusCodes.OK).json({ success: true, user });
};

export const updateUser = async (req: Request, res: Response) => {
	const {
		user: { _id },
		body,
	} = req as IReq;

	const user = await User.findByIdAndUpdate(_id, body, { new: true });

	res.status(StatusCodes.OK).json({
		success: true,
		message: "Successfully Updated!",
		user,
	});
};

export const getAllusers = async (req: Request, res: Response) => {
    const users = await User.find()
    res.status(StatusCodes.OK).json({ success: true, users })
}
