import React from 'react';

//other deps
import { useForm } from 'react-hook-form';

//components
import { PercentInput, PriceInput, TextInput } from 'library/components/@Forms';
import { SegmentDropdown, LoaderOverlay } from 'library/components/molucules';
import { HorizontalCardsList } from 'library/components/organisms';
import { MainButton, Switcher } from 'library/components/@Buttons';
import { BodyText } from 'library/components/atoms';

//modules
import { Scrollbar } from 'library/modules';

//styles
import { styles } from './Segments.styles';

//types
type Item = {
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
	ClosingRate?: number;
};

type SegmentsTemplateProps = {
	onEditCustomPreset: (newValue: string) => void; 
	onSelect?: (id: string) => void;
	onDelete: (id: string) => void;
	onSubmit: (data: any) => void;
	onOpen: (id: string) => void;
	onCreate?: () => void;
	segments: {
		id: string;
		name: string;
		description: string;
	}[];
	segment?: Item | null;
	presets: Item[];
	preset?: Item | null;
	initialSlide: number;
	loadingPage: boolean;
	loading: boolean;
	error: string | null;
};

//----------------------------
// SegmentsTemplate
//----------------------------
export const SegmentsTemplate: React.FC<SegmentsTemplateProps> = ({
	onEditCustomPreset,
	onSubmit,
	onDelete,
	onCreate,
	onSelect,
	onOpen,
	segments,
	segment,
	presets,
	preset,
	initialSlide,
	loadingPage,
	loading,
	error,
}) => {
	//data
	const { register, handleSubmit } = useForm<{}>();

	//callbacks
	const _onSubmit = React.useCallback((data) => {
		onSubmit({
			name: data.name,
			ACC: Number(data.ACC.slice(0, -1))/100,
			ACV: Number(data.ACV.slice(1).replace(/\s+/g, '')),
			ASL: Number(data.ASL),
			LAC: Number(data.LAC.slice(1).replace(/\s+/g, '')),
			LNT: Number(data.LNT),
			LPO: Number(data.LPO),
			LTOC: Number(data.LTOC.slice(0, -1))/100,
			MCSH: Number(data.MCSH),
			MOSH: Number(data.MOSH),
			OCR: Number(data.OCR.slice(0, -1))/100,
			OCV: Number(data.OCV.slice(1).replace(/\s+/g, '')),
		});
	}, [onSubmit]);
	
	//renders
	if(preset?.id !== '')
		segment = preset;

	const _renderContent = React.useCallback(() => {
		if (error)
			return { error };

		else if (loadingPage)
			return <LoaderOverlay page />;
			
		else {
			return (
				<>
					<HorizontalCardsList
						onSelect={() => onCreate && onCreate()}
						onDelete={onDelete}
						onOpen={onOpen}
						items={segments}
						loading={loading}
						initialSlide={initialSlide} 
						createItemText='Create segment'
						style={{ paddingTop: 62 }} />

					{(segments.length > 0) && (
						<div css={styles.container}>
							{/* --------------------Wrapper on staticBlock------------------ */}
							<div css={styles.wrapperBlock}>

								<SegmentDropdown
									items={presets}
									onSelect={onSelect}
									label='Business model'
									name='business model'
									style={{ margin: '20px 0 8px 0', width: 365 }}
								>
								</SegmentDropdown>

								<div css={[ 
									styles.blockNull,
									styles.marginBottom, 
								]}
								>
								</div>
								<div css={[styles.blockBlock, {
									marginBottom: 16,
								}]}
								>
									<BodyText style={styles.arrowDown}></BodyText>
									Potential customers
								</div>

								<div css={{ 
									position: 'relative', 
									marginBottom: 3, 
								}}
								>
									<div css={[ 
										styles.blockBlock,
										styles.blockLead, 
									]}
									>
										Lead nurturing
									</div>

									<div css={styles.blockAfter}></div>
								</div>

								<div css={{ position: 'relative' }}>
									<div css={[ 
										styles.blockBlock,
										styles.blockLead, 
									]}
									>
										Lead qualification
									</div>
									<div css={styles.blockAfter}></div>
								</div>
				
								<div css={styles.wrapperPipeline}>
									<div css={[ 
										styles.blockBlock,
										styles.blockPipeline,
										styles.marginTop, 
									]}
									>
										Prospecting
									</div>
									<div css={[
										styles.blockBlock,
										styles.blockPipeline,
										{ width: 439 },
									]}
									>
										Qualification
									</div>
									<div css={[ 
										styles.blockBlock,
										styles.blockPipeline,
										{ width: 403 },
									]}
									>
										Evaluatuion
									</div>
									<div css={[ 
										styles.blockBlock,
										styles.blockPipeline,
										{ width: 374 }, 
									]}
									>
										Proposal
									</div>
									<div css={[ 
										styles.blockBlock,
										styles.blockPipeline,
										styles.marginBottom, 
										{ width: 335 }, 
									]}
									>
										Closing
									</div>

									<span css={styles.pipelineBorder}>
										pipeline
									</span>
								</div>

								<div css={[ 
									styles.blockBlock,
									styles.marginBottom,
									styles.marginTop, 
								]}
								>
									<BodyText style={styles.arrowDownTwo}></BodyText>
									Billing & Booking
								</div>
								<div css={styles.blockBlock}>
									<BodyText style={styles.arrowDownThree}></BodyText>
									Maintenance, Support & Customer success
								</div>
							</div>
							{/* -------------------Wrapper on inputBlock----------------------- */}
							<div css={styles.wrapperForm}>
								<form
									onSubmit={handleSubmit(_onSubmit)}
									css={styles.formInput}
								>

									<div css={{ display: 'flex', justifyContent: 'flex-end', margin: '35px 0 41px 0' }}>
										<Switcher
											onChange={() => {
												'';
											}} />
									</div>

									<TextInput.Field
										onChange={onEditCustomPreset}
										toolTip
										value={segment?.name}
										type='singlelineText'
										name='name' 
										label='Segment name'
										ref={register({ required: true })}
										styleInput={{ 
											width: 406, 
											marginBottom: 10, 
										}} />

									<div css={[ 
										styles.wrapperInputMin,
										{ marginBottom: 5 }, 
									]}
									>
										<div css={{ width: '49%' }}>
											<PriceInput.Field
												onChange={onEditCustomPreset}
												currency='$' 
												value={segment?.LAC}
												toolTip
												type='price'
												name='LAC' 
												label='LAC' 
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>	
									</div>

									<div css={[ 
										styles.wrapperInputMin,
										{ marginBottom: 112 }, 
									]}
									>
										<div css={{ marginRight: 12, width: '49%' }}>
											<TextInput.Field
												onChange={onEditCustomPreset}
												value={segment?.LNT}
												toolTip
												type='digits'
												name='LNT'
												label='LNT' 
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>

										<div css={{ width: '49%' }}>
											<TextInput.Field
												onChange={onEditCustomPreset}
												toolTip
												value={segment?.LPO}
												type='digits'
												name='LPO' 
												label='LPO' 
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>
									</div>

									<div css={[
										styles.wrapperInputMin,
										{ marginBottom: 130 },
									]}
									>
										<div css={{ width: '49%' }}>
											<PercentInput.Field
												onChange={onEditCustomPreset}
												toolTip
												value={segment?.LTOC}
												type='digits'
												format='percents'
												name='LTOC'
												ref={register({ required: true })}
												label='LTOC'
												styleInput={{ width: '100%' }} />
										</div>
									</div>
							
									<TextInput.Field 
										onChange={onEditCustomPreset}
										toolTip
										value={segment?.ASL}
										type='digits'
										name='ASL' 
										label='ASL'
										ref={register({ required: true })}
										styleInput={{ width: 406 }} />

									<div css={styles.wrapperInputMin}>
										<div css={{ marginRight: 12, width: '49%' }}>
											<PercentInput.Field
												onChange={onEditCustomPreset}
												toolTip
												value={segment?.OCR}
												type='digits'
												format='percents'
												name='OCR'
												label='OCR'
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>

										<div css={{ width: '49%' }}>
											<PriceInput.Field
												onChange={onEditCustomPreset}
												currency='$'
												toolTip
												type='price'
												name='ACV' 
												label='ACV' 
												value={segment?.ACV}
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>
									</div>

									<div css={styles.wrapperInputMin}>
										<div css={{ marginRight: 12, width: '49%' }}>
											<PriceInput.Field
												onChange={onEditCustomPreset}
												currency='$'
												toolTip
												type='price'
												name='OCV'
												label='OCV'
												value={segment?.OCV}
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>

										<div css={{ width: '49%' }}>
											<PercentInput.Field 
												onChange={onEditCustomPreset}
												toolTip
												type='digits'
												format='percents'
												name='ACC'
												label='ACC'
												value={segment?.ACC}
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>
									</div>

									<div css={styles.wrapperInputMin}>
										<div css={{ marginRight: 12, width: '49%' }}>
											<TextInput.Field
												onChange={onEditCustomPreset}
												toolTip
												type='digits'
												name='MOSH'
												label='MOSH'
												value={segment?.MOSH}
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>

										<div css={{ width: '49%' }}>
											<TextInput.Field
												onChange={onEditCustomPreset}
												toolTip
												type='digits'
												name='MCSH' 
												label='MCSH'
												value={segment?.MCSH}
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>
									</div>

									<div css={[ 
										styles.wrapperInputMin,
										{ marginBottom: 7 }, 
									]}
									>
										<div css={{ width: '49%' }}>
											<PercentInput.Field
												onChange={onEditCustomPreset}
												toolTip
												type='digits'
												format='percents'
												name='ClosingRate'
												label='Closing rate'
												value={12}
												ref={register({ required: true })}
												styleInput={{ width: '100%' }} />
										</div>
									</div>

									<MainButton 
										width={406}
										style={{ margin: '101px 0 200px 0' }} 
										text='Edit business model' />
								</form>
							</div>
						</div>
					)}
				</>
			);
		}
	}, [_onSubmit, error, handleSubmit, loading, onCreate, onDelete, onOpen, register, segments]); // eslint-disable-line react-hooks/exhaustive-deps

	return (	
		<Scrollbar 
			trackStyleY={{ 
				height: 'calc(100% - 180px)', 
				top: 175,
				background: 'none',
			}}
			scrollX={false}
		>
			{_renderContent()}
		</Scrollbar>
	);
};
