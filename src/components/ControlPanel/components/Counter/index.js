import React from 'react';

import Container from '../Container';
import Label from '../Label';

import styled from './styled';

const Counter = ({ count, gameOn, triggerAnimation }) => {
  const { Count } = styled;
  return (
    <Container>
      <Count flash={triggerAnimation} gameOn={gameOn}>
        {count || '--'}
      </Count>
      <Label>COUNT</Label>
    </Container>
  );
};

export default Counter;
