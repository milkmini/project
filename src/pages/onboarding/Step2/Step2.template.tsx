import React from 'react';

//components
import { DepartmentCartsList } from 'library/components/organisms/HorizontalCardsList';
import { MainButton } from 'library/components/@Buttons';
import { BodyText } from 'library/components/atoms';
import {
	EmployeeList, 
	WizardHeader,
	RoleList,
} from 'library/components/organisms';

//modules
import { Scrollbar } from 'library/modules';

//styles
import { styles } from './Step2.styles';

//types
type Step2TemplateProps = {
	onGoToPrevStep: () => void;
	onGoToNextStep: () => void;
	deparmentId: string;
};

//----------------------------
// Step2Template
//---------------------------
export const Step2Template: React.FC<Step2TemplateProps> = ({
	onGoToNextStep,
	onGoToPrevStep,
	deparmentId,
}) => {
	return (	
		<Scrollbar 
			trackStyleY={styles.scrollBar}
			scrollX={false}
		>
			<WizardHeader 
				onPress={onGoToPrevStep}
				pageNumber={2} 
				stepName='Team' />

			<DepartmentCartsList />

			{(deparmentId) && (
				<>
					<EmployeeList
						departmentId={deparmentId} />
				
					<RoleList
						departmentId={deparmentId} />

					<div css={styles.footerContainer}>
						<div css={styles.footerFlexText}>
							<div css={styles.footerTextContainer}>
								<BodyText style={styles.footerText}>
									You can continue to add your employees here, but you will always
									have the opportunity to come back to this in the future.
								</BodyText>
							</div>
						</div>
						<div css={styles.footerButtonContainer}>
							<MainButton
								onPress={onGoToNextStep}
								width={406}
								text='Go to next step' />
						</div>
					</div>
				</>
			)}
			
		</Scrollbar>
	);
};
