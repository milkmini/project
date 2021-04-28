//effector
import { createStore, createEvent } from 'effector';
import { persist } from 'effector-storage/local';

//type
type Model = {
	model: {
		id: string;
		name: string;
	} | null
}

//events
export const updateCurrentModel = createEvent<Model>();
export const resetModel = createEvent();

//default
const defaultModel = {
	model: null,
};

//store
export const $currentModel = createStore<Model>(defaultModel)
	.on(updateCurrentModel, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	})
	.reset(resetModel);

//localstorage
persist({ store: $currentModel, key: 'session' });
