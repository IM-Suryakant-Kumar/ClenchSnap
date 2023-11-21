import { useProfile } from "../hooks";

const Home = () => {
	useProfile();
	return <div>Home</div>;
};

export default Home;
