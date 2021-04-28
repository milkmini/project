import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	cell: { 
		padding: '6px 10px',
		height: 53,
		color: '#2E3947',
		fontSize: 14,
		lineHeight: '150%',
		'&:first-of-type': {
			minWidth: 261,
			padding: '0 41px 0 20px',
			textAlign: 'left',
		},
	},
	editableCell: {
		height: 53,
		color: '#2E3947',
		fontSize: 14,
		lineHeight: '150%',
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
	containerInput: {
		div: {
			width: 113,
			margin: 0,
			button: {
				display: 'none',
			},
		},
	},
	input: {
		border: '1px solid #D2DDFF',
		background: '#fff',
		height: 33,
		width: 115,
		textAlign: 'center',
		padding: '0 3px 0 3px',
		borderRadius: 0,
		color: '#000000',
		'&:hover': {
			border: '2px solid #3969FF',
		},
		'&:focus': {
			border: '2px solid #3969FF',
		},
	},
};
