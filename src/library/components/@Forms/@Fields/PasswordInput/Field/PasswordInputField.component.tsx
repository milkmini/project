import React from 'react';

//components
import { TextInput } from 'library/components/atoms';
import { ButtonWithIcon } from 'library/components/@Buttons';

//helpers
import { useMergedRefs } from 'library/helpers';

//styles
import { styles } from './PasswordInputField.styles';

//types
import { PasswordInputFieldProps } from '../PasswordInput.interface';

//-------------------------
// PasswordInputField
//-------------------------
export const PasswordInputField = React.forwardRef<HTMLInputElement, PasswordInputFieldProps>(({
	onFocus,
	onBlur,
	label,
	name,
	type,
	format,
	style,
}, ref) => {
	//state
	const [password, setPassword] = React.useState('');

	//refs
	const inputRef = React.useRef<HTMLInputElement>(null);

	//callbacks 
	const onChangeText = React.useCallback((newValue: string) => {
		setPassword(newValue);
	}, []);

	const _onClear = React.useCallback(() => {
		if (inputRef.current)
			inputRef.current.value = '';
		onChangeText('');
	}, [onChangeText]);

	return (
		<div css={styles.container}>
			<TextInput
				onChange={onChangeText}
				onFocus={onFocus}
				onBlur={onBlur}
				label={label}
				name={name}
				value={password}
				type={type}
				format={format}
				ref={useMergedRefs([ref, inputRef])}
				style={style} />

			<div css={styles.buttonWrapper}>
				<ButtonWithIcon
					size={16}
					type='small'
					iconName='ic_visible_enabled'
					color='#CECCD8'  
					style={styles.buttonFirst} />
				
				<ButtonWithIcon
					size={16}
					type='small'
					iconName='ic_cross'
					onPress={_onClear}
					color='#CECCD8'  
					style={styles.button} />
			</div>
		</div>
	);
});

