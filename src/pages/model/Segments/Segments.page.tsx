import React from 'react';

//effector
import { useStore } from 'effector-react';

//graphql
import { 
	useCreateSegmentMutation,
	useDeleteSegmentMutation,
	useUpdateSegmentMutation,
	useGetSegmentsQuery,
	useGetSegmentQuery,
} from 'generated/graphql';

//models
import {
	updateSegmentIdCurrent,
	updatePresetIdCurrent,
	updateSegmentValue,
	$segmentIdCurrent,
	$presetIdCurrent,
	$segmentValue,
	resetPreset,
} from 'library/models/segment';

//templates
import { SegmentsTemplate } from './Segments.template';

//types
import { SegmentsCardsData } from './Segments.interface';

type SegmentsPageProps = {
	model: {
		id: string;
		name: string;
	} | null;
};

//mocks
const presets = [{
	id: '0',
	name: 'Custom',
	LAC: 2,
	ACC: 1,
	ACV: 2,
	ASL: 1,
	LNT: 1,
	LPO: 1,
	LTOC: 1,
	MCSH: 1,
	MOSH: 1,
	OCR: 1,
	OCV: 1,
	ClosingRate: 12,
}, {
	id: '1',
	name: 'MidMarket',
	LAC: 2,
	ACC: 1,
	ACV: 2,
	ASL: 1,
	LNT: 1,
	LPO: 1,
	LTOC: 1,
	MCSH: 1,
	MOSH: 1,
	OCR: 1,
	OCV: 1,
	ClosingRate: 12,
}, {
	id: '2',
	name: 'name2',
	LAC: 2,
	ACC: 1,
	ACV: 2,
	ASL: 1,
	LNT: 1,
	LPO: 1,
	LTOC: 1,
	MCSH: 1,
	MOSH: 1,
	OCR: 1,
	OCV: 2,
	ClosingRate: 12,
},
{
	id: '3',
	name: 'name3',
	LAC: 2,
	ACC: 1,
	ACV: 2,
	ASL: 1,
	LNT: 1,
	LPO: 1,
	LTOC: 1,
	MCSH: 1,
	MOSH: 1,
	OCR: 1,
	OCV: 1,
	ClosingRate: 12,

}, {
	id: '4',
	name: 'name4',
	LAC: 2,
	ACC: 1,
	ACV: 2,
	ASL: 1,
	LNT: 1,
	LPO: 1,
	LTOC: 1,
	MCSH: 1,
	MOSH: 1,
	OCR: 1,
	OCV: 1,
	ClosingRate: 12,
},
];

//-----------------------------
// SegmentsPage
//-----------------------------
export const SegmentsPage: React.FC<SegmentsPageProps> = ({
	model,
}) => {
	//models
	const segmentId = useStore($segmentIdCurrent).id;
	const presetId = useStore($presetIdCurrent).id;
	const inputValue = useStore($segmentValue);

	//state
	const [loading, setLoading] = React.useState(false);
		
	//data
	const { data: segmentsData, loading: segmentsLoading, refetch: segmentsRefetch } = useGetSegmentsQuery({
		variables: {
			modelId: model?.id || '',
		},
	});
	const { data: segmentData, loading: segmentLoading } = useGetSegmentQuery({
		variables: {
			segmentId: segmentId || '',
		},
	});
		
	//qraphql
	const [createSegment] = useCreateSegmentMutation();
	const [deleteSegment] = useDeleteSegmentMutation();
	const [editSegment] = useUpdateSegmentMutation();

	//callbacks
	const _onOpen = React.useCallback((id: string) => {
		updateSegmentIdCurrent({
			id: id,
		});
		updatePresetIdCurrent({
			id: '',
		});
	}, []);

	const _onСhoicePreset = React.useCallback((id: string) => {
		updatePresetIdCurrent({
			id: id,
		});
	}, []);
	const _onEditCustomPreset = React.useCallback((newValue: string) => {
		console.log(newValue);
	}, []);

	const _onCreateSegment = React.useCallback(async () => {
		try{
			setLoading(true);
			const result = await createSegment({
				variables: {
					modelId: model?.id || '',
					name: 'New segment',
					LAC: 2,
					ACC: 1,
					ACV: 2,
					ASL: 1,
					LNT: 1,
					LPO: 1,
					LTOC: 1,
					MCSH: 1,
					MOSH: 1,
					OCR: 1,
					OCV: 1,
				},
			});
				
			if (result.data?.createMarketSegment) {
				await (segmentsRefetch().then(() => {
					setLoading(false);
					const Segments = result.data?.createMarketSegment;
					_onOpen(Segments?.id || '');
					updateSegmentValue({
						id: '0',
						name: 'Custom',
						LAC: 2,
						ACC: 1,
						ACV: 2,
						ASL: 1,
						LNT: 1,
						LPO: 1,
						LTOC: 1,
						MCSH: 1,
						MOSH: 1,
						OCR: 1,
						OCV: 1,
						ClosingRate: 12,
					});
					updatePresetIdCurrent({
						id: '0',
					});
				}));
			}
		}
		catch (err) {
		}
	}, [_onOpen, createSegment, model?.id, segmentsRefetch]);
	
	const _onEgitSegment = React.useCallback(async (data) => {
		try{
			setLoading(true);
			const result = await editSegment({
				variables: {
					segmentId: segmentId,
					name: data.name,
					ACC: data.ACC,
					ACV: data.ACV,
					ASL: data.ASL,
					LAC: data.LAC,
					LNT: data.LNT,
					LPO: data.LPO,
					LTOC: data.LTOC,
					MCSH: data.MCSH,
					MOSH: data.MOSH,
					OCR: data.OCR,
					OCV: data.OCV,
				},
			});
				
			if (result.data?.updateMarketSegment) {
				await (segmentsRefetch().then(() => {
					setLoading(false);
				}));
			}
		}
		catch (err) {
	
		}
	}, [editSegment, segmentId, segmentsRefetch]);
	
	const _onDeleteSegmet = React.useCallback(async (data) => {
		try{
			setLoading(true);
			const result = await deleteSegment({
				variables: {
					segmentId: data,
				},
			});
				
			if (result.data?.deleteMarketSegment) {
				await (segmentsRefetch().then(() => {
					setLoading(false);
				}));
			}
		}
		catch (err) {
	
		}
	}, [deleteSegment, segmentsRefetch]);

	//renders
	let loadingError: string | null = null;
	let segmentsCardsData: SegmentsCardsData[] = React.useMemo(() => [], []);

	if (!segmentsLoading && !segmentLoading) {
		if (!segmentsData?.finModel?.segments)
			loadingError = 'Sorry, an error has occured while loading models';
		else {
			segmentsCardsData = segmentsData.finModel.segments.map((segment) => {
				return {
					id: segment.id,
					name: segment.name,
					description: 'Segment description',
				};
			});
		}
	}

	React.useEffect(() => {
		if (window.location.search) {
			if (segmentId === '') {
				updateSegmentIdCurrent({
					id: window.location.search.slice(12),
				});
			}
		}
		if (!segmentId) {
			if (!window.location.search) {
				if (segmentsCardsData.length > 0) {
					updateSegmentIdCurrent({
						id: segmentsCardsData[0].id,
					});
				}
			}
		}
	}, [segmentId, segmentsCardsData]);

	React.useEffect(() => {
		if(presetId !== '') {
			presets.map((item, index) => {
				if(presetId === index.toString()) {
					updateSegmentValue({
						ACC: Math.round(item.ACC*100),
						ACV: item.ACV,
						ASL: item.ASL,
						ClosingRate: 1,
						LAC: item.LAC,
						LNT: item.LNT,
						LPO: item.LPO,
						LTOC: item.LTOC*100,
						MCSH: item.MCSH,
						MOSH: item.MOSH,
						OCR: item.OCR*100,
						OCV: item.OCV,
						name: item.name,
						id: item.id,
					});
				}
			});
		}
		else 
			resetPreset();
	}, [presetId]);

	let initialSlide = 0;
	segmentsCardsData.map((item, index) => {
		if (item.id === segmentId)
			return initialSlide = index;
	});
	
	return (
		<SegmentsTemplate
			onEditCustomPreset={_onEditCustomPreset}
			onCreate={_onCreateSegment}
			onSelect={_onСhoicePreset}
			onDelete={_onDeleteSegmet}
			onSubmit={_onEgitSegment}
			onOpen={_onOpen}
			segments={segmentsCardsData}
			segment={segmentData?.marketSegment} 
			presets={presets}
			preset={inputValue}
			loadingPage={segmentsLoading || segmentLoading}
			error={loadingError}
			loading={loading}
			initialSlide={initialSlide} /> 
	);
};

