import React from 'react';

//effector
import { useStore } from 'effector-react';

//react-router
import { useHistory } from 'react-router-dom';

//models
import { $departmentId } from 'library/models/department';

//templates
import { Step2Template } from './Step2.template';

//types
type Step2PageProps = {

};

//-----------------------------
// Step2Page
//-----------------------------
export const Step2Page: React.FC<Step2PageProps> = () => {
	//models
	const deparmentId = useStore($departmentId).departmentId;

	//router
	const history = useHistory();

	//callbacks
	const _onGoToNextStep = React.useCallback(() => {
		history.push('/onboarding/segment');
	}, [history]);

	const _onGoToPrevStep = React.useCallback(() => {
		history.push('/onboarding/company');
	}, [history]);
	
	return (
		<Step2Template
			deparmentId={deparmentId}
			onGoToPrevStep={_onGoToPrevStep}
			onGoToNextStep={_onGoToNextStep} />
	);
};
