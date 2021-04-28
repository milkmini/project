import React from 'react';

// other deps
import Scrollbar from 'react-scrollbars-custom';

//forms
import { CompanyInfoForm } from 'library/components/@Forms/CompanyInfoForm';

//components
import { BodyText, BMTLogo, HeadlineText } from 'library/components/atoms';
import { StepsText } from 'library/components/molucules';

//styles
import { styles } from './Step1.styles';

//images
import wizardPromoIllustrationImage from 'assets/img/wizard-promo-illustration.png';

//types
import { CreateCompanyFormData } from 'library/components/@Forms/CompanyInfoForm';
import { BusinessModel, FieldOfActivity, StageOfDevelopment } from 'generated/graphql';

type Step1Props = {
	onGoToNextStep: (data: CreateCompanyFormData) => void;
	stagesOfDevelopment: StageOfDevelopment[];
	fieldsOfActivities: FieldOfActivity[];
	businessModels: BusinessModel[];
};

//----------------------------
// Step1
//---------------------------
export const Step1Template: React.FC<Step1Props> = ({
	onGoToNextStep,
	stagesOfDevelopment,
	fieldsOfActivities,
	businessModels,
}) => {
	return (	
		<Scrollbar
			noScrollX={true}
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
			}}
		>
			<img // eslint-disable-line jsx-a11y/alt-text
				src={wizardPromoIllustrationImage} 
				style={{ position: 'absolute', top: 151, left: 0, transform: 'scale(0.65) translateX(-43%)' }} />

			<div css={{ position: 'relative' }}>
				<BMTLogo
					withText
					style={styles.logoImage} />

				<div css={styles.container}>
					<div css={styles.blockTitle}>
						<HeadlineText>
							Welcome to Beamtee!
						</HeadlineText>

						<BodyText style={styles.subTitle}>
							We can help you build your economics if you answer a couple of questions
						</BodyText>
					</div>

					<div css={styles.form}>
						<StepsText
							pageNumber={1} 
							stepName='Company info'
							style={styles.titleForm} />

						<CompanyInfoForm 
							stagesOfDevelopment={stagesOfDevelopment}
							fieldsOfActivities={fieldsOfActivities}
							businessModels={businessModels}
							onSubmit={onGoToNextStep} />
					</div>
				</div>
			</div>
		</Scrollbar>
	);
};
