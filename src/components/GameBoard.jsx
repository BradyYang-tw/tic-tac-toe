import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({gameTurns, onSelectSquare, activatePlayerSymbol}) => {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    let gameBoard = [...initialGameBoard.map((row) => [...row])]; // Deep copy of the initial game board
    for (let i = 0; i < gameTurns.length; i++) {
        const { square, player } = gameTurns[i];
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    const handleClickBoard = (rowIndex, colIndex) => {
        // setGameBoard((prevBoard) => {
        //     const newBoard = [...prevBoard.map((row) => [...row])]; // Deep copy of the board
        //     console.log(newBoard)
        //     newBoard[rowIndex][colIndex] = activatePlayerSymbol; // Example: Set the clicked cell to 'X'
        //     return newBoard;
        // })
        onSelectSquare(rowIndex, colIndex);
    }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button disabled={col!==null} onClick={()=>handleClickBoard(rowIndex, colIndex) }>{col}</button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};
export default GameBoard;
