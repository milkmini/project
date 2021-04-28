import React from 'react';

//effector
import { useStore } from 'effector-react';

//react-router-dom
import { useHistory } from 'react-router-dom';

//graphql
import { 
	useCreateFinModelMutation,
	useDeleteFinModelMutation,
	useUpdateFinModelMutation,
	useGetModelsQuery,
} from 'generated/graphql';

//template
import { ModelsTemplate } from './Models.template';

//models
import { $session } from 'library/models/session';
import { $currentModel, updateCurrentModel } from 'library/models/model';

//types
import { ModelCardData } from './Models.interface';

type ModelsPageProps = {

};

//-----------------------------
// ModelsPage
//-----------------------------
export const ModelsPage: React.FC<ModelsPageProps> = () => {
	//state
	const [refetchLoading, setRefetchLoading] = React.useState(false);

	//data
	const currentCompany = useStore($session);
	const model = useStore($currentModel).model;

	const {
		refetch: refetchModels,
		data: modelsData,
		loading: modelsLoading,
	} = useGetModelsQuery(({
		variables: {
			companyId: currentCompany?.currentCompany?.id || '',
		},
	}));

	//router
	const history = useHistory();
		
	//graphql
	const [createFinModel] = useCreateFinModelMutation();
	const [updateFinModel] = useUpdateFinModelMutation();
	const [deleteFinModel] = useDeleteFinModelMutation();

	//callbacks
	const _onGoToNextStep = React.useCallback((id: string, name: string) => {
		try {
			updateCurrentModel({
				model: {
					id: id,
					name: name,
				},
			});
			history.push('/model/economics');
		}
		catch (err) {

		}
	}, [history]);

	const _onCreateModel= React.useCallback(async () => {
		try{
			setRefetchLoading(true);
			const result = await createFinModel({
				variables: {
					companyId: currentCompany.currentCompany?.id || '',
					model: {
						name: 'new Model',
					},
				},
			});
			
			if (result.data?.createFinModel) {
				await (refetchModels().then(() => {
					setRefetchLoading(false);
				}));
			}
		}
		catch (err) {

		}
	}, [createFinModel, currentCompany.currentCompany?.id, refetchModels]);

	const _onDeleteModel= React.useCallback(async (id: string) => {
		try{
			setRefetchLoading(true);
			const result = await deleteFinModel({
				variables: {
					modelId: id,
				},
			});
			
			if (result.data?.deleteFinModel) {
				await (refetchModels().then(() => {
					setRefetchLoading(false);
				}));
			}
		}
		catch (err) {

		}
	}, [deleteFinModel, refetchModels]);

	const _onEditModel= React.useCallback(async (data) => {
		try{
			const result = await updateFinModel({
				variables: {
					modelId: model?.id || '',
					model: {
						name: data.value,
					},
				},
			});
			
			if (result.data?.updateFinModel) 
				refetchModels();
		}
		catch (err) {

		}
	}, [model?.id, refetchModels, updateFinModel]);

	//renders
	let loadingError: string | null = null;
	let modelsCardsData: ModelCardData[] = [];

	if (!modelsLoading) {
		if (!modelsData?.company?.models)
			loadingError = 'Sorry, an error has occured while loading models';
		else {
			modelsCardsData = modelsData.company.models.map((model) => {
				return {
					...model,
					date: new Date(),
				};
			});
		}
	}

	return (
		<ModelsTemplate
			onGoToNextStep={_onGoToNextStep}
			onCreate={_onCreateModel}
			onDelete={_onDeleteModel}
			onEdit={_onEditModel}
			error={loadingError}
			loading={refetchLoading || modelsLoading}
			modelsCardsData={modelsCardsData} />
	);
};
