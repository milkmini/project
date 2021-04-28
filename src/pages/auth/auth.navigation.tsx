import React from 'react';

// react-router
import { Route, Switch } from 'react-router-dom';

// pages
import { CreateOrJoinCompanyPage } from './CreateOrJoinCompany';
import { VerifyEmailPage } from './VerifyEmail';
import { SignUpPage } from './SignUp';
import { SignInPage } from './SignIn';

// components
import { Welcome } from 'library/components/molucules';

//----------------------------
// AuthNavigation
//----------------------------
export const AuthNavigation = () => {
	return (	
		<>
			<Welcome />
			<Switch>
				<Route exact path='/auth'>
					<SignInPage />
				</Route>
				<Route path='/auth/signIn'>
					<SignInPage />
				</Route>

				<Route path='/auth/signUp'>
					<SignUpPage />
				</Route>

				<Route path='/auth/verify'>
					<VerifyEmailPage />
				</Route>

				<Route path='/auth/join'>
					<CreateOrJoinCompanyPage />
				</Route>
			</Switch>
		</>
	);
};

