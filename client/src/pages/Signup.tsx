import {
	Form,
	LoaderFunctionArgs,
	redirect,
	useActionData,
	useNavigation,
	useSearchParams,
} from "react-router-dom";
import { IRegCred } from "../types/user";
import { Link } from "react-router-dom";
import { getLoggedInUser } from "../utils/userApi";
import IRes from "../types/response";
import { signup } from "../utils/authApi";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";
	const data = (await getLoggedInUser()) as IRes;
	return data.success ? redirect(pathname) : null;
};

export const action = async ({ request }: LoaderFunctionArgs) => {
	const formData = await request.formData();
	const name = formData.get("name");
	const email = formData.get("email");
	const password = formData.get("password");
	const pathname = new URL(request.url).searchParams.get("redirectTo") || "/";

	const data = (await signup({ name, email, password } as IRegCred)) as IRes;
	return data.success ? redirect(pathname) : data.message;
};

const Signup = () => {
	const navigation = useNavigation();
	const [searchParams] = useSearchParams();
	const errorMessage = useActionData() as string;
	const pathname = searchParams.get("redirectTo") || "/";

	return (
		<div className="min-h-screen flex justify-center items-center">
			<Form
				className="w-[90%] max-w-[24rem] bg-secondary-cl flex flex-col gap-[1em] py-[2em] px-[1em] rounded-md"
				method="post"
				replace
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
			</Form>
		</div>
	);
};

export default Signup;
