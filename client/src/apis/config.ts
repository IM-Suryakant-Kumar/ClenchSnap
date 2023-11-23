import { getTokenFromLocalStorage } from "../utils/handleToken";

const config = {
	headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
};

export default config;
