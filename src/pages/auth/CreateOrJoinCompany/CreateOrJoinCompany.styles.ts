import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'inline-flex',
		flexDirection: 'column',
	},
	blockOr: {
		margin: '45px 0 45px 0',
		borderLeft: '211px solid #9792AC',
		borderRight: '211px solid #9792AC',
		height: 1,
		position: 'relative',
	},
	button: {
		margin: '98px 0 0 0',
	},
	buttonOutline: {
		color: '#B6C7FF',
		background: 'none',
		border: '2px solid #B6C7FF',
	},
};
