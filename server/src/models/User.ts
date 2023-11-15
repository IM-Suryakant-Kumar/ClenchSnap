import { Schema, model } from "mongoose";
import IUser from "user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema: Schema = new Schema(
	{
		name: { type: String, required: [true, "Please provide name"] },
		email: { type: String, required: [true, "Please provide email"] },
		avatar: { type: String },
		password: { type: String, required: [true, "Please provide password"] },
	},
	{ timestamps: true },
);

UserSchema.pre("save", async function () {
	if (!this.isModified("password")) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
	return await bcrypt.compare(candidatePassword, this.password);
};

UserSchema.methods.createJWTToken = function () {
	const JWT_SECRET: string = process.env.JWT_SECRET;
	const JWT_LIFETIME: string = process.env.JWT_LIFETIME;
	return jwt.sign({ _id: this._id }, JWT_SECRET, { expiresIn: JWT_LIFETIME });
};

export default model<IUser>("User", UserSchema);
