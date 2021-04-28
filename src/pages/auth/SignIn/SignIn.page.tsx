import React from 'react';

//other-deps
import { useStore } from 'effector-react';

//react-router
import { useHistory } from 'react-router-dom';

// templates
import { SignInTemplate } from './SignIn.template';

//graptql
import { useLoginMutation } from 'generated/graphql';

// models
import { updateAuthorization } from 'library/models/authorization';
import { $session, updateSession } from 'library/models/session';

// types
import { SignInFormData } from './SignInForm.interface';

type SignInPageProps = {

};

//-----------------------------
// SignInPage
//-----------------------------
export const SignInPage: React.FC<SignInPageProps> = () => {
	//router
	const history = useHistory();

	//state
	const session = useStore($session);

	//graphql
	const [createUser] = useLoginMutation();

	//callbacks
	const _onGoToNextStep = React.useCallback(async (data: SignInFormData) => {
		try {
			const result = await createUser({
				variables: {
					email: data.email,
					password: data.password,
				},
			});

			const accessToken = result.data?.login.token || '';

			updateAuthorization({	
				accessToken,
			});

			if (result.data) {
				const user = result.data.login.user;
				updateSession({
					...session,
					user: {
						email: user.email,
						firstName: user.firstName,
						lastName: user.lastName,
					},
				});
			}

			history.push('/');
		}
		catch (err) {

		}
	}, [createUser, history, session]);

	return (
		<SignInTemplate 
			onGoToNextStep={_onGoToNextStep} />
	);
};
