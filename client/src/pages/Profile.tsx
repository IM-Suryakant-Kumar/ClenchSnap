import { Link, useParams } from "react-router-dom";
import ProfilePic from "../components/ProfilePic";
import { useUser } from "../contexts";

const Profile = () => {
	const { username } = useParams() as { username: string };

	const {
		userState: { user, users },
		getAllUser,
	} = useUser();

	!users &&
		(async () => {
			await getAllUser();
		})();

	const newUser = users?.find((item) => item.username === username);

	return (
		<div className="sm:max-w-[80%] m-auto">
			<div className="flex py-[1em]">
				<div className="w-[35%] flex justify-center items-center">
						<ProfilePic
							width="4.6rem"
							height="4.6rem"
							size="2rem"
							name={`${newUser?.username}`}
							avatar={`${newUser?.avatar}`}
						/>
				</div>
				<div className="w-[65%] flex items-start">
					<div className="flex flex-col">
						{user?.username === username && (
							<Link
								to="/host/settings"
								className="text-xs border-2 border-secondary-cl mr-[1em] sm:m-0 px-[1em] py-[0.2em] rounded-lg text-primary-cl bg-logo-cl self-end"
							>
								Edit Profile
							</Link>
						)}
						<h1 className="text-lg sm:text-2xl font-semibold mt-[0.5em]">
							{newUser?.fullname}
						</h1>
						<h2 className="text-sm sm:text-lg font-normal -mt-[0.5em]">
							@{newUser?.username}
						</h2>
						<p className="mt-[0.8em] mb-[0.01em] text-sm sm:text-lg">
							{newUser?.bio}
						</p>
						<a
							href={newUser?.website}
							className="text-blue-400 text-xs sm:text-sm"
						>
							{newUser?.website}
						</a>
					</div>
				</div>
			</div>
			<hr className="h-[2px] bg-gray-400 sm:mt-[1em]" />
		</div>
	);
};

export default Profile;
