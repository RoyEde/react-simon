import React, { useEffect, useState } from 'react';
import { bool } from 'prop-types';

import { gamePropTypes } from '../Game/propTypes';

import Counter from './components/Counter';
import RoundButton from './components/RoundButton';
import Switch from './components/Switch';
import styled from './styled';

const ControlPanel = ({
  gameOn,
  gameStart,
  gameTurn,
  resetGame,
  strict,
  toggleGameOn,
  toggleGameStart,
  toggleStrict,
  won // TODO ADD THIS
}) => {
  const { Container, RowContainer, Sup, Title } = styled;

  const [count, setCount] = useState('');
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
          onClick={gameStart ? resetGame : toggleGameStart}
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

ControlPanel.propTypes = {
  gameOn: gamePropTypes.gameOn,
  gameStart: gamePropTypes.gameStart,
  gameTurn: gamePropTypes.gameTurn,
  resetGame: gamePropTypes.resetGame,
  strict: gamePropTypes.strict,
  toggleGameOn: gamePropTypes.toggleGameOn,
  toggleGameStart: gamePropTypes.toggleGameStart,
  toggleStrict: gamePropTypes.toggleStrict,
  won: bool
};

export default ControlPanel;
