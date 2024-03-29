import { IUser } from "user";
import { Request, Response } from "express";
import { Post } from "../models";

interface IReq extends Request {
	user: IUser;
	params: { postId: string };
}

export const getAllPosts = async (req: Request, res: Response) => {
	const posts = await Post.find();
	res.status(200).json({ success: true, posts });
};

export const createPost = async (req: Request, res: Response) => {
	const {
		user: { _id, fullname, avatar },
	} = req as IReq;

	await Post.create({
		userId: _id,
		userName: fullname,
		avatar,
		...req.body,
	});

	const posts = await Post.find();

	res.status(200).json({
		success: true,
		message: "Successfully posted",
		posts,
	});
};

export const editPost = async (req: Request, res: Response) => {
	const {
		user: { _id },
	} = req as IReq;

	await Post.findByIdAndUpdate(req.body._id, req.body, {
		new: true,
	});

	const posts = await Post.find();

	res.status(200).json({
		success: true,
		message: "Successfully updated",
		posts,
	});
};

export const deletePost = async (req: Request, res: Response) => {
	const {
		params: { postId },
	} = req as IReq;

	await Post.findByIdAndDelete(postId, {
		new: true,
	});

	const posts = await Post.find();

	res.status(200).json({
		success: true,
		message: "Successfully deleted",
		posts,
	});
};
