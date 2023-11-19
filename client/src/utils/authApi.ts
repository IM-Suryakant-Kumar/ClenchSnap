import { IError } from "../types/response";
import { ILogCred, IRegCred } from "../types/user";
import axios from "./axios";
import {
	AddTokenToLocalStorage,
	getTokenFromLocalStorage,
} from "./handleToken";

// login
export const login = async (logCred: ILogCred) => {
	try {
		const { data } = await axios.post("/login", logCred);
		AddTokenToLocalStorage(data.token);
		return data;
	} catch (error) {
		const {
			response: { data },
		} = error as IError;
		console.log(data);
		return data;
	}
};
// guest login
export const guestLogin = async () => {
	try {
		const { data } = await axios.get("/guest-login");
		AddTokenToLocalStorage(data.token);
		return data;
	} catch (error) {
		const {
			response: { data },
		} = error as IError;
		console.log(data);
		return data;
	}
};
// signup
export const signup = async (regCred: IRegCred) => {
	try {
		const { data } = await axios.post("/register", regCred);
		AddTokenToLocalStorage(data.token);
		return data;
	} catch (error) {
		const {
			response: { data },
		} = error as IError;
		console.log(data);
		return data;
	}
};
// logout
export const logout = async () => {
	try {
		const { data } = await axios.get("/logout", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		return data;
	} catch (error) {
		const {
			response: { data },
		} = error as IError;
		console.log(data);
		return data;
	}
};
