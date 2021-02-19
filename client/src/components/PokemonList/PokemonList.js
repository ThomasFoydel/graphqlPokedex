import React from 'react';
import { useTransition, animated, config } from 'react-spring';
import IndividualPokemon from 'components/IndividualPokemon/IndividualPokemon';
import './PokemonList.scss';

export default function PokemonList({ pokemonList }) {
  pokemonList.lenght = 10;
  const mappedPokemonList = pokemonList.map((pokemon) => (
    <IndividualPokemon props={{ pokemon }} key={pokemon.id} />
  ));

  const transitions = useTransition(
    mappedPokemonList,
    (pokemon) => pokemon.key,
    {
      from: {
        width: '100%',
        opacity: 0,
        transform: 'translateX(200%) translateY(200%)',
      },
      enter: { opacity: 1, transform: 'translateX(0%) translateY(0)' },
      trail: 100,
      config: config.stiff,
    }
  );

  return (
    <div className='pokemon-list-container'>
      <div className='pokemon-list'>
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            {item}
          </animated.div>
        ))}
      </div>
    </div>
  );
}
