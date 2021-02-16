import { gql } from 'apollo-server-express';
export const typeDefs = gql`
  type Query {
    pokemons: [Pokemon!]!
  }
  type Mutation {
    getPokemon(id: String!): Pokemon!
  }
  type Pokemon {
    id: String!
    name: String!
  }
`;

/*
  type Mutation {
    createCat(name: String!): Cat!
  }
*/
