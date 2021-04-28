import React from 'react';

//react-router
import { useHistory } from 'react-router-dom';

//effector
import { useStore } from 'effector-react';

//graphql
import { 
	useCreateCompanyMutation,
	useGetBusinessModelsQuery,
	useGetFieldsOfActivitiesQuery,
	useGetStagesOfDevelopmentQuery,
} from 'generated/graphql';

//templates
import { Step1Template } from './Step1.template';

//models
import { $session, updateSession } from 'library/models/session';

//types
import { CreateCompanyFormData } from 'library/components/@Forms/CompanyInfoForm';

type Step1PageProps = {
	
};

//-----------------------------
// Step1Page
//-----------------------------
export const Step1Page: React.FC<Step1PageProps> = () => {
	//data
	const session = useStore($session);

	//router
	const history = useHistory();

	//graphql
	const { data: stagesOfDevelopmentData, loading: stagesOfDevelopmentLoading } = useGetStagesOfDevelopmentQuery();
	const { data: fieldsOfActivitiesData, loading: fieldOfActivitiesLoading } = useGetFieldsOfActivitiesQuery();
	const { data: businessModelsData, loading: bisinessModalLoading } = useGetBusinessModelsQuery();
	const [createCompany] = useCreateCompanyMutation();

	//callbacks
	const _onGoToNextStep = React.useCallback(async (data: CreateCompanyFormData) => {
		try {
			const result = await createCompany({
				variables: {
					name: data.name,
					businessModel: {
						id: data.businessModel,
					},
					fieldOfActivity: {
						id: data.fieldOfActivity,
					},
					stageOfDevelopment: {
						id: data.stageOfDevelopment,
					},
				},
			});

			if (result.data) {
				updateSession({
					...session,
					currentCompany: {
						id: result.data.createCompany.id,
						name: result.data.createCompany.name,
					},
				});
			}

			history.push('/onboarding/team');
		}
		catch (err) {

		}
	}, [createCompany, history, session]);

	if (fieldOfActivitiesLoading || bisinessModalLoading || stagesOfDevelopmentLoading)
		return null;

	if (!stagesOfDevelopmentData || !fieldsOfActivitiesData || !businessModelsData)
		return null;

	//data
	const stagesOfDevelopment = stagesOfDevelopmentData.stagesOfDevelopment;
	const fieldsOfActivities = fieldsOfActivitiesData.fieldsOfActivity;
	const businessModels = businessModelsData.businessModel;

	return (
		<Step1Template
			stagesOfDevelopment={stagesOfDevelopment}
			fieldsOfActivities={fieldsOfActivities}
			businessModels={businessModels}
			onGoToNextStep={_onGoToNextStep} />
	);
};
