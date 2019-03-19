import styled from 'styled-components';
import {
  MAP_BORDER_WIDTH,
  MAP_GRID_POSITION,
  MAP_ORIENTATION
} from '../constants';

const GamePieceElement = styled.div`
  background-color: ${({ color }) => color};
  border-color: #333;
  border-style: solid;
  border-width: ${({ index }) => MAP_BORDER_WIDTH[index]};
  border-radius: ${({ index }) => MAP_ORIENTATION[index]};
  grid-area: ${({ index }) => MAP_GRID_POSITION[index]};
`;

export default { GamePieceElement };
