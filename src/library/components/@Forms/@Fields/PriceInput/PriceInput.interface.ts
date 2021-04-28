import { CSSObject } from '@emotion/css';

import { TextInput } from 'library/types';

export type PriceFieldProps = {
	onFocus?: () => void;
	onBlur?: () => void;
	onChange?: (newValue: string) => void;
	error?: string;
	label: string;
	name: string;
	type: TextInput.TextInputType;
	currency: string;
	value?: any;
	toolTip?: boolean;
	format?: TextInput.TextInputFormat;
	styleInput?: CSSObject | CSSObject[];
	style?: CSSObject | CSSObject[];
}
