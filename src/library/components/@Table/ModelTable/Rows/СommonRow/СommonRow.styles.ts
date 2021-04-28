import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	row: {
		background: '#FFFFFF',
		textAlign: 'center',
		'&:nth-of-type(2n)': {
			background: '#F9F9F9',
		},
	},
};
