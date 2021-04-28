import { areDatesEqual } from './areDatesEqual.helper';

export const isToday = (date: Date) => areDatesEqual(date, new Date());
