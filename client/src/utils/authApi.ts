import { toast } from "react-toastify";
import IApiRes, { IApiError } from "../types/response";
import { ILogCred, IRegCred } from "../types/user";
import axios from "./axios";
import {
	AddTokenToLocalStorage,
	getTokenFromLocalStorage,
	removeTokenFromLocalStorage,
} from "./handleToken";
import { removeUserFromLocalStorage } from "./handleUser";

// login
export const login = async (logCred: ILogCred) => {
	try {
		const { data } = (await axios.post("/login", logCred)) as IApiRes;
		AddTokenToLocalStorage(data.token);
		toast.success(data.message);
		return data;
	} catch (error) {
		const {
			response: { data },
		} = error as IApiError;
		console.log(data);
		return data;
	}
};
// guest login
export const guestLogin = async () => {
	try {
		const { data } = (await axios.get("/guest-login")) as IApiRes;
		AddTokenToLocalStorage(data.token);
		toast.success(data.message);
		return data;
	} catch (error) {
		const {
			response: { data },
		} = error as IApiError;
		console.log(data);
		return data;
	}
};
// signup
export const signup = async (regCred: IRegCred) => {
	try {
		const { data } = (await axios.post("/register", regCred)) as IApiRes;
		AddTokenToLocalStorage(data.token);
		toast.success(data.message);
		return data;
	} catch (error) {
		const {
			response: { data },
		} = error as IApiError;
		console.log(data);
		return data;
	}
};
// logout
export const logout = async () => {
	try {
		const { data } = (await axios.get("/logout", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		removeTokenFromLocalStorage();
		removeUserFromLocalStorage();
		toast.success(data.message);
		return data;
	} catch (error) {
		const {
			response: { data },
		} = error as IApiError;
		console.log(data);
		return data;
	}
};
