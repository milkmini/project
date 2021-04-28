import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	containerHeader: {
		display: 'flex',
		background: '#FFFFFF',
		flexDirection: 'column',
		padding: '12px 32px 16px 32px',
	},
	containerUpMenu: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textUpMenu: {
		margin: '0 42px 0 0',
		position: 'relative',
		color: '#908AA7',
	},
	containerNav: {
		display: 'flex',
		margin: '0 0 0 62px',
		alignItems: 'center',
	},
	wrapperMenu: {
		display: 'flex',
	},
	CompanyInfo: {
		margin: 0,
	},
	textMenu: {
		display: 'flex',
		margin: '0 62px 0 0',
		position: 'relative',
		color: '#908AA7',
		justifyContent: 'center',
		alignItems: 'center',
		transition: 'all 0.2s ease-in-out',
		':hover': {
			color: '#3969FF',
			':after': {
				content: '""',
				position: 'absolute',
				height: 3,
				width: 90,
				bottom: -23,
				background: '#3969FF',
				borderRadius: 7,
			},
		},
	},
	tabBarItem: {
		bottom: -25,
	},
};
