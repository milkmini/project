import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

//models
import { $authorization, updateAuthorization } from 'library/models/authorization';

//modules
import { Environment } from 'library/modules';

const httpLink = createHttpLink({
	uri: Environment.vars.backendHttpUrl + '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const accessToken = $authorization.getState().accessToken;

	return {
		headers: {
			...headers,
			authorization: (accessToken) ? `Bearer ${accessToken}` : '',
		},
	};
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	try {
		if (graphQLErrors) {
			graphQLErrors.map(({ message, locations, path }) => {
				console.log(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
				);

				if (message.toLowerCase().includes('forbidden')) {
					updateAuthorization({
						accessToken: null,
					});
				}

				return null;
			});
		}

		if (networkError) console.log(`[Network error]: ${networkError}`);
	}
	catch (err) {
		console.log(err);
	}
});

export const client = new ApolloClient({
	link: ApolloLink.from([
		errorLink,
		authLink.concat(httpLink),
	]),
	cache: new InMemoryCache(),
});
// .concat(errorLink)
