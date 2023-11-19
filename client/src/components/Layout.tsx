import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="mt-[6em] sm:mt-[4em]">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
