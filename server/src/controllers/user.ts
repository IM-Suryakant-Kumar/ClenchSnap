import { Request, Response } from "express";
import User from "../models/User";
import { StatusCodes } from "http-status-codes";
import IUser from "../types/user";

interface IReq extends Request {
	user: { _id: string };
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
		body : { name, email, avatar },
	} = req as IReq;

    let dataToUpdate: IUser

    name && (dataToUpdate.name = name)
    email && (dataToUpdate.email = email)
    avatar && (dataToUpdate.avatar = avatar)

	const user = await User.findByIdAndUpdate(_id, dataToUpdate, { new: true });

	res.status(StatusCodes.OK).json({
		success: true,
		message: "Successfully Updated!",
		user,
	});
};
