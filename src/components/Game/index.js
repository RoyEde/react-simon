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
  const [playerTurn, setPlayerTurn] = useState(false);
  // const [playerTurn, setPlayerTurn] = useToggleHook(false);
  const [showTurn, setShowTurn] = useState(0);
  const [strict, toggleStrict] = useToggleHook(false);

  const startGame = () => {
    setGameState(generateRandomArray(20, 0, 4));
    setGameTurn(1);
  };

  const stopGame = () => {
    setGameTurn(0);
    setPlayerTurn(0);
    setShowTurn(0);
  };

  const reset = () => {
    stopGame();
    setTimeout(startGame, 300);
  };

  const play = index => {
    if (index === gameState[playerTurn]) {
      setPlayerTurn(playerTurn + 1);
    } else if (strict) {
      reset();
    } else {
      setPlayerTurn(0);
      setShowTurn(0);
    }
  };

  useEffect(() => {
    if (playerTurn === gameTurn) {
      setGameTurn(gameTurn + 1);
      setPlayerTurn(0);
      setShowTurn(0);
    }
  }, [playerTurn]);

  useEffect(() => {
    if (!gameOn) {
      if (gameStart) {
        toggleGameStart();
        stopGame();
      }
      if (strict) {
        toggleStrict();
      }
    }
  }, [gameOn]);

  useEffect(() => {
    if (gameStart) {
      console.log('start');
      startGame();
    }
  }, [gameStart]);

  useEffect(() => {
    if (gameOn) {
      if (showTurn < gameTurn) {
        setTimeout(() => setShowTurn(showTurn + 1), 1000);
      }
    }
  }, [gameTurn, showTurn]);

  const state = {
    gameOn,
    gameStart,
    gameState,
    gameTurn,
    play,
    playerTurn,
    reset,
    showTurn,
    startGame,
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
