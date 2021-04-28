import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		padding: '72px 0 67px 0',
		background: '#F5F6F9',
		borderRadius: 25,
		border: '1px solid #9FB6FF',
		width: '25%',
		height: 281,
		margin: 11.5,
		'&:hover': {
			opacity: 0.7,
		},
	},
	wrapper: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
	blockPlus: {
		width: 59,
		height: 59,
		background: '#D2DDFF',
		borderRadius: 10,
		position: 'relative',
		'&:after': {
			content: '""',
			background: '#3969FF',
			width: 7,
			height: 28,
			borderRadius: 10,
			position: 'absolute',
			top: 15.5,
			right: 26,
		},
		'&:before': {
			content: '""',
			background: '#3969FF',
			width: 28,
			height: 7,
			borderRadius: 10,
			position: 'absolute',
			top: 26,
			right: 15.5,
		},
	},
	blockText: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	titleText: {
		width: '100%',
		color: '#3969FF',
		margin: '30px 0 14px 0',
	},
	infoText: {

		color: '#949494',
	},
};
