import { CSSObject } from '@emotion/css';

const shadow ='0px 4px 23px rgba(146, 186, 208, 0.12)';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		marginLeft: '20px',
		width: 295,
		height: 72,
		borderRadius: 10,
		border: '1px solid #EAE9EE',
		background: '#FFFFFF',
		padding: '16px 20px 16px 20px',
		justifyContent: 'space-between',
		alignItems: 'center',
		boxShadow: shadow,
		'&:hover': {
			border: '2px solid #3969FF',
			boxShadow: shadow,
			padding: '15px 19px 15px 19px',
		},
	},
	flexBlock: {
		display: 'flex',
		flexDirection: 'column',
	},
	button: {
		margin: '0 0 0 5px',
	},
	titleText: {
		color: '#3969FF',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		padding: '0 10px 0 0',
		width: 179,
	},
	descriptionText: {
		color: '#9FB6FF',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: 179,
		padding: '0 10px 0 0',
	},
	open: {
		border: '2px solid #3969FF',
		boxShadow: shadow,
		padding: '15px 19px 15px 19px',
	},
	close: {
		
	},
};
