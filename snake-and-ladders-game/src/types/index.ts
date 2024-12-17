export interface GameState {
    currentPlayer: number;
    playerPositions: number[];
    diceRoll: number;
    moveCount: number;
    gameStarted: boolean;
}

export interface Player {
    id: number;
    position: number;
}