import React from 'react';

//components
import { CreateModelCard, ModelCard } from 'library/components/@Cards';
import { LoaderOverlay } from 'library/components/molucules';

//modules
import { Scrollbar } from 'library/modules';

//styles
import { styles } from './Models.styles';

//types
import { ModelCardData } from './Models.interface';

type ModelsTemplateProps = {
	onGoToNextStep: (id: string, name: string) => void;
	onDelete: (id: string) => void;
	onEdit: (data: any) => void;
	onCreate: () => void;
	error: string | null;
	loading: boolean;
	modelsCardsData: ModelCardData[];
};

//-----------------------------
// ModelsTemplate
//-----------------------------
export const ModelsTemplate: React.FC<ModelsTemplateProps> = ({
	onGoToNextStep,
	onCreate,
	onDelete,
	onEdit,
	error,
	loading,
	modelsCardsData,
}) => {
	//renders
	const _renderModels = React.useCallback(() => {
		return modelsCardsData.map((item) => {
			return (
				<ModelCard 
					onDelete={onDelete}
					onEdit={onEdit}
					onPress={() => onGoToNextStep(item.id, item.name)}
					data={item}
					key={item.id} /> 
			);
		});
	}, [modelsCardsData, onDelete, onEdit, onGoToNextStep]);

	const _renderContent = React.useCallback(() => {
		if (error) {
			return (
				<h1>
					{error}
				</h1>
			);
		}
		else if (loading) {
			return (
				<LoaderOverlay page />
			);
		}

		return (
			<div css={styles.containerModal}>
				<CreateModelCard 
					onPress={onCreate} />
					
				{_renderModels()}
			</div>
		);
	}, [_renderModels, error, loading, onCreate]);

	return (
		<Scrollbar
			style={{ height: '100%' }}
			trackStyleY={{
				height: 'calc(100% + 180px)', 
				top: 180,
				background: 'none',
			}}
		>
			{_renderContent()}
		</Scrollbar>
	);
};
