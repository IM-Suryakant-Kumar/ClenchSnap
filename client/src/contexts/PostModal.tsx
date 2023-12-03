import { createContext, useContext, useState } from "react";
import IPost from "../types/post";

interface IPosPostModalContext {
	toggleModal: boolean;
	handleToggle: () => void;
	postToEdit: IPost | null;
	setPostToEdit: React.Dispatch<React.SetStateAction<IPost | null>>;
}

const PostModalContext = createContext<IPosPostModalContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const PostModalContextProvider: React.FC<Props> = ({ children }) => {
	const [toggleModal, setToggleModal] = useState<boolean>(true);
	const [postToEdit, setPostToEdit] = useState<IPost | null>(null);

	const handleToggle = () => {
		setToggleModal(prevState => !prevState);
	};

	return (
		<PostModalContext.Provider
			value={{ toggleModal, handleToggle, postToEdit, setPostToEdit }}>
			{children}
		</PostModalContext.Provider>
	);
};

const usePostModal = () => useContext(PostModalContext) as IPosPostModalContext;

export { PostModalContextProvider, usePostModal };
