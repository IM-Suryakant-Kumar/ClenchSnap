import { toast } from "react-toastify";
import IApiRes from "../types/response";
import axios from "./axios";
import {
	AddTokenToLocalStorage,
	removeTokenFromLocalStorage,
} from "../utils/handleToken";
import { removeUserFromLocalStorage } from "../utils/handleUser";
import config from "./config";
import asyncWrapper from "../utils/asyncWrapper";
import IUser from "../types/user";

// login
export const login = (logCred: IUser) =>
	asyncWrapper(async () => {
		const { data } = (await axios.post("/auth/login", logCred)) as IApiRes;
		AddTokenToLocalStorage(data.token);
		toast.success(data.message);
		return data;
	});
// guest login
export const guestLogin = async () =>
	asyncWrapper(async () => {
		const { data } = (await axios.get("/auth/guest-login")) as IApiRes;
		AddTokenToLocalStorage(data.token);
		toast.success(data.message);
		return data;
	});
// signup
export const signup = async (regCred: IUser) =>
	asyncWrapper(async () => {
		const { data } = (await axios.post(
			"/auth/register",
			regCred,
		)) as IApiRes;
		AddTokenToLocalStorage(data.token);
		toast.success(data.message);
		return data;
	});
// logout
export const logout = async () =>
	asyncWrapper(async () => {
		const { data } = (await axios.get("/auth/logout", config)) as IApiRes;
		removeTokenFromLocalStorage();
		removeUserFromLocalStorage();
		toast.success(data.message);
		return data;
	});
