export const trueBack = {
	background: '#000',
	position: 'fixed',
	top: 0,
	opacity: 0.5,
	width: '100%',
	height: '100vh',
	transition: '0.25s ease-in-out',
	zIndex: 10,
};

export const falseBack = {};

import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	formWrapper: {
		width: 639,
		height: '100vh',
		padding: 10,
		top: 0,
		right: -650,
		transition: '0.3s ease-in-out',
		zIndex: 10,
		position: 'fixed',
	},
	container: {
		display: 'flex',
		borderRadius: 10,
		width: 639,
		height: '100%',
		background: '#FFF',
		flexDirection: 'column',
	},
	formItemWraapper: {
		width: 365,
	},
	opasityBlock: {
		background: '#000',
		opacity: 0.5,
	},
	titleWrapper: {
		boxShadow: '0px 4px 23px rgba(146, 186, 208, 0.12)',
		display: 'flex',
		padding: '12px 12px 12px 20px',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 22,
	},
	buttonHeader: {
		background: '#DEE6FF',
		width: 48,
		height: 48,
	},
	inputWrapper: {
		margin: '20px 0 20px 20px',
		overflow: 'scroll',
		width: 365,
		overflowX: 'hidden',
	},
	buttonSave: {
		position: 'absolute',
		top: '89%',
		right: 1,
	},
	helpText: {
		color: '#AEAABC',
		margin: '0 0 25px 0',
		width: 330,
		textAlign: 'center',
	},
	formTextHelp: {
		color: '#9792AC',
		margin: '20px 0 20px 0',
		display: 'block',
	},
	formInput: {
		margin: '0 0 20px 0',
	},
};
