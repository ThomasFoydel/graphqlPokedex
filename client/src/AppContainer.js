import React, { useState } from 'react';
import App from './App.js';
import unopenedPokeball from 'imgs/pokeball/unopened.gif';
import pokeball from 'imgs/pokeball/pokeball2.png';
import fx from 'audio/fx';
const AppContainer = () => {
  const [opened, setOpened] = useState(false);
  const openSound = new Audio(fx[3]);
  const [hover, setHover] = useState(false);

  const openUp = () => {
    openSound.play();
    setOpened(true);
  };
  return (
    <div onClick={openUp}>
      {opened ? (
        <App />
      ) : (
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <img
            className='unopened-pokeball'
            src={hover ? unopenedPokeball : pokeball}
          />
          <h2 className='get-started'>click to get started</h2>
          <div
            className='hover-el'
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          />
        </div>
      )}
    </div>
  );
};

export default AppContainer;
