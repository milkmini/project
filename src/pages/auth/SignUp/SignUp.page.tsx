import React from 'react';

//other-deps
import { useStore } from 'effector-react';

//react-router
import { useHistory } from 'react-router-dom';

//graphql
import { useRegisterMutation } from 'generated/graphql';

//templates
import { SignUpTemplate } from './SignUp.template';

// models
import { updateAuthorization } from 'library/models/authorization';
import { $session, updateSession } from 'library/models/session';

//types
import { SignUpFormData } from './SignUpForm.interface';

type SignUpPageProps = {

};

//-----------------------------
// SignUpPage
//-----------------------------
export const SignUpPage: React.FC<SignUpPageProps> = () => {
	//router
	const history = useHistory();

	//state
	const session = useStore($session);

	//graphql
	const [createRegister] = useRegisterMutation();

	const _onGoToNextStep = React.useCallback(async (data: SignUpFormData) => {
		try {
			const result = await createRegister({
				variables: {
					firstName: data.firstName,
					lastName: data.lastName, 
					email: data.email,
					password: data.password,
				},
			});

			const accessToken = result.data?.register.token || '';	
			
			updateAuthorization({
				accessToken,
			});

			if (result.data?.register) {
				const user = result.data.register.user;
				updateSession({
					...session,
					user: {
						email: user.email,
						firstName: user.firstName,
						lastName: user.lastName,
					},
				});
			}

			history.push('/auth/verify');
		}
		catch (err) {

		}
	}, [createRegister, history, session]);

	return (
		<SignUpTemplate
			onGoToNextStep={_onGoToNextStep} />
	);
};
