import { config } from "dotenv";
import { v2 as cloudinary } from "cloudinary";

config();
const CLOUD_NAME: string = process.env.CLOUD_NAME;
const API_KEY: string = process.env.API_KEY;
const API_SECRET: string = process.env.API_SECRET;

cloudinary.config({
	cloud_name: CLOUD_NAME,
	api_key: API_KEY,
	api_secret: API_SECRET,
	secure: true,
});

export default cloudinary;
