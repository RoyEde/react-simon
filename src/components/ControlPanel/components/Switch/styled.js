import styled, { css } from 'styled-components';

const switchMixin = css`
  transform: translateX(100%);
`;

const SwitchLabel = styled.span`
  font-family: 'Oswald', Arial, sans;
  font-size: 0.6rem;
`;

const SwitchContainer = styled.div`
  align-items: center;
  display: flex;
`;

const SwitchButton = styled.button.attrs(({ size }) => ({
  size: size || 0.8
}))`
  ${({ active }) => active && switchMixin}
  background-color: blue;
  border: ${({ size }) => `${size / 10}rem`} solid #222;
  border-radius: ${({ size }) => `${size / 4}rem`};
  cursor: pointer;
  height: ${({ size }) => `${size}rem`};
  outline: none;
  transition: transform 0.3s ease-in;
  width: ${({ size }) => `${size}rem`};
`;

const SwitchButtonContainer = styled(SwitchContainer).attrs(({ size }) => ({
  size: size || 0.8
}))`
  align-items: center;
  background-color: #222;
  margin: 0.2rem;
  width: ${({ size }) => `${2 * size}rem`};
`;

export default {
  SwitchButton,
  SwitchButtonContainer,
  SwitchContainer,
  SwitchLabel
};
