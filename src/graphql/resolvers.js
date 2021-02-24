import Pokemon from '../models/Pokemon';

export const resolvers = {
  Query: {
    pokemons: async () => {
      const foundPokemon = await Pokemon.find({}).sort({ id: 1 });
      return foundPokemon;
    },

    pokemon: async (_, { id }) => {
      if (!id) return;
      const foundPokemon = await Pokemon.findOne({ id });
      return foundPokemon;
    },
  },
};
