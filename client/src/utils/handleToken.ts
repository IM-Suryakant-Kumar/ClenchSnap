// add token
export const AddTokenToLocalStorage = (token: string) => {
	return localStorage.setItem("token", token);
};
// remove token
export const removeTokenFromLocalStorage = () => {
	return localStorage.removeItem("token");
};
// get token
export const getTokenFromLocalStorage = () => {
	return localStorage.getItem("token");
};
