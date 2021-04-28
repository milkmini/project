import React from 'react';

//other deps
import { useForm } from 'react-hook-form';

//styles
import { styles } from './OneInputForm.styles';

//types
import { OneInputFormData } from './OneInputForm.interface';
import { CSSObject } from '@emotion/css';

type OneInputFormProps = {
	onSubmit: (formData: OneInputFormData) => void;
	onClose: () => void;
	isOpen: boolean;
	value: string;
	style?: CSSObject | CSSObject[];
};

//---------------------------
// OneInputForm 
//---------------------------
export const OneInputForm:React.FC<OneInputFormProps> = ({
	onSubmit,
	onClose,
	isOpen,
	value,
	style,
}) => {
	//state
	const [text, setText] = React.useState('');
	
	//data
	const { register, handleSubmit } = useForm();

	//callbacks 
	const getTextWidth: any = React.useCallback((textValue: string) => {
		let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
		let context = canvas.getContext('2d');
		context.font = '25px Poppins sans-serif';
		let metrics = context.measureText(textValue);
		return metrics.width+20;
	}, []);
	
	const onChangeText = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			value: newValue,
		} = e.target;

		setText(newValue);
	}, []);

	const _onSubmit = React.useCallback((data) => {
		onSubmit({
			value: data.value,
		});
		onClose();
	}, [onClose, onSubmit]);

	//render
	React.useEffect(() => {
		if (value)
			setText(value);	
	}, [value]);

	const calculatedTextWidth = React.useMemo(() => getTextWidth(text), [getTextWidth, text]);
	const open = (isOpen) ? styles.onOpen : styles.onClose;

	return (
		<form
			onSubmit={handleSubmit(_onSubmit)}
			css={[
				styles.container,
				open,
				style,
			]}
		>
			<input
				onChange={onChangeText}
				autoComplete='off'
				value={text}
				name='value'
				ref={register({ required: true })} 
				css={[styles.input, {
					width: calculatedTextWidth,
				}]} />  

			<button css={styles.complete} />
			<button 
				type='button'
				onClick={onClose}
				css={styles.cancel} />
		</form>
	);
};
