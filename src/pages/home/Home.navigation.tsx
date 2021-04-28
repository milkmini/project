import React from 'react';

//react-router
import { Route, Switch, useRouteMatch } from 'react-router-dom';

//pages
import { ModelsPage } from './Models';
import { TeamsPage } from './Teams';

//components
import { HomeHeader } from 'library/components/molucules';

//routes
const links = [
	{	
		tabWidth: 218,
		to: '/',
		name: 'My models',
		tabFontSize: 32,
	}, 
	{
		tabWidth: 134,
		to: '/teams',
		name: 'Team',
		tabFontSize: 32,
	},
];

//----------------------------
// HomeNavigation
//----------------------------
export const HomeNavigation: React.FC = () => {
	const { path } = useRouteMatch();
	
	return (
		<>
			<Switch>
				<Route path={`${path}/`} exact>
					<ModelsPage />
				</Route>
			
				<Route path={'/teams'}>
					<TeamsPage />
				</Route>
			</Switch>

			<HomeHeader items={links} />
		</>
	);
};
