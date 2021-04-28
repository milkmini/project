//effector
import { createEvent, createStore } from 'effector';
import { Company } from 'generated/graphql';
import { persist } from 'effector-storage/local';

//types
type Session = {
	isLoading: boolean;
	currentCompany: Pick<Company, 'id' | 'name'> | null;
	user: {
		email: string;
		firstName: string;
		lastName: string;
	} | null;
}

//events
export const updateSession = createEvent<Session>();
export const resetSession = createEvent();

//default
const defaultSession: Session = {
	isLoading: true,
	currentCompany: null,
	user: null,
};

//store
export const $session = createStore<Session>(defaultSession)
	.on(updateSession, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	})
	.reset(resetSession);

//localstorage
persist({ store: $session, key: 'session' });
