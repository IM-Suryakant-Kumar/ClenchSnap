import { createContext, useContext, useMemo, useReducer } from "react";
import { IPostState } from "../types/statesAndActions";
import { postInitialState, postReducer } from "../reducers/post";
import {
	getAllPosts,
	createPost as createPostApi,
	editPost,
	deletePost as deletePostApi,
} from "../apis/post";
import IPost from "../types/post";

interface IPostContext {
	postState: IPostState;
	getPosts: () => Promise<void>;
	createPost: (post: IPost) => Promise<void>;
	updatePost: (post: IPost) => Promise<void>;
	deletePost: (postId: string) => Promise<void>;
}

const PostContext = createContext<IPostContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const PostContextProvider: React.FC<Props> = ({ children }) => {
	const [postState, postDispatch] = useReducer(postReducer, postInitialState);

	const memoizedState = useMemo(() => postState, [postState]);

	const getPosts = async () => {
		const data = await getAllPosts();
		data.success &&
			postDispatch({
				type: "GET_POSTS",
				payload: data.posts,
			});
	};

	const createPost = async (post: IPost) => {
		const data = await createPostApi(post);
        const postData = await getAllPosts()
        data.success && postDispatch({
            type: "CREATE_POST",
            payload: postData.posts
        })
	};

	const updatePost = async (post: IPost) => {
		const data = await editPost(post);
        data.success && postDispatch({
            type: "UPDATE_POST",
            payload: data.posts
        })
	};

	const deletePost = async (postId: string) => {
		const data = await deletePostApi(postId);
        data.success && postDispatch({
            type: "DELETE_POST",
            payload: data.posts
        })
	};

	const providerItem = { postState: memoizedState, getPosts, createPost, updatePost, deletePost };

	return (
		<PostContext.Provider value={providerItem}>
			{children}
		</PostContext.Provider>
	);
};

const usePost = () => useContext(PostContext) as IPostContext

export { PostContextProvider, usePost  }
