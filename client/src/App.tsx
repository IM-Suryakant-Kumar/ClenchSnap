import {
	Navigate,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Login, { loader as loginLoader } from "./pages/Login";
import Signup, { loader as signupLoader } from "./pages/Signup";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Error from "./pages/Error";
import HostLayout, {
	loader as hostLayoutLoader,
} from "./components/HostLayout";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Explore from "./pages/Explore";
import ProfilePost from "./pages/ProfilePost";
import ProfileLikedPost from "./pages/ProfileLikedPost";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
			errorElement={<Error />}>
			<Route
				index
				element={<Navigate to="host" />}
			/>
			<Route
				path="host"
				element={<HostLayout />}
				loader={hostLayoutLoader}>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="post/:postId"
					element={<Post />}
				/>
				<Route
					path="explore"
					element={<Explore />}
				/>
				<Route
					path="profile/:username"
					element={<Profile />}>
					<Route
						index
						element={<Navigate to="posts" />}
					/>
					<Route
						path="posts"
						element={<ProfilePost />}
					/>
					<Route
						path="liked"
						element={<ProfileLikedPost />}
					/>
					<Route
						path="saved"
						element={<h1>saved</h1>}
					/>
				</Route>
				<Route
					path="settings"
					element={<Setting />}
				/>
			</Route>
			<Route
				path="login"
				element={<Login />}
				loader={loginLoader}
			/>
			<Route
				path="signup"
				element={<Signup />}
				loader={signupLoader}
			/>
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
