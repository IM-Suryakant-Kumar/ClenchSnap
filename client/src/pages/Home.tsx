import RightSidebar from "../components/RightSidebar";
import { useUser } from "../contexts";

const Home = () => {
    const { userState: { users } } = useUser()
    console.log(users)
	return <div><RightSidebar /></div>;
};

export default Home;
