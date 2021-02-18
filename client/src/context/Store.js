import React from 'react';
import info from 'audio/info';
import fx from 'audio/fx';

const CTX = React.createContext();

export { CTX };

let currentInfo;
let open = new Audio(fx[0]);
open.volume = 0.3;
let close = new Audio(fx[1]);

export function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_CURRENT_POKEMON':
      open.play();
      if (currentInfo) currentInfo.pause();
      currentInfo = new Audio(info[action.payload.currentPokemonNumber - 1]);
      currentInfo.play();
      return {
        ...state,
        currentPokemonNumber: action.payload.currentPokemonNumber,
      };
    case 'CLEAR_CURRENT_POKEMON':
      currentInfo.pause();
      close.time = 0;
      close.play();
      return {
        ...state,
        currentPokemonNumber: '',
        info: null,
      };
    default:
      throw Error('reducer error');
  }
}

export default function Store(props) {
  const stateHook = React.useReducer(reducer, {
    currentPokemonNumber: null,
    info: new Audio(info[0]),
  });

  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}
