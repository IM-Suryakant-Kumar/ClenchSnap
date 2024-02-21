import { toast } from "react-toastify";
import axios from "./axios";
import { asyncWrapper, getTokenFromLocalStorage } from "../utils";
import { IApiRes, IPost } from "../types";

export const getAllPosts = () =>
	asyncWrapper(async () => {
		const { data } = (await axios.get("/post")) as IApiRes;
		return data;
	});

export const createPost = (post: IPost) =>
	asyncWrapper(async () => {
		const { data } = (await axios.post("/post", post, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
        toast.success(data.message)
		return data;
	});

export const editPost = (post: IPost) =>
	asyncWrapper(async () => {
		const { data } = (await axios.patch("/post", post, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		return data;
	});

export const deletePost = (postId: string) =>
	asyncWrapper(async () => {
		const { data } = (await axios.delete(`/post/${postId}`, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
        toast.success(data.message)
		return data;
	});
