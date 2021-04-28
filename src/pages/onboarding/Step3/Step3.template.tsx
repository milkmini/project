import React from 'react';

//other deps
import { useForm } from 'react-hook-form';

//components
import { BodyText } from 'library/components/atoms';
import { WizardHeader } from 'library/components/organisms';
import { MainButton } from 'library/components/@Buttons';
import { PercentInput, PriceInput, TextInput } from 'library/components/@Forms';

//modules
import { Scrollbar } from 'library/modules';

//styles
import { styles } from './Step3.styles';

//types
type Step3TemplateProps = {
	onGoToNextStep: (formData: any) => void;
	onGoToPrevStep: () => void;
};

//----------------------------
// Step3Template
//----------------------------
export const Step3Template: React.FC<Step3TemplateProps> = ({
	onGoToNextStep,
	onGoToPrevStep,
}) => {
	//data
	const { register, handleSubmit } = useForm();

	//callbacks
	const _onSubmit = React.useCallback((data) => {
		onGoToNextStep({
			name: data.name,
			ACC: Number(data.ACC.slice(0, -1)/100),
			ACV: Number(data.ACV.slice(1).replace(/\s+/g, '')),
			ASL: Number(data.ASL),
			LAC: Number(data.LAC.slice(1).replace(/\s+/g, '')),
			LNT: Number(data.LNT),
			LPO: Number(data.LPO),
			LTOC: Number(data.LTOC.slice(0, -1)/100),
			MCSH: Number(data.MCSH),
			MOSH: Number(data.MOSH),
			OCR: Number(data.OCR.slice(0, -1)/100),
			OCV: Number(data.OCV.slice(1).replace(/\s+/g, '')),
		});
	}, [onGoToNextStep]);

	return (	
		<Scrollbar
			trackStyleY={{
				height: 'calc(100% + 190px)', 
				top: 190,
				background: 'none',
			}} 
			scrollX={false}
		>
			<WizardHeader 
				onPress={onGoToPrevStep}
				stepName='Adding a segment' 
				pageNumber={3} />

			<div css={styles.container}>
				{/* --------------------Wrapper on staticBlock------------------ */}
				<div css={styles.wrapperBlock}>
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
							{ width: '439px' },
						]}
						>
							Qualification
						</div>

						<div css={[ 
							styles.blockBlock,
							styles.blockPipeline,
							{ width: '403px' },
						]}
						>
							Evaluatuion
						</div>

						<div css={[ 
							styles.blockBlock,
							styles.blockPipeline,
							{ width: '374px' }, 
						]}
						>
							Proposal
						</div>

						<div css={[ 
							styles.blockBlock,
							styles.blockPipeline,
							styles.marginBottom, 
							{ width: '335px' }, 
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

						<TextInput.Field
							toolTip
							type='singlelineText'
							name='name' 
							label='Segment name'
							ref={register({ required: true })}
							style={{ 
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
									currency='$' 
									toolTip
									type='price'
									name='LAC' 
									label='LAC' 
									ref={register({ required: true })}
									style={{ width: '100%' }} />
							</div>	
						</div>

						<div css={[ 
							styles.wrapperInputMin,
							{ marginBottom: 112 }, 
						]}
						>
							<div css={{ marginRight: 12, width: '49%' }}>
								<TextInput.Field
									toolTip
									type='digits'
									name='LNT'
									label='LNT' 
									ref={register({ required: true })}
									style={{ width: '100%' }} />
							</div>

							<div css={{ width: '49%' }}>
								<TextInput.Field
									toolTip
									type='digits'
									name='LPO' 
									label='LPO' 
									ref={register({ required: true })}
									style={{ width: '100%' }} />
							</div>
						</div>

						<div css={[
							styles.wrapperInputMin,
							{ marginBottom: 130 },
						]}
						>
							<div css={{ width: '49%' }}>
								<PercentInput.Field
									toolTip
									type='digits'
									format='percents'
									name='LTOC'
									ref={register({ required: true })}
									label='LTOC'
									style={{ width: '100%' }} />
							</div>
						</div>
							
						<TextInput.Field 
							toolTip
							type='digits'
							name='ASL' 
							label='ASL'
							ref={register({ required: true })}
							style={{ width: 406 }} />

						<div css={styles.wrapperInputMin}>
							<div css={{ marginRight: 12, width: '49%' }}>
								<PercentInput.Field
									toolTip
									type='digits'
									format='percents'
									name='OCR'
									label='OCR'
									ref={register({ required: true })}
									style={{ width: '100%' }} />
							</div>

							<div css={{ width: '49%' }}>
								<PriceInput.Field
									currency='$'
									toolTip
									type='price'
									name='ACV' 
									label='ACV' 
									ref={register({ required: true })}
									style={{ width: '100%' }} />
							</div>
						</div>

						<div css={styles.wrapperInputMin}>
							<div css={{ marginRight: 12, width: '49%' }}>
								<PriceInput.Field
									currency='$'
									toolTip
									type='price'
									name='OCV'
									label='OCV'
									ref={register({ required: true })}
									style={{ width: '100%' }} />
							</div>

							<div css={{ width: '49%' }}>
								<PercentInput.Field 
									toolTip
									type='digits'
									format='percents'
									name='ACC'
									label='ACC'
									ref={register({ required: true })}
									style={{ width: '100%' }} />
							</div>
						</div>

						<div css={styles.wrapperInputMin}>
							<div css={{ marginRight: 12, width: '49%' }}>
								<TextInput.Field
									toolTip
									type='digits'
									ref={register({ required: true })}
									name='MOSH'
									label='MOSH'
									style={{ width: '100%' }} />
							</div>

							<div css={{ width: '49%' }}>
								<TextInput.Field
									toolTip
									type='digits'
									ref={register({ required: true })}
									name='MCSH' 
									label='MCSH'
									style={{ width: '100%' }} />
							</div>
						</div>

						<div css={[ 
							styles.wrapperInputMin,
							{ marginBottom: 7 }, 
						]}
						>
							<div css={{ width: '49%' }}>
								<PercentInput.Field
									toolTip
									type='digits'
									format='percents'
									name='ClosingRate'
									label='Closing rate'
									ref={register({ required: true })}
									style={{ width: '100%' }} />
							</div>
						</div>

						<MainButton 
							width={406}
							style={{ margin: '101px 0 200px 0' }} 
							text='Create my business model' />
					</form>
				</div>
			</div>
		</Scrollbar>
	);
};
