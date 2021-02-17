import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Navbar from 'components/Navbar/Navbar';
import PokemonList from 'components/PokemonList/PokemonList';
import PokedexContainer from 'components/Pokedex/PokedexContainer';
import loadingPokeball from 'imgs/loading/pokeball.gif';

import './App.scss';

const ALL_POKEMON = gql`
  {
    pokemons {
      id
      name
    }
  }
`;

function App() {
  const { loading, data } = useQuery(ALL_POKEMON);
  const pokemonList = data?.pokemons;

  return (
    <div>
      {loading ? (
        <img className='pokeball-loader' src={loadingPokeball} />
      ) : (
        <>
          <Navbar />
          {pokemonList && <PokemonList pokemonList={pokemonList} />}
          <PokedexContainer pokemonList={pokemonList} />
        </>
      )}
    </div>
  );
}

export default App;
