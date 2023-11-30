interface IComment {
	userName: string;
	avatar: string;
	content: string;
}

export default interface IPost {
    _id: string;
	userId: string;
	userName: string;
	avatar: string;
	content: string;
	image: string;
	liked: string[];
	saved: string[];
	comments: IComment[];
}
