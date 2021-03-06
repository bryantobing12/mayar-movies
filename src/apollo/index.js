import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: '/',
  cache: new InMemoryCache(),
});

export default apolloClient;
