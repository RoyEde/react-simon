export const generateRandomArray = (size, rangeStart, rangeEnd) =>
  size <= 1000 && typeof rangeStart === 'number' && typeof rangeEnd === 'number' ?
    [...Array(size)].map(() => Math.floor(Math.random() * rangeEnd + rangeStart)) :
    console.error('Error generating array');
