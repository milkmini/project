import React from 'react';

//components
import { TextInput, ToolTip } from 'library/components/atoms';
import { ButtonWithIcon } from 'library/components/@Buttons';

//helpers
import { formatDollars, useMergedRefs } from 'library/helpers';

//styles
import { styles } from './PriceField.styles';

//types
import { PriceFieldProps } from '../PriceInput.interface';

//-------------------------
// PriceField
//-------------------------
export const PriceField = React.forwardRef<HTMLInputElement, PriceFieldProps>(({
	onChange,
	onBlur,
	label,
	name,
	type,
	currency,
	format,
	toolTip = false,
	value,
	styleInput,
	style,
}, ref) => {
	//state
	const [price, setPrice] = React.useState('');
	const [info, setInfo] = React.useState(false);

	//refs
	const inputRef = React.useRef<HTMLInputElement>(null);

	//callbacks 
	const onChangeText = React.useCallback((newValue: string) => {
		if (newValue[0] === '$')
			newValue = newValue.slice(1).replace(/\s+/g, ''); 
		
		onChange && onChange(formatDollars(newValue));
		setPrice(formatDollars(newValue));
	}, [onChange]);

	const _onFocus = React.useCallback(() => {
		if (price === '') 
			setPrice(currency);
	}, [currency, price]);

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
				value={price}
				type={type}
				format={format}
				style={styleInput}
				ref={useMergedRefs([ref, inputRef])} />

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

