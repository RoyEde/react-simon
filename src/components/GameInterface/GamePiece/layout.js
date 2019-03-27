import React, { useEffect, useRef, useState } from 'react';
import { number, string } from 'prop-types';

import { gamePropTypes } from '../../Game/propTypes';

import styled from './styled';

const GamePiece = ({ gameStart, gameState, index, playerTurn, sound, ...props }) => {
  const { GamePieceElement } = styled;

  const soundRef = useRef(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (gameStart && gameState && (playerTurn && gameState[playerTurn - 1] === index)) {
      soundRef.current.play();
      setActive(true);
      setTimeout(() => setActive(false), 300);
    }
  }, [playerTurn]);

  return (
    <>
      <GamePieceElement {...props} active={active} />
      <audio ref={soundRef} src={sound} />
    </>
  );
};

GamePiece.propTypes = {
  gameStart: gamePropTypes.gameStart,
  gameState: gamePropTypes.gameState,
  index: number.isRequired,
  playerTurn: gamePropTypes.playerTurn,
  sound: string.isRequired
};

export default GamePiece;
