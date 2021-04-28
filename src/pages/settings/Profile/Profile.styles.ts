import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		padding: 45,
		alignItems: 'center',
		flexDirection: 'column',
	},
	imgBlock: {
		maxWidth: 82,
		maxHeight: 82,
		minWidth: 82,
		minHeight: 82,
		borderRadius: 10,
		background: '#1D1D1D',
		margin: ' 0 0 21px 0',
	},
	form: {
		display: 'flex',
		margin: '28px 0 0 0',
		alignItems: 'center',
		flexDirection: 'column', 
	},
	button: {
		position: 'fixed',
		bottom: 0,
		padding: 10,
		background: '#fff',
		borderRadius: '10px 10px 0px 0px',
		boxShadow: '0px 4px 23px rgba(146, 186, 208, 0.12)',
	},
	buttonClose: {
		position: 'absolute',
		top: 45,
		right: 45,
		borderRadius: 10,
		background: 'none',
		border: '4px solid #CECCD8',
		padding: 20,
	},
};
