import gql from 'graphql-tag';
export const ALL_POKEMON = gql`
  {
    pokemons {
      id
      name
    }
  }
`;

export const makeSinglePokeQuery = (id) => {
  return gql`
  {
     pokemon(id: "${id}") {
      id
      name
      classification
      types
      resistant
      weaknesses
      maxCP
      maxHP
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      fleeRate
      evolutions {
        id
        name
      }
      previousEvolutions {
        id
        name
      }
      evolutionRequirements {
        amount
        name
      }
      attacks {
        special {
          name
          type
          damage
        }
        fast {
          name
          type
          damage
        }
      }
    }
  }
`;
};
