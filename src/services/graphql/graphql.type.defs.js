import { gql } from 'graphql-tag';

export const graphQLTypeDefs = gql`
  #custom types
  scalar JSON
  # Pages
  type HomePage {
    title: JSON
  }
  type Query {
    homePage: HomePage
  }
`;
