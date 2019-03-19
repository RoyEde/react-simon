import React, { useContext } from 'react';

import { GameContext } from '../Game';

import Counter from './components/Counter';
import RoundButton from './components/RoundButton';
import Switch from './components/Switch';
import styled from './styled';

const ControlPanel = () => {
  const {
    gameOn,
    resetAnimation,
    strict,
    toggleGameOn,
    toggleGameStart,
    toggleStrict,
    triggerAnimation
  } = useContext(GameContext);
  const { Container, RowContainer, Sup, Title } = styled;
  return (
    <Container>
      <Title>
        Simon
        <Sup>®</Sup>
      </Title>
      <RowContainer>
        <Counter gameOn={gameOn} triggerAnimation={triggerAnimation} />
        <RoundButton
          disable={!gameOn}
          label="START"
          onClick={triggerAnimation ? resetAnimation : toggleGameStart}
        />
        <RoundButton
          color="yellow"
          condition={strict}
          disable={!gameOn}
          label="STRICT"
          light
          onClick={toggleStrict}
        />
      </RowContainer>
      <Switch
        active={gameOn}
        leftLabel="OFF"
        rightLabel="ON"
        onToggle={toggleGameOn}
      />
    </Container>
  );
};

export default ControlPanel;
