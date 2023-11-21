import IRes, { IError } from "../types/response";
import axios from "./axios";
import { getTokenFromLocalStorage } from "./handleToken";
import { addUserToLocalStorage } from "./handleUser";

export const getLoggedInUser = async () => {
	try {
		const { data } = await axios.get("/me", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		});
		addUserToLocalStorage(data.user);
		return data as IRes;
	} catch (error) {
		const {
			response: { data },
		} = error as IError;
		console.log(data);
		return data;
	}
};
