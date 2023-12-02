type Props = {
	userId: string;
	postUserId: string;
};

const ActionModal: React.FC<Props> = ({ userId, postUserId }) => {
	return (
		<div className="w-[10rem] p-[0.2em] absolute top-[1.2em] right-[0.8em] bg-primary-cl shadow-md">
			{userId === postUserId && (
				<button className="w-full text-center hover:bg-green-200 py-[0.5em]">
					Edit
				</button>
			)}
			{userId === postUserId && (
				<button className="w-full text-center hover:bg-green-200 py-[0.5em]">
					Delete
				</button>
			)}
			{userId !== postUserId && (
				<button className="w-full text-center hover:bg-green-200 py-[0.5em]">
					Follow
				</button>
			)}
		</div>
	);
};

export default ActionModal;
