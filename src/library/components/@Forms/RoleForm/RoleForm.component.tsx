import React from 'react';

//other deps
import { useForm } from 'react-hook-form';

//components
import { CaptionText, HeadlineText } from 'library/components/atoms';
import { ButtonWithIcon, MainButton } from 'library/components/@Buttons';
import { PriceInput, TextInput } from 'library/components/@Forms';

//modules
import { Scrollbar } from 'library/modules';

//styles
import {
	trueBack,
	falseBack,
	styles,
} from './RoleForm.styles';

//types
import { CreateRoleFormData } from './RoleForm.interface';

import { CSSObject } from '@emotion/css';

export type RoleFormProps = {
	onSubmit: (formData: CreateRoleFormData) => void;
	onClose: () => void;
	isOpen: boolean;
	value?: {
		id: string;
		name: string;
		roleDescription: string;
		annualFixedSalary: string;
		monthlyCommission: string;
		additionalMonthlyOverhead: string;
	};
	style?: CSSObject | CSSObject[];
}

//---------------------------
// RoleForm
//---------------------------
export const RoleForm: React.FC<RoleFormProps> = ({
	onSubmit,
	onClose,
	isOpen,
	value,
	style,
}) => {
	//data
	const { register, handleSubmit } = useForm();

	//callbacks
	const _onSubmit = React.useCallback((data) => {
		onSubmit({
			name: data.name,
			roleDescription: data.roleDescribtion,
			annualFixedSalary: Number(data.annualFixedSalary.slice(1).replace(/\s+/g, '')),
			monthlyCommission: Number(data.monthlyCommission.slice(1).replace(/\s+/g, '')),
			additionalMonthlyOverhead: Number(data.additionalMonthlyOverhead.slice(1).replace(/\s+/g, '')),
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
				styles.formWrapper,
				{ right: containerXOffset },
			]}
			>
				<form
					onSubmit={handleSubmit(_onSubmit)}
					css={styles.container}
				>	
				
					<div css={styles.titleWrapper}>
						<HeadlineText style={styles.title} >
							Add new role
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
								<CaptionText style={styles.formTextHelp}>
									What’s the role?
								</CaptionText>

								<TextInput.Field
									value={value?.name}
									type='singlelineText'
									ref={register({ required: true })}
									name='name'
									label='Role name' />

								<CaptionText style={styles.formTextHelp}>
									What does it do?
								</CaptionText>

								<TextInput.Field
									value={value?.roleDescription}	
									type='singlelineText'
									ref={register({ required: true })}
									style={styles.formInput}
									name='roleDescribtion'
									label='Role describtion' />

								<PriceInput.Field
									currency='$'	
									value={value?.annualFixedSalary}
									type='price'
									ref={register({ required: true })}
									style={styles.formInput}
									name='annualFixedSalary'
									label='Annual fixed salary' />

								<PriceInput.Field
									currency='$' 
									value={value?.additionalMonthlyOverhead}	
									type='price'
									ref={register({ required: true })}
									style={styles.formInput}
									name='additionalMonthlyOverhead'
									label='Additional Monthly Overhead' />

								<PriceInput.Field
									currency='$' 
									value={value?.monthlyCommission}	
									type='price'
									ref={register({ required: true })}
									style={styles.formInput}
									name='monthlyCommission'
									label='Monthly Commission' />
							</div>
						</Scrollbar>
				
					</div>

					<div>
						<MainButton
							onPress={handleSubmit(_onSubmit)}
							width={222}
							style={styles.buttonSave}
							text='Save' /> 
					</div>

				</form>
			</div>
		</>
	);
};
