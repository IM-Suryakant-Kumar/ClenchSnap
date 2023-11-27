import { Link } from "react-router-dom";
import { useUser } from "../contexts";
import ProfilePic from "./ProfilePic";

const RightSidebar = () => {
	const {
		userState: { users, user },
		getAllUser,
	} = useUser();
	!users && (async () => getAllUser())();

	const usersLength = users?.length || 0;

	const randomIdx = Math.floor(Math.random() * usersLength);
	const startIdx = randomIdx === usersLength ? randomIdx - 8 : randomIdx / 2;
	const endIdx = startIdx + 8;

	const filteredUsers = users?.filter((item) => item._id !== user?._id);
	// console.log("first")

	return (
		<div className="hidden md:block fixed top-[5em] right-0 z-20 p-2">
			<p className="text-lg text-center text-gray-400">You might like</p>
			{filteredUsers?.slice(startIdx, endIdx).map((item, idx) => (
				<div
					key={idx}
					className="flex items-center justify-between gap-[0.5em] border-b-[1px] border-gray-400 text-logo-cl"
				>
					<Link
						to={`/host/profile/${item._id}`}
						className="flex items-center gap-[1em] my-[0.5em]"
					>
						<ProfilePic
							width="2.5rem"
							height="2.5rem"
							size="1em"
							name={item.fullname}
							avatar={item.avatar}
						/>
						<span>{item.fullname}</span>
					</Link>
					<button>Follow</button>
				</div>
			))}
		</div>
	);
};

export default RightSidebar;
