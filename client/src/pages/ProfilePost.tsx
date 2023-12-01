// const post

import { useOutletContext } from "react-router-dom";
import IPost from "../types/post";
import Post from "../components/Post";

const ProfilePost = () => {
	const { posts } = useOutletContext() as { posts: IPost[] };

	console.log(posts);

	return (
		<div>
			{posts && (
				<div>
					{posts.map((post, idx) => (
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

export default ProfilePost;
