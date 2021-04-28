import React from 'react';

//react-router
import { useHistory } from 'react-router-dom';

//template
import { PasswordTemplate } from './Password.template';

//types
type PasswordPageProps = {

};

//-----------------------------
//PasswordPage
//-----------------------------
export const PasswordPage: React.FC<PasswordPageProps> = () => {
	//router
	const history = useHistory();
	
	const goBack = React.useCallback(() => {
		const urlBack = localStorage.getItem('previousPathname');
		if (urlBack) 
			history.push(urlBack);
		else	
			history.push('/');
	}, [history]);

	return (
		<PasswordTemplate
			goBack={goBack}
			onSubmit={() => {
				'';
			}} />
	);
};
