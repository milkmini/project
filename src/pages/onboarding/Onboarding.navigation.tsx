import React from 'react';

//react-router
import { Route, Switch } from 'react-router-dom';

//pages
import { Step1Page } from './Step1';
import { Step2Page } from './Step2';
import { Step3Page } from './Step3';

//----------------------------
// OnboardingNavigation
//----------------------------
export const OnboardingNavigation: React.FC = () => {
	return (
		
		<Switch>			
			<Route path='/onboarding/company' >
				<Step1Page />
			</Route>

			<Route path='/onboarding/team' >
				<Step2Page />
			</Route>
					
			<Route path='/onboarding/segment' >
				<Step3Page />
			</Route>

			<Route path='/onboarding' exact>
				<Step1Page />
			</Route>
		</Switch>
	);
};
