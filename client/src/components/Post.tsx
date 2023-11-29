import { Link } from "react-router-dom";
import IPost from "../types/post";
import ProfilePic from "./ProfilePic";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { MdBookmark, MdOutlineBookmarkBorder } from "react-icons/md";

type Props = {
	post: IPost;
};

const Post: React.FC<Props> = ({ post }) => {
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
				{(post.content.length >= 100)
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
				<div>{post.isLiked ? <FaHeart /> : <FaRegHeart />}</div>{" "}
				<p className="text-[1rem] font-normal ml-[0.5em]">
					{post.Likes}
				</p>
				<div className="ml-[1em]">
					<FaRegComment />
				</div>
				<div className="ml-auto">
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
