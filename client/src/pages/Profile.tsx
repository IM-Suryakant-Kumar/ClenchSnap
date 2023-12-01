import { Link, Outlet, useParams } from "react-router-dom";
import ProfilePic from "../components/ProfilePic";
import { usePost, useUser } from "../contexts";
import { NavLink } from "react-router-dom";

const Profile = () => {
	const { username } = useParams() as { username: string };

	const {
		userState: { user, users },
		getAllUser,
	} = useUser();

	const {
		postState: { posts },
	} = usePost();

	!users &&
		(async () => {
			await getAllUser();
		})();

	const newUser = users?.find(
		item => item.username === username || item._id === username,
	);

	const newUserPosts = posts?.filter(p => p.userId === newUser?._id);
	const newUserLikedPosts = posts?.filter(p =>
		p.liked.includes(newUser?._id as string),
	);
	const newUserSavedPosts = posts?.filter(p =>
		p.saved.includes(newUser?._id as string),
	);

	// console.log(newUserPosts);
	// console.log(newUserLikedPost);
	// console.log(newUserSavedPost);

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
								className="text-xs border-2 border-secondary-cl mr-[1em] sm:m-0 px-[1em] py-[0.2em] rounded-lg text-primary-cl bg-logo-cl self-end">
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
							className="text-blue-400 text-xs sm:text-sm">
							{newUser?.website}
						</a>
						{/* activity section */}
						<div className="mt-[0.5em]">
							<span className="mr-[1em] text-xs sm:text-sm">{`${
								newUserPosts?.length
							} ${
								(newUserPosts?.length as number) > 1
									? " posts"
									: " post"
							}`}</span>
							<span className="mr-[1em] text-xs sm:text-sm">{`${
								newUser?.followers?.length
							} ${
								(newUser?.followers?.length as number) > 1
									? " followers"
									: " follower"
							}`}</span>
							<span className="text-xs sm:text-sm">{`${
								newUser?.followings?.length
							} ${
								(newUser?.followings?.length as number) > 1
									? " followings"
									: " following"
							}`}</span>
						</div>
					</div>
				</div>
			</div>
			<hr className="h-[2px] bg-gray-400" />
			{/* main section */}
			<div className="max-w-[40rem] mx-auto mt-[0.5em]">
				<nav className="profile-nav flex justify-evenly">
					<NavLink to="posts">Posts</NavLink>
					<NavLink to="liked">Liked</NavLink>
					<NavLink to="saved">Saved</NavLink>
				</nav>
			</div>
			{/* outlet */}
			<div className="w-[95%] max-w-[35rem] mx-auto mt-[1.5em] pb-[1em]">
				<Outlet
					context={{
						posts: newUserPosts,
						likedPosts: newUserLikedPosts,
						savedPosts: newUserSavedPosts,
					}}
				/>
			</div>
		</div>
	);
};

export default Profile;
