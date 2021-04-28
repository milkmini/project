import React from 'react';

//react-router
import { useHistory } from 'react-router-dom';

//templates
import { VerifyEmailTemplate } from './VerifyEmail.template';

//types
type VerifyEmailPageProps = {

};

//-----------------------------
// VerifyEmailPage
//-----------------------------
export const VerifyEmailPage: React.FC<VerifyEmailPageProps> = () => {
	//router
	const history = useHistory();

	const _onGoToNextStep = React.useCallback(() => {
		try {
			history.push('/auth/signIn');
		}
		catch (err) {

		}
	}, [history]);

	// const signUpId = localStorage.getItem('signUpId');

	// if (!signUpId)
	// 	history.push('/signUp');

	return (
		<VerifyEmailTemplate 
			onGoToNextStep={_onGoToNextStep} />
	);
};
