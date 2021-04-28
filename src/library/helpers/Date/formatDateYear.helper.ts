//helpers
import { formatDate } from './formatDate.helper';
import { formatYear } from './formatYear.helper';

export const formatDateYear = (date: Date): string => {
	return `${formatDate(date)} ${formatYear(date)}`;
};

