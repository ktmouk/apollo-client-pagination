import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Film: {
        fields: {
          speciesConnection: relayStylePagination()
        }
      }
    }
  }),
});
