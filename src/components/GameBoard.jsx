import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const handleClickBoard = (rowIndex, colIndex) => {
        setGameBoard((prevBoard) => {
            const newBoard = [...prevBoard.map((row) => [...row])]; // Deep copy of the board
            console.log(newBoard)
            newBoard[rowIndex][colIndex] = 'X'; // Example: Set the clicked cell to 'X'
            return newBoard;
        })
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
                    <button onClick={()=>handleClickBoard(rowIndex, colIndex)}>{col}</button>
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
