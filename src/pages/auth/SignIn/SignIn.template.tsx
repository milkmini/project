import React from 'react';

//other deps
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

//components
import { BodyText, HeadlineText } from 'library/components/atoms';
import { MainButton } from 'library/components/@Buttons';
import { TextInput } from 'library/components/@Forms';

//styles
import { styles } from './SignIn.styles';

//types
import { SignInFormData } from './SignInForm.interface';
type SignInTemplateProps = {
	onGoToNextStep: (formData: SignInFormData) => void;
};

//----------------------------
// SignInTemplate
//---------------------------
export const SignInTemplate: React.FC<SignInTemplateProps> = ({
	onGoToNextStep,
}) => {
	//data
	const { register, handleSubmit } = useForm();

	//callbacks
	const _onSubmit = React.useCallback((data) => {
		onGoToNextStep({
			email: data.email,
			password: data.password,
		});
	}, [onGoToNextStep]);
					
	return (	
		<div css={styles.container}>
			<HeadlineText style={ styles.title }>
				Sign In
			</HeadlineText>

			<HeadlineText style={ styles.subTitle }>
				Let's continue
				working!
			</HeadlineText>
			<div
				css={styles.containerForm}
			>	
				<TextInput.Field 
					type='email'
					name='email' 
					label='E-mail' 
					ref={register({ required: true })} />

				<TextInput.Field 
					type='secure'
					name='password' 
					label='Password' 
					ref={register({ required: true })} />
					
				<MainButton 
					onPress={handleSubmit(_onSubmit)}
					width={365}
					style={ styles.button } 
					text='Sign In' />
					
			</div>
			
			<BodyText style={styles.textUnderForm}>
				Don’t have an account? - 
				{' '}
				<Link to='/auth/signUp'>
					<BodyText style={styles.linkUnderForm}>
						Sign Up
					</BodyText>
				</Link>
			</BodyText>
		</div>
	);
};
