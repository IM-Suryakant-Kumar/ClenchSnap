const debounce = (
	fn: (...args: React.ChangeEvent<HTMLInputElement>[]) => void,
) => {
	let timeoutId: NodeJS.Timeout;
	const context = this || debounce;
	return (...args: React.ChangeEvent<HTMLInputElement>[]) => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(context, [...args]), 600);
	};
};

export default debounce;
