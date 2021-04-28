import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		position: 'relative',
		margin: '32px 28px 0 0',
	},
	containerCompany: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		cursor: 'pointer',
	},
	img: {
		marginLeft: 20,
		width: 42,
		height: 42,
		borderRadius: 10,
		background: ' #DEE2ED',
	},
	button: {
		boxShadow: 'none',
		background: 'none',
		transition: 'all 0.3s ease-in-out',
	},
	open: {
		transform: 'rotate(180deg)',
	},
	close: {
		transform: 'rotate(0)',
	},
	popup: {
		right: 60,
		top: 40,
	},
	containerPopupIcon: {
		display: 'flex',
		width: 165,
		borderBottom: '1px solid #EAE9EE',
		borderRadius: '10px 10px 0 0',
		padding: 6,
		alignItems: 'center',
		cursor: 'pointer',
	},
	containerPopupIconDown: {
		display: 'flex',
		width: 165,
		borderRadius: '0 0 10px 10px',
		alignItems: 'center',
		cursor: 'pointer',
		padding: '14px 4px 8px 18px',
	},
	popupIcon: {
		margin: '0 4px 0 0',
		boxShadow: 'none',
	},
	
};
