import {
	Form,
	LoaderFunctionArgs,
	redirect,
	useActionData,
	useLoaderData,
	useNavigate,
	useNavigation,
	useSearchParams,
} from "react-router-dom";
import { getLoggedInUser } from "../utils/userApi";
import IRes from "../types/response";
import { guestLogin, login } from "../utils/authApi";
import { ILogCred } from "../types/user";
import { Link } from "react-router-dom";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const data = (await getLoggedInUser()) as IRes;
	return data.success
		? redirect("/")
		: new URL(request.url).searchParams.get("message");
};

export const action = async ({ request }: LoaderFunctionArgs) => {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";

	const data = (await login({ email, password } as ILogCred)) as IRes;
	return data.success ? redirect(pathname) : data.message;
};

const Login = () => {
	const message = useLoaderData() as string;
	const errorMessage = useActionData() as string;
	const navigation = useNavigation();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	// pathname
	const pathname = searchParams.get("redirectTo") || "/";

	const handleGuestLogin = async () => {
		const data = await guestLogin();
		data.success && navigate(pathname, { replace: true });
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<Form
				className="w-[90%] max-w-[24rem] bg-secondary-cl flex flex-col gap-[1em] py-[2em] px-[1em] rounded-md"
				method="post"
				replace
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
					disabled={navigation.state === "submitting"}
				>
					{navigation.state === "submitting"
						? "Logging in..."
						: "Log in"}
				</button>
				<button
					type="button"
					className="w-full h-[2rem] bg-blue-400 text-sm text-primary-cl rounded-md -mt-[0.5em]"
					onClick={handleGuestLogin}
				>
					Guest Login
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
			</Form>
		</div>
	);
};

export default Login;
