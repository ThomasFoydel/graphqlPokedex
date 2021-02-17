import React, { useContext } from 'react';
import { gql } from 'apollo-boost';
import Pokedex from 'components/Pokedex/Pokedex';
import { useQuery } from '@apollo/react-hooks';
import { useSpring, animated } from 'react-spring';

import { CTX } from 'context/Store';

const makePokeQuery = (id) => {
  return gql`
  {
     pokemon(id: "${id}") {
      id
      name
      classification
      types
      resistant
      weaknesses
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
    }
  }
`;
};

export default function PokedexContainer({ pokemonList }) {
  const [appState] = useContext(CTX);

  const { loading, data } = useQuery(
    makePokeQuery(appState.currentPokemonNumber)
  );
  let fetchedPokemon;
  if (data && data.pokemon) {
    fetchedPokemon = data.pokemon;
  }

  //     .query({
  //       query: gql`{
  //           pokemon(id: "${appState.currentPokemonLongId}") {
  //             id
  //             number
  //             name
  //             classification
  //             types
  //             resistant
  //             weaknesses
  //             fleeRate
  //             maxCP
  //             maxHP
  //             image
  //             evolutionRequirements {
  //                 amount
  //                 name
  //             }
  //             attacks {
  //               special {
  //                 name
  //                 type
  //                 damage
  //               }
  //               fast {
  //                 name
  //                 type
  //                 damage
  //               }
  //             }
  //             weight {
  //                 minimum
  //                 maximum
  //             }
  //             height {
  //                 minimum
  //                 maximum
  //             }
  //             evolutions {
  //               id
  //               number
  //               name
  //             }
  //           }
  //         }`,
  //     })

  const animationProps = useSpring({
    to: {
      position: 'absolute',
      zIndex: 8,
      opacity: appState.currentPokemonNumber ? 1 : 0,
      marginLeft: appState.currentPokemonNumber ? '0px' : '-1000px',
    },
    from: { zIndex: 8, opacity: 0 },
    delay: 225,
  });

  return (
    <animated.div style={animationProps}>
      <Pokedex pokemonData={fetchedPokemon} pokemonList={pokemonList} />
    </animated.div>
  );
}
