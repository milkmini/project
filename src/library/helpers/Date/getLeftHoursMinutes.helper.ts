import { formatDuration } from 'date-fns';

export const getLeftHoursMinutes = (untilDate: Date): string => {
	const currentDate = new Date();
	const diffDate = new Date(untilDate.getTime() - currentDate.getTime());

	const hours = diffDate.getUTCHours();
	const minutes = diffDate.getUTCMinutes();

	return formatDuration({ hours, minutes });
};

