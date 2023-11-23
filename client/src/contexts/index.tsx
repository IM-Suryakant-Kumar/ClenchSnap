import { LoadingContextProvider } from "./Loading";
import { UserContextProvider } from "./UserContextProvider";

type Props = {
	children: React.ReactNode;
};

const MainContextProvider: React.FC<Props> = ({ children }) => {
	return (
		<LoadingContextProvider>
			<UserContextProvider>{children}</UserContextProvider>
		</LoadingContextProvider>
	);
};

export { useUser } from "./User";
export { useLoading } from "./Loading";
export default MainContextProvider;
