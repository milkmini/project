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
	// row: {
	// 	textAlign: 'center',
	// 	'&:nth-of-type(2n)': {
	// 		background: '#F9F9F9',
	// 	},
	// },
	// rowFirst: {
	// 	textAlign: 'center',
	// 	background: '#eaebec',
	// 	td: {
	// 		':nth-of-type(n+3)': {
	// 			zIndex: 1,		
	// 			'&:after': {
	// 				content: '""',
	// 				position: 'absolute',
	// 				border: '1px solid #D2DDFF',
	// 				background: '#fff',
	// 				height: 33,
	// 				width: 115,
	// 				top: 9,
	// 				right: 0,
	// 				zIndex: -1,
	// 			},
	// 			'&:hover': {
	// 				'&:after': {
	// 					border: '1px solid #3969FF',
	// 				},
	// 			},
	// 		},
	// 		position: 'relative',
	// 	},
	// },
	// segmentSubRows: {
	// 	background: '#E1D3FF',
	// 	textAlign: 'center',
	// },
	// segmentHeadCell: {
	// 	td: {
	// 		background: '#D9C9FF',
	// 		fontWeight: 500,
	// 		fontSize: 14,
	// 		padding: '14px 20px 13px 20px',
	// 		minWidth: 115,
	// 		'&:first-of-type': {
	// 			minWidth: 261,
	// 			padding: '0 41px 0 20px',
	// 			textAlign: 'left',
	// 		},
	// 		':nth-of-type(-2n+2)': {
	// 			padding: '14px 10px 13px 10px',
	// 			minWidth: 70,
	// 		},
	// 	},
	// },
	headerSpan: {
		display: 'flex',
		justifyContent: 'flex-end',
		color: '#2E3947',
		button: {
			'&:last-child': {
				margin: '0 0 0 6px',
			},
		},
	},
	// cell: { 
	// 	padding: '6px 10px',
	// 	height: 53,
	// 	color: '#2E3947',
	// 	fontSize: 14,
	// 	lineHeight: '150%',
	// 	'&:first-of-type': {
	// 		minWidth: 261,
	// 		padding: '0 41px 0 20px',
	// 		textAlign: 'left',
	// 	},
	// },

};
