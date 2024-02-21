import { createContext, useContext, useState } from "react";
import { IPost } from "../types";

interface IPosPostModalContext {
	toggleModal: boolean;
	handleToggle: () => void;
	postToEdit: IPost | null;
	setPostToEdit: React.Dispatch<React.SetStateAction<IPost | null>>;
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const PostModalContext = createContext<IPosPostModalContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const PostModalContextProvider: React.FC<Props> = ({ children }) => {
	const [toggleModal, setToggleModal] = useState<boolean>(true);
	const [postToEdit, setPostToEdit] = useState<IPost | null>(null);
	const [content, setContent] = useState<string>("");

	const handleToggle = () => {
		setToggleModal(prevState => !prevState);
	};

	return (
		<PostModalContext.Provider
			value={{
				toggleModal,
				handleToggle,
				postToEdit,
				setPostToEdit,
				content,
				setContent,
			}}>
			{children}
		</PostModalContext.Provider>
	);
};

const usePostModal = () => useContext(PostModalContext) as IPosPostModalContext;

export { PostModalContextProvider, usePostModal };
