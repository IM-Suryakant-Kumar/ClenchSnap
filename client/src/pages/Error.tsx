import { useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError() as {
		name: string;
		message: string;
		status: number;
		statusText: string;
	};

	console.log(error);
	return (
		<div className="min-h-screen flex flex-col justify-center gap-[1em] items-center text-center text-2xl text-red-600">
			<h1>
				Error - {error.message}
			</h1>
			<h1>
				{error.status} - {error.statusText}
			</h1>
		</div>
	);
};

export default Error;
