import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		position: 'relative',
		margin: '0 0 10px 0',
		width: '100%',
	},
	input: {
		background: '#FFFFFF',
		border: '1px solid #EAE9EE',
		borderRadius: 10,
		width: 365,
		fontSize: 14,
		color: '#4C475E',
		padding: '29px 69px 10px 20px',
		zIndex: 10,
		'&:focus': {
			border: '1px solid #3969FF',
		},
		transition: 'all 0.5s ease-in-out',
	},
	label: {
		color: '#9792AC',
		position: 'absolute',
		top: 0,
		left: 0,
		padding: 20,
		transition: 'all 0.2s ease-in-out',
		pointerEvents: 'none',
	},
	onFocus: {
		transform: 'translate(0, -10px)',
		fontSize: 12,
	},
};
