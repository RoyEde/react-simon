import React from 'react';
import { bool, string } from 'prop-types';

import Container from '../Container';
import Label from '../Label';
import { gamePropTypes } from '../../../Game/propTypes';

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

Counter.propTypes = {
  count: string.isRequired,
  gameOn: gamePropTypes.gameOn,
  triggerAnimation: bool
};

export default Counter;
