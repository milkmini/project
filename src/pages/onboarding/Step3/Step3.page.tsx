import React from 'react';

//react-router
import { useHistory } from 'react-router-dom';
import { useStore } from 'effector-react';

//graphql
import { useCreateModelAndSegmentMutation } from 'generated/graphql';

//templates
import { Step3Template } from './Step3.template';

//models
import { updateCurrentModel } from 'library/models/model';
import { $session } from 'library/models/session';

//types
type Step3PageProps = {

};

//-----------------------------
// Step3Page
//-----------------------------
export const Step3Page: React.FC<Step3PageProps> = () => {
	//router
	const history = useHistory();

	//state
	const companyId = useStore($session);
	
	//qraphql
	const [createModelAndSegment] = useCreateModelAndSegmentMutation();

	//callbacks
	const _onGoToNextStep = React.useCallback(async (data) => {
		try {
			const result = await createModelAndSegment({
				variables: {
					companyId: companyId.currentCompany?.id || '',
					name: data.name,
					ACC: data.ACC,
					ACV: data.ACV,
					ASL: data.ASL,
					LAC: data.LAC,
					LNT: data.LNT,
					LPO: data.LPO,
					LTOC: data.LTOC,
					MCSH: data.MCSH,
					MOSH: data.MOSH,
					OCR: data.OCR,
					OCV: data.OCV,
				},
			});
			if (result.data?.createFinModelAndMarketSegment) {
				updateCurrentModel({
					model: {
						id: result.data.createFinModelAndMarketSegment.modelId,
						name: 'Default',
					},
				});
				history.push('/model/economics');
			}
		}
		catch (err) {

		}
	}, [companyId, createModelAndSegment, history]);

	const _onGoToPrevStep = React.useCallback(() => {
		history.push('/onboarding/team');
	}, [history]);
	
	return (
		<Step3Template 
			onGoToPrevStep={_onGoToPrevStep}
			onGoToNextStep={_onGoToNextStep} />
	);
};
