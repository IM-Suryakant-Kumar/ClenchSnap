import IUser from "../types/user";

// add user
export const addUserToLocalStorage = (user: IUser) => {
	localStorage.setItem("user", JSON.stringify(user));
};
// remove user
export const removeUserFromLocalStorage = () => {
	localStorage.removeItem("user");
};
// get user
export const getUserFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("user") as string);
};
