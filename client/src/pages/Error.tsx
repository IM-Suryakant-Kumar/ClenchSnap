import { useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError() as {
		message: string;
		status: number;
		statusText: string;
	};
	return (
		<div>
			<h1>Error - {error.message}</h1>
			<h1>
				{error.status} - {error.statusText}
			</h1>
		</div>
	);
};

export default Error;
