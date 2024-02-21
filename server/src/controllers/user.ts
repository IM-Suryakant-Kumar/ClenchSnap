import { Request, Response } from "express";
import { User } from "../models";
import { IUser } from "user";

interface IReq extends Request {
	user: IUser;
}

// get logged-in user
export const getLoggedInUser = async (req: Request, res: Response) => {
	const {
		user: { _id },
	} = req as IReq;

	const user = await User.findById(_id);
	res.status(200).json({ success: true, user });
};

export const updateUser = async (req: Request, res: Response) => {
	const {
		user: { _id },
		body,
	} = req as IReq;

	await User.findByIdAndUpdate(req.body._id, body, {
		new: true,
	});

	const user = await User.findById(_id);
	const users = await User.find();

	res.status(200).json({
		success: true,
		message: "Successfully Updated!",
		user,
		users,
	});
};

export const getAllusers = async (req: Request, res: Response) => {
	const users = await User.find();
	res.status(200).json({ success: true, users });
};
