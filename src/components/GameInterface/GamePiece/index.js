import React from 'react';
// import PropTypes from 'prop-types';
import styled from './styled';

const GamePiece = ({ color, index }) => {
  const { GamePieceElement } = styled;
  return <GamePieceElement color={color} index={index} />;
};

GamePiece.propTypes = {};

export default GamePiece;
