import React from 'react';

//react-router
import { useHistory } from 'react-router-dom';

//templates
import { CreateOrJoinCompanyTemplate } from './CreateOrJoinCompany.template';

//types
type CreateOrJoinCompanyPageProps = {

};

//-----------------------------
// CreateOrJoinCompanyPage
//-----------------------------
export const CreateOrJoinCompanyPage: React.FC<CreateOrJoinCompanyPageProps> = () => {
	//router
	const history = useHistory();

	const _onGoToNextStep = React.useCallback(() => {
		try {
			history.push('/onboarding/company');
		}
		catch (err) {

		}
	}, [history]);
	
	// const signIpId = localStorage.getItem('signIpId');

	// if (!signIpId)
	// 	history.push('/signIn');

	return (
		<CreateOrJoinCompanyTemplate 
			onGoToNextStep={_onGoToNextStep} />
	);
};
