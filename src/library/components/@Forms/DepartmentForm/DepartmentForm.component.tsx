import React from 'react';

//other deps
import { useForm } from 'react-hook-form';

//components
import { ButtonWithIcon, MainButton } from 'library/components/@Buttons';
import { HeadlineText } from 'library/components/atoms';
import { TextInput } from 'library/components/@Forms';

//modules
import { Scrollbar } from 'library/modules';

//styles
import {
	trueBack,
	falseBack,
	styles,
} from './DepartmentForm.styles';

//types
import { DepartmentFormData } from './DepartmentForm.interface';
import { CSSObject } from '@emotion/css';

export type DepartmentFormProps = {
	onSubmit: (dataForm: DepartmentFormData) => void;
	onClose: () => void;
	isOpen: boolean;
	title: string;
	value?: {
		id: string;
		name: string;
	};
	style?: CSSObject | CSSObject[];
}

//---------------------------
// DepartmentForm
//---------------------------
export const DepartmentForm: React.FC<DepartmentFormProps> = ({
	onSubmit,
	onClose,
	value,
	title,
	isOpen,
	style,
}) => {
	//data
	const { register, handleSubmit } = useForm();

	//callbacks
	const _onSubmit = React.useCallback((data: DepartmentFormData) => {
		onSubmit({
			departmentName: data.departmentName,
		});
		onClose();
	}, [onSubmit, onClose]);

	//renders
	const backgroundStyle = (isOpen) ? trueBack : falseBack;
	const containerXOffset = (isOpen) ? 21 : -650;

	return (
		<>
			<div css={backgroundStyle} />
				
			<div css={[
				styles.formWrapper, {
					right: containerXOffset,
				},
			]}
			>
				<form
					onSubmit={handleSubmit(_onSubmit)}
					css={styles.container}
				>	
					<div css={styles.titleWrapper}>
						<HeadlineText style={styles.title} >
							{title}
						</HeadlineText>

						<ButtonWithIcon
							size={16}
							onPress={onClose}
							iconName='ic_cross'
							color='#3969FF'
							style={styles.buttonHeader} />
					</div>

					<div css={styles.inputWrapper}>
						<Scrollbar 
							style={{ height: '84%' }}
							trackStyleY={{ top: -9, right: 20 }}
							scrollX={false}
						>
							<div css={ styles.formItemWraapper }>
								<TextInput.Field
									value={value?.name}
									type='singlelineText'
									ref={register({ required: true })}
									style={styles.formInput}
									name='departmentName'
									label='Department name' />
							</div>
						</Scrollbar>
				
					</div>

					<div>
						<MainButton
							width={222}
							style={styles.buttonSave}
							text='Save' /> 
					</div>

				</form>
			</div>
		</>
	);
};
