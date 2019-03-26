import React, { useContext, useEffect, useState } from 'react';

import { GameContext } from '../Game';

import Counter from './components/Counter';
import RoundButton from './components/RoundButton';
import Switch from './components/Switch';
import styled from './styled';

const ControlPanel = () => {
  const {
    gameOn,
    gameStart,
    gameTurn,
    reset,
    strict,
    toggleGameStart,
    toggleGameOn,
    toggleStrict,
    won
  } = useContext(GameContext);
  const { Container, RowContainer, Sup, Title } = styled;

  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (gameOn) {
      const timeout = setTimeout(() => {
        if (gameTurn) {
          setCount(gameTurn < 10 ? `0${gameTurn}` : `${gameTurn}`);
        } else {
          setCount('');
        }
        setTimeout(() => setAnimation(false), 600);
      }, 600);
      setAnimation(true);
      return () => clearTimeout(timeout);
    } else {
      setCount('');
    }
  }, [gameTurn]);

  return (
    <Container>
      <Title>
        Simon
        <Sup>®</Sup>
      </Title>
      <RowContainer>
        <Counter count={count} gameOn={gameOn} triggerAnimation={animation || won} />
        <RoundButton
          disable={!gameOn || animation}
          label="START"
          onClick={gameStart ? reset : toggleGameStart}
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
