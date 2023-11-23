import { toast } from "react-toastify";
import IApiRes from "../types/response";
import IUser from "../types/user";
import axios from "./axios";
import { addUserToLocalStorage } from "../utils/handleUser";
import config from "./config";

export const getLoggedInUser = async () => {
	try {
		const { data } = (await axios.get("/me", config)) as IApiRes;
		addUserToLocalStorage(data.user);
		return data;
	} catch (error) {
		const { response } = error as IApiRes;
		console.log(response.data);
		return response.data;
	}
};

export const updateUser = async (user: IUser) => {
	try {
		const { data } = (await axios.patch("/me", user, config)) as IApiRes;

		addUserToLocalStorage(data.user);
		toast.success(data.message);

		return data;
	} catch (error) {
		const { response } = error as IApiRes;
		console.log(response.data);
		return response.data;
	}
};
