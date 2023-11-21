import { useEffect } from "react";
import { useUser } from "../contexts";

export const useProfile = () => {
	const { getProfile } = useUser();
	useEffect(() => {
		(async () => await getProfile())();
	}, []);
};
