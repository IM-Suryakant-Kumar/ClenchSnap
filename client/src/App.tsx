import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

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
