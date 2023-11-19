import { IError } from "../types/response";
import { ILogCred, IRegCred } from "../types/user";
import axios from "./axios";

// login
export const login = async (logCred: ILogCred) => {
    try {
        const { data } = await axios.post("/login", logCred)
        return data
    } catch (error) {
        const { response: { data } } = error as IError
        console.log(data)
        return data
    }
}
// guest login
export const guestLogin = async () => {
    try {
        const { data } = await axios.get("/guest-login")
        return data
    } catch (error) {
        const { response: { data } } = error as IError
        console.log(data)
        return data
    }
}
// signup
export const signup = async (regCred: IRegCred) => {
    try {
        const { data } = await axios.post("/register", regCred)
        return data
    } catch (error) {
        const { response: { data } } = error as IError
        console.log(data)
        return data
    }
}
// logout
export const logout = async () => {
    try {
        const { data } = await axios.get("/logout")
        return data
    } catch (error) {
        const { response: { data } } = error as IError
        console.log(data)
        return data
    }
}