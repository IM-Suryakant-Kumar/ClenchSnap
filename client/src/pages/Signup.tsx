import {
	LoaderFunctionArgs,
	redirect,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
import { IRegCred } from "../types/user";
import { Link } from "react-router-dom";
import { signup } from "../utils/authApi";
import { getUserFromLocalStorage } from "../utils/handleUser";
import { useLoading, useUser } from "../contexts";
import { useState } from "react";
import loadingWrapper from "../utils/loadingWrapper";

export const loader = ({ request }: LoaderFunctionArgs) => {
	const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";
	const user = getUserFromLocalStorage();
	return user ? redirect(pathname) : null;
};

const Signup = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [errorMessage, setErrorMessage] = useState<string>("");
	const pathname = searchParams.get("redirectTo") || "/";

	const { getProfile } = useUser();
	const {
		loadingState: { submitting },
		submittingStart,
		submittingStop,
	} = useLoading();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const fn = async () => {
			const formData = new FormData(e.currentTarget);
			const name = formData.get("name");
			const email = formData.get("email");
			const password = formData.get("password");

			const data = await signup({ name, email, password } as IRegCred);
			data.success
				? (await getProfile(), navigate(pathname, { replace: true }))
				: setErrorMessage(data.message);
		};

		loadingWrapper(submittingStart, submittingStop, fn);
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<form
				className="w-[90%] max-w-[24rem] bg-secondary-cl flex flex-col gap-[1em] py-[2em] px-[1em] rounded-md"
                onSubmit={handleSubmit}
			>
				<h1 className="text-2xl font-semibold font-cinzel text-center text-logo-cl mb-[1em]">
					Sign Up
				</h1>
				{/* messages */}
				{errorMessage && (
					<span className="text-red-500 text-center text-sm">
						{errorMessage}
					</span>
				)}
				<input
					className="outline-none border-b-2 border-logo-cl bg-inherit"
					type="text"
					name="name"
					placeholder="name"
				/>
				<input
					className="outline-none border-b-2 border-logo-cl bg-inherit"
					type="email"
					name="email"
					placeholder="email"
				/>
				<input
					className="outline-none border-b-2 border-logo-cl bg-inherit"
					type="password"
					name="password"
					placeholder="password"
				/>
				<button
					className="w-full h-[2rem] bg-logo-cl text-sm text-primary-cl rounded-md mt-[2em]"
					disabled={submitting}
				>
					{submitting
						? "Signing up..."
						: "Sign up"}
				</button>
				<span className="text-sm text-gray-400 text-center mt-[1em]">
					Already have an account?&nbsp;
					<Link
						to={`/login?redirectTo=${pathname}`}
						className="text-logo-cl"
					>
						Log in
					</Link>{" "}
				</span>
			</form>
		</div>
	);
};

export default Signup;
