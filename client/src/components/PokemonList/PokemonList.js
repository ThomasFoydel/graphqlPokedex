import React from 'react';
import IndividualPokemon from 'components/IndividualPokemon/IndividualPokemon';
import { useTransition, animated, config } from 'react-spring';

export default function PokemonList({ pokemonList }) {
  pokemonList.lenght = 10;
  const mappedPokemonList = pokemonList.map((pokemon, i) => {
    const nextPokemon = i > 1 && pokemonList[i - 1].id;
    const prevPokemon = i < pokemonList.length - 1 && pokemonList[i + 1].id;
    return (
      <IndividualPokemon
        key={pokemon.id}
        pokemon={pokemon}
        nextPokemon={nextPokemon}
        prevPokemon={prevPokemon}
      />
    );
  });

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
      trail: 150,
      config: config.stiff,
    }
  );

  return (
    <div className='pokemon-list-container'>
      <div className='pokemon-list'>
        {/* {pokemonList.map(pokemon=>{
          return (
            <IndividualPokemon
              key={pokemon.id}
              pokemon={pokemon}
              nextPokemon={nextPokemon}
              prevPokemon={prevPokemon}
            />
          );
        })} */}
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            {item}
          </animated.div>
        ))}
      </div>
    </div>
  );
}