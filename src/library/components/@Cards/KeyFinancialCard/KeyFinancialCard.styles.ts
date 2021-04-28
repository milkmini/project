import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		padding: '15px 20px 20px 20px',
		height: 267,
		margin: '0 10px 0 0',
		background: 'linear-gradient(116.34deg, #FFFFFF 16.15%, rgba(247, 247, 250, 0) 184.64%)',
		filter: 'drop-shadow(0px 4px 23px rgba(146, 186, 208, 0.12))',
		borderRadius: 25,
		display: 'inline-block',
	},
	containerHeader: {
		display: 'flex',
		margin: '0 0 33px 0',
		alignItems: 'center',
	},
	containerButtons: {
		margin: '0 42px 0 20px',
	},
	button: {
		margin: '0 7px 0 0',
		padding: '9.5px 24px',
		background: '#FFFFFF',
		boxShadow: '0px 4px 23px rgba(146, 186, 208, 0.12)',
		borderRadius: 15,
		border: 'none',
		foneSize: 12,
	},
};
