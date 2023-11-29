import { LoadingContextProvider } from "./Loading";
import { UserContextProvider } from "./User";
import { PostContextProvider } from "./Post";

type Props = {
	children: React.ReactNode;
};

const MainContextProvider: React.FC<Props> = ({ children }) => {
	return (
		<LoadingContextProvider>
			<UserContextProvider>
				<PostContextProvider>{children}</PostContextProvider>
			</UserContextProvider>
		</LoadingContextProvider>
	);
};

export { useLoading } from "./Loading";
export { useUser } from "./User";
export { usePost } from "./Post";
export default MainContextProvider;
