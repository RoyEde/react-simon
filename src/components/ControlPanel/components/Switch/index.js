import React from 'react';
import { bool, func, string } from 'prop-types';

import styled from './styled';

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

Switch.propTypes = {
  active: bool.isRequired,
  leftLabel: string.isRequired,
  onToggle: func.isRequired,
  rightLabel: string.isRequired
};

export default Switch;
