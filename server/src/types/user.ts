import { Document } from "mongoose";
import { type } from "os";

export type User = {
	name: string;
	email: string;
	avatar: string;
	password: string;
};

export default interface IUser extends User, Document {
    comparePassword: (candidatePassword: string) => boolean;
    createJWTToken: () => string;
}
