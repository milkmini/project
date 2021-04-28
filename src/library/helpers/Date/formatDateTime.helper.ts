//helpers
import { formatDate } from './formatDate.helper';
import { formatTime } from './formatTime.helper';

export const formatDateTime = (date: Date): string => {
	return `${formatDate(date)} ${formatTime(date)}`;
};

