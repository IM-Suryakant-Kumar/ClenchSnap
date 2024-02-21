import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { HostLayout, HostLayoutLoader, Layout } from "./components";
import {
	Error,
	Explore,
	Home,
	Login,
	LoginLoader,
	NotFound,
	Post,
	Profile,
	ProfileLikedPost,
	ProfilePost,
	ProfileSavedPost,
	Setting,
	Signup,
	SignupLoader,
} from "./pages";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />} errorElement={<Error />}>
				<Route index element={<Navigate to="host" />} />
				<Route path="host" element={<HostLayout />} loader={HostLayoutLoader}>
					<Route index element={<Navigate to="home" />} />
					<Route path="home" element={<Home />} />
					<Route path="post/:postId" element={<Post />} />
					<Route path="explore" element={<Explore />} />
					<Route path="profile/:username" element={<Profile />}>
						<Route index element={<Navigate to="posts" />} />
						<Route path="posts" element={<ProfilePost />} />
						<Route path="liked" element={<ProfileLikedPost />} />
						<Route path="saved" element={<ProfileSavedPost />} />
					</Route>
					<Route path="settings" element={<Setting />} />
				</Route>
				<Route path="login" element={<Login />} loader={LoginLoader} />
				<Route path="signup" element={<Signup />} loader={SignupLoader} />
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
