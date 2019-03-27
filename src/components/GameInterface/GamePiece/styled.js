import styled, { css } from 'styled-components';

const pointerMixin = css`
  cursor: pointer;
`;

const GamePieceElement = styled.button`
  ${({ started }) => started && pointerMixin}
  background-color: ${({ active, color, highlightColor }) => active ? highlightColor : color};
  border-color: #333;
  border-style: solid;
  border-width: ${({ borderWidth }) => borderWidth};
  border-radius: ${({ orientation }) => orientation};
  grid-area: ${({ position }) => position};
  outline: none;
  transition: background ease .6s;
`;

export default { GamePieceElement };
