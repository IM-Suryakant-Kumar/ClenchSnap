import IApiRes, { TData } from "../types/response";

const asyncWrapper = (fn: () => Promise<TData>) => {
	return async () => {
		try {
			await fn();
		} catch (error) {
			const { response } = error as IApiRes;
			console.log(response.data);
			return response.data;
		}
	};
};

export default asyncWrapper;
