import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	blocktext: {
		display: 'flex',
		margin: '0 0 0 10px',
		flexDirection: 'column',
	},
	title: {
		color: '#4C475E',
		whiteSpace: 'nowrap',
		width: 270,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
	text: {
		color: '#B3AFC2',
		whiteSpace: 'nowrap',
		width: 270,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
	},
};
