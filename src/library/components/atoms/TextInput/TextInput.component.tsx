import React, { FocusEvent } from 'react';

//components
import { BodyText } from 'library/components/atoms';

//styles
import { styles } from './TextInput.styles';

//types
import { TextInputTypeDataMap } from './TextInput.constants';
import { TextInputProps } from './TextInput.interface';

//helpers
import { validateInput } from './TextInput.helpers';
import { useMergedRefs } from 'library/helpers';

//-------------------------
// TextInput
//-------------------------
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({
	onChange,
	onFocus,
	onBlur,
	value,
	label,
	name,
	type,
	format,
	styleContainer,
	style,
}, ref) => {
	//state
	const [focused, setFocused] = React.useState(false);

	//refs
	const inputRef = React.useRef<HTMLInputElement>(null);

	//data
	const presetProps = TextInputTypeDataMap[type];
	const _format = format || presetProps.format || 'all';
	
	//callbacks 
	const _onAddFocus = React.useCallback(() => {
		onFocus && onFocus();

		setFocused(true);
	}, [onFocus]);

	const _onAddBlur = React.useCallback((e: FocusEvent<HTMLInputElement>) => {
		onBlur && onBlur();

		if (!e.target.value)
			setFocused(false);
	}, [onBlur]);
	
	const _onChangeText = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			value: newValue,
		} = e.target;

		if (validateInput(newValue, _format)) 
			onChange(newValue);
	}, [_format, onChange]);

	//render
	const labelStyle = (focused || value) ? styles.onFocus : {};

	return (
		<div css={[
			styles.container,
			styleContainer,
		]}
		>
			<input
				autoComplete='off'
				{...presetProps}
				onChange={_onChangeText}
				onFocus={_onAddFocus}
				onBlur={_onAddBlur}
				value={value}
				name={name}
				ref={useMergedRefs([ref, inputRef])} 
				css={[styles.input, style]} />  
				
			<BodyText style={[styles.label, labelStyle]}>
				{label}
			</BodyText> 
		</div>
	);
});

