import { IoPencil } from "react-icons/io5";
import RightSidebar from "../components/RightSidebar";
import PostModal from "../components/PostModal";
import Post from "../components/Post";
import { usePost, usePostModal } from "../contexts";

const Home = () => {
	const { handleToggle } = usePostModal();

	const {
		postState: { posts },
	} = usePost();

	return (
		<div className="relative min-h-screen">
			<div className="flex mt-[7em] sm:mt-[5em]">
				<div className="mx-auto md:w-[60%] max-w-[40rem]">
					{posts?.map((post, idx) => (
						<Post
							key={idx}
							post={post}
						/>
					))}
				</div>
				<div className="hidden md:block md:w-[40%]">
					<RightSidebar />
				</div>
			</div>
			<PostModal />
			<div
				className="w-[3rem] h-[3rem] fixed bottom-[2.5em] sm:bottom-[0.5em] right-[1.5em] z-40  text-[1.5rem] p-[0.5em] text-primary-cl bg-logo-cl rounded-full cursor-pointer"
				onClick={handleToggle}>
				<IoPencil />
			</div>
		</div>
	);
};

export default Home;
