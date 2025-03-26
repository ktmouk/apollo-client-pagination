'use client'

import { gql, useQuery } from "@apollo/client";

const QUERY = gql(`
  query Query($after: String) {
    film(id: "ZmlsbXM6MQ==") {
      id
      speciesConnection(first: 2, after: $after) {
        edges {
          cursor
          node {
            id
            name
          }
        }
        pageInfo {
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }`)

export const Content = () => {
  const firstPageEndCursor = 'YXJyYXljb25uZWN0aW9uOjE='

  const { data, fetchMore } = useQuery(
    QUERY,
    {
      variables: { after: firstPageEndCursor }, // Start from the 2nd page.
      fetchPolicy: 'cache-and-network' // MEMO: 'cache-first' will works fine.
    }
  );

  return data &&
    <>
      <div>
        <ul>
          {data.film.speciesConnection.edges.map((edge) => (
            <li key={edge.node.id}>ID: {edge.node.id} Name: {edge.node.name}</li>
          ))}
        </ul>
      </div>
      <p>
        endCursor: {data.film.speciesConnection.pageInfo.endCursor}</p>
      <p><button onClick={() => {
          fetchMore({
            variables: { after: data.film.speciesConnection.pageInfo.endCursor },
          });
        }}>Load More</button>
      </p>
    </>
}