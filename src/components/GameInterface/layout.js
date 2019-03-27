import React from 'react';
import ControlPanel from '../ControlPanel';
import GamePiece from './GamePiece';
import styled from './styled';
import { GAME_PIECES } from './constants';
import { gamePropTypes } from '../Game/propTypes';

const GameInterface = ({ gameStart, gameState, play, player, playerTurn, ...props }) => {
  const { Container } = styled;

  const renderPiece = (piece, index) => {
    const onClick = () => gameStart && player && play(index);
    return (
      <GamePiece
        {...piece}
        gameStart={gameStart}
        gameState={gameState}
        index={index}
        key={piece.color}
        onClick={onClick}
        playerTurn={playerTurn}
        started={gameStart}
      />
    );
  };

  return (
    <Container>
      {GAME_PIECES.map(renderPiece)}
      <ControlPanel {...props} gameStart={gameStart} />
    </Container>
  );
};

GameInterface.propTypes = {
  gameStart: gamePropTypes.gameStart,
  gameState: gamePropTypes.gameState,
  play: gamePropTypes.play,
  player: gamePropTypes.player,
  playerTurn: gamePropTypes.playerTurn
};

export default GameInterface;
