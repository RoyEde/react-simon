import React from 'react';
import styled from './styled';
// import PropTypes from 'prop-types';

const Switch = ({ active, leftLabel, onToggle, rightLabel }) => {
  const {
    SwitchButton,
    SwitchButtonContainer,
    SwitchContainer,
    SwitchLabel
  } = styled;
  return (
    <SwitchContainer>
      <SwitchLabel>{leftLabel}</SwitchLabel>
      <SwitchButtonContainer>
        <SwitchButton active={active} onClick={onToggle} />
      </SwitchButtonContainer>
      <SwitchLabel>{rightLabel}</SwitchLabel>
    </SwitchContainer>
  );
};

Switch.propTypes = {};

export default Switch;
