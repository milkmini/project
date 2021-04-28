import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		border: 'none',
		background: 'none',
		padding: '0 20px',
	},
	textMenu: {
		color: '#908AA7',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
		transition: 'all 0.2s ease-in-out',
		':hover': {
			color: '#3969FF',
		},
	},
	activeOn: {
		color: '#3969FF',
	},
	activeOff: {
		
	},
};
