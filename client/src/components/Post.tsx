import { Link } from "react-router-dom";
import IPost from "../types/post";
import ProfilePic from "./ProfilePic";
import { HiOutlineDotsVertical } from "react-icons/hi";

type Props = {
	post: IPost;
};

const Post: React.FC<Props> = ({ post }) => {
	return (
		<div className="bg-secondary-cl my-[1em]">
			<div className="flex items-center">
				<Link to={`/host/profile/${post.userId}`}>
					<ProfilePic
						width="2rem"
						height="2rem"
						size="1rem"
						name={post.userName}
						avatar={post.avatar}
					/>
					<h1 className="ml-[1em]">{post.userName}</h1>
				</Link>
				<div className="ml-auto cursor-pointer text-md">
					<HiOutlineDotsVertical />
				</div>
			</div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Post;
