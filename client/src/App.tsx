import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<h1>Layout route</h1>}
		>
			<Route
				index
				element={<h1>Home</h1>}
			/>
			<Route
				path="*"
				element={<h1 className="flex">PAGE NOT FOUND - 404</h1>}
			/>
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
