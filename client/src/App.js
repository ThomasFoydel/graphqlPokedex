import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Navbar from 'components/Navbar/Navbar';
import PokemonList from 'components/PokemonList/PokemonList';
import PokedexContainer from 'components/Pokedex/PokedexContainer';
import loadingPokeball from 'imgs/loading/pokeball.gif';
import { ALL_POKEMON } from 'gql/queries';

import './App.scss';

function App() {
  const { loading, data } = useQuery(ALL_POKEMON);
  const pokemonList = data?.pokemons;

  return (
    <>
      {loading ? (
        <img
          className='pokeball-loader'
          src={loadingPokeball}
          alt='loading...'
        />
      ) : (
        <>
          <Navbar />
          {pokemonList && <PokemonList pokemonList={pokemonList} />}
          <PokedexContainer pokemonList={pokemonList} />
        </>
      )}
    </>
  );
}

export default App;
