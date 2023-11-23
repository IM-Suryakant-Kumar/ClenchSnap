import { toast } from "react-toastify";
import IApiRes from "../types/response";
import IUser from "../types/user";
import axios from "./axios";
import { getTokenFromLocalStorage } from "../utils/handleToken";
import { addUserToLocalStorage } from "../utils/handleUser";

export const getLoggedInUser = async () => {
	try {
		const { data } = (await axios.get("/me", {
			headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
		})) as IApiRes;
		addUserToLocalStorage(data.user);
		return data;
	} catch (error) {
		const { response } = error as IApiRes;
		console.log(response.data);
		return response.data;
	}
};

export const updateUser = async ({ name, email, avatar }: IUser) => {
	try {
		const { data } = (await axios.patch(
			"/me",
			{ name, email, avatar },
			{
				headers: {
					Authorization: `Bearer ${getTokenFromLocalStorage()}`,
				},
			},
		)) as IApiRes;
		addUserToLocalStorage(data.user);
		toast.success(data.message);
		return data;
	} catch (error) {
		const { response } = error as IApiRes;
		console.log(response.data);
		return response.data;
	}
};
