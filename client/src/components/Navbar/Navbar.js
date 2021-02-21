import React from 'react';
import './Navbar.scss';
import pokeball from 'imgs/pokeball/pokeball.png';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <img className='pokeball' src={pokeball} alt='pokeball' />
        <h1 className='title'>pokedex</h1>
      </div>
      <div className='portfoliolink'>
        by Thomas Foydel 2021{' '}
        <a href='https://thomasfoydel.com'>back to my portfolio</a>
      </div>
    </div>
  );
}
