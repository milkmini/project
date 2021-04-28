import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';

export const formatDate = (date: Date): string => {
	return format(date, 'dd MMM', { locale: enGB });
};
