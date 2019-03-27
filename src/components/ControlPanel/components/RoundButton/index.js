import React from 'react';
import { bool, func, string } from 'prop-types';

import Container from '../Container';
import Label from '../Label';
import styled from './styled';

const RoundButton = ({
  color,
  condition,
  disable,
  label,
  light,
  lightColor,
  onClick
}) => {
  const { Light, RoundButtonElement } = styled;
  const handleClick = () => !disable && onClick();
  return (
    <Container>
      {light && <Light color={lightColor} on={condition} />}
      <RoundButtonElement color={color} onClick={handleClick} />
      <Label>{label}</Label>
    </Container>
  );
};

RoundButton.propTypes = {
  color: string,
  condition: bool,
  disable: bool.isRequired,
  label: string.isRequired,
  light: bool,
  lightColor: string,
  onClick: func.isRequired
};

export default RoundButton;
