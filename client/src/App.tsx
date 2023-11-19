import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";
import Signup, { loader as signupLoader, action as signupAction } from "./pages/Signup";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
		>
			<Route
				index
				element={<h1>Home</h1>}
			/>
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
