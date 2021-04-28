import { TextInput } from 'library/types';

const isOnlyDigits = (input: string) => {
	return /^[\d]*$/.test(input);
};

const isOnlyLetters = (input: string) => {
	return /^[a-zA-Z\s]*$/.test(input);
};

const isOnlyDigitsAndLetters = (input: string) => {
	return /^[a-zA-Z\s\d]*$/.test(input);
};

const isPrice = (input: string) => {
	return /^(\$(0?|([0-9]{1,3}\s?)*)?)([,][\d]{0,2})?$/.test(input);
};

const isPercents = (input: string) => {
	return /^((0?|([1-9][0-9]*)))([.][\d]{0,2})?%$/.test(input);
};

const isEmail = (input: string) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input); // eslint-disable-line max-len
};

export const validateInput = (input: string, format: TextInput.TextInputFormat): boolean => {
	switch (format) {
		case 'digits': {
			return isOnlyDigits(input);
		}
		case 'letters': {
			return isOnlyLetters(input);
		}
		case 'digitsLetters': {
			return isOnlyDigitsAndLetters(input);
		}
		case 'price': {
			return isPrice(input);
		}
		case 'percents': {
			return isPercents(input);
		}
		case 'email': {
			return isEmail(input);
		}
		case 'all':
		default:
			return true;
	}
};
