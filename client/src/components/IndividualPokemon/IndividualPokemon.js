import React, { useState, useContext } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { CTX } from 'context/Store';
import spritesArray from '../../imgs/sprites/index';
import './IndividualPokemon.scss';

export default function IndividualPokemon({ props: { pokemon } }) {
  const [, updateState] = useContext(CTX);
  const [hover, setHover] = useState(false);
  const { name, id } = pokemon;
  const pokemonIndex = Number(id);

  const animationProps = useSpring({
    to: {
      transform: hover
        ? 'scale(1.04) translateY(0rem) translateX(0rem)'
        : 'scale(0.87) translateY(0rem) translateX(0rem)',
      boxShadow: hover
        ? '2rem 2rem 1rem rgba(0, 0, 0, 0.3), -0.8rem -0.8rem 5rem rgba(255, 255, 255, 0.2)'
        : '0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3), -0.3rem -0.3rem 3rem rgba(255, 255, 255, 0.17)',
    },
    config: config.wobbly,
  });

  return (
    <animated.div
      style={animationProps}
      className='pokemon-card'
      onClick={() => {
        updateState({
          type: 'CHANGE_CURRENT_POKEMON',
          payload: {
            currentPokemonNumber: id,
          },
        });
      }}
    >
      <h1
        className='pokemon-card-name'
        style={{
          letterSpacing: hover ? '0.7rem' : '0.3rem',
        }}
      >
        {name}
      </h1>

      <img
        className='pokemon-card-image'
        src={spritesArray[pokemonIndex - 1]}
        alt={`${name} sprite`}
      />
      <div
        className='hover-el'
        onMouseEnter={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
    </animated.div>
  );
}
