import {
	MdClose,
	MdOutlineEmojiEmotions,
	MdOutlineImage,
} from "react-icons/md";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

import { useState } from "react";

type Props = {
	toggleModal: boolean;
	handleToggle: () => void;
};

const PostModal: React.FC<Props> = ({ toggleModal, handleToggle }) => {
	const [toggleEmojiPicker, setToggleEmojiPicker] = useState<boolean>(true);
	const [content, setContent] = useState<string>("");

	// toggle emoji
	const handleEmojiPicker = () => {
		setToggleEmojiPicker(prevState => !prevState);
	};

	const handleEmojiClick = (emojiData: EmojiClickData) => {
		setContent(prevContent => prevContent + emojiData.emoji);
		handleEmojiPicker();
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const content = formData.get("content") as File
        // const image = formData.get("image") as FileList
        // const contentImage = image[0]

        console.log(content)
        console.log(image)
	};

	return (
		<div
			className={`${
				toggleModal ? "hidden" : "block"
			} fixed left-0 top-0 right-0 bottom-0 z-50 bg-black bg-opacity-20 flex justify-center items-center`}>
			<div
				className={`w-[90%] max-w-[30rem] min-h-[13rem] pb-[1em] relative bg-secondary-cl
            `}>
				<div
					className="absolute top-0 right-0 w-[1.5rem] h-[1.5rem] flex justify-center items-center text-lg bg-primary-cl text-red-500 hover:bg-red-500 hover:text-primary-cl cursor-pointer
                "
					onClick={handleToggle}>
					<MdClose />
				</div>
				<form
					className="flex flex-col justify-center items-center rounded-md mt-[2em]"
					onSubmit={handleSubmit}>
					<textarea
						className="w-[90%] h-[4rem] outline-none  border-2  border-logo-cl rounded-md
                    "
						name="content"
						value={content}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setContent(e.target.value)
						}
						placeholder="What is happening?!"></textarea>
					{/* Action buttons */}
					<div className="relative w-[90%] mt-[1em] flex">
						<div className="w-[2rem] h-[2rem]">
							<div className="absolute flex justify-center items-center text-[2rem] text-logo-cl cursor-pointer">
								<MdOutlineImage />
							</div>
							<input
								className="w-full h-full opacity-0"
								type="file"
								accept="image/png, image/jpg, image/jpeg"
								name="image"
							/>
						</div>
						<div
							className="w-[2rem] h-[2rem] text-[2rem] text-logo-cl cursor-pointer ml-[0.3em]"
							onClick={handleEmojiPicker}>
							<MdOutlineEmojiEmotions />
						</div>
						<button className="ml-auto w-[4rem] h-[2rem] rounded-sm bg-logo-cl text-primary-cl cursor-pointer">
							Post
						</button>
					</div>
				</form>
				<div
					className={`${
						toggleEmojiPicker ? "hidden" : "block"
					} mt-[1em] flex justify-center`}>
					<EmojiPicker
						width="95%"
						height="20em"
						searchDisabled={true}
						previewConfig={{ showPreview: false }}
						onEmojiClick={handleEmojiClick}
					/>
				</div>
			</div>
		</div>
	);
};

export default PostModal;
