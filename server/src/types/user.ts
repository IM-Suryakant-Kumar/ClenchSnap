import { Document } from "mongoose";
import { type } from "os";

export type User = {
	name: string;
	email: string;
	avatar: string;
	password: string;
};

export default interface IUser extends User, Document {
    role?: string;
	comparePassword: (candidatePassword: string) => Promise<boolean>;
	createJWTToken: () => string;
}
