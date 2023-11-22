import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getUserFromLocalStorage } from "./handleUser";

const requireAuth = ({ request }: LoaderFunctionArgs) => {
	const pathname = new URL(request.url).pathname;
	const user = getUserFromLocalStorage();

	if (!user) {
		throw redirect(
			`/login?message="You must login first&redirectTo=${pathname}`,
		);
	}
};

export default requireAuth;
