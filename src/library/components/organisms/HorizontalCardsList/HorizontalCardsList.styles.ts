import { CSSObject } from '@emotion/css';

export const activeButtonColor = '#3969FF';
export const disabledButtonColor = '#9FB6FF';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		boxShadow: '0px 4px 23px rgba(146, 186, 208, 0.12)',
		borderRadius: '0 0 25px 25px',
		background: '#FFFFFF',
	},
	wrapperBlock: {
		display: 'flex',
		width: '100%',
		overflow: 'hidden',
		padding: '20px 0',
	},
	buttonRigth: {
		margin: '0 20px 0 20px',
	},
	down: {
		background: 'red',
	},
	up: {
		background: 'green',
	},
};
