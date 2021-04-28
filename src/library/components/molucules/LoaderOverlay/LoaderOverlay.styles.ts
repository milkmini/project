import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	containerBlock: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerPage: {
		display: 'flex',
		width: '100vw',
		height: '100vh',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#F5F6F9',
	},
	logo: {
		position: 'absolute',
	},
};
