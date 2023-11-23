import { Schema, model } from "mongoose";
import IUser from "user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema: Schema = new Schema(
	{
		fullname: {
			type: String,
			required: [true, "fullname is required"],
			maxlength: 20,
			minlength: 3,
		},
		username: {
			type: String,
			required: [true, "username is required"],
			unique: true,
            maxlength: 20,
            minlength: 3
		},
		email: {
			type: String,
			required: [true, "email is required"],
			unique: true,
		},
		password: { type: String, required: [true, "password is required"] },
		avatar: { type: String },
		bio: { type: String },
		website: { type: String },
	},
	{ timestamps: true },
);

UserSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (
	candidatePassword: string,
) {
	return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.createJWTToken = function () {
	const JWT_SECRET: string = process.env.JWT_SECRET;
	const JWT_LIFETIME: string = process.env.JWT_LIFETIME;
	return jwt.sign({ _id: this._id }, JWT_SECRET, { expiresIn: JWT_LIFETIME });
};

export default model<IUser>("User", UserSchema);
