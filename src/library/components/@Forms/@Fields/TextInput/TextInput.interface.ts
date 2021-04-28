import { CSSObject } from '@emotion/css';

import { TextInput } from 'library/types';

export type TextFieldProps = {
	onChange?: (newValue: string) => void;
	onFocus?: () => void;
	onBlur?: () => void;
	error?: string;
	label: string;
	name: string;
	value?: any;
	toolTip?: boolean;
	type: TextInput.TextInputType;
	format?: TextInput.TextInputFormat;
	styleContainer?: CSSObject | CSSObject[];
	styleInput?: CSSObject | CSSObject[];
	style?: CSSObject | CSSObject[];
}
