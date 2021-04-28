import { CSSObject } from '@emotion/css';

import { TextInput } from 'library/types';

export type PercentInputFieldProps = {
	onFocus?: () => void;
	onBlur?: () => void;
	onChange?: (newValue: string) => void;
	error?: string;
	label: string;
	name: string;
	value?: any;
	toolTip?: boolean;
	type: TextInput.TextInputType;
	format?: TextInput.TextInputFormat;
	styleInput?: CSSObject | CSSObject[];
	style?: CSSObject | CSSObject[];
}
