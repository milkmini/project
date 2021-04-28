import React from 'react';

//models
import { useStore } from 'effector-react';
import { $session } from 'library/models/session';
import { $authorization } from 'library/models/authorization';

//react-router
import { Route, Switch, useHistory } from 'react-router-dom';

//pages
import { BootsplashPage } from 'pages/bootsplash';

//routers
import { 
	AuthNavigation,
	OnboardingNavigation,
	SettingsNavigation,
	ModelNavigation,
	HomeNavigation,
} from 'pages';

export const RootNavigation = () => {
	//data
	const authorization = useStore($authorization);
	const session = useStore($session);

	//router
	const history = useHistory();

	if (authorization === null || session === null)  
		window.location.reload();
	
	if (!authorization.accessToken) {
		history.push('/auth');
	
		return (
			<Route path='/auth'>
				<AuthNavigation />
			</Route>
		);
	}

	if (session.isLoading) {
		return (
			<Route>
				<BootsplashPage />
			</Route>
		);
	}

	if (!session.currentCompany) {
		history.push('/onboarding');

		return (
			<Route path='/onboarding'>
				<OnboardingNavigation />
			</Route>
		);
	}
	
	return (
		<Switch>
			<Route path='/onboarding'>
				<OnboardingNavigation />
			</Route>

			<Route path='/model'>
				<ModelNavigation />
			</Route>

			<Route path='/settings'>
				<SettingsNavigation />
			</Route>

			<Route path='/'>
				<HomeNavigation />
			</Route>
		</Switch>
	);
};
