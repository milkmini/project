import React from 'react';

//components
import { TextInput, ToolTip } from 'library/components/atoms';
import { ButtonWithIcon } from 'library/components/@Buttons';

//helpers
import { useMergedRefs } from 'library/helpers';

//styles
import { styles } from './TextField.styles';

//types
import { TextFieldProps } from '../TextInput.interface';

//-------------------------
// TextField
//-------------------------
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({
	onChange,
	onFocus,
	label,
	name,
	type,
	value,
	format,
	toolTip=false,
	styleContainer,
	styleInput,
	style,
}, ref) => {
	//state
	const [text, setText] = React.useState('');
	const [info, setInfo] = React.useState(false);

	//refs
	const inputRef = React.useRef<HTMLInputElement>(null);

	//callbacks 
	const onChangeText = React.useCallback((newValue: string) => {
		setText(newValue);
		onChange && onChange(newValue);
	}, [onChange]);

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
				ref={useMergedRefs([ref, inputRef])}
				onFocus={onFocus}
				onChange={onChangeText}
				label={label}
				name={name}
				value={text}
				type={type}
				format={format}
				style={styleInput}
				styleContainer={styleContainer} />

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
					type='small'
					size={16}
					iconName='ic_cross'
					onPress={_onClear}
					color='#CECCD8'  
					style={styles.button} />
			</div>

		</div>
	);
});

