import React from 'react';

//graphql
import { useGetCompanyLazyQuery, useGetMyCompaniesLazyQuery } from 'generated/graphql';

//models
import { useStore } from 'effector-react';
import { $session, updateSession } from 'library/models/session';

//templates
import { BootsplashTemplate } from './Bootsplash.template';

//types
type BootsplashPageProps = {
	
};

//-------------------------------
// BootsplashPage
//-------------------------------
export const BootsplashPage: React.FC<BootsplashPageProps> = () => {
	//graphql
	const [getMyCompanies, { data: myCompaniesData }] = useGetMyCompaniesLazyQuery();
	const [getCurrentCompany, { data: currentCompanyData }] = useGetCompanyLazyQuery();

	//data
	const session = useStore($session);

	//effects
	React.useEffect(() => {
		if (!session.currentCompany) 
			getMyCompanies();
		else {
			getCurrentCompany({
				variables: {
					companyId: session.currentCompany.id,
				}, 
			});
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	React.useEffect(() => {
		if (myCompaniesData?.myCompanies) {
			if (myCompaniesData.myCompanies.length === 0) {
				updateSession({
					...session,
					isLoading: false,
				});

				return;
			}

			const companyData = myCompaniesData.myCompanies[0];

			updateSession({
				...session,
				isLoading: false,
				currentCompany: {
					id: companyData.id,
					name: companyData.name,
				},
			});
		}
	}, [myCompaniesData]); // eslint-disable-line react-hooks/exhaustive-deps

	React.useEffect(() => {
		if (currentCompanyData?.company) {
			const companyData = currentCompanyData.company;

			updateSession({
				...session,
				isLoading: false,
				currentCompany: {
					id: companyData?.id,
					name: companyData?.name,
				},
			});
		}
	}, [currentCompanyData]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<BootsplashTemplate />
	);
};
