import React from 'react';

//components
import { ButtonWithIcon } from 'library/components/@Buttons';
import { TextInput } from 'library/components/atoms';

//helpers
import { useMergedRefs } from 'library/helpers';

//styles
import { styles } from './DropdownInputField.styles';

//types
import { DropdownInputFieldProps } from '../DropdownInput.interface';

//-------------------------
// DropdownInputField
//-------------------------
export const DropdownInputField = React.forwardRef<HTMLInputElement, DropdownInputFieldProps>(({
	onFocus,
	onBlur,
	label,
	name,
	type,
	value,
	format,
	visible,
	styleContainer,
	style,
}, ref) => {
	//state
	const [text, setText] = React.useState('');

	//refs
	const inputRef = React.useRef<HTMLInputElement>(null);

	//callbacks 
	const onChangeText = React.useCallback((newValue: string) => {
		setText(newValue);
	}, []);
		
	//render
	React.useEffect(() => {
		value && onChangeText(value);
	}, [onChangeText, value]);

	const transform = (visible) ? styles.onOpen : {};

	return (
		<div css={styles.container}>
			<TextInput
				ref={useMergedRefs([ref, inputRef])}
				onFocus={onFocus}
				onBlur={onBlur} 
				onChange={onChangeText}
				label={label}
				name={name}
				value={text}
				type={type}
				format={format}
				style={style}
				styleContainer={styleContainer} />

			<div css={styles.buttonWrapper}>
				<ButtonWithIcon
					size={16}
					type='small'
					iconName='ic_dropdown_closed'
					color='#CECCD8'  
					style={[styles.button, transform]} />
			</div>
			
		</div>
	);
});

