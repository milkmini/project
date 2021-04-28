import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		position: 'absolute',
		right: -261,
		top: -12,
		boxShadow: '0px 4px 23px rgba(146, 186, 208, 0.12)',
		background: '#FFF',
		border: '1px solid #EAE9EE;',
		flexDirection: 'column',
		borderRadius: 10,
		transition: '0.3s ease-in-out',
		padding: 15,
	},
	onOpen: {
		zIndex: 1,
		opacity: 1,
		visibility: 'visible',
		transform: 'translate(0, -10px)',
	},
	onClose: {
		opacity: 0,
		visibility: 'hidden',
		transform: 'translate(0, 10px)',
	},
	text: {
		marginTop: 15,
		width: 200,
		fontSize: 12,
		color: '#9792AC',
	},
};
