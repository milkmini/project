import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	teamContainer: { 
		paddingTop: 176,
	},
	deparment: { 
		position: 'fixed',
		width: '100%',
		zIndex: 8, 
		paddingTop: 62,
		transition: 'all 0.4s ease-in-out',
	},
	onVisible: {
		transform: 'translate(0, 0px)',
	},
	offVisible: {
		transform: 'translate(0, -140px)',
	},
};
