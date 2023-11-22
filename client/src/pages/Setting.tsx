import { MdOutlineModeEditOutline } from "react-icons/md";
import ProfilePic from "../components/ProfilePic";
import { useLoading, useUser } from "../contexts";
import IUser from "../types/user";
import { useNavigate } from "react-router-dom";
import loadingWrapper from "../utils/loadingWrapper";
import { useState } from "react";
import axios from "axios";

const Setting = () => {
	const navigate = useNavigate();
	const {
		userState: { user },
		getLogout,
		getProfile,
		updateProfile,
	} = useUser();
	const {
		loadingState: { loading, submitting },
		loadingStart,
		loadingStop,
		submittingStart,
		submittingStop,
	} = useLoading();

	const [imagePreview, setImagePreview] = useState<string>(
		user?.avatar || "",
	);

	const handleImagePreview = async (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const fileList = e.target.files as FileList;
		const file = fileList[0];
		setImagePreview(URL.createObjectURL(file));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const fn = async () => {
			try {
				const formData = new FormData(e.currentTarget);
				const name = formData.get("name") as string;
				const email = formData.get("email") as string;
                let avatar: string = ""
				const file = formData.get("avatar") as File;
				console.log(name, email, avatar);

				if (
					file &&
					(file.type === "image/png" || "image/jpg" || "image/jpeg")
				) {
					const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
					const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;
					const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
					const data = new FormData();
					data.append("file", file);
					data.append("upload_preset", UPLOAD_PRESET);

					const res = await axios.post(url, data);
					avatar = res.data.secure_url;
				}

                await updateProfile({ name, email, avatar });
			} catch (error) {
				console.log(error);
			}
		};

		loadingWrapper(submittingStart, submittingStop, fn);
	};

	const handleLogout = async () => {
		const fn = async () => {
			await getLogout();
			navigate("/");
		};
		loadingWrapper(loadingStart, loadingStop, fn);
	};

	return (
		<form
			className="text-center flex flex-col items-center gap-[1.5em]"
			onSubmit={handleSubmit}
		>
			<div className="w-[80%] max-w-[16rem] h-[6rem] flex justify-center items-center mb-[2em]">
				<div className="w-[4.5rem] h-[4.5rem] relative z-0">
					<ProfilePic
						width="4.5rem"
						height="4.5rem"
						size="2rem"
						name={user?.name as string}
						avatar={imagePreview}
					/>
					<input
						className="w-[1.5rem] h-[1.5rem] absolute bottom-[0.5em] right-[0.5em] z-10 rounded-full opacity-0"
						type="file"
						name="avatar"
						onChange={handleImagePreview}
					/>
					<div className="w-[1.5rem] h-[1.5rem] absolute bottom-[0.4em] right-[0.4em] rounded-full bg-secondary-cl text-logo-cl flex justify-center items-center">
						<MdOutlineModeEditOutline size="1rem" />
					</div>
				</div>
			</div>

			<label className="w-[80%] max-w-[16rem]">
				Name:
				<input
					className="ml-[1em] outline-none border-2 border-logo-cl rounded-xl pl-[0.4em] bg-inherit"
					type="text"
					name="name"
					defaultValue={user?.name}
				/>
			</label>
			<label className="w-[80%] max-w-[16rem]">
				Email:
				<input
					className="ml-[1em] outline-none border-2 border-logo-cl rounded-xl pl-[0.4em] bg-inherit"
					type="email"
					name="email"
					defaultValue={user?.email}
				/>
			</label>
			<button
				type="submit"
				className="w-[80%] h-[2rem] max-w-[16rem] bg-logo-cl text-primary-cl rounded-lg mt-[2.5em] -mb-[0.4em]"
				disabled={submitting}
			>
				{submitting ? "SAVING..." : "SAVE"}
			</button>
			<button
				className="w-[80%] h-[2rem] max-w-[16rem] bg-logo-cl text-primary-cl rounded-lg"
				onClick={handleLogout}
				disabled={loading}
			>
				{loading ? "Logging out..." : "Logout"}
			</button>
		</form>
	);
};

export default Setting;
