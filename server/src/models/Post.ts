import { Schema, model } from "mongoose";
import IPost from "post";

const PostSchema = new Schema<IPost>(
	{
		userId: { type: String, required: true },
		userName: { type: String, required: true },
		avatar: { type: String, required: true },
		content: { type: String, required: true },
		image: { type: String, default: "" },
		isLiked: { type: Boolean, default: false },
		isSaved: { type: Boolean, default: false },
		Likes: { type: Number, default: 0 },
		comments: [
			{
				userName: { type: String, required: true },
				avatar: { type: String, required: true },
				content: { type: String, required: true },
			},
		],
	},
	{ timestamps: true },
);

export default model<IPost>("Post", PostSchema);
