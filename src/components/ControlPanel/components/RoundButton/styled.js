import styled, { css } from 'styled-components';

const roundElementMixin = css`
  background-color: ${({ color }) => color};
  border-radius: 100%;
  height: ${({ size }) => `${size}rem`};
  outline: none;
  width: ${({ size }) => `${size}rem`};
`;

const Light = styled.span.attrs(({ color, on, size }) => ({
  children: null,
  color: on ? color || 'red' : '#430701',
  size: size || 0.55
}))`
  ${roundElementMixin}
  border: 0.125rem solid #222;
  margin-bottom: 0.25rem;
  transition: all ease 0.2s;
  transition-delay: 0.1s;
`;

const RoundButtonElement = styled.button.attrs(({ color, size }) => ({
  children: null,
  color: color || 'red',
  size: size || 1.6
}))`
  ${roundElementMixin}
  border: 0.03125rem solid #44444488;
  border-bottom: 0.125rem solid #44444488;
  box-shadow: inset 0 0 0.25rem #ffffff88;
  cursor: pointer;
  position: relative;
  top: 0;
  transition: all ease 0.1s;
  &:active {
    border-bottom-width: 0.03125rem;
    box-shadow: inset 0 0 0.125rem 0 #333;
    top: 0.0625rem;
  }
`;

export default { Light, RoundButtonElement };
