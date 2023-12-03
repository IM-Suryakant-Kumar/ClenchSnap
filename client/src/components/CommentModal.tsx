/* eslint-disable no-mixed-spaces-and-tabs */
import { MdClose } from "react-icons/md";

import { useEffect, useState } from "react";
import loadingWrapper from "../utils/loadingWrapper";
import { useLoading, usePost } from "../contexts";
import IPost from "../types/post";

type Props = {
	handleCommentModal: () => void;
	commentToEdit: { userName: string; content: string };
	post: IPost;
};

const CommentModal: React.FC<Props> = ({
	handleCommentModal,
	commentToEdit,
	post,
}) => {
	const [currcontent, setCurrContent] = useState<string>("");

	const { updatePost } = usePost();

	const {
		loadingState: { submitting },
		submittingStart,
		submittingStop,
	} = useLoading();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const fn = async () => {
			const updatedComments = post.comments.map(c => {
				if (
					c.userName === commentToEdit.userName &&
					c.content === commentToEdit.content
				)
					return { ...c, content: currcontent };
				return c;
			});

			await updatePost({ _id: post._id, comments: updatedComments } as IPost);
			handleCommentModal();
		};

		loadingWrapper(submittingStart, submittingStop, fn);
	};

	useEffect(
		() => setCurrContent(commentToEdit.content),
		[commentToEdit.content],
	);

	return (
		<div className=" fixed left-0 top-0 right-0 bottom-0 z-50 bg-black bg-opacity-20 flex justify-center items-center">
			<div
				className={`w-[90%] max-w-[30rem] min-h-[10rem] pb-[1em] relative bg-secondary-cl
            `}>
				<div
					className="absolute top-0 right-0 w-[1.5rem] h-[1.5rem] flex justify-center items-center text-lg bg-primary-cl text-red-500 hover:bg-red-500 hover:text-primary-cl cursor-pointer
                "
					onClick={handleCommentModal}>
					<MdClose />
				</div>
				<form
					className="flex flex-col justify-center items-center rounded-md mt-[2em]"
					onSubmit={handleSubmit}>
					<textarea
						className="w-[90%] h-[4rem] outline-none  border-2  border-logo-cl rounded-md
                    "
						name="content"
						value={currcontent}
						required
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setCurrContent(e.target.value)
						}
						placeholder="What is happening?!"></textarea>
					{/* Action buttons */}
					<div className="relative w-[90%] mt-[2em] flex">
						<button
							className="ml-auto w-[10rem] h-[2rem] rounded-sm bg-logo-cl text-primary-cl cursor-pointer"
							disabled={submitting}>
							{submitting ? "Editing..." : "Edit Comment"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CommentModal;
