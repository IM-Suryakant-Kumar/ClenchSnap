import {
	useNavigate,
	useNavigation,
	useSearchParams,
} from "react-router-dom";
import { IRegCred } from "../types/user";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts";
import { IAuthContext } from "../contexts/Auth";

const Signup = () => {
	const navigation = useNavigation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { authState, registerUser } = useAuth() as IAuthContext;

	const errorMessage = authState.errorMessage;
	const pathname = searchParams.get("redirectTo") || "/";

	// check user
	!authState.user && navigate(pathname, { replace: true });

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name");
		const email = formData.get("email");
		const password = formData.get("password");

		await registerUser({ name, email, password } as IRegCred);
		!errorMessage && navigate(pathname, { replace: true });
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
					disabled={navigation.state === "submitting"}
				>
					{navigation.state === "submitting"
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
