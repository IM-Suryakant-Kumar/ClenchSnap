import { Form, LoaderFunctionArgs, useNavigation } from "react-router-dom";

export const loader = () => {
	return null;
};

export const action = async ({ request }: LoaderFunctionArgs) => {
    const formData = await request.formData()
    const loginCred = Object.fromEntries(formData)
    
    console.log(loginCred)
	return null;
};

const Login = () => {
	const navigation = useNavigation();

	return (
		<Form
			method="post"
			replace
		>
			<input
				type="email"
				name="email"
				placeholder="email"
			/>
			<input
				type="password"
				name="password"
				placeholder="password"
			/>
			<button disabled={navigation.state === "submitting"}>
				{navigation.state === "submitting" ? "Logging in..." : "Log in"}
			</button>
		</Form>
	);
};

export default Login;
