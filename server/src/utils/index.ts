import { Response } from "express";
import { IUser } from "user";

const sendToken = (user: IUser, statusCode: number, res: Response, message: string) => {
	const token: string = user.createJWTToken();
	const COOKIE_LIFETIME: number = parseInt(process.env.COOKIE_LIFETIME, 10);

	res.cookie("token", token, {
		maxAge:  COOKIE_LIFETIME * 24 * 60 * 60 * 1000,
        httpOnly: true
	})
		.status(statusCode)
		.json({ success: true, message, token });
};

export default sendToken;
