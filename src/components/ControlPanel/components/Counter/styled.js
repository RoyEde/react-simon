import styled, { css, keyframes } from 'styled-components';

const flashCounter = keyframes`
  25% {
    color: #430701;
  }
  50% {
    color: #dc0d29;
  }
  75% {
    color: #430701;
  }
`;

const flashMixin = css`
  animation: ${flashCounter} 1.2s linear;
`;

const Count = styled.h2`
  ${({ flash }) => flash && flashMixin};
  align-items: center;
  background-color: #32050c;
  border: 0.25rem solid #222;
  border-radius: 0.625rem;
  color: ${({ gameOn }) => (gameOn ? '#dc0d29' : '#430701')};
  display: flex;
  font-family: 'VT323', monospace;
  justify-content: center;
  margin: auto;
  text-align: center;
  transition: color 0.2s;
  transition-delay: 0.1s;
  width: 3rem;
`;

export default { Count };
