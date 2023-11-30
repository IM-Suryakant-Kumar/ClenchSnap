import { Document } from "mongoose";

type TUser = {
	fullname: string;
	username: string;
	email: string;
	avatar: string;
	bio: string;
	website: string;
	password: string;
    followers: string[];
    followings: string[];
};

export default interface IUser extends TUser, Document {
	comparePassword: (candidatePassword: string) => Promise<boolean>;
	createJWTToken: () => string;
}
