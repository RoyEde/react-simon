import React, { useEffect, useState } from 'react';

import Game from './components/Game';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  const [fontSize, setFontSize] = useState(null);
  const [resizeTimeout, setResizeTimeout] = useState(null);

  useEffect(() => {
    setFontSize(Math.max(window.innerHeight, window.innerWidth));

    window.addEventListener('resize', () => {
      if (!resizeTimeout) {
        setResizeTimeout(
          setTimeout(() => {
            setResizeTimeout(null);
            setFontSize(Math.max(window.innerHeight, window.innerWidth));
          }, 66)
        );
      }
    });

    return () => window.removeEventListener('resize');
  }, []);

  return (
    <>
      <Game />
      <GlobalStyle fontSize={fontSize} />
    </>
  );
};

export default App;
