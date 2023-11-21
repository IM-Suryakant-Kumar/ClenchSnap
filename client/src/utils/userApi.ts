import IApiRes, { IApiError } from "../types/response";
import axios from "./axios";
import { getTokenFromLocalStorage } from "./handleToken";
import { addUserToLocalStorage } from "./handleUser";

export const getLoggedInUser = async () => {
	try {
		const { data } = (await axios.get("/me", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		addUserToLocalStorage(data.user);
		return data;
	} catch (error) {
		const {
			response: { data },
		} = error as IApiError;
		console.log(data);
		return data;
	}
};
