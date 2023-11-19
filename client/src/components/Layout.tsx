import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="mt-[6em] sm:mt-[4em]">
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
