import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Login, { action as loginAction } from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

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
				path="login"
				element={<Login />}
				action={loginAction}
			/>
			<Route
				path="signup"
				element={<Signup />}
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
