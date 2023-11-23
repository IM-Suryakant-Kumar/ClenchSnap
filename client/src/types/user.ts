export default interface IUser {
    fullname: string;
	username: string;
	email: string;
	avatar: string;
	bio: string;
	website: string;
}

export interface ILogCred {
    email: string;
    password: string;
}

export interface IRegCred {
    name: string;
    email: string;
    avatar?: string;
    password: string;
}