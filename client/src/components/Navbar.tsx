import { Link } from "react-router-dom";
import Logo from "../assets/share.svg";

const Navbar = () => {
	return (
		<header className="bg-secondary-cl text-font-cl relative h-20">
			<nav className="grid grid-cols-3 sm:grid-cols-3 h-full">
				<div className="col-start-1 col-end-3 sm:col-end-2 flex items-center gap-[0.3125em] sm:gap-2 p-1">
					<img
						className="w-7 h-7 sm:h-9 sm:w-9"
						src={Logo}
						alt="Logo"
					/>
					<Link to="/">
						<span className="text-xl sm:text-2xl font-semibold font-cinzel text-logo-cl">
							ClenchSnap
						</span>
					</Link>
				</div>
				<div className="sm:col-start-3 text-right bg-green-400">
					profile btn
				</div>
				<div className="col-span-full sm:col-span-1 sm:row-start-1 sm:col-start-2 bg-pink-500">
					searchBox
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
