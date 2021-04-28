import { TextInput } from 'library/types';

export const TextInputTypeDataMap: TextInput.TextInputTypeConfig = {
	secure: {
		type: 'password',
		spellCheck: false,
		maxLength: 48,
	},
	email: {
		spellCheck: false,
		maxLength: 60,
		type: 'email',
	},
	singlelineText: {
		spellCheck: false,
		maxLength: 48,
	},
	price: {
		spellCheck: false,
		format: 'price',
	},
	digits: {
		spellCheck: false,
		format: 'digits',
	},
};
