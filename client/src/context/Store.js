import React from 'react';
import info from 'audio/info';
import fx from 'audio/fx';

export const CTX = React.createContext();

let currentInfo;
let close = new Audio(fx[1]);
close.volume = 0.5;

export function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_CURRENT_POKEMON':
      let open = new Audio(fx[0]);
      open.volume = 0.2;
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
      throw Error('Reducer error... STATE: ', state, 'ACTION: ', action);
  }
}

export default function Store(props) {
  const stateHook = React.useReducer(reducer, {
    currentPokemonNumber: null,
  });

  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}
