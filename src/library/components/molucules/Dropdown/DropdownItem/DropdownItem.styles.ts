import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		background: '#FFFFFF',
		border: '1px solid #EAE9EE',
		fontSize: 14,
		width: 365,
		height: 45,
		padding: 10,
		margin: 0,
		color: '#4C475E',
		zIndex: 1,
		':hover': {
			background: '#F5F5F5',
		},
	},
};
