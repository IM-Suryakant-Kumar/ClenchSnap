import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePost, useUser } from "../contexts";
import { Navbar, PostModal, Sidebar } from ".";

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

// import { Link } from "react-router-dom";
// import Hero from "../assets/hero.svg";
// import Logo from "../assets/share.svg";

// const Home = () => {
// 	return (
// 		<div className="bg-secondary-cl min-h-screen flex flex-col justify-center items-center gap=[2em] py-[2em] sm:flex-row sm:justify-around sm:px-[4em]">
// 			<div className="w-full max-w-[35rem] mx-auto text-center sm:mx-0 md:mt-[3em]">
// 				<img
// 					src={Logo}
// 					alt="logo"
// 					className="w-[4rem] mx-auto border-[0.5em] p-[0.4em] border-logo-cl rounded-full shadow-[#00000050] shadow-md md:w-[5rem] md:p-[0.5em]"
// 				/>
// 				<h1 className="font-cinzel font-bold text-logo-cl text-2xl my-[0.5em] md:text-3xl">
// 					ClenchSnap
// 				</h1>
// 				<p className="text-xs font-bold leading-4 my-[0.6em] px-[1em] max-w-[24rem] mx-auto md:text-sm md:my-[1.5em]">
// 					Connect and share your thoughts and snaps with people and the
// 					community.
// 				</p>
// 				<Link
// 					to="/"
// 					className="px-[2em] py-[0.5em] text-xs rounded-lg font-cinzel font-semibold bg-logo-cl text-secondary-cl md:text-sm md:px-[4em] md:py-[0.8em]">
// 					Get Started
// 				</Link>
// 			</div>
// 			<div className="w-full max-w-[35rem] mx-auto">
// 				<img src={Hero} alt="hero" className="w-[50%] mx-auto sm:w-[70%]" />
// 			</div>
// 		</div>
// 	);
// };

// export default Home;
