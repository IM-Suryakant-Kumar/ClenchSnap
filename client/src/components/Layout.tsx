import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import { useUser } from "../contexts";
import { useEffect } from "react";

const Layout = () => {
	const { getProfile, getAllSuggestedUsers } = useUser();

	useEffect(() => {
		(async () => {
			await getProfile();
			await getAllSuggestedUsers();
		})();
	}, []);

	return (
		<div className="min-h-screen">
			<Navbar />
			<Sidebar />
			<div className="mt-[6em] mb-[4em] sm:mb-0 sm:ml-[10em] sm:mt-[5em]">
				<Outlet />
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
