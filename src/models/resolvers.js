import data from '../db/data.json';

export const resolvers = {
  Query: {
    pokemons: async () => {
      return data;
    },
    pokemon: async (_, { id }) => {
      return data[id - 1];
    },
  },
  Mutation: {
    getPokemon: async (_, { id }) => {
      id = Number(id);
      return data[id - 1];
    },
  },
};
