//effector
import { createEvent, createStore } from 'effector';

//type
type RoleEdit = {
	id: string,
	name: string,
	roleDescription: string,
	annualFixedSalary: string,
	monthlyCommission: string,
	additionalMonthlyOverhead: string,
};

//events
export const updateRoleEdit = createEvent<RoleEdit>();
export const resetRole = createEvent();

//default
const defaultRoleEdit = {
	id: '',
	name: '',
	roleDescription: '',
	annualFixedSalary: '',
	monthlyCommission: '',
	additionalMonthlyOverhead: '',
};

//store
export const $roleEditId = createStore<RoleEdit>(defaultRoleEdit)
	.on(updateRoleEdit, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	})
	.reset(resetRole);
