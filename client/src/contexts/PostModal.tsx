import { createContext, useContext, useState } from "react";

interface IPosPostModalContext {
	toggleModal: boolean;
	setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostModalContext = createContext<IPosPostModalContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const PostModalContextProvider: React.FC<Props> = ({ children }) => {
	const [toggleModal, setToggleModal] = useState<boolean>(true);

	return (
		<PostModalContext.Provider value={{ toggleModal, setToggleModal }}>
			{children}
		</PostModalContext.Provider>
	);
};

const usePostModal = () => useContext(PostModalContext);

export { PostModalContextProvider, usePostModal };
