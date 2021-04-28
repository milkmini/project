import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

export const formatTime = (date: Date): string => {
	return format(date, 'h:mm a', { locale: enGB });
};
