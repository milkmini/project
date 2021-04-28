const shadow ='0px 4px 23px rgba(146, 186, 208, 0.12)';

import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		border: '1px solid #EAE9EE',
		boxShadow: shadow,
		width: '100%',
		padding: '16px 20px 16px 20px',
		margin: '0 0 16px 0',
		borderRadius: 10.1408,
		background: '#fff',
		color: '#3969FF',
		fontSize: 14,
		fontFamily: 'Poppins',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		'&:hover': {
			border: '2px solid #3969FF',
			boxShadow: shadow,
			padding: '15px 19px 15px 19px',
		},
	},
	flexBlock: {
		display: 'flex',
		alignItems: 'start',
		flexDirection: 'column',
	},
	button: {
		margin: '0 0 0 5px',
	},
	text: {
		color: '#9FB6FF',
		textAlign: 'start',
		width: 182,
	},
};
