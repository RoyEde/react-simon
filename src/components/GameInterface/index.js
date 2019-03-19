import React from 'react';
// import PropTypes from 'prop-types';
import ControlPanel from '../ControlPanel';
import GamePiece from './GamePiece';
import styled from './styled';
import { GAME_PIECES } from './constants';

const GameInterface = () => {
  const { Container } = styled;

  const renderPiece = ({ color }, index) => (
    <GamePiece color={color} key={color} index={index} />
  );

  return (
    <Container>
      {GAME_PIECES.map(renderPiece)}
      <ControlPanel />
    </Container>
  );
};

GameInterface.propTypes = {};

export default GameInterface;
