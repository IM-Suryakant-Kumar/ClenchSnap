import { IApiRes, TData } from "../types";

export const asyncWrapper = async (fn: () => Promise<TData>) => {
	try {
		return await fn();
	} catch (error) {
		const { response } = error as IApiRes;
		return response.data;
	}
};
