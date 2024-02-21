import axios from "axios";

export const clodinary = async (file: File) => {
	try {
		const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
		const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;
		const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", UPLOAD_PRESET);

		const res = await axios.post(url, data);
		return res.data.secure_url;
	} catch (error) {
		// console.log(error);
	}
};

export const postCloudinary = async (file: File) => {
	try {
		const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
		const UPLOAD_PRESET = import.meta.env.VITE_POST_UPLOAD_PRESET;
		const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
		const data = new FormData();
		data.append("file", file);
		data.append("upload_preset", UPLOAD_PRESET);

		const res = await axios.post(url, data);
		return res.data.secure_url;
	} catch (error) {
		// console.log(error);
	}
};
