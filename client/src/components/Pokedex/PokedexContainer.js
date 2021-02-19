import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useSpring, animated } from 'react-spring';
import Pokedex from 'components/Pokedex/Pokedex';
import { makePokeQuery } from 'gql/queries';
import { CTX } from 'context/Store';

export default function PokedexContainer({ pokemonList }) {
  const [appState] = useContext(CTX);

  const { loading, data } = useQuery(
    makePokeQuery(appState.currentPokemonNumber)
  );
  let fetchedPokemon;
  if (data && data.pokemon) {
    fetchedPokemon = data.pokemon;
  }

  const animationProps = useSpring({
    position: 'absolute',
    zIndex: 8,
    marginLeft: '50%',
    opacity: appState.currentPokemonNumber ? 1 : 0,
    transform: appState.currentPokemonNumber
      ? 'translateX(-50%)'
      : 'translateX(-290%)',
    config: { tension: 180, friction: 20, mass: 1.5 },
  });

  return (
    <div className='pokedex-container'>
      <animated.div style={animationProps} className='pokedex-spring'>
        <Pokedex
          pokemonData={fetchedPokemon}
          pokemonList={pokemonList}
          loading={loading}
        />
      </animated.div>
    </div>
  );
}
