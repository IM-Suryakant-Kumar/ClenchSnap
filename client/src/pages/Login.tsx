import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth, useLoading } from "../contexts";

const Login = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { authState, loginUser, loginGuestUser } = useAuth();
	const {
		loadingState: { loading, submitting },
	} = useLoading();

	const message = searchParams.get("message");
	const errorMessage = authState.errorMessage;
	const pathname = searchParams.get("redirectTo") || "/";

	// check user
	authState.user && navigate(pathname, { replace: true });

	const handleGuestLogin = async () => {
		await loginGuestUser();
		!errorMessage && navigate(pathname, { replace: true });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const pathname = searchParams.get("redirectTo") || "/";
		// login
		await loginUser({ email, password });
		authState.user && navigate(pathname, { replace: true });
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<form
				className="w-[90%] max-w-[24rem] bg-secondary-cl flex flex-col gap-[1em] py-[2em] px-[1em] rounded-md"
				onSubmit={handleSubmit}
			>
				<h1 className="text-2xl font-semibold font-cinzel text-center text-logo-cl mb-[1em]">
					Log In
				</h1>
				{/* messages */}
				{message && (
					<span className="text-red-500 text-center text-sm">
						{message}
					</span>
				)}
				{errorMessage && (
					<span className="text-red-500 text-center text-sm">
						{errorMessage}
					</span>
				)}
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
					{submitting ? "Logging in..." : "Log in"}
				</button>
				<button
					type="button"
					className="w-full h-[2rem] bg-blue-400 text-sm text-primary-cl rounded-md -mt-[0.5em]"
					onClick={handleGuestLogin}
				>
					{loading ? "Guest Logging in..." : "Guest Login"}
				</button>
				<span className="text-sm text-gray-400 text-center mt-[1em]">
					Don't have an account?&nbsp;
					<Link
						to={`/signup?redirectTo=${pathname}`}
						className="text-logo-cl"
					>
						Create now
					</Link>{" "}
				</span>
			</form>
		</div>
	);
};

export default Login;
