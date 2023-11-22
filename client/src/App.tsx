import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Login, {
	loader as loginLoader,
	action as loginAction,
} from "./pages/Login";
import Signup, {
	loader as signupLoader,
	action as signupAction,
} from "./pages/Signup";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import HostLayout, {
	loader as hostLayoutLoader,
} from "./components/HostLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
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
					element={<h1>explore</h1>}
				/>
				<Route
					path="profile"
					element={<h1>profile</h1>}
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
				action={loginAction}
			/>
			<Route
				path="signup"
				element={<Signup />}
				loader={signupLoader}
				action={signupAction}
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
