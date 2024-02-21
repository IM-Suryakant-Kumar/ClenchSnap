import axios from "./axios";
import { getTokenFromLocalStorage } from "../utils/handleToken";
import { asyncWrapper } from "../utils";
import { IApiRes, IUser } from "../types";

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
