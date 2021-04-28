import React from 'react';

//other deps
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

//components
import { BodyText, HeadlineText } from 'library/components/atoms';
import { MainButton } from 'library/components/@Buttons';
import { TextInput } from 'library/components/@Forms';

//styles
import { styles } from './SignUp.styles';

//types
import { SignUpFormData } from './SignUpForm.interface';
type SignUpTemplateProps = {
	onGoToNextStep: (formData: SignUpFormData) => void;
};

//----------------------------
// SignUpTemplate
//---------------------------
export const SignUpTemplate: React.FC<SignUpTemplateProps> = ({
	onGoToNextStep,
}) => {
	// data
	const { register, handleSubmit } = useForm();

	// callbacks
	const _onSubmit = React.useCallback((data) => {
		onGoToNextStep({
			firstName: data.firstName,
			lastName: 'aaa',
			email: data.email,
			password: data.password,
		});
	}, [onGoToNextStep]);
				
	return (	
		<div css={styles.container}>
			<HeadlineText style={ styles.title }>
				Sign Up
			</HeadlineText>
 
			<HeadlineText style={ styles.subTitle }>
				Let’s create your account!
			</HeadlineText>

			<div
				css={styles.containerForm}
			>	
				<TextInput.Field 
					type='singlelineText'
					name='firstName' 
					label='Your name' 
					ref={register({ required: true })} />

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

				<TextInput.Field 
					type='secure'
					name='password' 
					label='Confirm password' 
					ref={register({ required: true })} />
					
				<MainButton 
					onPress={handleSubmit(_onSubmit)}
					width={365}
					style={ styles.button } 
					text='Create account' />
			</div>

			<BodyText style={styles.textUnderForm}>
				Already have an account? - 
				{' '}
				<Link to='/auth/signIn'>
					<BodyText style={styles.linkUnderForm}>
						Sign in
					</BodyText>
				</Link>
			</BodyText>
		</div>
	);
};
