interface IComment {
	userName: string;
	avatar: string;
	content: string;
}

export default interface IPost {
	userId: string;
	userName: string;
	avatar: string;
	content: string;
	image: string;
	likeUIds: string[];
	isSaved: boolean;
	likes: number;
	comments: IComment[];
}
