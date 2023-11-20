import { AuthContextProvider } from "./Auth";
import { UserContextProvider } from "./User";

type Props = {
	children: React.ReactNode;
};

const MainContextProvider: React.FC<Props> = ({ children }) => {
	return (
		<AuthContextProvider>
			<UserContextProvider>{children}</UserContextProvider>
		</AuthContextProvider>
	);
};

export { useAuth } from "./Auth";
export { useUser } from "./User"
export default MainContextProvider;
