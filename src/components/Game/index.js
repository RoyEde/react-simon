import React, { createContext, useEffect, useState } from 'react';

import GameInterface from '../GameInterface';
import useToggleHook from '../../hooks/useToggleHook';

export const GameContext = createContext();

const Game = ({ children }) => {
  const [gameOn, toggleGameOn] = useToggleHook(false);
  const [gameStart, toggleGameStart] = useToggleHook(false);
  const [gameState, setGameState] = useState([]);
  const [gameStateTimeout, setGameStateTimeout] = useState(null);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [strict, toggleStrict] = useToggleHook(false);

  const resetAnimation = () => setTriggerAnimation(false);

  useEffect(() => {
    if (!gameOn) {
      if (gameStart) {
        toggleGameStart();
        resetAnimation();
      }
      if (strict) {
        toggleStrict();
      }
    }
  }, [gameOn]);

  useEffect(() => {
    if (gameStart && !triggerAnimation) {
      setTriggerAnimation(true);
      if (gameState.length) {
        setGameState([]);
      } else {
        if (gameStateTimeout) {
          clearTimeout(gameStateTimeout);
        }
        setGameStateTimeout(setTimeout(() => setGameState([1]), 66));
      }
    }
  }, [gameStart, triggerAnimation]);

  const state = {
    gameOn,
    gameStart,
    gameState,
    resetAnimation,
    strict,
    toggleGameOn,
    toggleGameStart,
    toggleStrict,
    triggerAnimation
  };
  const { Provider } = GameContext;
  return (
    <Provider value={state}>
      <GameInterface />
    </Provider>
  );
};

export default Game;
