import React from 'react';

//other deps
import { useForm } from 'react-hook-form';

//components
import { ButtonWithIcon, MainButton } from 'library/components/@Buttons';
import { TextInput } from 'library/components/@Forms';

//styles
import { styles } from './Profile.styles';

//types
type ProfileTemplateProps = {
	onSubmit: () => void;
	goBack: () => void;
};

//-----------------------------
//ProfileTemplate
//-----------------------------
export const ProfileTemplate: React.FC<ProfileTemplateProps> = ({
	onSubmit,
	goBack,
}) => {
	//data
	const { register, handleSubmit } = useForm();

	//callbacks
	const _onSubmit = React.useCallback((data) => {
		onSubmit();
	}, [onSubmit]);

	return (
		<div css={{ position: 'relative' }}>
			<div css={styles.container}>
				<img 
					alt='' 
					src=''
					css={styles.imgBlock} />
				
				 <MainButton
					text='Change avatar'
					outlined={true}
					width={189}
					height={42} 
					onPress={() => {
						'';
					}} />

				<form
					onSubmit={handleSubmit(_onSubmit)}
					css={styles.form} 
				>
					<TextInput.Field 
						type='singlelineText'
						ref={register({ required: true })}
						name=''
						label='Your name' />

					<TextInput.Field
						type='email'
						ref={register({ required: true })}
						name=''
						label='E-mail' />

					<TextInput.Field 
						type='singlelineText'
						ref={register({ required: true })}
						name=''
						label='Name of your company' />

					<TextInput.Field 
						type='singlelineText'
						ref={register({ required: true })}
						name=''
						label='Direction of activity' />

					<TextInput.Field 
						type='singlelineText'
						ref={register({ required: true })}
						name=''
						label='Stage of development' />

					<TextInput.Field 
						type='singlelineText'
						ref={register({ required: true })}
						name=''
						label='Field of activity' />

					<div css={styles.button}>
						<MainButton
							width={386}
							text='Save changes' />

					</div>						
				</form>
				
				<ButtonWithIcon
					size={20}
					onPress={goBack}
					style={styles.buttonClose} 
					color='#3969FF'
					iconName='ic_cross' />
			</div>
		</div>
	);
};
