import { createContext, useContext, useState } from "react";

interface IPosPostModalContext {
	toggleModal: boolean;
	handleToggle: () => void;
}

const PostModalContext = createContext<IPosPostModalContext | null>(null);

type Props = {
	children: React.ReactNode;
};

const PostModalContextProvider: React.FC<Props> = ({ children }) => {
	const [toggleModal, setToggleModal] = useState<boolean>(true);

    const handleToggle = () => {
		setToggleModal(prevState => !prevState);
	};

	return (
		<PostModalContext.Provider value={{ toggleModal, handleToggle }}>
			{children}
		</PostModalContext.Provider>
	);
};

const usePostModal = () => useContext(PostModalContext) as IPosPostModalContext;

export { PostModalContextProvider, usePostModal };
