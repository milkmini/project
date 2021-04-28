import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		position: 'relative',
	},
	buttonWrapper: {
		display: 'flex',
		position: 'absolute',
		width: 38,
		right: 19,
		top: 22,
		justifyContent: 'flex-end',
	},
	button: {
		boxShadow: 'none',
	},
	buttonFirst: {
		boxShadow: 'none',
		marginRight: 6,
	},
};
