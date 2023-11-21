import { MdOutlineModeEditOutline } from "react-icons/md";
import ProfilePic from "../components/ProfilePic";
import { useLoading, useUser } from "../contexts";
import IUser from "../types/user";
import { useNavigate } from "react-router-dom";
import loadingWrapper from "../utils/loadingWrapper";

const Setting = () => {
	const navigate = useNavigate();
	const {
		userState: { user },
		getLogout,
		getProfile,
		updateProfile,
	} = useUser();
	const {
		loadingState: { loading },
		loadingStart,
		loadingStop,
	} = useLoading();

	const { name, email, avatar } = user as IUser;

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		console.log(name, email);
	};

	const handleLogout = async () => {
		const fn = async () => {
			await getLogout();
		};
		loadingWrapper(loadingStart, loadingStop, fn);
		navigate("/");
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
						size="2.5rem"
						name={name}
						avatar={avatar}
					/>
					<input
						className="w-[1.5rem] h-[1.5rem] absolute bottom-[0.5em] right-[0.5em] rounded-full opacity-0"
						type="file"
						name="avatar"
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
					defaultValue={name}
				/>
			</label>
			<label className="w-[80%] max-w-[16rem]">
				Email:
				<input
					className="ml-[1em] outline-none border-2 border-logo-cl rounded-xl pl-[0.4em] bg-inherit"
					type="email"
					name="email"
					defaultValue={email}
				/>
			</label>
			<button
				type="submit"
				className="w-[80%] h-[2rem] max-w-[16rem] bg-logo-cl text-primary-cl rounded-lg mt-[2.5em] -mb-[0.4em]"
			>
				SAVE
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
