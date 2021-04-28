import { CSSObject } from '@emotion/css';

import { TextInput } from 'library/types';

export type TextInputProps = {
	onChange: (newValue: string) => void;
	onFocus?: () => void;
	onBlur?: () => void;
	error?: string;
	label: string;
	name: string;
	value?: string;
	type: TextInput.TextInputType;
	format?: TextInput.TextInputFormat;
	styleContainer?: CSSObject | CSSObject[];
	style?: CSSObject | CSSObject[];
};
