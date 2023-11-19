import { Form, LoaderFunctionArgs, useNavigation } from "react-router-dom";

export const loader = () => {
	return null;
};

export const action = async ({ request }: LoaderFunctionArgs) => {
	const formData = await request.formData();
	const loginCred = Object.fromEntries(formData);

	console.log(loginCred);
	return null;
};

const Login = () => {
	const navigation = useNavigation();

	return (
		<div className="min-h-screen flex justify-center items-center">
			<Form
                className="h-[20rem] bg-white flex flex-col"
				method="post"
				replace
			>
				<input
                    className=""
					type="email"
					name="email"
					placeholder="email"
				/>
				<input
                    className=""
					type="password"
					name="password"
					placeholder="password"
				/>
				<button disabled={navigation.state === "submitting"}>
					{navigation.state === "submitting"
						? "Logging in..."
						: "Log in"}
				</button>
			</Form>
		</div>
	);
};

export default Login;
