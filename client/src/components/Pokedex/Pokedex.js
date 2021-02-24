import React, { useContext } from 'react';
import PokemonSprite from 'components/Pokedex/PokemonSprite';
import spritesArray from '../../imgs/sprites/index';
import { CTX } from 'context/Store';
import './Pokedex.scss';

export default function Pokedex({ props: { pokemonData, pokemonList } }) {
  const [, updateState] = useContext(CTX);

  const {
    name,
    attacks,
    id,
    classification,
    types,
    resistant,
    weaknesses,
    fleeRate,
    maxCP,
    maxHP,
    weight,
    height,
    evolutions,
    evolutionRequirements,
  } = pokemonData || {};

  const i = Number(id);
  const prevPokemon = i > 1 && pokemonList[i - 2].id;
  const nextPokemon = i < pokemonList.length && pokemonList[i].id;

  return (
    <div className='pokedex'>
      <div className='prevnext-buttons'>
        <button
          className={`prevnext-button ${!prevPokemon && 'inactivebutton'}`}
          onClick={() => {
            if (prevPokemon) {
              updateState({
                type: 'CHANGE_CURRENT_POKEMON',
                payload: {
                  currentPokemonNumber: prevPokemon,
                },
              });
            }
          }}
        >
          <i className='fas fa-2x fa-arrow-left'></i>
        </button>

        <button
          className={`prevnext-button ${!nextPokemon && 'inactivebutton'}`}
          onClick={() => {
            if (nextPokemon) {
              updateState({
                type: 'CHANGE_CURRENT_POKEMON',
                payload: {
                  currentPokemonNumber: nextPokemon,
                },
              });
            }
          }}
        >
          <i className='fas fa-2x fa-arrow-right'></i>
        </button>
      </div>
      <i
        className='fas fa-2x fa-times close-button'
        onClick={() => updateState({ type: 'CLEAR_CURRENT_POKEMON' })}
      ></i>
      <h1 className='name'>{name}</h1>
      <div className='spritebackground' />
      {id && <PokemonSprite pokemonNumber={Number(id) - 1} name={name} />}
      <p className='classification'>{classification}</p>
      <div className='infobox'>
        <>
          <p>
            <b>Max HP:</b> {maxHP}
          </p>

          <p>
            <b>Max CP:</b> {maxCP}
          </p>

          <p>
            <b>Flee Rate:</b> {fleeRate}
          </p>

          <p>
            <b>Weight:</b> {weight && weight.minimum} -{' '}
            {weight && weight.maximum}
          </p>

          <p>
            <b>Height:</b> {height && height.minimum} -{' '}
            {height && height.maximum}
          </p>

          <div className='types'>
            <b>{types && types.length > 1 ? `Types:` : `Type:`} </b>
            {types?.map((type, i) => (
              <span key={i}>
                {type}
                {i < types.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>

          <div>
            <b>Weaknesses:</b>{' '}
            {weaknesses &&
              weaknesses.map((weakness, i) => (
                <span key={i}>
                  {weakness}
                  {i < weaknesses.length - 1 ? ', ' : ''}
                </span>
              ))}
          </div>

          <div>
            <b>Resistant To:</b>{' '}
            {resistant?.map((individualResistance, i) => (
              <span key={i}>
                {individualResistance}
                {i < resistant.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>

          <div>
            <b>Fast Attacks:</b>{' '}
            {attacks?.fast.map((attack, i) => (
              <span key={i}>
                {attack.name}
                {i < attacks.fast.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>

          <div>
            <b>Special Attacks:</b>{' '}
            {attacks?.special.map((attack, i) => (
              <span key={i}>
                {attack.name}
                {i < attacks.special.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>

          {evolutionRequirements && (
            <p>
              <b>Evolution Requirements:</b>{' '}
              {`${evolutionRequirements.amount} ${evolutionRequirements.name}`}
            </p>
          )}
        </>
      </div>

      {pokemonData && (
        <div className='evolutions'>
          {evolutions ? (
            evolutions.map((evolution, i) => (
              <div
                key={i}
                className='evolution'
                onClick={() =>
                  updateState({
                    type: 'CHANGE_CURRENT_POKEMON',
                    payload: {
                      currentPokemonNumber: `${evolution.id < 100 ? 0 : ''}${
                        evolution.id < 10 ? 0 : ''
                      }${evolution.id}`,
                    },
                  })
                }
              >
                <p className='evolution-name'>{evolution.name}</p>
                <img
                  alt={`${evolution.name} sprite`}
                  className='evolution-sprite'
                  src={spritesArray[Number(evolution.id) - 1]}
                />
              </div>
            ))
          ) : (
            <p className='finalevolution'>Final Evolution</p>
          )}
        </div>
      )}
    </div>
  );
}
