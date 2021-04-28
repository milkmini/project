import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	scrollBar: {
		height: 'calc(100% - 307px)',
		top: 307,
		background: 'none',
	},
	footerContainer: {
		background: '#FFFFFF',
		boxShadow: '0px 4px 23px rgba(146, 186, 208, 0.12)',
		display: 'flex',
		padding: '10px 20px 10px 0',
		alignItems: 'center',
		marginTop: 50,
	},
	footerFlexText: {
		flex: 2,
		justifyContent: 'flex-end',
		display: 'flex',
	},
	footerTextContainer: {
		margin: '0 38px 0 0',
		width: 455,
	},
	footerText: {
		color: '#AEAABC',
	},
	footerButtonContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	addItem: {
		margin: '112px 0',
		display: 'flex',
		justifyContent: 'space-evenly',
	},
};
