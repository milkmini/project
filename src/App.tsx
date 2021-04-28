import React from 'react';

//init
import './app.init';

//navigation
import { BrowserRouter } from 'react-router-dom';
import { RootNavigation } from './app.navigation';

//apollo
import { ApolloProvider } from '@apollo/client';
import { client } from 'apollo';

//styles
import { GlobalStyles } from 'app.global';

export const App = () => {
	return (
		<div css={{ width: '100%', height: 1000 }}>
			<GlobalStyles />

			<ApolloProvider client={client}>
				<BrowserRouter>
					<RootNavigation />
				</BrowserRouter>
			</ApolloProvider> 
		</div>
	);
};

