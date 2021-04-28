import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		position: 'relative',
	},
	activeBlock: {
		height: 3,
		bottom: -20,
		background: '#3969FF',
		borderRadius: 7,
		position: 'absolute',
		transition: 'all 0.7s ease-in-out',
	},
};
