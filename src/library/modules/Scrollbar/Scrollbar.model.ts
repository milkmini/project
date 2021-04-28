//effector
import { createEvent, createStore } from 'effector';

//types
type ScrollbarStore = {
	deltaY: number;
	scrollHeight: number;
}

//default
const defaultScrollHeight: ScrollbarStore = {
	deltaY: 0,
	scrollHeight: 0,
};

//events
export const updateScroll = createEvent<ScrollbarStore>();

//store
export const $scrollBar = createStore<ScrollbarStore>(defaultScrollHeight)
	.on(updateScroll, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	});
