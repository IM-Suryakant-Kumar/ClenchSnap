import { useLoading, useUser } from "../contexts";
import IUser from "../types/user";
import loadingWrapper from "../utils/loadingWrapper";

type Props = {
	postUserId: string;
};

const ActionModal: React.FC<Props> = ({ postUserId }) => {
	const {
		userState: { user, users },
		updateProfile,
	} = useUser();
	const {
		loadingState: { loading },
		loadingStart,
		loadingStop,
	} = useLoading();

	const handleFollowing = async () => {
		const postUser = users?.find(item => item._id === postUserId);
		const fn = async () => {
			// followers
			const followers = postUser?.followers.includes(user?._id as string)
				? postUser.followers.filter(userId => userId !== user?._id)
				: [...(postUser?.followers as string[]), user?._id];

			await updateProfile({
				_id: postUser?._id,
				followers,
			} as IUser);

			// followings
			const followings = user?.followings.includes(postUserId)
				? user.followings.filter(userId => postUserId !== userId)
				: [...(user?.followings as string[]), postUserId];

			await updateProfile({
				_id: user?._id,
				followings,
			} as IUser);
		};

		loadingWrapper(loadingStart, loadingStop, fn);
	};

	return (
		<div className="w-[10rem] p-[0.2em] absolute top-[2.5em] right-[0.8em] bg-primary-cl shadow-md">
			{user?._id === postUserId && (
				<button className="w-full text-center hover:bg-secondary-cl py-[0.5em]">
					Edit
				</button>
			)}
			{user?._id === postUserId && (
				<button className="w-full text-center hover:bg-secondary-cl py-[0.5em]">
					Delete
				</button>
			)}
			{user?._id !== postUserId && (
				<button
					className="w-full text-center hover:bg-secondary-cl py-[0.5em]"
					onClick={handleFollowing}
					disabled={loading}>
					{user?.followings?.includes(postUserId)
						? "Following"
						: "follow"}
				</button>
			)}
		</div>
	);
};

export default ActionModal;
