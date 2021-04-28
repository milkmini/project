import React from 'react';

//components
import { TextInput, ToolTip } from 'library/components/atoms';
import { ButtonWithIcon } from 'library/components/@Buttons';

//helpers
import { useMergedRefs } from 'library/helpers';

//styles
import { styles } from './PercentInputField.styles';

//types
import { PercentInputFieldProps } from '../PercentInput.interface';

//-------------------------
// PercentInputField
//-------------------------
export const PercentInputField = React.forwardRef<HTMLInputElement, PercentInputFieldProps>(({
	onChange,
	onBlur,
	label,
	name,
	type,
	format,
	value,
	toolTip,
	styleInput,
	style,
}, ref) => {
	//state
	const [percent, setPercent] = React.useState('');
	const [info, setInfo] = React.useState(false);

	//refs
	const inputRef = React.useRef<HTMLInputElement>(null);

	//callbacks 
	const onChangeText = React.useCallback((newValue: string) => {
		if(newValue[newValue.length -1] !== '%')
			setPercent(newValue + '%');
		else 
			setPercent(newValue);
		
		onChange && onChange(newValue);
	}, [onChange]);

	const _onFocus = React.useCallback(() => {
		if (percent === '')
			setPercent('%');
	
		if (inputRef.current)
			inputRef.current?.setSelectionRange(0, 0);
	}, [percent]);

	const _onClear = React.useCallback(() => {
		if (inputRef.current)
			inputRef.current.value = '';
		onChangeText('');
	}, [onChangeText]);

	//render
	React.useEffect(() => {
		value && onChangeText(value);
	}, [onChangeText, value]);

	return (
		<div css={[styles.container, style]}>
			<TextInput
				onChange={onChangeText}
				onFocus={_onFocus}
				onBlur={onBlur}
				label={label}
				name={name}
				value={percent}
				type={type}
				format={format}
				ref={useMergedRefs([ref, inputRef])}
				style={styleInput} />
				
			<div css={styles.buttonWrapper}>

				{(toolTip) && (
					<>
						<ButtonWithIcon
							size={16}
							type='small'
							onPress={() => setInfo(!info)}
							onMouseEnter={() => setInfo(true)}
							onMouseLeave={() => setInfo(false)}
							iconName='ic_info'
							color='#CECCD8' 
							style={styles.buttonFirst} />

						<ToolTip
							title={label}
							isOpen={info} 
							text='ASL - Average deal size
								This parameter corresponds to 
								lorem ipsum serum dolor
								Calcuates based on something
								ASL = x * y / 12' />
					</>
				)}

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

