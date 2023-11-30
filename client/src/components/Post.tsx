import { Link } from "react-router-dom";
import IPost from "../types/post";
import ProfilePic from "./ProfilePic";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { MdBookmark, MdOutlineBookmarkBorder } from "react-icons/md";
import { usePost } from "../contexts";
import { toast } from "react-toastify";

type Props = {
	post: IPost;
};

const Post: React.FC<Props> = ({ post }) => {
	const { updatePost } = usePost();

	const handleLike = async () => {
		await updatePost({
			_id: post._id,
			isLiked: !post.isLiked,
			Likes: !post.isLiked ? post.Likes + 1 : post.Likes - 1,
		} as IPost);
		toast.success("Successfully Liked!");
	};

	const handleSave = async () => {
		await updatePost({ _id: post._id, isSaved: !post.isSaved } as IPost);
		toast.success("Successfully Saved!");
	};

	return (
		<div className="w-[95%] mx-auto bg-secondary-cl mb-[1em] rounded-lg">
			<div className="flex items-center p-[0.5em]">
				<Link
					to={`/host/profile/${post.userId}`}
					className="flex items-center">
					<ProfilePic
						width="2rem"
						height="2rem"
						size="1rem"
						name={post.userName}
						avatar={post.avatar}
					/>
					<h1 className="ml-[1em] font-medium text-md">
						{post.userName}
					</h1>
				</Link>
				<div className="ml-auto cursor-pointer text-md">
					<HiOutlineDotsVertical />
				</div>
			</div>
			<p className="p-[0.5em]">
				{post.content.length >= 100
					? post.content.substring(0, 99) + "..."
					: post.content}
			</p>
			{post.image && (
				<div className="my-[0.5em] border-[1px] border-gray-400">
					<img
						className="w-full h-full object-cover"
						src={post.image}
						alt=""
					/>
				</div>
			)}
			<div className="p-[0.5em] flex items-center text-xl">
				<div onClick={handleLike}>
					{post.isLiked ? <FaHeart /> : <FaRegHeart />}
				</div>{" "}
				<p className="text-[1rem] font-normal ml-[0.5em]">
					{post.Likes}
				</p>
				<div className="ml-[1em]">
					<FaRegComment />
				</div>
				<p className="text-[1rem] font-normal ml-[0.5em]">
					{post.comments.length}
				</p>
				<div
					className="ml-auto"
					onClick={handleSave}>
					{post.isSaved ? (
						<MdBookmark />
					) : (
						<MdOutlineBookmarkBorder />
					)}
				</div>
			</div>
		</div>
	);
};

export default Post;
