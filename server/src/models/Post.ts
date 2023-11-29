import { Schema, model } from "mongoose";
import IPost from "post";

const PostSchema = new Schema<IPost>(
	{
		userId: { type: String, required: true },
		content: { type: String, required: true },
		image: { type: String, default: null },
	},
	{ timestamps: true },
);

export default model<IPost>("Post", PostSchema);
