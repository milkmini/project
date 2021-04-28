import { CSSObject } from '@emotion/css';

import { TextInput } from 'library/types';

export type DropdownInputFieldProps = {
	onFocus?: () => void;
	onBlur?: () => void;
	onChange?: (newValue: string) => void;
	error?: string;
	label: string;
	name: string;
	value?: string;
	visible: boolean;
	type: TextInput.TextInputType;
	format?: TextInput.TextInputFormat;
	styleContainer?: CSSObject | CSSObject[];
	style?: CSSObject | CSSObject[];
}
