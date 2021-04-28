import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		display: 'inline-block',
		margin: 11.5,
		width: '25%',
		borderRadius: 25,
		background: 'linear-gradient(116.34deg, #FFFFFF 16.15%, rgba(247, 247, 250, 0) 184.64%)',
		filter: 'drop-shadow(0px 4px 23px rgba(146, 186, 208, 0.12))',
		padding: 19,
	},
	graph: {
		margin: '0 0 10px 0',
		width: '100%',
		height: 120,
	},
	model: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		transition: 'all 0.5s ease-in-out',	
		cursor: 'pointer',
	},
	modelText: {
		overflow: 'hidden',
		margin: '0 7px 0 0 ',
		maxWidth: '100%',
		color: '#000',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		transition: 'all 0.5s ease-in-out',
		padding: '0 0 3px 5px',
	},
	onEdit: {
		zIndex: -1,
		opacity: 0,
	},
	offEdit: {
		zIndex: 1,
		opacity: 1,
	},	
	dropdownContainer: {
		position: 'relative',
		transition: 'all 0.7s ease-in-out',
	},
	modelButton: {
		minWidth: 10,
		minHeight: 10,
		background: 'none',
		transition: 'all 0.5s ease-in-out',
		boxShadow: 'none',
	},
	open: {
		transform: 'rotate(180deg)',
	},
	close: {
		transform: 'rotate(0)',
	},
	onOpenDate: {
		transform: 'translate(0, 3px)',
	},
	onCloseDate: {
		transform: 'translate(0, -4px)',
	},
	up: {
		zIndex: 10,
	},
	dateContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		transition: 'all 0.5s ease-in-out',
	},
	dateText: {
		color: '#949494',
		margin: '0 0 6px 0',
	},
	button: {
		height: 43,
		background: '#EEF2FF',
		borderColor: '#EEF2FF',
		color: '#3969FF',
	},
	popup: {
		left: 0,
		top: 30,
		zIndex: 10,
	},
	containerPopupIcon: {
		display: 'flex',
		width: 175,
		borderRadius: '0 0 10px 10px',
		alignItems: 'center',
		cursor: 'pointer',
		padding: 6,
	},
	containerPopupIconUp: {
		display: 'flex',
		width: 175,
		borderBottom: '1px solid #EAE9EE ', 
		borderRadius: '10px 10px 0 0',
		cursor: 'pointer',
		alignItems: 'center',
		padding: 6,
	}, 
	popupIcon: {
		margin: '0 4px 0 0',
		boxShadow: 'none',
	},
	form: {
		top: 154,
	},
};
