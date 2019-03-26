import React, { useContext, useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from './styled';
import { GameContext } from '../../Game';

const GamePiece = ({ index, sound, ...props }) => {
  const { GamePieceElement } = styled;

  const { gameStart, gameState, playerTurn, showTurn } = useContext(GameContext);

  const soundRef = useRef(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (gameStart && gameState && (playerTurn && gameState[playerTurn - 1] === index || !playerTurn && gameState[showTurn - 1] === index)) {
      soundRef.current.play();
      setActive(true);
      setTimeout(() => setActive(false), 300);
    }
  }, [playerTurn, showTurn]);

  return (
    <>
      <GamePieceElement {...props} active={active} />
      <audio ref={soundRef} src={sound} />
    </>
  );
};

GamePiece.propTypes = {};

export default GamePiece;
