import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		width: '100%',
		position: 'fixed', 
		background: '#FFFFFF',
		borderRadius: '0 0 25px 25px',
		boxShadow: '0px 4px 23px rgba(146, 186, 208, 0.12)',
		justifyContent: 'space-between',
		padding: '10px 10px 10px 25px',
		zIndex: 10,
	},
	containerMenu: {
		display: 'flex',
		alignItems: 'center',
	},
	containerModel: {
		display: 'flex',
		margin: '0 40px 0 38px',
		alignItems: 'center',
		cursor: 'pointer',
	},
	containerNav: {
		display: 'flex',
		width: 484,
		justifyContent: 'space-between',
	},
	textModel: {
		width: 140,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		padding: '8px 0',
	},
	button: {
		background: '#F5F6F9',
		transition: 'all 0.3s ease-in-out',
	},
	open: {
		transform: 'rotate(180deg)',
	},
	close: {
		transform: 'rotate(0)',
	},
	textMenu: {
		display: 'flex',
		position: 'relative',
		color: '#908AA7',
		alignItems: 'center',
		justifyContent: 'center',
		transition: 'all 0.2s ease-in-out',
		':hover': {
			color: '#3969FF',
			':after': {
				position: 'absolute',
				height: 3,
				width: 90,
				content: '""',
				background: '#3969FF',
				borderRadius: 7,
				bottom: -20,
			},
		},
	},
	wrapperMenu: {
		display: 'flex',
	},
	CompanyInfo: {
		margin: 0,
	},
	containerPopupIcon: {
		display: 'flex',
		width: 260,
		borderBottom: '1px solid #EAE9EE',
		borderRadius: '10px 10px 0 0',
		alignItems: 'center',
		cursor: 'pointer',
		padding: 6,
	},
	containerPopupIconDown: {
		display: 'flex',
		width: 260,
		alignItems: 'center',
		cursor: 'pointer',
		padding: 6,
	},
	popupIcon: {
		margin: '0 4px 0 0',
		boxShadow: 'none',
	},
	popupText: {
		overflow: 'hidden',
		width: 200,
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		color: '#4C475E',
	},
};
