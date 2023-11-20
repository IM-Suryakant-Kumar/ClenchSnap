import { AuthContextProvider } from "./Auth";
import { LoadingContextProvider } from "./Loading";
import { UserContextProvider } from "./User";

type Props = {
	children: React.ReactNode;
};

const MainContextProvider: React.FC<Props> = ({ children }) => {
	return (
		<LoadingContextProvider>
			<AuthContextProvider>
				<UserContextProvider>{children}</UserContextProvider>
			</AuthContextProvider>
		</LoadingContextProvider>
	);
};

export { useAuth } from "./Auth";
export { useUser } from "./User";
export { useLoading } from "./Loading";
export default MainContextProvider;
