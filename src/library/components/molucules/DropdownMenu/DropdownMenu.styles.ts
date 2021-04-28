import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	containerPopup: {
		position: 'absolute',
		top: 60,
		background: '#FFFFFF',
		border: '1px solid #EAE9EE',
		borderRadius: 10,
		transition: '0.3s ease-in-out',
	},
	onOpen: {
		opacity: 1,
		visibility: 'visible',
		transform: 'translate(0, 5px)',
	},
	onClose: {
		opacity: 0,
		visibility: 'hidden',
		transform: 'translate(0, -10px)',
	},
};
