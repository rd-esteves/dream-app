# Snake and Ladders Game

This is a 2D Snake and Ladders game built with React. The game features a colorful design and uses real images for snakes and ladders. Players can roll a dice to move across the board, and the game tracks the number of moves taken.

## Features

- Color scheme: 
  - Dark Blue: #201E43
  - Blue: #134B70
  - Teal: #508C9B
  - Light Gray: #EEEEEE
- Real images for snakes and ladders.
- Displays the current dice roll number.
- Move counter to track the number of moves.
- Button to roll the dice and start the game on the first block.

## Project Structure

```
snake-and-ladders-game
├── public
│   ├── index.html
│   └── images
│       ├── snake.png
│       └── ladder.png
├── src
│   ├── components
│   │   ├── Board.tsx
│   │   ├── Dice.tsx
│   │   ├── MoveCounter.tsx
│   │   └── RollButton.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles
│   │   └── colors.css
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd snake-and-ladders-game
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## How to Play

- Click the "Roll Dice" button to roll the dice.
- Move your player according to the dice roll.
- If you land on a snake, you will slide down to a lower position.
- If you land on a ladder, you will climb up to a higher position.
- The game continues until a player reaches the last block.

Enjoy playing Snake and Ladders!