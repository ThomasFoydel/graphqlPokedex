import data from '../db/data.json';

export const resolvers = {
  Query: {
    pokemons: () => {
      return data;
    },
  },
  Mutation: {
    getPokemon: async (_, { id }) => {
      id = Number(id);
      return data[id - 1];
    },
  },
};
