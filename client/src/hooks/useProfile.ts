import { useUser } from "../contexts";

export const useProfile = () => {
	const { userState, getProfile } = useUser();
	!userState.user && (async () => await getProfile())();
};
