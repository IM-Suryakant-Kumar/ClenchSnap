import { StatusCodes } from "http-status-codes";
import Post from "../models/Post";
import { Request, Response } from "express";

interface IReq extends Request {
	user: { _id: string };
}

export const getAllPosts = async (req: Request, res: Response) => {
	const posts = await Post.find();
	res.status(StatusCodes.OK).json({ success: true, posts });
};

export const createPost = async (req: Request, res: Response) => {
	const {
		user: { _id },
	} = req as IReq;
	const posts = await Post.create({ userId: _id, ...req.body });
	res.status(StatusCodes.OK).json({
		success: true,
		message: "Successfully posted",
		posts,
	});
};

export const editPost = async (req: Request, res: Response) => {
	const {
		user: { _id },
	} = req as IReq;
	const posts = await Post.findOneAndUpdate({ userId: _id }, req.body, {
		new: true,
	});
	res.status(StatusCodes.OK).json({
		success: true,
		message: "Successfully posted",
		posts,
	});
};
