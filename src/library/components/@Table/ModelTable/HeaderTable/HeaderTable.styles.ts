export const opasityTrue = {
	opacity: 0.5, 
};
export const opasityFalse = {
	opacity: 1, 
};
import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	table: { 
		borderSpacing: 0, 
	},
	sticky: {
		position: 'sticky',
		top: 200,
	},
	row: {
		background: '#FFFFFF',
		textAlign: 'center',
		'&:nth-of-type(2n)': {
			background: '#F9F9F9',
		},
		'&:last-child': {
			background: '#eaebec',
		},
	},
	headCell: {
		background: '#F4F5F7',
		color: '#A5A9B0',
		fontWeight: 500,
		fontSize: 14,
		minWidth: 115,
		padding: '14px 0 13px 0',
	},
	cell: { 
		height: 53,
		color: '#2E3947',
		fontSize: 14,
		maxWidth: 115,
		lineHeight: '150%',
		'&:first-of-type': {
			minWidth: 331, 
			padding: '0 41px 0 20px',
			textAlign: 'left',
			input: {
				display: 'none',
			}, 
		},
	},
	editCell: {
		zIndex: 1,
		border: '1px solid #D2DDFF',
		background: '#fff',
		height: 33,
		width: 115,
		textAlign: 'center',
		padding: '0 3px 0 3px',
		borderRadius: 0,
		'&:hover': {
			border: '2px solid #3969FF',
		},
		'&:focus': {
			border: '2px solid #3969FF',
		},
	},
};
