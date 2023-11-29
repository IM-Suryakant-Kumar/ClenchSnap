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
	isLiked: boolean;
	isSaved: boolean;
	Likes: number;
	comments: IComment[];
}
