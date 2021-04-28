//helpers
import { formatDate } from './formatDate.helper';
import { formatYear } from './formatYear.helper';
import { formatTime } from './formatTime.helper';

export const formatDateYearTime = (date: Date): string => {
	return `${formatDate(date)} ${formatYear(date)} ${formatTime(date)}`;
};

