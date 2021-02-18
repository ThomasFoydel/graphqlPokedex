import React, { useState, useContext } from 'react';
import { CTX } from 'context/Store';
import { useSpring, animated, config } from 'react-spring';
import spritesArray from '../../imgs/sprites/index';
import './IndividualPokemon.scss';

export default function IndividualPokemon({ pokemon }) {
  const [appState, updateState] = useContext(CTX);
  const [hover, setHover] = useState(false);
  const { name, number, id } = pokemon;
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
      style={{
        ...animationProps,
        width: '100%',
        position: 'relative',
      }}
      className='pokemon-card'
      onClick={() => {
        updateState({
          type: 'CHANGE_CURRENT_POKEMON',
          payload: {
            currentPokemonNumber: id,
          },
        });
      }}
      id='pokecard'
    >
      <h1
        className='pokemon-card-name'
        style={{
          transition: 'all 0.3s ease',
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
        className='hover'
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          height: '100%',
          zIndex: '1',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseOut={(event) => {
          setHover(false);
        }}
      />
    </animated.div>
  );
}
