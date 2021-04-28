import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	header: {
		background: '#F5F6F9',
		boxShadow: 'none',
	},
	wrapperBlock: {
		display: 'flex',
		flex: 1.9,
		flexDirection: 'column',
		alignItems: 'center',
	},
	wrapperPipeline: {
		display: 'flex',
		position: 'relative',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	blockLead: {
		margin: '0 0 49px 0',
		height: 132,
		borderRadius: '10px 10px 6px 7px',
		color: '#fff',
		background: '#3969FF',
	},
	blockAfter: {
		position: 'absolute',
		bottom: -239,
		left: 0,
		border: '239px solid transparent',
		borderTop: '50px solid #3969FF',
		borderRadius: '3%',
	},
	blockPipeline: {
		marginBottom: 12,
		color: '#fff',
		background: '#FF6370',
	},
	blockBlock: {
		display: 'flex',
		width: 477,
		height: 60,
		margin: '0 0 10px 0',
		borderRadius: 10,
		background: '#DEE6FF',
		color: '#2C5BEC',
		fontSize: 18,
		lineHeight: '120%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	marginBottom: {
		marginBottom: 20,
	},
	marginTop: {
		marginTop: 20,
	},
	blockNull: {
		width: 477,
		height: 64,
		background: 'none',
	},
	wrapperForm: {
		flex: 2,
	},
	formInput: {
		maxWidth: 406,
	},
	wrapperInputMin: {
		display: 'flex',
	},
	pipelineBorder: {
		position: 'absolute',
		width: 390,
		height: 1466,
		left: 473,
		bottom: -540,
		borderRadius: 10,
		border: '1px solid #DEE6FF',
		transform: 'rotate(-90deg)',
		color: '#2C5BEC',
		textAlign: 'center',
		padding: '10px 0 0 0',
	},
	arrowDown: {
		position: 'relative',
		':after': {
			content: '""',
			position: 'absolute',
			width: 2,
			height: 6,
			top: 30,
			right: -91,
			background: '#DEE6FF',
		},
		':before': {
			content: '""',
			position: 'absolute',
			top: 36,
			right: -96,
			border: '6px solid transparent',
			borderTop: '10px solid #DEE6FF',
		},
	},
	arrowDownTwo: {
		position: 'relative',
		':after': {
			content: '""',
			position: 'absolute',
			height: 8,
			width: 2,
			top: -49,
			right: -75,
			background: '#DEE6FF',
		},
		':before': {
			content: '""',
			position: 'absolute',
			right: -80,
			top: -41,
			border: '6px solid transparent',
			borderTop: '12px solid #DEE6FF',
		},
	},
	arrowDownThree: {
		position: 'relative',
		':after': {
			content: '""',
			position: 'absolute',
			height: 8,
			width: 2,
			right: -196,
			top: -49,
			background: '#DEE6FF',
		},
		':before': {
			content: '""',
			position: 'absolute',
			right: -201,
			top: -41,
			border: '6px solid transparent',
			borderTop: '12px solid #DEE6FF',
		},
	},
};