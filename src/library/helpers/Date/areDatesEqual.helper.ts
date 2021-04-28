export const areDatesEqual = (firstDate: Date, secondDate: Date) => {
	return (
		firstDate.getFullYear() === secondDate.getFullYear() &&
		firstDate.getMonth() === secondDate.getMonth() &&
		firstDate.getDate() === secondDate.getDate()
	);
};
