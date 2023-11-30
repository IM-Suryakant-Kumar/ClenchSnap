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
import Error from "./pages/Error"
import HostLayout, {
	loader as hostLayoutLoader,
} from "./components/HostLayout";
import Profile from "./pages/Profile"
import Post from "./pages/Post"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
            errorElement={<Error />}
		>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="host"
				element={<HostLayout />}
				loader={hostLayoutLoader}
			>
				<Route
					index
					element={<Navigate to="explore" />}
				/>
				<Route
					path="post/:postId"
					element={<Post />}
				/>
				<Route
					path="explore"
					element={<h1>explore</h1>}
				/>
				<Route
					path="profile/:username"
					element={<Profile />}
				/>
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
