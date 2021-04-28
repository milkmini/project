import React from 'react';

//template
import { EconomicsTemplate } from './Economics.template';

//graphql
import { useCalculateModelQuery } from 'generated/graphql';

//types
import { EconomicsCardsData } from './Economics.interface';

type EconomicsPageProps = {
	model: {
		id: string;
		name: string;
	} | null;
};

//-----------------------------
// EconomicsPage
//-----------------------------
export const EconomicsPage: React.FC<EconomicsPageProps> = ({
	model,
}) => {
	//data
	const { data: modelData, loading: economicsLoading } = useCalculateModelQuery({
		variables: {
			modelId: model?.id || '',
		},
	});

	//renders
	let loadingError: string | null = null;
	let economicsCardsData: EconomicsCardsData = {};

	if (!economicsLoading) {
		if (!modelData?.calculate)
			loadingError = 'Sorry, an error has occured while loading models';
		else 
			economicsCardsData = modelData.calculate;
	}

	return (
		<EconomicsTemplate
			loading={economicsLoading}
			error={loadingError}
			modelData={economicsCardsData} />
	);
};
