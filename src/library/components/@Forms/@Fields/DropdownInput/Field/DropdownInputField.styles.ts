import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		position: 'relative',
	},
	buttonWrapper: {
		display: 'flex',
		position: 'absolute',
		zIndex: 10,
		width: 38,
		right: 19,
		top: 22,
		justifyContent: 'flex-end',
	},
	button: {
		transition: 'all 0.3s ease-in-out',
		boxShadow: 'none',
		minWidth: 16,
		minHeight: 16,
	},
	onOpen: {
		transform: 'rotate(180deg)',
	},
};
