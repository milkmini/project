import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	rows: {
		textAlign: 'center',
		'&:nth-of-type(2n)': {
			background: '#F9F9F9',
		},
	},
	subRows: {
		background: '#D3EFFF',
		textAlign: 'center',
	},
	subSubRows: {
		background: '#E8F7FF',
		textAlign: 'center',
	},
	headRows: {
		td: {
			background: '#C9EBFF',
			minWidth: 115,
			'&:first-of-type': {
				minWidth: 261,
				padding: '0 41px 0 20px',
				textAlign: 'left',
			},
			':nth-of-type(-2n+2)': {
				padding: '14px 10px 13px 10px',
				minWidth: 70,
			},
		},
	},
};
