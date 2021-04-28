import { CSSObject } from '@emotion/css';

export const styles: Record<string, CSSObject> = {
	downContainer: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 20px 0 20px',
		flexDirection: 'column',
	}, 
	employeeWrapper: {
		margin: '11px 0 0 0',
		borderSpacing: 0,
		width: 1400,
	},
	employeeTitle: {
		color: '#4C475E',
		margin: '32px 0 0 0',
		alignSelf: 'flex-start',
		display: 'flex',
		alignItems: 'center',
	},
	roleInfoButton: {
		margin: '0 0 0 11px',
		border: 'none',
		background: 'none',
		boxShadow: 'none',
	},
	employeeContainer: {
		background: '#F5F6F9',
		display: 'flex',
		alignItems: 'center',
		margin: ' 0 0 10px 0',
		top: 30,
		position: 'sticky',
		padding: '30px 0 0 0',
	},
	employeeAny: {
		minWidth: '40%',
		display: 'flex',
	},
	employeeText: {
		color: '#A5A9B0',
	},
	verticalBar: {
		margin: '0 20px 0 20px',
		minWidth: 1,
		height: 46,	
		background: '#EAE9EE',
	},
	rolePeople: {
		minWidth: '25.5%',
		display: 'flex',
		justifyContent: 'center',
	},
	roleSalary: {
		minWidth: '12.65%',
		display: 'flex',
		justifyContent: 'center',
	},
	roleBonus: {
		minWidth: '9.65%',
		display: 'flex',
		justifyContent: 'center',
	},
	buttonAdd: {
		margin: '30px 0 37px 0',
	},
};
