import { LoaderFunctionArgs, Outlet, redirect } from "react-router-dom";
import { Navbar, PostModal, Sidebar } from ".";
import { getLoggedInUser } from "../apis";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const pathname = new URL(request.url).pathname;
	const data = await getLoggedInUser();
	return data.success
		? null
		: redirect(`/login?message=You must login first&redirectTo=${pathname}`);
};

const HostLayout = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<Sidebar />
			<div className="mt-[6em] mb-[4em] sm:mb-0 sm:ml-[10em] sm:mt-[5em]">
				<Outlet />
				<PostModal />
			</div>
		</div>
	);
};

export default HostLayout;
