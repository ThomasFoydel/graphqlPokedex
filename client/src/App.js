import React, { useEffect, useRef } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import fx from 'audio/fx';
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
  let audioRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    // if (audioRef.current) audioRef.current.play();
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={fx[3]} />
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
