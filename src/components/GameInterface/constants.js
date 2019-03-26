import sound1 from '../../sounds/sound1.mp3';
import sound2 from '../../sounds/sound2.mp3';
import sound3 from '../../sounds/sound3.mp3';
import sound4 from '../../sounds/sound4.mp3';

export const GAME_PIECES = [
  {
    borderWidth: '1rem 0.5rem 0.5rem 1rem',
    color: '#00a74a',
    highlightColor: '#13ff7c;',
    name: 'green',
    orientation: '100% 0 0 0',
    position: '1 / 1 / 3 / 3',
    sound: sound1
  },
  {
    borderWidth: '1rem 1rem 0.5rem 0.5rem',
    color: '#9f0f17',
    highlightColor: '#ff4c4c;',
    name: 'red',
    orientation: '0 100% 0 0',
    position: '1 / 3 / 3 / 5',
    sound: sound2
  },
  {
    borderWidth: '0.5rem 0.5rem 1rem 1rem',
    color: '#cca707',
    highlightColor: '#fed93f;',
    name: 'yellow',
    orientation: '0 0 0 100%',
    position: '3 / 1 / 5 / 3',
    sound: sound3
  },
  {
    borderWidth: '0.5rem 1rem 1rem 0.5rem',
    color: '#094a8f',
    highlightColor: '#1c8cff;',
    name: 'blue',
    orientation: '0 0 100% 0',
    position: '3 / 3 / 5 / 5',
    sound: sound4
  }
];
