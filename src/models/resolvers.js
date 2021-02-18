import data from '../db/data.json';

export const resolvers = {
  Query: {
    pokemons: () => data, // gotta catch 'em all
    // pokemon: (_, { id }) => data[id - 1], // get one pokemon by id
    pokemon: (_, { id }) => {
      console.log(data[id - 1]);
      return data[id - 1];
    },
  },
};
