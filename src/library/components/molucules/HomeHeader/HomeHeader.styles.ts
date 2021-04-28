import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	containerHeader: {
		display: 'flex',
		position: 'absolute',
		width: '100%',
		background: '#FFFFFF',
		flexDirection: 'column',
		padding: '24px 32px 20px 32px',
	},
	containerMenu: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	wrapperMenu: {
		display: 'flex',
	},
	CompanyInfo: {
		margin: 0,
	},
	containerTabBar: {
		display: 'flex',
		margin: '40px 0 0 0',
	},
	tabBarItem: {
		height: 4,
		borderRadius: '25px 25px 0 0',
	},
};
