import { useParams } from "react-router-dom";
import { usePost, useUser } from "../contexts";
import { default as PostC } from "../components/Post";
import IPost from "../types/post";

const Post = () => {
	const { postId } = useParams() as { postId: string };

	const {
		postState: { posts },
	} = usePost();

	const post = posts?.find(post => post._id === postId) as IPost;

	return (
		<div className="max-w-[40rem] mx-auto mt-[7em] sm:mt-[5em]">
			{post && <PostC post={post} />}
		</div>
	);
};

export default Post;
