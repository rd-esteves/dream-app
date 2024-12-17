import React, { useState } from 'react';
import './styles/colors.css';
import snakeImage from '../public/images/snake.png';
import ladderImage from '../public/images/ladder.png';

const Board: React.FC = () => {
    const [playerPosition, setPlayerPosition] = useState(0);
    const [moveCount, setMoveCount] = useState(0);
    const [diceRoll, setDiceRoll] = useState(0);

    const snakes = { 16: 6, 47: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78 };
    const ladders = { 1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100 };

    const rollDice = () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        setDiceRoll(roll);
        movePlayer(roll);
    };

    const movePlayer = (roll: number) => {
        let newPosition = playerPosition + roll;
        if (newPosition > 100) return;

        if (snakes[newPosition]) {
            newPosition = snakes[newPosition];
        } else if (ladders[newPosition]) {
            newPosition = ladders[newPosition];
        }

        setPlayerPosition(newPosition);
        setMoveCount(moveCount + 1);
    };

    return (
        <div className="board">
            <h1>Snake and Ladders</h1>
            <div className="dice-roll">Dice Roll: {diceRoll}</div>
            <div className="move-counter">Moves: {moveCount}</div>
            <div className="player-position">Player Position: {playerPosition}</div>
            <button onClick={rollDice}>Roll Dice</button>
            <div className="game-board">
                {/* Render the board with snakes and ladders */}
                {/* Example: */}
                {Object.keys(snakes).map((key) => (
                    <img key={key} src={snakeImage} alt="Snake" style={{ position: 'absolute', top: `${(100 - snakes[key]) * 10}px`, left: `${(key % 10) * 10}px` }} />
                ))}
                {Object.keys(ladders).map((key) => (
                    <img key={key} src={ladderImage} alt="Ladder" style={{ position: 'absolute', top: `${(100 - ladders[key]) * 10}px`, left: `${(key % 10) * 10}px` }} />
                ))}
            </div>
        </div>
    );
};

export default Board;