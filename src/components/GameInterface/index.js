import React, { useContext } from 'react';

import { GameContext } from '../Game';

import GameInterface from './layout';

const GameInterfaceContainer = () => {
  const {
    gameOn,
    gameStart,
    gameState,
    gameTurn,
    play,
    player,
    playerTurn,
    resetGame,
    strict,
    toggleGameOn,
    toggleGameStart,
    toggleStrict,
    won
  } = useContext(GameContext);

  const props = {
    gameOn,
    gameStart,
    gameState,
    gameTurn,
    play,
    player,
    playerTurn,
    resetGame,
    strict,
    toggleGameOn,
    toggleGameStart,
    toggleStrict,
    won
  };

  return <GameInterface {...props} />;
};

export default GameInterfaceContainer;
