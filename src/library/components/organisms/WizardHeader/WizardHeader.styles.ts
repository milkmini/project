const shadow = '0px 4px 23px rgba(146, 186, 208, 0.12)';

import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		background: '#FFFFFF',
		width: '100%',
		padding: '28px 32px 41px 32px',
		boxShadow: shadow,
		position: 'relative',
	},
	head: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	content: {
		display: 'flex',
		alignItems: 'center',
		margin: '40px 0 0 0 ',
	},
	button: {
		margin: '0 20px 0 0',
		boxShadow: shadow,
	},
};
