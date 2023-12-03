import { createContext, useContext, useState } from "react";

interface IPosPostModalContext {
	toggleModal: boolean;
	handleToggle: () => void;
	postId: string;
	setPostId: React.Dispatch<React.SetStateAction<string>>;
}

const PostModalContext = createContext<IPosPostModalContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const PostModalContextProvider: React.FC<Props> = ({ children }) => {
	const [toggleModal, setToggleModal] = useState<boolean>(true);
	const [postId, setPostId] = useState<string>("");

	const handleToggle = () => {
		setToggleModal(prevState => !prevState);
	};

	return (
		<PostModalContext.Provider
			value={{ toggleModal, handleToggle, postId, setPostId }}>
			{children}
		</PostModalContext.Provider>
	);
};

const usePostModal = () => useContext(PostModalContext) as IPosPostModalContext;

export { PostModalContextProvider, usePostModal };
