import { useParams } from "react-router-dom";
import { useLoading, usePost, useUser } from "../contexts";
import { default as PostC } from "../components/Post";
import IPost from "../types/post";
import ProfilePic from "../components/ProfilePic";
import loadingWrapper from "../utils/loadingWrapper";
import { useState } from "react";

const Post = () => {
	const { postId } = useParams() as { postId: string };

	const {
		loadingState: { submitting },
		submittingStart,
		submittingStop,
	} = useLoading();

	const {
		postState: { posts },
		updatePost,
	} = usePost();

	const {
		userState: { user },
	} = useUser();

	const [content, setContent] = useState<string>("");

	const post = posts?.find(post => post._id === postId) as IPost;

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const fn = async () => {
			const formData = new FormData(e.currentTarget);
			const comment = {
				userName: user?.fullname,
				avatar: user?.avatar,
				content: formData.get("content") as string,
			};

			await updatePost({
				_id: post._id,
				comments: [...post.comments, comment],
			} as IPost);
			// erase content
			setContent("");
		};

		loadingWrapper(submittingStart, submittingStop, fn);
	};

	console.log("Post page render!");

	return (
		<div className="max-w-[40rem] mx-auto mt-[7em] sm:mt-[5em]">
			{post && <PostC post={post} />}
			<div className="w-[95%] h-[3rem] mx-auto bg-secondary-cl flex items-center">
				<div className="w-[10%] min-w-[3rem] flex justify-center">
					<ProfilePic
						width="2rem"
						height="2rem"
						size="0,8rem"
						avatar={user?.avatar as string}
						name={user?.fullname as string}
					/>
				</div>
				<form
					onSubmit={handleSubmit}
					className="w-[90%] flex items-center gap-[0.5em]">
					<input
						className="w-[80%] h-[1.5rem] outline-none border-[1px] border-logo-cl rounded-md pl-[0.5em] text-sm"
						type="text"
						name="content"
						placeholder="comment as"
						value={content}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setContent(e.target.value)
						}
						required
					/>
					<button
						className="w-[20%] ml-auto mr-[0.5em] bg-logo-cl text-primary-cl h-[1.5rem] text-sm rounded-md px-[0.4em] "
						disabled={submitting}>
						{submitting ? "sending..." : "Send"}
					</button>
				</form>
			</div>
			{post && (
				<div className="w-[95%] pb-[3em] mx-auto bg-secondary-cl mt-[0.5em] flex flex-col justify-center">
					{post.comments.map((c, idx) => (
						<div
							key={idx}
							className="py-[0.5em] border-b-[1px] border-logo-cl flex">
							<div className="w-[10%] min-w-[3rem] flex justify-center">
								<ProfilePic
									width="2rem"
									height="2rem"
									size="0.8rem"
									avatar={c.avatar as string}
									name={c.userName as string}
								/>
							</div>
							<div className="pl-[0.5em]">
								<p className="text-md">{c.userName}</p>
								<p className="text-sm">{c.content}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Post;
