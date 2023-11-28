import IPost from "../types/post";
import IApiRes from "../types/response";
import asyncWrapper from "../utils/asyncWrapper";
import { getTokenFromLocalStorage } from "../utils/handleToken";
import axios from "./axios";

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
		return data;
	});

export const editPost = (post: IPost) =>
	asyncWrapper(async () => {
		const { data } = (await axios.patch("/post", post, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		return data;
	});
