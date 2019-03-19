import React from 'react';
// import PropTypes from 'prop-types';

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

RoundButton.propTypes = {};

export default RoundButton;
