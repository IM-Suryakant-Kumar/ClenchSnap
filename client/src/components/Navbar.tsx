import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/share.svg";
import { MdSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useUser } from "../contexts";
import ProfilePic from "./ProfilePic";

const Navbar = () => {
	const navigate = useNavigate();
	const {
		userState: { user },
	} = useUser();

	return (
		<header className="h-[6rem] w-full sm:h-[4rem] bg-secondary-cl px-1 fixed top-0">
			<nav className="h-full flex flex-wrap ">
				<div className="w-[75%] sm:w-[34%] flex items-center gap-[0.3125em] sm:gap-2 py-1">
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
				<div
					className="w-[25%] sm:w-[10%] sm:order-3 flex items-center justify-end pr-[1em] text-[1.5rem] sm:text-[1.8rem] cursor-pointer"
					onClick={() => navigate("/settings")}
				>
					{user ? (
						<ProfilePic
							name={user.name}
							avatar={user.avatar}
							width="1.5rem"
							height="1.5rem"
							size="1.2rem"
						/>
					) : (
						<CgProfile color="#3a86ff" />
					)}
				</div>
				<div className="w-[100%] sm:w-[56%] flex items-center justify-center sm:justify-end sm:order-2">
					<form className="w-[90%] sm:max-w-[30rem] h-[1.6rem] sm:h-[1.8rem] bg-primary-cl rounded-md flex">
						<input
							className="w-[85%] bg-inherit text-gray-400 outline-none text-sm ml-3"
							type="search"
							name="search"
							placeholder="Search..."
						/>
						<button className="w-[15%] pr-[1em] flex justify-end items-center">
							<MdSearch
								size="1rem"
								color="#3a86ff"
							/>
						</button>
					</form>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
