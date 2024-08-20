import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "./__generated__/gql";

const query = gql(`
  query PostsQuery {
    posts {
      id
      title
      author {
        id
        firstName
      }
    }
  }
`);

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

const result = client.query({ query });
