import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import { useAuth } from "../contexts";
import { IAuthContext } from "../contexts/Auth";

const Layout = () => {
	const { getProfile } = useAuth() as IAuthContext;

	useEffect(() => {
		// only for first render
		(async () => await getProfile())();
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
				theme="colored"
			/>
		</div>
	);
};

export default Layout;
