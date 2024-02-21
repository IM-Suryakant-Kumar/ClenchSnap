export interface IUser {
	_id: string;
	fullname: string;
	username: string;
	email: string;
	password: string;
	avatar: string;
	bio: string;
	website: string;
	followers: string[];
	followings: string[];
}
