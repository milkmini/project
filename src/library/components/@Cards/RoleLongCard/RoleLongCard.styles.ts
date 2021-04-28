export const opasityTrue = {
	opacity: 0.5, 
};
export const opasityFalse = {
	opacity: 1, 
};
import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	container: {
		border: '1px solid #EAE9EE',
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		margin: '0 0 10px 0',
		justifyContent: 'space-between',
		background: '#FFFFFF',
	},
	swither: {
		minWidth: '25%',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	people: {
		justifyContent: 'space-between',
		minWidth: '200px',
		display: 'flex',
		margin: '0 0 0 15px',
	},
	money: {
		minWidth: '5.8%',
		display: 'flex',
		justifyContent: 'center',
	},
	moneyTime: {
		minWidth: '8.8%',
		display: 'flex',
		justifyContent: 'center',
	},
	verticalBar: {
		minWidth: 1,
		height: 46,	
		background: '#EAE9EE',
	},
	verticalBarFalse: {
		minWidth: 1,
		height: 46,	
		background: '#fff',
	},
	switcherText: {
		padding: ' 0 22px 0 0',
	},
	name: {
		color: '#3969FF',
	},
	moneyText: {
		color: '#80DD0A',
	},
	buttonWrapper: {
		display: 'flex',
		alignItems: 'center',
		margin: '7px 7px 7px 0',
	},
	buttonInfo: {
		margin: ' 0 7px 0 0',
	},
};
