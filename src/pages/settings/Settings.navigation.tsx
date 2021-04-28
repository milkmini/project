import React from 'react';

//react-router
import { Route, Switch, useRouteMatch } from 'react-router-dom';

//components
import { SettingsHeader } from 'library/components/molucules';

//pages
import { PasswordPage } from './Password';
import { ProfilePage } from './Profile';

//routes
const links = [
	{	
		tabWidth: 95,
		to: '/settings',
		name: 'Settings',
	}, 
	{
		tabWidth: 110,
		to: '/settings/password',
		name: 'Password',
	},
];

//----------------------------
// SettingsNavigation
//----------------------------
export const SettingsNavigation: React.FC = () => {		
	const { path } = useRouteMatch();

	return (
		<>
			<SettingsHeader items={links} />

			<Switch>  
				<Route path={`${path}/`} exact>
					<ProfilePage />
				</Route>

				<Route path={`${path}/password`} exact>
					<PasswordPage />
				</Route>
			</Switch>
		</>
	);
};
