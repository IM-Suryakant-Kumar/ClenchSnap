import { useOutletContext } from "react-router-dom";
import IPost from "../types/post";
import Post from "../components/Post";

const ProfileLikedPost = () => {
	const { likedPosts } = useOutletContext() as { likedPosts: IPost[] };

	// console.log(posts);

	return (
		<div>
			{likedPosts && (
				<div>
					{likedPosts.map((post, idx) => (
						<Post
							key={idx}
							post={post}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default ProfileLikedPost;
