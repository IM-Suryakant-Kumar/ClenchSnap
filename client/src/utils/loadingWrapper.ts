export const loadingWrapper = async (
	start: () => void,
	end: () => void,
	fn: () => Promise<void>
) => {
	start();
	await fn();
	end();
};
