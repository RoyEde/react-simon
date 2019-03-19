import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    appearance: none;
    border: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }
  :root {
    font-size: ${({ fontSize }) => (fontSize ? `${fontSize / 48}px` : '0px')};
  }
`;

export default GlobalStyle;
