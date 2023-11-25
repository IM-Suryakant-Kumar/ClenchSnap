import { useUser } from "../contexts";
import ProfilePic from "./ProfilePic";

const RightSidebar = () => {
    const { userState: { suggestedUsers }, getAllSuggestedUsers } = useUser()

    !suggestedUsers && (async () => getAllSuggestedUsers())()

    console.log(suggestedUsers)

	return <div className="hidden md:block fixed top-[5em] right-0 z-20 bg-orange-600">
        <p>You might like</p>
        { suggestedUsers?.map((item, idx) => <p key={idx}>
            <ProfilePic width="2rem" height="2rem" size="0.5em" name={item.fullname} avatar={item.avatar}  />
        </p>) }
    </div>;
};

export default RightSidebar;
