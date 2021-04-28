//effector
import { createEvent, createStore } from 'effector';
import { persist } from 'effector-storage/local';

//types
type Authorization = {
	accessToken: string | null;
}

//events
export const updateAuthorization = createEvent<Authorization>();
export const resetAuthorization = createEvent();

//default
const defaultAuthorization = {
	accessToken: null,
};

//store
export const $authorization = createStore<Authorization>(defaultAuthorization)
	.on(updateAuthorization, (oldState, newStateData) => {
		const newState = { ...oldState, ...newStateData };
		
		return newState;
	})
	.reset(resetAuthorization);

//localstorage
persist({ store: $authorization, key: 'authorization' });
