import React from 'react';

//other deps
import { useForm } from 'react-hook-form';

//components
import { DropdownField, TextInput } from 'library/components/@Forms';
import { MainButton } from 'library/components/@Buttons';
import { HeadlineText } from 'library/components/atoms';

//styles
import { styles } from './CompanyInfoForm.styles';

//types
import { CreateCompanyFormData } from './CompanyInfoForm.interface';

type CompanyInfoFormProps = {
	onSubmit: (formData: CreateCompanyFormData) => void;
	stagesOfDevelopment: {
		id: string;
		name: string;
	}[]
	fieldsOfActivities: {
		id: string;
		name: string;
	}[];
	businessModels: {
		id: string;
		name: string;
	}[];
};

//---------------------------
// CompanyInfoForm 
//---------------------------
export const CompanyInfoForm:React.FC<CompanyInfoFormProps> = ({
	onSubmit,
	stagesOfDevelopment,
	fieldsOfActivities,
	businessModels,
}) => {
	//data
	const { register, handleSubmit, control } = useForm<{
		name: string;
		dropdown: {
			id: string;
			name: string;
		}[];
	}>({
		defaultValues: {
			dropdown: [{
				
			}],
		},
	});

	//callbacks
	const _onSubmit = React.useCallback((data) => {
		onSubmit({
			name: data.name,
			fieldOfActivity: data.fieldOfActivity,
			businessModel: data.businessModel,
			stageOfDevelopment: data.stageOfDevelopment,
		});
	}, [onSubmit]);

	//console.log(watch('example')); // watch input value by passing the name of it

	return (
		<form
			onSubmit={handleSubmit(_onSubmit)}
			css={styles.container}
		>	
			<HeadlineText 
				style={ styles.title }
				type='h2'
			>
				Tell us about your company
			</HeadlineText>

			<TextInput.Field 
				name='name'
				type='singlelineText' 
				label='Name of your company' 
				ref={register({ required: true })} />

			<DropdownField
				control={control}
				items={fieldsOfActivities}
				name='fieldOfActivity'
				label='field Of Activity' 
				register={register({ required: true })} />

			<DropdownField
				control={control}
				items={businessModels}
				name='businessModel' 
				label='business Model' 
				register={register({ required: true })} />

			<DropdownField
				control={control}
				items={stagesOfDevelopment}
				name='stageOfDevelopment'
				label='Stage of development' 
				register={register({ required: true })} />
									
			<MainButton 
				width={365}
				style={styles.button} 
				text='Go to next step' />
		</form>
	);
};
