import { useOutletContext } from "react-router-dom";
import IPost from "../types/post";
import Post from "../components/Post";


const ProfileSavedPost = () => {
    const { savedPosts } = useOutletContext() as { savedPosts: IPost[] };

	return (
		<div>
			{savedPosts && (
				<div>
					{savedPosts.map((post, idx) => (
						<Post
							key={idx}
							post={post}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default ProfileSavedPost