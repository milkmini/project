import React from 'react';

//effector
import { useStore } from 'effector-react';

//graphql
import { useGetModelsQuery } from 'generated/graphql';

//components
import { MainHeader } from './MainHeader.component';

//models
import { updateCurrentModel } from 'library/models/model';
import { $session } from 'library/models/session';

//types
import { CSSObject } from '@emotion/css';

export type MainHeaderContainerProps = {
	items: {
		tabWidth: number;
		to: string;
		name: string;
		tabFontSize?: number;
	}[];
	title?: string;
	style?: CSSObject | CSSObject[];
}

//--------------------------
// MainHeaderContainer
//--------------------------
export const MainHeaderContainer: React.FC<MainHeaderContainerProps> = ({
	items,
	title,
	style,
}) => {
	//store
	const currentCompany = useStore($session);
	
	//graphql
	const models = useGetModelsQuery({
		variables: {
			companyId: currentCompany.currentCompany?.id || '',
		},
	}); 

	//callback
	const _goModel = React.useCallback((id: string, name: string) => {
		updateCurrentModel({
			model: {
				id: id,
				name: name,
			},
		});
	}, []);

	return (
		<MainHeader 
			items={items}
			title={title}
			goModel={_goModel}
			models={models.data?.company?.models}
			style={style} />
	);
};
