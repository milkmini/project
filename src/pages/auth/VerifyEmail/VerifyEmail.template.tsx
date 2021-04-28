import React from 'react';

//components
import { HeadlineText } from 'library/components/atoms';
import { MainButton } from 'library/components/@Buttons';

//styles
import { styles } from './VerifyEmail.styles';

//types
type VerifyEmailTemplateProps = {
	onGoToNextStep: () => void;
};

//----------------------------
// VerifyEmailTemplate
// ---------------------------
export const VerifyEmailTemplate: React.FC<VerifyEmailTemplateProps> = ({
	onGoToNextStep,
}) => {
	return (	
		<div css={styles.container}>
			<HeadlineText style={ styles.title }>
				Great!
			</HeadlineText>

			<HeadlineText style={ styles.subTitle }>
				Verify your account by following the link we sent you by email
			</HeadlineText>

			<MainButton
				onPress={onGoToNextStep}
				width={283}
				style={ styles.button }
				text='Resend email' />
		</div>
	);
};
