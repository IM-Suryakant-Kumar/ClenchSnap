import { useUser } from "../contexts";
import ProfilePic from "./ProfilePic";

type Props = {
    toggleModal: boolean;
}

const PostModal: React.FC<Props> = ({ toggleModal }) => {
	const {
		userState: { user },
	} = useUser();

	return (
		<form className={`${toggleModal ? "hidden" : "block" } md:w-[70%] bg-secondary-cl mt-[5em] mx-[0.8em] flex justify-center items-center rounded-md`}>
			<div className="w-[15%] justify-self-end">
				<ProfilePic
					width="3rem"
					height="3rem"
					size="1rem"
					name={`${user?.fullname}`}
					avatar={`${user?.avatar}`}
				/>
			</div>
			<textarea className="w-[82%] h-[2rem] resize-none outline-none border-2 border-logo-cl rounded-md"></textarea>
		</form>
	);
};

export default PostModal;
