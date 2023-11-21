type Props = {
	name: string;
	avatar: string;
	width: string;
	height: string;
	size: string;
};

const ProfilePic: React.FC<Props> = ({ name, avatar, width, height, size }) => {
	const colors = ["ffb703", "fb8500", "8338ec", "41ead4", "ff006e", "fb5607"];
	const randomIndex = Math.floor(Math.random() * colors.length);
	const color = `#${colors[randomIndex]}`;

	return (
		<div
			className={`bg-logo-cl rounded-full p-[0.1em]`}
			style={{ width, height }}
		>
			{avatar ? (
				<div
					className="text-primary-cl w-full h-full rounded-full flex justify-center items-center"
					style={{ backgroundColor: color, fontSize: size }}
				>
					<img
						className="rounded-full object-cover"
						src={avatar}
					/>
				</div>
			) : (
				<div
					className="text-primary-cl w-full h-full rounded-full flex justify-center items-center"
					style={{ backgroundColor: color, fontSize: size }}
				>
					{name.charAt(0).toUpperCase()}
				</div>
			)}
		</div>
	);
};

export default ProfilePic;
