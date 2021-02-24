import { gql } from 'apollo-server-express';
export const typeDefs = gql`
  type Query {
    pokemons: [Pokemon!]!
    pokemon(id: String, name: String): Pokemon
  }
  type Mutation {
    getPokemon(id: String!): Pokemon!
  }
  type Attack {
    name: String
    type: String
    damage: Int
  }

  type Pokemon {
    id: String!
    name: String!
    type: String!
    number: String!
    weight: PokemonDimension!
    height: PokemonDimension!
    classification: String
    types: [String]
    resistant: [String]
    attacks: PokemonAttack
    weaknesses: [String]
    fleeRate: Float
    maxCP: Int
    evolutions: [Pokemon]
    previousEvolutions: [Pokemon]
    evolutionRequirements: PokemonEvolutionRequirement
    maxHP: Int
    image: String
  }

  type PokemonAttack {
    fast: [Attack]
    special: [Attack]
  }
  type PokemonDimension {
    minimum: String
    maximum: String
  }

  type PokemonEvolutionRequirement {
    amount: Int
    name: String
  }
`;
