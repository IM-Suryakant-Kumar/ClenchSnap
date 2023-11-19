import { IError } from "../types/response";
import axios from "./axios";
import { getTokenFromLocalStorage } from "./handleToken";

export const getLoggedInUser = async () => {
	try {
		const { data } = await axios.get("/me", {
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
