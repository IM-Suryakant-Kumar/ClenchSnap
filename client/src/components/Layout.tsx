import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import { usePost, useUser } from "../contexts";
import PostModal from "./PostModal";

const Layout = () => {
	const {
		userState: { user },
		getProfile,
	} = useUser();

	const {
		postState: { posts },
		getPosts,
	} = usePost();

	(async () => {
		!user && (await getProfile());
		!posts && (await getPosts());
	})();

	return (
		<div className="min-h-screen">
			<Navbar />
			<Sidebar />
			<div className="mt-[6em] mb-[4em] sm:mb-0 sm:ml-[10em] sm:mt-[5em]">
				<Outlet />
				<PostModal />
			</div>
			<ToastContainer
				autoClose={1000}
				transition={Slide}
				pauseOnFocusLoss={false}
				theme="colored"
			/>
		</div>
	);
};

export default Layout;
