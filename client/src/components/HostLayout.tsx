import { LoaderFunctionArgs, Outlet } from "react-router-dom";
import { requireAuth } from "../utils";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	await requireAuth({ request } as LoaderFunctionArgs);
	return null;
};

const HostLayout = () => {
	return <Outlet />;
};

export default HostLayout;
