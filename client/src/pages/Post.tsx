import { useParams } from "react-router-dom";
import { usePost, useUser } from "../contexts";
import { default as PostC } from "../components/Post";
import IPost from "../types/post";

const Post = () => {
	const { postId } = useParams() as { postId: string };

	const {
		postState: { posts },
	} = usePost();
	const {
		userState: { user },
		getProfile,
	} = useUser();

	!user && getProfile();

	const post = posts?.find(post => post._id === postId) as IPost;

	return <PostC post={post} />;
};

export default Post;
