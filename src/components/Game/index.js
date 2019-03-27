import React, { createContext, useEffect, useState } from 'react';

import GameInterface from '../GameInterface';
import useToggleHook from '../../hooks/useToggleHook';
import { generateRandomArray } from '../../utils/arrays';

export const GameContext = createContext();

const Game = () => {
  const [gameOn, toggleGameOn] = useToggleHook(false);
  const [gameStart, toggleGameStart] = useToggleHook(false);
  const [gameState, setGameState] = useState(null);
  const [gameTurn, setGameTurn] = useState(0);
  const [player, togglePlayer] = useToggleHook(false);
  const [playerTurn, setPlayerTurn] = useState(0);
  const [strict, toggleStrict] = useToggleHook(false);

  const startGame = () => {
    setGameState(generateRandomArray(20, 0, 4));
    setGameTurn(1);
  };

  const stopGame = () => {
    setGameTurn(0);
    setPlayerTurn(0);
  };

  const resetGame = () => {
    stopGame();
    setTimeout(startGame, 300);
  };

  const resetPlayer = () => {
    setPlayerTurn(0);
    togglePlayer();
  };

  const play = index => {
    if (index === gameState[playerTurn]) setPlayerTurn(playerTurn + 1);
    else if (strict) resetGame();
    else resetPlayer();
  };

  useEffect(() => {
    if (gameOn) {
      if (playerTurn === gameTurn) {
        if (player) setGameTurn(gameTurn + 1);
        resetPlayer();
      }
      if (playerTurn < gameTurn && !player) {
        setTimeout(() => setPlayerTurn(playerTurn + 1), 1000);
      }
    }
  }, [gameTurn, player, playerTurn]);

  useEffect(() => {
    if (!gameOn) {
      if (gameStart) {
        toggleGameStart();
        stopGame();
      }
      if (player) togglePlayer();
      if (strict) toggleStrict();
    }
  }, [gameOn]);

  useEffect(() => {
    if (gameStart) startGame();
  }, [gameStart]);

  const state = {
    gameOn,
    gameState,
    gameStart,
    gameTurn,
    play,
    player,
    playerTurn,
    strict,
    toggleGameOn,
    toggleGameStart,
    toggleStrict
  };
  const { Provider } = GameContext;
  return (
    <Provider value={state}>
      <GameInterface />
    </Provider>
  );
};

export default Game;
