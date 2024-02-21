import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import {
	AuthLayout,
	HostLayout,
	Layout,
	authLayoutLoader,
	hostLayoutLoader,
} from "./components";
import {
	Error,
	Explore,
	Home,
	Landing,
	Login,
	NotFound,
	Post,
	Profile,
	ProfileLikedPost,
	ProfilePost,
	ProfileSavedPost,
	Setting,
	Signup,
} from "./pages";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />} errorElement={<Error />}>
				<Route index element={<Landing />} />
				<Route element={<HostLayout />} loader={hostLayoutLoader}>
					<Route path="home" element={<Home />} />
					<Route path="explore" element={<Explore />} />
					<Route element={<Profile />}>
						<Route path="profile/:username/post" element={<ProfilePost />} />
						<Route
							path="profile/:username/liked"
							element={<ProfileLikedPost />}
						/>
						<Route
							path="profile/:username/saved"
							element={<ProfileSavedPost />}
						/>
					</Route>
					<Route path="settings" element={<Setting />} />
					<Route path="post/:postId" element={<Post />} />
				</Route>
				<Route element={<AuthLayout />} loader={authLayoutLoader}>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
