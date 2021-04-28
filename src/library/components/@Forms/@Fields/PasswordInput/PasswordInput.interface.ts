import { CSSObject } from '@emotion/css';

import { TextInput } from 'library/types';

export type PasswordInputFieldProps = {
	onFocus?: () => void;
	onBlur?: () => void;
	onChange?: (newValue: string) => void;
	error?: string;
	label: string;
	name: string;
	type: TextInput.TextInputType;
	format?: TextInput.TextInputFormat;
	style?: CSSObject | CSSObject[];
}
