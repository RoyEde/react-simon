import styled, { css } from 'styled-components';

const roundElementMixin = css`
  background-color: ${({ color }) => color};
  border-radius: 100%;
  height: ${({ size }) => `${size}rem`};
  width: ${({ size }) => `${size}rem`};
`;

const Light = styled.span.attrs(({ color, on }) => ({
  children: null,
  color: on ? color || 'red' : '#430701',
  size: 0.55
}))`
  ${roundElementMixin}
  border: 0.125rem solid #222;
  margin-bottom: 0.25rem;
  transition: background ease 0.2s;
  transition-delay: 0.1s;
`;

const RoundButtonElement = styled.button.attrs(({ color }) => ({
  children: null,
  color: color || 'red',
  size: 1.6
}))`
  ${roundElementMixin}
  border: 0.03125rem solid #44444488;
  border-bottom: 0.125rem solid #44444488;
  box-shadow: inset 0 0 0.25rem #ffffff88;
  cursor: pointer;
  position: relative;
  top: 0;
  transition: border ease 0.2s, box-shadow ease 0.2s, top ease 0.2s;
  &:active {
    border-bottom-width: 0.03125rem;
    box-shadow: inset 0 0 0.125rem 0 #333;
    top: 0.03625rem;
  }
`;

export default { Light, RoundButtonElement };
