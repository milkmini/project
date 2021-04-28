//effector
import { createEvent, createStore } from 'effector';

//type
type DepartmentId = {
	departmentId: string;
}
type DepartmentEdit = {
	id: string;
	name: string;
};

//events
export const updateDepartmentEdit = createEvent<DepartmentEdit>();
export const updateDepartmentId = createEvent<DepartmentId>();
export const resetDepartment = createEvent();

//default
const defaultDepartmentId = {
	departmentId: '',
};

const defaultdepartmentEdit = {
	id: '',
	name: '',
};

//store
export const $departmentId = createStore<DepartmentId>(defaultDepartmentId)
	.on(updateDepartmentId, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	})
	.reset(resetDepartment);

export const $departmentEdit = createStore<DepartmentEdit>(defaultdepartmentEdit)
	.on(updateDepartmentEdit, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	})
	.reset(resetDepartment);
