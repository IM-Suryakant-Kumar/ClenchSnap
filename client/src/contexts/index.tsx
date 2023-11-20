import { AuthContextProvider } from "./Auth";
import { LoadingContextProvider } from "./Loading";
import { UserContextProvider } from "./User";

type Props = {
	children: React.ReactNode;
};

const MainContextProvider: React.FC<Props> = ({ children }) => {
	return (
		<AuthContextProvider>
			<UserContextProvider>
				<LoadingContextProvider>{children}</LoadingContextProvider>
			</UserContextProvider>
		</AuthContextProvider>
	);
};

export { useAuth } from "./Auth";
export { useUser } from "./User";
export { useLoading } from "./Loading";
export default MainContextProvider;
