import React from 'react';

//effector
import { useStore } from 'effector-react';

//react-router
import { Route, Switch, useHistory } from 'react-router-dom';

//pages
import { TeamEmployeesPage } from './TeamEmployees';
import { EconomicsPage } from './Economics';
import { SegmentsPage } from './Segments';

//componets
import { MainHeader } from 'library/components/organisms';

//models
import { $currentModel } from 'library/models/model';

//routes
const links = [
	{	
		tabWidth: 117,
		to: '/model/economics',
		name: 'Economics',
	}, 
	{
		tabWidth: 176,
		to: '/model/teamEmployees',
		name: 'Team & Employees',
	},
	{
		tabWidth: 112,
		to: '/model/segments',
		name: 'Segments',
	},
];

//----------------------------
// ModelNavigation
//----------------------------
export const ModelNavigation: React.FC = () => {
	//store
	const model = useStore($currentModel)?.model;
	
	//history
	const history = useHistory();

	//render
	if (!model || model.id === '' || model.name === '') 
		history.push('/');

	return (
		<>	
			<MainHeader
				title={model?.name}
				items={links} />
				
			<Switch>
				<Route path='/model' exact>
					<EconomicsPage model={model} />
				</Route>

				<Route path='/model/economics'> 
					<EconomicsPage model={model} />
				</Route>
					
				<Route path='/model/teamEmployees'>
					<TeamEmployeesPage />
				</Route>
					
				<Route path='/model/segments'>
					<SegmentsPage model={model} />
				</Route>
			</Switch>
		</>
	);
};
