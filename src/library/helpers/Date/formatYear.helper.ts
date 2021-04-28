import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

export const formatYear = (date: Date): string => {
	return format(date, 'y', { locale: enGB });
};

