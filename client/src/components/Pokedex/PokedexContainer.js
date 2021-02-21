import React, { useState, useContext, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useSpring, animated } from 'react-spring';

import Pokedex from 'components/Pokedex/Pokedex';
import { makeSinglePokeQuery } from 'gql/queries';
import { CTX } from 'context/Store';

export default function PokedexContainer({ pokemonList }) {
  const [{ currentPokemonNumber }] = useContext(CTX);
  const [currentPokemon, setCurrentPokemon] = useState(
    useQuery(makeSinglePokeQuery(currentPokemonNumber))
  );
  const { data } = useQuery(makeSinglePokeQuery(currentPokemonNumber));

  useEffect(() => {
    if (data && data.pokemon) {
      setCurrentPokemon(data.pokemon);
    }
  }, [data]);

  const animationProps = useSpring({
    opacity: currentPokemonNumber ? 1 : 0,
    transform: currentPokemonNumber ? 'translateX(-50%)' : 'translateX(-290%)',
    config: { tension: 180, friction: 20, mass: 1.5 },
  });

  return (
    <div className='pokedex-container'>
      <animated.div style={animationProps} className='pokedex-spring'>
        <Pokedex props={{ pokemonData: currentPokemon, pokemonList }} />
      </animated.div>
    </div>
  );
}
