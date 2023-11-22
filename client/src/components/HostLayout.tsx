import { LoaderFunctionArgs, Outlet } from "react-router-dom";
import requireAuth from "../utils/requireAuth";

export const loader = ({ request }: LoaderFunctionArgs) => {
	requireAuth({ request } as LoaderFunctionArgs);
	return null;
};

const HostLayout = () => {
	return <Outlet />;
};

export default HostLayout;
