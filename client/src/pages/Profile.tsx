import { useUser } from "../contexts";

const Profile = () => {
	const { userState } = useUser();

	console.log(userState);
	return <div>Profile</div>;
};

export default Profile;
