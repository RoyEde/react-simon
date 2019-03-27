import { arrayOf, bool, func, number } from 'prop-types';

export const gamePropTypes = {
  gameOn: bool.isRequired,
  gameState: arrayOf(number).isRequired,
  gameStart: bool.isRequired,
  gameTurn: number.isRequired,
  play: func.isRequired,
  player: bool.isRequired,
  playerTurn: number.isRequired,
  resetGame: func.isRequired,
  strict: bool.isRequired,
  toggleGameOn: func.isRequired,
  toggleGameStart: func.isRequired,
  toggleStrict: func.isRequired
};
