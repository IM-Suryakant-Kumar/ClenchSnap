import { toast } from "react-toastify";
import IApiRes from "../types/response";
import IUser from "../types/user";
import axios from "./axios";
import { addUserToLocalStorage } from "../utils/handleUser";
import config from "./config";
import asyncWrapper from "../utils/asyncWrapper";

export const getLoggedInUser = async () => {
	asyncWrapper(async () => {
		const { data } = (await axios.get("/user/me", config)) as IApiRes;
		addUserToLocalStorage(data.user);
		return data;
	});
};

export const updateUser = async (user: IUser) => {
	asyncWrapper(async () => {
		const { data } = (await axios.patch("/user/me", user, config)) as IApiRes;
		addUserToLocalStorage(data.user);
		toast.success(data.message);
		return data;
	});
};
