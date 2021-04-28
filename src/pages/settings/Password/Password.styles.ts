import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		padding: 45,
		alignItems: 'center',
		flexDirection: 'column',
	},
	imgBlock: {
		margin: ' 0 0 21px 0',
		maxWidth: 82,
		maxHeight: 82,
		minWidth: 82,
		minHeight: 82,
		borderRadius: 10,
		background: '#1D1D1D',
	},
	form: {
		display: 'flex',
		margin: '28px 0 0 0',
		alignItems: 'center',
		flexDirection: 'column',
	},
	button: {
		margin: '45px 0 0 0',
	},
	buttonClose: {
		position: 'absolute',
		right: 45,
		top: 45,
		borderRadius: 10,
		background: 'none',
		border: '4px solid #CECCD8',
		padding: 20,
	},
};
