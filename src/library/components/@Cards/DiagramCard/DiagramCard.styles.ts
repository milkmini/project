import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		padding: '21px 22px 32px 18px ',
		margin: '0 10px 0 0',
		background: 'linear-gradient(116.34deg, #FFFFFF 16.15%, rgba(247, 247, 250, 0) 184.64%)',
		filter: 'drop-shadow(0px 4px 23px rgba(146, 186, 208, 0.12))',
		borderRadius: 25,
		height: 267,
	},
	containerHeader: {
		display: 'flex',
		margin: '0 0 20px 0',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	containerBody: {
		display: 'flex',
	},
	containerPieChart: {
		margin: '0 0 0 22px',
		transform: 'rotate(-45deg)',
	},
	containerButtons: {
		margin: '20px 0 0 70px',
		display: 'flex',
		alignItems: 'flex-end',
		flexDirection: 'column',
	},
	button: {
		margin: '0 0 13px 0',
		width: 'fit-content',
		padding: '9.5px 24px',
		background: '#FFFFFF',
		boxShadow: '0px 4px 23px rgba(146, 186, 208, 0.12)',
		borderRadius: 15,
		border: 'none',
		fontSize: 12,
	},
};
