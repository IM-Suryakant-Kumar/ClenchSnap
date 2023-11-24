import { Link } from "react-router-dom";
import ProfilePic from "../components/ProfilePic";
import { useUser } from "../contexts";

const Profile = () => {
	const {
		userState: { user },
	} = useUser();

	return (
		<div className="sm:max-w-[80%] m-auto">
			<div className="flex py-[1em]">
				<div className="w-[35%] flex justify-center items-center">
					<div className="max-w-[4.5rem] sm:max-w-[8rem] max-h-[4.5rem] sm:max-h-[8rem] flex">
						<ProfilePic
							width="10rem"
							height="10ren"
							size="2rem"
							name={`${user?.fullname}`}
							avatar={`${user?.avatar}`}
						/>
					</div>
				</div>
				<div className="w-[65%] flex flex-col items-start sm:items-end">
					<Link
						to="/host/settings"
						className="text-xs border-2 border-secondary-cl px-[1em] py-[0.2em] rounded-lg text-primary-cl bg-logo-cl self-end"
					>
						Edit Profile
					</Link>
					<h1 className="text-lg sm:text-2xl font-semibold mt-[0.5em]">
						{user?.fullname}
					</h1>
					<h2 className="text-sm sm:text-lg font-normal -mt-[0.5em]">
						@{user?.username}
					</h2>
					<p className="mt-[0.8em] mb-[0.01em] text-sm sm:text-lg">
						{user?.bio}
					</p>
					<a
						href={user?.website}
						className="text-blue-400 text-xs sm:text-sm"
					>
						{user?.website}
					</a>
				</div>
			</div>
			<hr className="h-[2px] bg-gray-400 sm:mt-[1em]" />
		</div>
	);
};

export default Profile;
