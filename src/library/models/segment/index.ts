//effector
import { createEvent, createStore } from 'effector';

//type
type CurrentId = {
	id: string;
};
type SegmentValue = {
	id: string;
	name: string;
	ACC: number;
	ACV: number;
	ASL: number;
	LAC: number;
	LNT: number;
	LPO: number;
	LTOC: number;
	MCSH: number;
	MOSH: number;
	OCR: number;
	OCV: number;
	ClosingRate: number;
}
//events
export const updateSegmentIdCurrent = createEvent<CurrentId>();
export const updatePresetIdCurrent = createEvent<CurrentId>();
export const updateSegmentValue = createEvent<SegmentValue>();
export const resetSegment = createEvent();
export const resetPreset = createEvent();

//default
const defaultSegmentIdCurrent = {
	id: '',
};
const defaultSegmentValue = {
	id: '',
	name: '',
	LAC: NaN,
	ACC: NaN,
	ACV: NaN,
	ASL: NaN,
	LNT: NaN,
	LPO: NaN,
	LTOC: NaN,
	MCSH: NaN,
	MOSH: NaN,
	OCR: NaN,
	OCV: NaN,
	ClosingRate: NaN,
};

//store
export const $segmentIdCurrent = createStore<CurrentId>(defaultSegmentIdCurrent)
	.on(updateSegmentIdCurrent, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	})
	.reset(resetSegment);
	
export const $segmentValue = createStore<SegmentValue>(defaultSegmentValue)
	.on(updateSegmentValue, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	})
	.reset(resetPreset);

export const $presetIdCurrent = createStore<CurrentId>(defaultSegmentIdCurrent)
	.on(updatePresetIdCurrent, (oldStateData, newStateData) => {
		const newState = { ...oldStateData, ...newStateData };

		return newState;
	})
	.reset(resetSegment);
