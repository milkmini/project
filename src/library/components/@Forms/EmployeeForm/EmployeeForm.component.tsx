import React from 'react';

//other deps
import { useForm } from 'react-hook-form';

//components
import { ButtonWithIcon, MainButton } from 'library/components/@Buttons';
import { CaptionText, HeadlineText } from 'library/components/atoms';
import { PriceInput, TextInput } from 'library/components/@Forms';

//modules
import { Scrollbar } from 'library/modules';

//styles
import {
	falseBack,
	trueBack,
	styles,
} from './EmployeeForm.styles';

//types
import { EmployeeFormData } from './EmployeeInfoForm.interface';

import { CSSObject } from '@emotion/css';

export type EmployeeFormProps = {
	onSubmit: (formData: EmployeeFormData) => void;
	onClose: () => void;
	isOpen: boolean;
	value?: {
		id: string;
		firstName: string;
		lastName: string;
		jobDescription: string;
		roleDescription: string;
		annualFixedSalary: string;
		monthlyCommission: string;
		additionalMonthlyOverhead: string;
	};
	style?: CSSObject | CSSObject[];
}

//---------------------------
// EmployeeForm
//---------------------------
export const EmployeeForm: React.FC<EmployeeFormProps> = ({
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
			lastName: data.lastName,
			location: data.location,
			firstName: data.firstName,
			jobDescription: data.jobDescription,
			roleDescription: data.roleDescription,
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
							Add new employee
						</HeadlineText>

						<ButtonWithIcon
							size={16}
							onPress={onClose}
							iconName='ic_cross'
							color='#3969FF'
							style={styles.buttonHeader} />
					</div>

					<div css={{
						...styles.inputWrapper,
						overflowX: 'hidden',
					}}
					>
						<Scrollbar
							style={{ height: '84%' }}
							trackStyleY={{ top: -9, right: 20 }}
							scrollX={false}
						>
							<div css={ styles.formItemWraapper }>
								<TextInput.Field
									value={value?.firstName}	
									type='singlelineText'
									ref={register({ required: true })}
									style={styles.formInput}
									name='firstName'
									label='First name' />

								<TextInput.Field
									value={value?.lastName}
									type='singlelineText'
									ref={register({ required: true })}
									name='lastName'
									label='Last name' />

								<CaptionText style={styles.formTextHelp}>
									Where is the employee located?
								</CaptionText>

								<TextInput.Field
									value={value?.firstName}	
									type='singlelineText'
									ref={register({ required: true })}
									name='location'
									label='Location' />

								<CaptionText style={styles.formTextHelp}>
									What’s the job?
								</CaptionText>
				
								<TextInput.Field
									value={value?.roleDescription} 
									type='singlelineText'
									ref={register({ required: true })}
									style={styles.formInput}
									name='roleDescription'
									label='Role Description' /> 
								
								<PriceInput.Field
									type='price'
									currency='$' 
									value={value?.roleDescription}
									ref={register({ required: true })}
									name='annualFixedSalary'
									label='Annual fixed salary' />

								<CaptionText style={styles.formTextHelp}>
									% of social and taxes company pays
								</CaptionText>
							
								{/* <PercentInput.Field
									type='price'
									format='percents'
									ref={register({ required: true })}
									style={styles.formInput}
									name='TaxSocialRate'
									label='Tax and Social Rate' /> */}
								
								<TextInput.Field 
									value={value?.jobDescription}  
									type='singlelineText'
									ref={register({ required: true })}
									style={styles.formInput}
									name='jobDescription'
									label='Job description' /> 

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
									name='monthlyCommission'
									label='Monthly Commission' />
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
