import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		margin: '30px 0 0 0',
	},
	select: {
		display: 'block',
		margin: '-7px 0 0 0',
		height: 214,
		width: 365,
		border: 'none',
		color: 'white',
		fontSize: 16,
		padding: 0,
	},
	firstItem: {
		background: '#fff',
		height: '10px',
	},
	items: {
		position: 'relative',
		transition: '0.3s ease-in-out',
		zIndex: 10,
	},
	relative: {
		zIndex: 10,
	},
	absolute: {
		zIndex: 1,
	},
	onOpen: {
		opacity: 1,
		visibility: 'visible',
		transform: 'translate(0, -15px)',
	},
	onClose: {
		opacity: 0,
		visibility: 'hidden',
		transform: 'translate(0, -20px)',
	},
	visibleDropdown: {
		zIndex: 11,
	},
};
