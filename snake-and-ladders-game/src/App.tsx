import React, { useState } from 'react';
import Board from './components/Board';
import Dice from './components/Dice';
import MoveCounter from './components/MoveCounter';
import RollButton from './components/RollButton';
import './styles/colors.css';

const App = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [diceRoll, setDiceRoll] = useState(0);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(roll);
    setCurrentPosition(prev => Math.min(prev + roll, 100)); // Assuming 100 is the last block
    setMoveCount(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>Snake and Ladders Game</h1>
      <Board currentPosition={currentPosition} />
      <Dice roll={diceRoll} />
      <MoveCounter moves={moveCount} />
      <RollButton onRoll={rollDice} />
    </div>
  );
};

export default App;