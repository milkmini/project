import React from 'react';

//react-router
import { useHistory } from 'react-router-dom';

//template
import { ProfileTemplate } from './Profile.template';

//types
type ProfilePageProps = {

};

//-----------------------------
//ProfilePage
//-----------------------------
export const ProfilePage: React.FC<ProfilePageProps> = () => {
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
		<ProfileTemplate
			goBack={goBack}
			onSubmit={() => {
				'';
			}} />
	);
}; 
