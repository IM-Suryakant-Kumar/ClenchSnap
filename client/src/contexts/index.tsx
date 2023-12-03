import { LoadingContextProvider } from "./Loading";
import { UserContextProvider } from "./User";
import { PostContextProvider } from "./Post";
import { PostModalContextProvider } from "./PostModal";

type Props = {
	children: React.ReactNode;
};

const MainContextProvider: React.FC<Props> = ({ children }) => {
	return (
		<LoadingContextProvider>
			<UserContextProvider>
				<PostModalContextProvider>
					<PostContextProvider>{children}</PostContextProvider>
				</PostModalContextProvider>
			</UserContextProvider>
		</LoadingContextProvider>
	);
};

export { useLoading } from "./Loading";
export { useUser } from "./User";
export { usePost } from "./Post";
export { usePostModal } from "./PostModal";
export default MainContextProvider;
