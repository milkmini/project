import { CSSObject } from '@emotion/css';

const common: CSSObject = {
	width: '100%',
	height: 60,
	borderRadius: 10,
	border: '2px solid #3969FF',
	outline: 'none',
	boxShadow: '0px 4px 23px rgba(146, 186, 208, 0.12)',
	fontWeight: 600,
	fontSize: 14,
	cursor: 'pointer',
};

export const styles: Record<string, CSSObject> = {
	outlined: {
		...common,
		background: 'none',
		color: '#3969FF',
	},
	regular: {
		...common,
		background: '#3969FF',
		color: '#FFFFFF',
	},
	disabled: {
		opacity: '0.5',
	},
};
