import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		border: '1.01408px solid #9FB6FF',
		padding: '19px 0 19px 20px',
		borderRadius: 10.1408,
		background: '#fff',
		color: '#3969FF',
		fontSize: 14,
		fontFamily: 'Poppins',
		display: 'flex',
		alignItems: 'center',
		margin: '0 0 0 20px',
		width: 295,
		'&:hover': {
			border: '1.01408px solid #D2DDFF',
			color: '#9FB6FF',
		},
	},
	icon: {
		background: '#D2DDFF',
		margin: '0 13px 0 0',
	},
};
