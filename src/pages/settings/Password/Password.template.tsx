import React from 'react';

//other deps
import { useForm } from 'react-hook-form';

//components
import { ButtonWithIcon, MainButton } from 'library/components/@Buttons';
import { HeadlineText } from 'library/components/atoms';
import { TextInput } from 'library/components/@Forms';

//styles
import { styles } from './Password.styles';

//types
type PasswordTemplateProps = {
	onSubmit: () => void;
	goBack: () => void;
};

//-----------------------------
// PasswordTemplate
//-----------------------------
export const PasswordTemplate: React.FC<PasswordTemplateProps> = ({
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
				<HeadlineText style={{ color: '#4C475E', margin: '80px 0 0 0' }}>
					Change password
				</HeadlineText>
				<div
					css={styles.form} 
				>
					<TextInput.Field 
						type='secure'
						ref={register({ required: true })}
						name=''
						label='Old Password' />

					<TextInput.Field
						type='secure'
						ref={register({ required: true })}
						name=''
						label='New Password' />

					<TextInput.Field
						type='secure'
						ref={register({ required: true })}
						name=''
						label='Confirm New Password' />

					<MainButton 
						onPress={handleSubmit(_onSubmit)}
						style={styles.button}
						width={386}
						text='Save changes' />
				</div>
				
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
