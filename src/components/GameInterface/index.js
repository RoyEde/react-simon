import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import ControlPanel from '../ControlPanel';
import GamePiece from './GamePiece';
import styled from './styled';
import { GAME_PIECES } from './constants';
import { GameContext } from '../Game';

const GameInterface = () => {
  const { Container } = styled;

  const { gameStart, play, player } = useContext(GameContext);

  const renderPiece = (piece, index) => {
    const onClick = () => gameStart && player && play(index);
    return (
      <GamePiece
        {...piece}
        key={piece.color}
        index={index}
        onClick={onClick}
        started={gameStart}
      />
    );
  };

  return (
    <Container>
      {GAME_PIECES.map(renderPiece)}
      <ControlPanel />
    </Container>
  );
};

GameInterface.propTypes = {};

export default GameInterface;
