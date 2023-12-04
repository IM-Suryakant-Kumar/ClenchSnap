import IApiRes from "../types/response";
import IUser from "../types/user";
import axios from "./axios";
import asyncWrapper from "../utils/asyncWrapper";
import { getTokenFromLocalStorage } from "../utils/handleToken";

export const getLoggedInUser = async () =>
	asyncWrapper(async () => {
		const { data } = (await axios.get("/user/me", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		return data;
	});

export const updateUser = async (user: IUser) =>
	asyncWrapper(async () => {
		const { data } = (await axios.patch("/user/me", user, {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		return data;
	});

export const getAllusers = async () =>
	asyncWrapper(async () => {
		const { data } = (await axios.get("/user")) as IApiRes;
		return data;
	});
