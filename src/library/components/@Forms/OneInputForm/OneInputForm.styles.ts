import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'flex',
		position: 'absolute',
		width: '90%',
		flexDirection: 'row',
		transition: 'all 0.5s ease-in-out',
	},
	onOpen: {
		opacity: 1,
		zIndex: 5,
		transform: 'translate(-3px, -2px)',
	},
	onClose: {
		opacity: 0,
		zIndex: -5,
		transform: 'translate(-3px, -2px)',
	},
	input: {
		maxWidth: '75%',
		minWidth: 100,
		height: 33,
		borderRadius: 7,
		background: '#FFFFFF',
		border: '2px solid #3969FF',
		lineHeight: '120%',
		padding: '9px 6px',
		fontSize: 18,
		'&::focus': {
			border: '1px solid #3969FF',
			transition: 'all 0.5s ease-in-out',
		},
		'&:hover': {
			border: '1px solid #3969FF',
			transition: 'all 0.5s ease-in-out',
		},
	},
	complete: {
		position: 'relative',
		margin: '0 3px',
		height: 33,
		width: 33,
		background: '#80DD0A',
		borderRadius: 7,
		border: 'none',
		'&:after': {
			content: '""',
			width: 3,
			height: 14,
			background: '#FFFFFF',
			borderRadius: 1,
			transform: 'rotate(-135deg)',
			position: 'absolute',
			top: 9,
			right: 13,
		},
		'&:before': {
			content: '""',
			width: 7,
			height: 3,
			background: '#FFFFFF',
			borderRadius: 1,
			transform: 'rotate(-135deg)',
			position: 'absolute',
			top: 17,
			right: 17,
		},
	},
	cancel: {
		position: 'relative',
		height: 33,
		width: 33,
		background: '#FF6370',
		borderRadius: 7,
		border: 'none',
		'&:after': {
			content: '""',
			width: 3,
			height: 15,
			background: '#FFFFFF',
			borderRadius: 1,
			transform: 'rotate(-135deg)',
			position: 'absolute',
			top: 9,
			right: 15,
		},
		'&:before': {
			content: '""',
			width: 15,
			height: 3,
			background: '#FFFFFF',
			borderRadius: 1,
			transform: 'rotate(-135deg)',
			position: 'absolute',
			top: 15,
			right: 9,
		},
	},
};
