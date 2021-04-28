import React from 'react';

//components
import { MainButton } from 'library/components/@Buttons';

//styles
import { styles } from './CreateOrJoinCompany.styles';

//types
type CreateOrJoinCompanyTemplateProps = {
	onGoToNextStep: () => void;
};

//----------------------------
// CreateOrJoinCompanyTemplate
//---------------------------
export const CreateOrJoinCompanyTemplate: React.FC<CreateOrJoinCompanyTemplateProps> = ({
	onGoToNextStep,
}) => {
	return (	
		<div css={styles.container}>
			<MainButton
				onPress={onGoToNextStep}
				width={460}
				height={120}
				style={ styles.button }
				text='Create my own company' />
				
			<div css={styles.blockOr}>
				<span css={{ position: 'absolute', top: '-13px', right: '12px', color: '#9792AC' }}>
					Or
				</span>
			</div>

			<MainButton
				width={460}
				height={120}
				style={ styles.buttonOutline }
				text='Join an existing company' />
		</div>
	);
};
