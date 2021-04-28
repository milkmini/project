//effector
import { createEvent, createStore } from 'effector';

//type
type EmployeeEdit = {
	id: string,
	firstName: string,
	lastName: string,
	jobDescription: string,
	roleDescription: string,
	annualFixedSalary: string,
	monthlyCommission: string,
	additionalMonthlyOverhead: string,
};

//events
export const updateEmployeeEdit = createEvent<EmployeeEdit>();
export const resetEmployee = createEvent();

//default
const defaultEmployeeEdit = {
	id: '',
	firstName: '',
	lastName: '',
	jobDescription: '',
	roleDescription: '',
	annualFixedSalary: '',
	monthlyCommission: '',
	additionalMonthlyOverhead: '',
};

//store
export const $employeeEdit = createStore<EmployeeEdit>(defaultEmployeeEdit)
	.on(updateEmployeeEdit, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	})
	.reset(resetEmployee);
