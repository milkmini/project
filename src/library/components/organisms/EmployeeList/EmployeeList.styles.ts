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
		top: 0,
		position: 'sticky',
	},
	verticalBar: {
		margin: '0 20px 0 20px',
		minWidth: 1,
		height: 46,	
		background: '#EAE9EE',
	},
	employeePeople: {
		minWidth: '19.2%',
		display: 'flex',
		justifyContent: 'center',
	},
	employeeBonus: {
		minWidth: '6%',
		display: 'flex',
		justifyContent: 'center',
	},
	employeeSalary: {
		minWidth: '8.45%',
		display: 'flex',
		justifyContent: 'center',
	},
	employeeMoney: {
		minWidth: '6%',
		display: 'flex',
		justifyContent: 'center',
	},
	employeeTax: {
		minWidth: '4.5%',
		display: 'flex',
		justifyContent: 'center',
	},
	employeeData: {
		minWidth: '4.9%',
		display: 'flex',
		justifyContent: 'center',
	},
	employeeAny: {
		minWidth: '40%',
		display: 'flex',
	},
	employeeText: {
		color: '#A5A9B0',
	},
	buttonAdd: {
		margin: '30px 0 37px 0',
	},
};
