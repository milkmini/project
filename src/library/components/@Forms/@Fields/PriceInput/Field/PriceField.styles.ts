import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		position: 'relative',
	},
	buttonWrapper: {
		position: 'absolute',
		top: 22,
		right: 19,
		display: 'flex',
		width: 38,
		justifyContent: 'flex-end',
	},
	button: {
		minWidth: 16,
		minHeight: 16,
		boxShadow: 'none',
	},
	buttonFirst: {
		minWidth: 16,
		minHeight: 16,
		boxShadow: 'none',
		marginRight: 6,
	},
};
